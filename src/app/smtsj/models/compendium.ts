import { Races, ResistanceElements, SkillElements, BaseStats, Ailments, SkillElementOrder, ResistCodes } from './constants';
import { Demon, Skill } from '../models';
import { Compendium as ICompendium, NamePair } from '../../compendium/models';

import * as DEMON_DATA_JSON from '../data/demon-data.json';
import * as BOSS_DATA_JSON from '../data/boss-data.json';
import * as SKILL_DATA_JSON from '../data/skill-data.json';
import * as SPECIAL_RECIPES_JSON from '../data/special-recipes.json';
import * as FUSION_REQUIREMENTS_JSON from '../data/fusion-requirements.json';

import * as REDUX_DEMON_DATA_JSON from '../data/redux-demon-data.json';
import * as REDUX_SKILL_DATA_JSON from '../data/redux-skill-data.json';
import * as REDUX_SPECIAL_RECIPES_JSON from '../data/redux-special-recipes.json';
import * as REDUX_FUSION_REQUIREMENTS_JSON from '../data/redux-fusion-requirements.json';

export class Compendium implements ICompendium {
  private static CONVERTED_RACE = [ 'Fiend', 'UMA', 'Enigma' ];

  private demons: { [name: string]: Demon };
  private bosses: { [name: string]: Demon };
  private skills: { [name: string]: Skill };
  private specialRecipes: { [name: string]: string } = {};
  private invertedDemons: { [race: string]: { [lvl: number]: string } };
  private invertedSpecials: { [name: string]: { result: string, recipe: string }[] };
  private fusionRequirements: { [name: string]: string };

  private allIngredients: { [race: string]: number[] };
  private allResults: { [race: string]: number[] };
  private _allDemons: Demon[];
  private _allSkills: Skill[];

  dlcDemons: { [name: string]: boolean } = {};

  static estimateBasePrice(stats: number[], pcoeff: number): number {
    const x = stats.slice(2).reduce((acc, stat) => stat + acc, 0);
    return Math.floor((Math.floor(pcoeff * Math.pow(x, 3) / 1000) + 1300) * 0.75);
  }

  constructor(importRedux: boolean) {
    this.initImportedData(importRedux);
    this.updateDerivedData();
  }

  initImportedData(importRedux: boolean) {
    const demons: { [name: string]: Demon } = {};
    const bosses: { [name: string]: Demon } = {};
    const skills: { [name: string]: Skill } = {};
    const specialRecipes: { [name: string]: string } = {};
    const fusionRequirements: { [name: string]: string } = {};
    const inversions: { [race: string]: { [lvl: number]: string } } = {};
    const invSpecs: { [name: string]: { result: string, recipe: string }[] } = {};

    const demonDataJsons = [DEMON_DATA_JSON];
    const skillDataJsons = [SKILL_DATA_JSON];
    const specialRecipesJsons = [SPECIAL_RECIPES_JSON];
    const fusionReqsJsons = [FUSION_REQUIREMENTS_JSON];

    if (importRedux) {
      demonDataJsons.push(REDUX_DEMON_DATA_JSON);
      skillDataJsons.push(REDUX_SKILL_DATA_JSON);
      specialRecipesJsons.push(REDUX_SPECIAL_RECIPES_JSON);
      fusionReqsJsons.push(REDUX_FUSION_REQUIREMENTS_JSON);
    }

    for (const demonDataJson of demonDataJsons) {
      for (const [name, json] of Object.entries(demonDataJson)) {
        demons[name] = Object.assign({ name, fusion: 'normal', hpmod: 1 }, json, {
          price: Compendium.estimateBasePrice(json.stats, json.pcoeff),
          stats: json.stats,
          resists: json.resists.split('').map(char => ResistCodes[char]),
          inherits: json.inherits.split('').map(char => char === 'o'),
          ailments: (json.ailments ? json.ailments : '---------').split('').map(char => ResistCodes[char]),
          skills: json.skills.reduce((acc, skill, i) => { acc[skill] = i - 3; return acc; }, {}),
          source: json.source.reduce((acc, skill, i) => { acc[skill] = i - 3; return acc; }, {}),
        });
      }
    }

    for (const [name, json] of Object.entries(BOSS_DATA_JSON)) {
      const stats = [100, 100, 1, 1, 1, 1, 1];
      bosses[name] = {
        name,
        lvl:      1,
        hpmod:    1,
        pcoeff:   96,
        race:     json.race,
        code:     json.code,
        align:    'Neutral-Neutral',
        fusion:   'password',
        stats:    stats,
        price:    Compendium.estimateBasePrice(stats, 96),
        resists:  '--------'.split('').map(char => ResistCodes[char]),
        ailments: '---------'.split('').map(char => ResistCodes[char]),
        inherits: '---------------'.split('').map(char => char === 'o'),
        skills:   {},
        source:   {},
        isEnemy:  true
      }
    }

    for (const skillDataJson of skillDataJsons) {
      for (const [name, json] of Object.entries(skillDataJson)) {
        skills[name] = Object.assign({
          name,
          power: 0,
          accuracy: 0,
          cost: 0,
          inherit: json.element,
          rank: 99,
          learnedBy: [],
          transfer: []
        }, json);
      }
    }

    for (const specialRecipesJson of specialRecipesJsons) {
      for (const [name, json] of Object.entries(specialRecipesJson)) {
        specialRecipes[name] = json;

        if (json === 'Normal') {
          delete specialRecipes[name];
          delete demons[name].prereq;
          demons[name].fusion = 'normal';
        } else if (json === 'Password') {
          demons[name].prereq = 'Password only';
          demons[name].fusion = 'accident';
        } else if (json === 'Accident') {
          demons[name].prereq = 'Fusion accident only';
          demons[name].fusion = 'accident';
        } else {
          delete demons[name].prereq;

          if (json.indexOf(',') < 0) {
            demons[name].fusion = 'special';
          }

          for (const recipe of json.split(', ')) {
            for (const ingredient of recipe.split(' x ')) {
              if (!invSpecs[ingredient]) {
                invSpecs[ingredient] = [];
              }

              invSpecs[ingredient].push({ result: name, recipe });
            }
          }
        }
      }
    }

    for (const fusionReqsJson of fusionReqsJsons) {
      for (const [name, json] of Object.entries(fusionReqsJson)) {
        fusionRequirements[name] = json;
      }
    }

    for (const race of Races) {
      inversions[race] = {};
    }

    for (const [name, demon] of Object.entries(demons)) {
      inversions[demon.race][demon.lvl] = name;

      for (const [skill, lvl] of Object.entries(demon.skills)) {
        skills[skill].learnedBy.push({ demon: name, level: lvl });
      }

      for (const [skill, lvl] of Object.entries(demon.source)) {
        skills[skill].transfer.push({ demon: name, level: lvl });
      }
    }

    this.demons = demons;
    this.bosses = bosses;
    this.skills = skills;
    this.specialRecipes = specialRecipes;
    this.fusionRequirements = fusionRequirements;
    this.invertedDemons = inversions;
    this.invertedSpecials = invSpecs;
  }

