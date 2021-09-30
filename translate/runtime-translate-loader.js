module.exports = function (source) {
  return source.replace(src, dst);
}

const dict = {
  'Megami Tensei Fusion Tools': '女神轉生系列 合體工具',
  'Persona 5 Royal Fusion Calculator': '女神異聞錄５皇家版 合體計算器',

  ' Persona List ': ' 人格面具列表 ',
  ' Skill List ': ' 技能列表 ',
  ' Fusion Chart ': ' 合體表 ',
  ' Shadow List ': ' 陰影列表 ',
  ' DLC Settings ': ' DLC設置 ',
  'Demon': '惡魔',
  'Stats': '屬性',
  'Resistances': '耐性',
  'Race': '種族',
  'Lvl': '等級',
  'Name': '名字',
  'Inherits': '繼承',
  'Skill': '技能',
  'How To Acquire': '獲得方法',
  'Elem': '元素',
  'Cost': '消耗',
  'Effect': '效果',
  'Learned By': '習得',
  'Skill Card': '技能卡',
  'Enemy': '敵人',
  'Drops': '掉落',
  'Appears': '出現場所',
  'Included DLC Personas': '包括的DLC人格面具',

  ' Stats ': '屬性',
  'Element': '元素',
  'Price': '價格',
  'Electric Chair': '電椅',
  'Inheritable Skills': '可繼承技能',
  'Learned Skills': '可習得技能',
  'Level': '等級',
  'Innate': '初始',
  'Names': '名字',
  'MinLvl': '最低等級',
  'MaxLvl': '最高等級',
  'Special Fusion Condition': '特殊合體條件',
  'Reverse Fusions': '作爲合體目標',
  'Forward Fusions': '作爲合體素材',
  'No fusions found!': '無合體',

  'Negotiation': '交涉',
  'Persona': '人格面具',
  'Personality': '性格',
  'Areas': '區域',

  ' yes ': ' 是 ',
  'Auto': '自动',

  'St': '力',
  'Ma': '魔',
  'En': '耐',
  'Ag': '速',
  'Lu': ' 運 ',
  ' St ': ' 力 ',
  ' Ma ': ' 魔 ',
  ' En ': ' 耐 ',
  ' Ag ': ' 速 ',
  ' Lu ': ' 運 ',

  ' wk ': ' 弱 ',
  ' no ': ' - ',
  ' rs ': ' 耐 ',
  ' nu ': ' 無 ',
  ' rp ': ' 反 ',
  ' ab ': ' 吸 ',

  'phys': '物理',
  'gun': '槍擊',
  'fire': '火焰',
  'ice': '冰凍',
  'elec': '電擊',
  'wind': '疾風',
  'psy': '念動',
  'nuke': '核熱',
  'bless': '祝福',
  'curse': '咒怨',
  'ailment': '異常',
  'healing': '治療',
  'almighty': '萬能',
  'support': '支援',
  'passive': '被動',
  'trait': '特性',

  ' (Fa) ': ' (警報) ',
  ' (Tk) ': ' (交涉) ',
};

const src = `
function createTextNode(renderer, value) {
    ngDevMode && ngDevMode.rendererCreateTextNode++;
    ngDevMode && ngDevMode.rendererSetText++;
    return isProceduralRenderer(renderer) ? renderer.createText(value) :
        renderer.createTextNode(value);
}
function updateTextNode(renderer, rNode, value) {
    ngDevMode && ngDevMode.rendererSetText++;
    isProceduralRenderer(renderer) ? renderer.setValue(rNode, value) : rNode.textContent = value;
}
`.trim();

const dst = `
const dict = ${JSON.stringify(dict)};
function createTextNode(renderer, value) {
    value = dict[value] || value;
    ngDevMode && ngDevMode.rendererCreateTextNode++;
    ngDevMode && ngDevMode.rendererSetText++;
    return isProceduralRenderer(renderer) ? renderer.createText(value) :
        renderer.createTextNode(value);
}
function updateTextNode(renderer, rNode, value) {
    value = dict[value] || value;
    if (value[0] === ' ' && value[1] === '(') {
        value = value.slice(1);
    }
    ngDevMode && ngDevMode.rendererSetText++;
    isProceduralRenderer(renderer) ? renderer.setValue(rNode, value) : rNode.textContent = value;
}
`.trim();