  updateDerivedData() {
    const demonEntries = Object.assign({}, this.demons);
    const skills = Object.keys(this.skills).map(name => this.skills[name]);
    const ingredients: { [race: string]: number[] } = {};
    const results: { [race: string]: number[] } = {};

    for (const race of Races) {
      ingredients[race] = [];
      results[race] = [];
    }

    for (const [name, demon] of Object.entries(this.demons)) {
      if (!this.isElementDemon(name)) {
        ingredients[demon.race].push(demon.lvl);
      }

      if (!this.specialRecipes.hasOwnProperty(name)) {
        results[demon.race].push(demon.lvl);
      }
    }

    for (const race of Races) {
      ingredients[race].sort((a, b) => a - b);
      results[race].sort((a, b) => a - b);
    }

    const allies = Object.keys(demonEntries).map(name => demonEntries[name]);
    const enemies = Object.keys(this.bosses).map(name => this.bosses[name]);
    this._allDemons = enemies.concat(allies);
    this._allSkills = skills;
    this.allIngredients = ingredients;
    this.allResults = results;
  }

  get allDemons(): Demon[] {
    return this._allDemons;
  }

  get allSkills(): Skill[] {
    return this._allSkills;
  }

  get specialDemons(): Demon[] {
    return Object.keys(this.specialRecipes).map(name => this.demons[name]);
  }

  getDemon(name: string): Demon {
    return this.demons[name] || this.bosses[name];
  }

  getSkill(name: string): Skill {
    return this.skills[name];
  }

  getSkills(names: string[]): Skill[] {
    const skills = names.map(name => this.skills[name]);
    skills.sort((d1, d2) => (SkillElementOrder[d1.element] - SkillElementOrder[d2.element]) * 10000 + d1.rank - d2.rank);
    return skills;
  }

  getIngredientDemonLvls(race: string): number[] {
    return this.allIngredients[race] || [];
  }

  getResultDemonLvls(race: string): number[] {
    return this.allResults[race] || [];
  }

  getSpecialNameEntries(name: string): string[] {
    const recipe = this.specialRecipes[name];
    const isSpecial = recipe && recipe !== 'Password' && recipe !== 'Accident' && recipe.indexOf(', ') === -1;
    return isSpecial ? recipe.split(' x ') : [];
  }

  getSpecialNamePairs(name: string): NamePair[] {
    const recipe = this.specialRecipes[name];
    const names: NamePair[] = [];

    if (recipe && recipe !== 'Password' && recipe !== 'Accident' && recipe.indexOf(', ') !== -1) {
      for (const pair of recipe.split(', ')) {
        const [ name1, name2 ] = pair.split(' x ');
        names.push({ name1, name2 });
      }
    }

    return names;
  }

  getFusionRequirements(name: string): string[] {
    const { race } = this.getDemon(name);
    const fusionReq = this.fusionRequirements[name];
    const reqs = [];

    if (fusionReq) {
      reqs.push(fusionReq);
    }
    if (Compendium.CONVERTED_RACE.indexOf(race) !== -1 && !this.specialRecipes.hasOwnProperty(name)) {
      reqs.push(`${race} Converter Subapp enabled`);
    }

    return reqs.length > 0 ? reqs : ['None'];
  }

  reverseLookupDemon(race: string, lvl: number): string {
    return this.invertedDemons[race][lvl];
  }

  reverseLookupSpecial(ingredient: string): { result: string, recipe: string }[] {
    return this.invertedSpecials[ingredient] ? this.invertedSpecials[ingredient] : [];
  }

  isElementDemon(name: string) {
    return this.demons[name] && this.demons[name].race === 'Prime';
  }
}