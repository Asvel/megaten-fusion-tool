(self.webpackChunkmegaten_fusion_tool=self.webpackChunkmegaten_fusion_tool||[]).push([[459],{5459:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CompendiumModule:()=>w,SMT_COMP_CONFIG:()=>S});var i=s(3845),a=s(6556),l=s(7790);const r=JSON.parse('{"co":["HP","MP","MG","St","Ma","Vi","Lu"],"MG":["Pyro","Frost","Volt","Wind","\u6012\u9aee\u885d\u51a0","Pagan","Skill"],"Z":{"Pyro":"Ignite","Frost":"Cool Down","Volt":"Inspect","Wind":"Scout","\u6012\u9aee\u885d\u51a0":"Use Force","Pagan":"Read Mind","Skill":"Demonstrate"},"O9":{"w":1125,"-":100,"s":50,"n":0,"r":-100,"d":-1100},"sb":["phys","gun","fire","ice","elec","force","death","mind"],"tA":["almighty","recovery","support","passive","investigate"]}'),o=JSON.parse('{"Abihiko":{"inherit":"dea","inherits":"xox-","lvl":43,"person":"Knight","race":"Skill","resists":"--sws-n-","skills":["Blaze","\u4e09\u5206\u9b54\u8108","Fireball"],"stats":[550,405,93,16,23,14,10]},"\u963f\u73c8\u5e2d\u7fc1":{"inherit":"ele","inherits":"-ooo","lvl":8,"person":"Little Kid","race":"Volt","resists":"--w-ss--","skilli":"Sneak","skills":["\u5409\u6b50","\u96fb\u64ca\u5f37\u5316","Shock Shot"],"stats":[152,144,23,5,10,5,7]},"\u611b\u9e97\u7d72":{"inherit":"rec","inherits":"xooo","lvl":32,"person":"Young Girl","race":"Pagan","resists":"------n-","skilla":"\u59c6\u591a","skilli":"Scavenger","skills":["Petra","\u746a\u54c8\u59c6\u591a","Curse","Raging Blast"],"stats":[401,336,106,10,20,6,15]},"Alp":{"inherit":"min","inherits":"-oo-","lvl":3,"person":"Young Girl","race":"Pagan","resists":"--ww----","skilli":"Sneak","skills":["\u8fea\u4e9e","\u666e\u6797\u5e15","\u4e00\u5206\u9b54\u8108","Bane Shot"],"stats":[92,93,13,5,7,5,5]},"\u5b89\u7956":{"inherit":"for","inherits":"oooo","lvl":26,"person":"Beast","race":"Wind","resists":"----wn--","skilli":"Fly","skills":["Tetra Aura","Mazan","Money Find","Gale Slash"],"stats":[363,234,59,17,13,8,7]},"\u8352\u9738\u5410":{"inherit":"ice","inherits":"oooo","lvl":53,"person":"Undead","race":"Frost","resists":"w-nnnnn-","skilli":"Loose Change","skills":["Petra","\u5854\u723e\u5361\u52a0","Ice Resist","Ice Drain"],"stats":[662,459,113,16,25,20,11]},"Azumi":{"inherit":"rec","inherits":"oooo","lvl":6,"person":"Old Woman","race":"Frost","resists":"--wn----","skilli":"Fly","skills":["\u8fea\u4e9e","\u5e03\u8299","Heal Boost","Freeze Shot"],"stats":[128,114,19,5,8,5,6]},"\u5225\u897f\u535c":{"inherit":"rec","inherits":"xxox","lvl":80,"person":"Old Man","race":"Pagan","resists":"s--sssdn","skilli":"Intimidate","skills":["\u746a\u54c8\u59c6\u591a","\u746a\u54c8\u5409\u6b50\u9054\u56e0","First Aid","Astral Burst"],"stats":[826,612,167,26,31,27,14]},"\u8c9d\u5229\u4e9e":{"inherit":"alm","inherits":"oooo","lvl":66,"person":"Old Man","race":"Pyro","resists":"-snws-ds","skilli":"Allure","skills":["\u746a\u54c8\u62c9\u57fa\u9054\u56e0","\u8fea\u4e9e\u62c9\u7ff0","Curse","Astral Burst"],"stats":[742,402,139,32,17,22,14]},"\u514b\u9b6f\u8c9d\u6d1b\u65af":{"inherit":"phy","inherits":"-ooo","lvl":49,"person":"Beast","race":"Pyro","resists":"--dw----","skilli":"Provoke","skills":["Mighty Blow","\u746a\u54c8\u62c9\u57fa\u9054\u56e0","Fire Resist","Fire Breath"],"stats":[630,255,105,30,9,19,10]},"\u5207\u723e\u8afe\u4f2f\u683c":{"inherit":"rec","inherits":"-ooo","lvl":33,"person":"Old Man","race":"\u6012\u9aee\u885d\u51a0","resists":"--ws--n-","skills":["\u60b2\u5606\u51a5\u6cb3","\u666e\u6797\u5e15","Phys Resist","\u7269\u7406\u7121\u6548"],"stats":[473,267,73,17,14,14,7]},"Feng Huang":{"inherit":"for","inherits":"oooo","lvl":33,"person":"Old Man","race":"Wind","resists":"--ssssw-","skilli":"Fly","skills":["Mazan","\u5229\u5361\u59c6","Fast Escape","Null Force"],"stats":[441,279,73,14,15,10,13]},"\u7d93\u6d25\u4e3b":{"inherit":"phy","inherits":"-oxx","lvl":56,"person":"Old Man","race":"Skill","resists":"------ws","skilla":"Mighty Blow","skilli":"Fly","skills":["Mighty Blow","\u5854\u723e\u5361\u52a0","Phys Resist","Phys Drain"],"stats":[663,372,119,25,17,18,15]},"Gashadokuro":{"inherit":"dea","inherits":"-ox-","lvl":48,"person":"Old Woman","race":"Pagan","resists":"--wd-wn-","skilla":"\u746a\u54c8\u59c6\u591a","skilli":"Provoke","skills":["\u746a\u54c8\u59c6\u591a","Retribution","Thunderbolt"],"stats":[656,312,103,17,14,23,13]},"Gdon":{"inherit":"phy","inherits":"oooo","lvl":39,"person":"Beast","race":"Pyro","resists":"-nsw---s","skills":["\u4e9e\u57fa\u9054\u56e0","\u4e8c\u5206\u6d3b\u6cc9","Fire Drain"],"stats":[513,213,85,25,8,13,8]},"Ghoul":{"inherit":"dea","inherits":"xxxx","lvl":27,"person":"Undead","race":"Pagan","resists":"--w-----","skills":["Combo","\u4e8c\u5206\u6d3b\u6cc9","Vile Storm"],"stats":[365,189,61,14,9,7,16]},"Hitokotonusi":{"inherit":"dea","inherits":"-oo-","lvl":45,"person":"Undead","race":"Wind","resists":"-nw--dn-","skilli":"Fly","skills":["Zandyne","\u8fea\u4e9e\u62c9\u746a","Mage\'s Craft","Force Drain"],"stats":[572,387,97,17,20,15,12]},"Ichimokuren":{"inherit":"for","inherits":"ooo-","lvl":38,"person":"Undead","race":"Wind","resists":"--n-w---","skilli":"Fly","skills":["Tempest","Frenzy","Mage\'s Craft","Gale Slash"],"stats":[529,318,67,17,16,17,7]},"Ikusa":{"inherit":"dea","inherits":"-oo-","lvl":38,"person":"Knight","race":"\u6012\u9aee\u885d\u51a0","resists":"----w-d-","skills":["Winged Fury","\u62c9\u5eab\u5361\u52a0","\u4e8c\u5206\u6d3b\u6cc9","\u5341\u6587\u5b57\u65ac"],"stats":[489,234,85,22,10,11,14]},"\u7537\u5922\u9b54":{"inherit":"dea","inherits":"ooxo","lvl":51,"person":"Little Kid","race":"Pagan","resists":"----w-d-","skilli":"Allure","skills":["\u99ac\u7433\u5361\u7433","\u4e8c\u5206\u9b54\u8108","\u771f\u7a7a\u5203"],"stats":[595,453,109,17,25,13,15]},"\u4e00\u672c\u8e0f\u97b4":{"inherit":"phy","inherits":"-oo-","lvl":12,"person":"Undead","race":"Skill","resists":"----w-ds","skilli":"Scavenger","skills":["\u746a\u54c8\u62c9\u57fa","\u62c9\u5eab\u5361\u52a0","\u4e00\u5206\u6d3b\u6cc9","Flame Shot"],"stats":[229,132,31,9,8,9,5]},"\u5091\u514b\u971c\u7cbe":{"inherit":"ice","inherits":"xooo","lvl":18,"person":"Jack","race":"Frost","resists":"--wd----","skilli":"Scavenger","skills":["\u746a\u54c8\u5e03\u8299","\u51b0\u51cd\u5f37\u5316","Frigid Spin"],"stats":[285,210,39,7,13,8,9]},"Jubokko":{"inherit":"ice","inherits":"-oo-","lvl":28,"person":"Old Man","race":"Frost","resists":"--ws--ns","skills":["Venomstrike","\u60b2\u5606\u51a5\u6cb3","Ice Resist","\u51b0\u51cd\u7121\u6548"],"stats":[390,288,63,11,17,9,10]},"Kudan":{"inherit":"rec","inherits":"ooo-","lvl":51,"person":"Knight","race":"Skill","resists":"-d-----n","skilla":"\u8fea\u4e9e\u62c9\u7ff0","skilli":"Fly","skills":["\u8fea\u4e9e\u62c9\u7ff0","\u5f37\u5fcd","\u7269\u7406\u7121\u6548"],"stats":[627,369,109,5,18,17,30]},"Kurama":{"inherit":"for","inherits":"-ooo","lvl":41,"person":"Knight","race":"Wind","resists":"----wd--","skilli":"Fly","skills":["Zandyne","\u5e15\u7279\u62c9","Force Resist","Hurricane"],"stats":[544,375,89,15,21,15,9]},"\u62c9\u5f4c\u4e9e":{"inherit":"phy","inherits":"-ooo","lvl":28,"person":"Old Woman","race":"\u6012\u9aee\u885d\u51a0","resists":"-----w-s","skilli":"Allure","skills":["\u99ac\u7433\u5361\u7433","\u4e8c\u5206\u9b54\u8108","Null Mind"],"stats":[430,180,63,18,8,14,7]},"\u83c8\u5357\u5e0c":{"inherit":"min","inherits":"-oo-","lvl":25,"person":"Seductive","race":"Skill","resists":"--wn---s","skilla":"\u6c38\u7720","skilli":"Allure","skills":["\u6c38\u7720","\u8fea\u4e9e\u62c9\u746a","Mind Boost","Freeze Shot"],"stats":[362,267,57,10,16,9,9]},"Legion A":{"inherit":"alm","inherits":"----","lvl":4,"person":"Undead","race":"Skill","resists":"--n-----","skilli":"Loose Change","skills":["Combo","Regenerate","Bane Shot"],"stats":[112,84,15,5,6,6,6]},"Legion B":{"inherit":"alm","inherits":"----","lvl":5,"person":"Undead","race":"Skill","resists":"wwwwwwww","skills":["Combo","Fast Escape","Bane Shot"],"stats":[116,99,17,7,7,5,7]},"Legion C":{"inherit":"alm","inherits":"----","lvl":20.1,"person":"Undead","race":"Skill","resists":"d--n----","skilli":"Provoke","skills":["Venomstrike","War Cry","Hex","\u5341\u6587\u5b57\u65ac"],"stats":[305,132,47,20,6,8,5]},"Legion D":{"inherit":"alm","inherits":"----","lvl":20.2,"person":"Undead","race":"Skill","resists":"----n--d","skilli":"Allure","skills":["\u6885\u8fea\u4e9e","\u85a9\u746a\u5229\u5361\u59c6","Heal Boost","Null Mind"],"stats":[305,300,47,6,20,8,5]},"Legion E":{"inherit":"alm","inherits":"----","lvl":20.3,"person":"Undead","race":"Skill","resists":"-----nd-","skilli":"Intimidate","skills":["\u59c6\u591a","Petra","\u4e8c\u5206\u9b54\u8108","Vile Storm"],"stats":[305,132,47,5,6,8,20]},"\u8389\u8389\u7d72":{"inherit":"min","inherits":"-xoo","lvl":58,"person":"Old Woman","race":"Pagan","resists":"n--w----","skilla":"\u6c38\u7720","skilli":"Allure","skills":["\u59c6\u591a","\u6c38\u7720","Mind Boost","Vile Storm"],"stats":[626,558,123,18,32,12,17]},"\u5fa1\u793e\u5bae\u53f8\u795e":{"inherit":"ele","inherits":"oooo","lvl":50,"person":"Old Man","race":"Volt","resists":"s--wn-ns","skilli":"Allure","skills":["Frenzy","\u85a9\u746a\u5229\u5361\u59c6","Item Find","Shock Wave"],"stats":[628,390,107,19,20,18,12]},"Moh Shuvuu":{"inherit":"min","inherits":"oooo","lvl":15,"person":"Young Girl","race":"Wind","resists":"--w-dnw-","skilli":"Fly","skills":["\u8fea\u4e9e","Zan","Force Boost","Blast Shot"],"stats":[238,201,37,7,13,6,8]},"\u60e1\u9748":{"inherit":"rec","inherits":"-ooo","lvl":13,"person":"Show-Off","race":"Pagan","resists":"--wn----","skilli":"Loose Change","skills":["Winged Fury","Fast Escape","Bane Shot"],"stats":[208,147,33,11,9,5,7]},"Muspell":{"inherit":"phy","inherits":"-ooo","lvl":54,"person":"Old Man","race":"Pyro","resists":"--dw----","skills":["\u4e9e\u57fa\u9054\u56e0","\u706b\u7130\u5f37\u5316","Fire Breath"],"stats":[628,342,111,34,15,15,9]},"Nagasunehiko":{"inherit":"dea","inherits":"xox-","lvl":41,"person":"Punk","race":"Skill","resists":"--wss-n-","skills":["Frostbite","\u4e09\u5206\u6d3b\u6cc9","Frozen Lance"],"stats":[544,315,89,21,16,15,9]},"\u5948\u6bd4\u6d1b\u65af":{"inherit":"dea","inherits":"xxxx","lvl":42,"person":"Knight","race":"Pagan","resists":"n----wn-","skilla":"\u59c6\u591a","skills":["\u59c6\u591a","Makara Aura","\u4e09\u5206\u9b54\u8108","Null Death"],"stats":[511,366,91,23,20,10,8]},"\u8c93\u5996":{"inherit":"ele","inherits":"xxo-","lvl":29,"person":"Seductive","race":"Skill","resists":"----wd-s","skilla":"Petra","skilli":"Allure","skills":["\u99ac\u7433\u5361\u7433","\u6c38\u7720","Devotion","Voltaic Ring"],"stats":[399,243,65,14,13,9,12]},"\u9d7a":{"inherit":"phy","inherits":"-ooo","lvl":40,"person":"Beast","race":"Volt","resists":"--w-ns--","skilli":"Allure","skills":["Bolt Storm","\u5409\u6b50\u9054\u56e0","Money Find","Thunderbolt"],"stats":[512,312,91,22,16,12,9]},"\u80cc\u8ca0\u602a":{"inherit":"phy","inherits":"xxxx","lvl":5,"person":"Show-Off","race":"\u6012\u9aee\u885d\u51a0","resists":"---w-wn-","skilli":"Sneak","skills":["Combo","\u4e00\u5206\u6d3b\u6cc9","Vile Storm"],"stats":[132,51,17,10,3,7,4]},"Oboroguruma":{"inherit":"ele","inherits":"ooo-","lvl":27,"person":"Undead","race":"Volt","resists":"-n-wd---","skilli":"Allure","skills":["War Cry","\u746a\u54c8\u5409\u6b50","\u96fb\u64ca\u5f37\u5316","Rush"],"stats":[421,201,61,19,10,14,3]},"Okiku-Mushi":{"inherit":"dea","inherits":"xxxx","lvl":24,"person":"Seductive","race":"Pagan","resists":"--w-d-n-","skilla":"Null Death","skilli":"Provoke","skills":["\u99ac\u7433\u5361\u7433","Makakaja","\u4e00\u5206\u9b54\u8108","Null Death"],"stats":[361,216,55,13,12,10,8]},"\u5927\u570b\u4e3b":{"inherit":"ice","inherits":"oooo","lvl":32,"person":"Knight","race":"Frost","resists":"-nws--n-","skilli":"Intimidate","skills":["\u5e03\u8299\u9054\u56e0","\u8fea\u4e9e\u62c9\u746a","\u5f37\u5fcd","\u51b0\u51cd\u7121\u6548"],"stats":[457,288,71,17,13,16,5]},"\u9b3c":{"inherit":"phy","inherits":"oooo","lvl":22,"person":"Punk","race":"\u6012\u9aee\u885d\u51a0","resists":"s---w---","skilli":"Provoke","skills":["Berserker","Tetra Aura","\u4e00\u5206\u6d3b\u6cc9","Gale Slash"],"stats":[373,138,51,15,6,14,6]},"\u5927\u86c7":{"inherit":"ice","inherits":"-ooo","lvl":63,"person":"Beast","race":"Frost","resists":"-d-dw---","skills":["\u5e03\u8299\u9054\u56e0","\u746a\u54c8\u5e03\u8299\u9054\u56e0","Phys Resist","Glacial Blast"],"stats":[745,513,133,17,27,24,14]},"\u6b50\u7279\u9b6f\u65af":{"inherit":"fir","inherits":"-ooo","lvl":14,"person":"Beast","race":"Pyro","resists":"--nw----","skills":["\u746a\u54c8\u62c9\u57fa","Quick Study","Fireball"],"stats":[243,114,35,14,6,8,5]},"Oshichi":{"inherit":"fir","inherits":"-ooo","lvl":23,"person":"Seductive","race":"Pyro","resists":"-nsw--nn","skilli":"Allure","skills":["\u4e9e\u57fa","\u5e15\u7279\u62c9","\u706b\u7130\u5f37\u5316","\u706b\u7130\u7121\u6548"],"stats":[319,261,53,10,16,6,10]},"Oumitsunu":{"inherit":"ele","inherits":"-oo-","lvl":55,"person":"Knight","race":"Volt","resists":"s---dw--","skills":["Spark","\u746a\u54c8\u5409\u6b50\u9054\u56e0","\u4e09\u5206\u6d3b\u6cc9","Elec Drain"],"stats":[730,333,117,20,14,27,14]},"Ouyamatsumi":{"inherit":"ice","inherits":"-ooo","lvl":50,"person":"Knight","race":"Frost","resists":"s-ws-wn-","skills":["\u746a\u54c8\u5e03\u8299\u9054\u56e0","\u4e8c\u5206\u6d3b\u6cc9","Glacial Blast"],"stats":[700,270,107,24,10,27,8]},"\u5e15\u723e\u74e6\u8482":{"inherit":"min","inherits":"-oo-","lvl":46,"person":"Old Woman","race":"Volt","resists":"s---sww-","skilli":"Allure","skills":["Spark","\u6885\u8fea\u4e9e","Elec Resist","Elec Drain"],"stats":[571,450,99,12,26,14,13]},"Poltergeist":{"inherit":"for","inherits":"xoox","lvl":10,"person":"Little Kid","race":"Wind","resists":"-nw-wsnn","skilla":"\u771f\u7a7a\u5203","skilli":"Sneak","skills":["Zan","Force Resist","Null Force"],"stats":[182,150,27,6,10,6,7]},"\u80fd\u5929\u4f7f":{"inherit":"alm","inherits":"ooo-","lvl":51,"person":"Punk","race":"Wind","resists":"--ssssw-","skilli":"Fly","skills":["Mazandyne","\u85a9\u746a\u5229\u5361\u59c6","Item Find","Hurricane"],"stats":[611,393,109,24,20,15,11]},"Pyro Jack":{"inherit":"fir","inherits":"xooo","lvl":10,"person":"Punk","race":"Pyro","resists":"--dw----","skilli":"Fly","skills":["\u4e9e\u57fa","\u666e\u6797\u5e15","Fire Resist","Fiery Spiral"],"stats":[190,168,27,5,11,7,6]},"Raiho":{"inherit":"alm","inherits":"oooo","lvl":23,"person":"Jack","race":"Frost","resists":"---d---n","skilli":"Allure","skills":["\u746a\u54c8\u5e03\u8299","\u60b2\u5606\u51a5\u6cb3","Fire Resist","Frozen Lance"],"stats":[343,249,53,8,15,9,10]},"Raiju":{"inherit":"ele","inherits":"oooo","lvl":16,"person":"Punk","race":"Volt","resists":"----dwn-","skilli":"Sneak","skills":["\u5409\u6b50","Elec Resist","Voltaic Ring"],"stats":[288,108,39,15,5,11,5]},"\u90a3\u4f3d\u4e4b\u738b":{"inherit":"phy","inherits":"oooo","lvl":39,"person":"Punk","race":"Frost","resists":"--wns---","skills":["\u5e03\u8299\u9054\u56e0","Dia Aura","Quick Study","Frigid Spin"],"stats":[489,321,85,21,17,10,10]},"\u7f85\u524e":{"inherit":"phy","inherits":"ooo-","lvl":44,"person":"Undead","race":"\u6012\u9aee\u885d\u51a0","resists":"-----w--","skilli":"Provoke","skills":["\u8fea\u4e9e\u62c9\u746a","Frenzy","Hero\'s Might","\u5341\u6587\u5b57\u65ac"],"stats":[565,288,95,23,13,15,12]},"\u8056\u9054\u82ac":{"inherit":"alm","inherits":"-ooo","lvl":74,"person":"Knight","race":"Wind","resists":"-----nw-","skilli":"Fly","skills":["Flurry","\u8fea\u4e9e\u62c9\u7ff0","Force Boost","\u771f\u7a7a\u5203"],"stats":[779,582,155,24,30,23,16]},"Sati":{"inherit":"rec","inherits":"-oo-","lvl":29,"person":"Old Woman","race":"Pyro","resists":"-ddw--w-","skilli":"Fly","skills":["\u5730\u7344\u4e4b\u706b","\u5229\u5361\u59c6","Devotion","Fireball"],"stats":[423,327,65,7,20,12,9]},"\u65af\u5361\u54c8":{"inherit":"phy","inherits":"xoxx","lvl":47,"person":"Old Woman","race":"Skill","resists":"----wn-s","skilli":"Fly","skills":["Flurry","Makara Aura","Quick Study","\u5341\u6587\u5b57\u65ac"],"stats":[569,417,101,19,23,13,11]},"Shouten":{"inherit":"phy","inherits":"oooo","lvl":52,"person":"Knight","race":"\u6012\u9aee\u885d\u51a0","resists":"s--s-sw-","skilli":"Loose Change","skills":["Mighty Blow","Retribution","\u7269\u7406\u7121\u6548"],"stats":[689,264,107,27,9,24,11]},"\u9f4a\u683c\u83f2":{"inherit":"phy","inherits":"ooo-","lvl":61,"person":"Knight","race":"\u6012\u9aee\u885d\u51a0","resists":"s---w-nn","skilli":"Intimidate","skills":["Mazandyne","War Cry","\u5f37\u5fcd","Phys Drain"],"stats":[723,351,129,27,14,23,16]},"Susano-O":{"inherit":"phy","inherits":"-oo-","lvl":70,"person":"Punk","race":"\u6012\u9aee\u885d\u51a0","resists":"s-dw--n-","skilli":"Fly","skills":["Berserker","Winged Fury","Hero\'s Might","Astral Burst"],"stats":[781,212,147,35,17,25,12]},"Tarrasque":{"inherit":"phy","inherits":"-ooo","lvl":43,"person":"Old Man","race":"Frost","resists":"s-wss---","skills":["Frostbite","\u51b0\u51cd\u5f37\u5316","Frozen Lance"],"stats":[622,261,93,18,11,23,10]},"\u6258\u723e":{"inherit":"ele","inherits":"ooo-","lvl":61,"person":"Knight","race":"Volt","resists":"----dw--","skilli":"Allure","skills":["\u746a\u54c8\u5409\u6b50\u9054\u56e0","Hero\'s Might","Raging Blast"],"stats":[704,363,129,31,15,20,14]},"\u5716\u7279":{"inherit":"rec","inherits":"xxoo","lvl":38,"person":"Show-Off","race":"Skill","resists":"w-ddddwd","skilla":"Dia Aura","skilli":"Scavenger","skills":["Makakaja","Dia Aura","First Aid","Null Mind"],"stats":[449,414,83,11,25,6,15]},"\u5ea7\u5929\u4f7f":{"inherit":"alm","inherits":"oooo","lvl":44,"person":"Knight","race":"Pyro","resists":"--dwnnn-","skilli":"Fly","skills":["Blaze","\u746a\u5361\u52a0\u746a","Devotion","Rush"],"stats":[541,420,95,15,24,12,11]},"Triglav":{"inherit":"phy","inherits":"oooo","lvl":41,"person":"Punk","race":"\u6012\u9aee\u885d\u51a0","resists":"sn-d-w--","skills":["Winged Fury","\u5854\u723e\u5361\u52a0","\u4e8c\u5206\u9b54\u8108","Rush"],"stats":[528,291,89,22,14,13,11]},"Tsuchigumo":{"inherit":"ele","inherits":"oooo","lvl":21,"person":"Punk","race":"Volt","resists":"s--wsw--","skills":["Venomstrike","\u746a\u54c8\u5409\u6b50","Hex","\u96fb\u64ca\u7121\u6548"],"stats":[347,135,49,17,6,12,6]},"Turdak":{"inherit":"dea","inherits":"-ooo","lvl":17,"person":"Undead","race":"\u6012\u9aee\u885d\u51a0","resists":"s-w--w--","skills":["\u746a\u5361\u52a0\u746a","Hex","Fiery Spiral"],"stats":[299,111,41,14,5,11,6]},"Ukobach":{"inherit":"fir","inherits":"-ooo","lvl":2,"person":"Punk","race":"Pyro","resists":"--nw----","skills":["\u4e9e\u57fa","Fast Escape","Flame Shot"],"stats":[80,78,13,5,6,5,5]},"Utai-Gaikotsu":{"inherit":"dea","inherits":"xxxx","lvl":35,"person":"Punk","race":"Pagan","resists":"w-d--wn-","skilli":"Fly","skills":["Petra","Retribution","Vile Storm"],"stats":[466,333,77,10,19,11,14]},"\u7fa9\u7d93":{"inherit":"phy","inherits":"-ooo","lvl":36,"person":"Punk","race":"\u6012\u9aee\u885d\u51a0","resists":"-s----n-","skills":["Mighty Blow","War Cry","Curse","Raging Blast"],"stats":[490,276,79,20,14,13,8]}}'),n=JSON.parse('{"\u4e9e\u57fa":{"cost":1003,"effect":"Light fire damage to one target.","elem":"fire","target":"Single target, Straight line"},"\u4e9e\u57fa\u9054\u56e0":{"cost":1007,"effect":"Heavy fire damage to a near target.","elem":"fire","target":"Single target, Straight line"},"Allure":{"effect":"Gathers Items","elem":"investigate"},"Astral Burst":{"cost":2200,"effect":"Inflicts super almighty damage to all enemies.","elem":"almighty","target":"All enemies"},"Bane Shot":{"cost":2100,"effect":"Super gun damage to target, will bind if weak to Death.","elem":"death","target":"Single target, Straight Line"},"Berserker":{"cost":1004,"effect":"Light physical damage + rage to a nearby enemy.","elem":"phys","target":"Single target, Near"},"Blast Shot":{"cost":2100,"effect":"Super gun damage to target, will impede if weak to Force.","elem":"force","target":"Single target, Straight line"},"Blaze":{"cost":1007,"effect":"Moderate fire damage to all enemies hit.","elem":"fire","target":"3-way spread, Straight lines"},"Bolt Storm":{"cost":1005,"effect":"Light electric damage to target, Sluggish for a short time","elem":"elec","target":"Single target, Tracking"},"\u5e03\u8299":{"cost":1003,"effect":"Light ice damage to one target.","elem":"ice","target":"Single target, Straight line"},"\u5e03\u8299\u9054\u56e0":{"cost":1007,"effect":"Heavy ice damage to target, splash damage to enemies nearby.","elem":"ice","target":"Single target, Straight line"},"\u60b2\u5606\u51a5\u6cb3":{"cost":1005,"effect":"Light ice damage to target, Sluggish for a short time","elem":"ice","target":"Projectile, Tracking"},"Combo":{"cost":1003,"effect":"Repeated attacks to nearby enemy for light physical damage.","elem":"phys","target":"Single target"},"Cool Down":{"effect":"Calms people down, freezes water.","elem":"investigate"},"\u5341\u6587\u5b57\u65ac":{"cost":2120,"effect":"Inflicts super physical damage to all enemies on four straight lines from where power is used.","elem":"phys","target":"Special"},"Curse":{"effect":"Chance of returning damage to attacker.","elem":"passive"},"Demonstrate":{"effect":"Random effects","elem":"investigate"},"Devotion":{"effect":"Demon gains loyalty at almost twice the normal rate.","elem":"passive"},"\u8fea\u4e9e":{"cost":1003,"effect":"Recovers a small amount of HP.","elem":"recovery","target":"One ally"},"Dia Aura":{"cost":1005,"effect":"Slowly recover health.","elem":"recovery","target":"All allies"},"\u8fea\u4e9e\u62c9\u7ff0":{"cost":1008,"effect":"Recovers all HP.","elem":"recovery","target":"One ally"},"\u8fea\u4e9e\u62c9\u746a":{"cost":1005,"effect":"Recovers a moderate amount of HP.","elem":"recovery","target":"One ally"},"\u6c38\u7720":{"cost":1005,"effect":"Light mind damage + sleep to all enemies in radius.","elem":"mind","target":"Medium radius"},"\u96fb\u64ca\u5f37\u5316":{"effect":"Grants a boost to electric type damage.","elem":"passive"},"Elec Drain":{"cost":2100,"effect":"Raidou and demon will drain electric attacks for the duration.","elem":"support","target":"All allies"},"Elec Resist":{"effect":"Reduces electric damage taken by half. Cancels Weak vs. Elec.","elem":"passive"},"\u5f37\u5fcd":{"effect":"High chance to survive fatal attacks with 1 HP remaining, once per battle.","elem":"passive"},"Fast Escape":{"effect":"Reduces escape time","elem":"passive"},"Fiery Spiral":{"cost":2120,"effect":"Super physical damage to target, will burn if weak to Fire.","elem":"fire","target":"Radius around Raidou"},"\u706b\u7130\u5f37\u5316":{"effect":"Grants a boost to fire type damage.","elem":"passive"},"Fire Breath":{"cost":2180,"effect":"Heavy fire damage to all in the straight line.","elem":"fire","target":"All targets, Straight line"},"Fire Drain":{"cost":2100,"effect":"Raidou and demon will drain fire attacks for the duration.","elem":"support","target":"All allies"},"Fire Resist":{"effect":"Reduces fire damage taken by half. Cancels Weak vs. Fire.","elem":"passive"},"Fireball":{"cost":2150,"effect":"Super fire damage to all enemies in straight line.","elem":"fire","target":"All targets, Straight line"},"First Aid":{"effect":"The demon and Raidou will recover all HP after the fight ends.","elem":"passive"},"Flame Shot":{"cost":2100,"effect":"Super gun damage to target, will burn if weak to Fire.","elem":"fire","target":"Single target, Straight line"},"Flurry":{"cost":1007,"effect":"Moderate force damage to all enemies hit.","elem":"force","target":"3-Way spread, Straight lines"},"Fly":{"effect":"Allows a demon to access unreachable areas","elem":"investigate"},"Force Boost":{"effect":"Grants a boost to force type damage.","elem":"passive"},"Force Drain":{"cost":2100,"effect":"Raidou and demon will drain force attacks for the duration.","elem":"support","target":"All allies"},"Force Resist":{"effect":"Reduces force damage taken by half. Cancels Weak vs. Force.","elem":"passive"},"Freeze Shot":{"cost":2100,"effect":"Super gun damage to target, will freeze if weak to ice.","elem":"ice","target":"Single target, Straight line"},"Frenzy":{"cost":1004,"effect":"Causes light physical damage to all enemies around demon.","elem":"phys","target":"Small radius"},"Frigid Spin":{"cost":2120,"effect":"Super physical damage to target, will freeze if weak to ice.","elem":"ice","target":"Radius around Raidou"},"Frostbite":{"cost":1007,"effect":"Moderate ice damage to all enemies hit.","elem":"ice","target":"3-way spread, Straight lines"},"Frozen Lance":{"cost":2150,"effect":"Super ice damage to all enemies in straight line.","elem":"ice","target":"All targets, Straight line"},"Gale Slash":{"cost":2120,"effect":"Super physical damage to target, will impede if weak to Force.","elem":"force","target":"Radius around Raidou"},"Glacial Blast":{"cost":2180,"effect":"Heavy ice damage to all in the straight line.","elem":"ice","target":"All targets, Straight line"},"Heal Boost":{"effect":"Demons recovery type spells are 50% more effective.","elem":"passive"},"\u5730\u7344\u4e4b\u706b":{"cost":1005,"effect":"Light fire damage to target, Sluggish for a short time","elem":"fire","target":"Projectile, Tracking"},"Hero\'s Might":{"effect":"Moderate chance for the demon to double attack power for the current battle.","elem":"passive"},"Hex":{"effect":"High chance to return half the damage taken to the attacker.","elem":"passive"},"Hurricane":{"cost":2150,"effect":"Super force damage to all enemies in straight line.","elem":"force","target":"All targets, Straight line"},"\u51b0\u51cd\u5f37\u5316":{"effect":"Grants a boost to ice type damage.","elem":"passive"},"Ice Drain":{"cost":2100,"effect":"Raidou and demon will drain ice attacks for the duration.","elem":"support","target":"All allies"},"Ice Resist":{"effect":"Reduces ice damage taken by half. Cancels Weak vs. Ice.","elem":"passive"},"Ignite":{"effect":"Makes people talk, sets some objects on fire.","elem":"investigate"},"Inspect":{"effect":"Uncovers hidden objects.","elem":"investigate"},"Intimidate":{"effect":"Lowers the encounter rate","elem":"investigate"},"Item Find":{"effect":"Demon will find items after battle more often.","elem":"passive"},"\u4e00\u5206\u6d3b\u6cc9":{"effect":"Will increase the demons maximum HP by 10%","elem":"passive"},"\u4e8c\u5206\u6d3b\u6cc9":{"effect":"Will increase the demons maximum HP by 20%","elem":"passive"},"\u4e09\u5206\u6d3b\u6cc9":{"effect":"Will increase the demons maximum HP by 30%","elem":"passive"},"Loose Change":{"effect":"Grants Yen","elem":"investigate"},"\u746a\u54c8\u5e03\u8299":{"cost":1004,"effect":"Moderate ice damage to all in radius.","elem":"ice","target":"Small radius"},"\u746a\u54c8\u5e03\u8299\u9054\u56e0":{"cost":1008,"effect":"Heavy ice damage to all in radius.","elem":"ice","target":"Medium radius"},"Mage\'s Craft":{"effect":"Moderate chance for the demon to double magic power for the current battle.","elem":"passive"},"\u746a\u5361\u52a0\u746a":{"cost":1004,"effect":"Light mind damage + mute to target.","elem":"mind","target":"Projectile, Straight line"},"Makakaja":{"cost":1006,"effect":"Lowers magical damage until the end of the battle.","elem":"support","target":"One ally"},"Makara Aura":{"cost":1008,"effect":"Raises all allies magical defense until the end of the battle.","elem":"support","target":"All allies"},"\u746a\u54c8\u59c6\u591a":{"cost":1006,"effect":"HP of all enemies near demon are halved.","elem":"death","target":"Small radius"},"\u4e00\u5206\u9b54\u8108":{"effect":"Will increase the demons maximum MP by 10%","elem":"passive"},"\u4e8c\u5206\u9b54\u8108":{"effect":"Will increase the demons maximum MP by 20%","elem":"passive"},"\u4e09\u5206\u9b54\u8108":{"effect":"Will increase the demons maximum MP by 30%","elem":"passive"},"\u746a\u54c8\u62c9\u57fa":{"cost":1004,"effect":"Moderate fire damage to all in radius.","elem":"fire","target":"Small radius"},"\u746a\u54c8\u62c9\u57fa\u9054\u56e0":{"cost":1008,"effect":"Heavy fire damage to all in radius.","elem":"fire","target":"Medium radius"},"\u99ac\u7433\u5361\u7433":{"cost":1004,"effect":"Light mind damage + charm to all enemies in radius.","elem":"mind","target":"Small radius"},"Mazan":{"cost":1004,"effect":"Moderate force damage to all in radius.","elem":"force","target":"Small radius"},"Mazandyne":{"cost":1008,"effect":"Heavy force damage to all in radius.","elem":"force","target":"Medium radius"},"\u746a\u54c8\u5409\u6b50":{"cost":1004,"effect":"Moderate electric damage to all in radius.","elem":"elec","target":"Small radius"},"\u746a\u54c8\u5409\u6b50\u9054\u56e0":{"cost":1008,"effect":"Heavy electric damage to all in radius.","elem":"elec","target":"Medium radius"},"\u6885\u8fea\u4e9e":{"cost":1006,"effect":"Raidou and all allies recover a small amount of HP.","elem":"recovery","target":"All allies"},"Mighty Blow":{"cost":1004,"effect":"Moderate physical damage + rage to nearby enemy.","elem":"phys","target":"Single target, Near"},"Mind Boost":{"effect":"Improves the chance of status ailments effecting the enemies.","elem":"passive"},"Money Find":{"effect":"Demon will find extra money after battles.","elem":"passive"},"\u59c6\u591a":{"cost":1003,"effect":"Targets HP is halved.","elem":"death","target":"Single target, Straight Line"},"Null Death":{"cost":2070,"effect":"Raidou and demon will null death attacks for the duration.","elem":"support","target":"All allies"},"\u96fb\u64ca\u7121\u6548":{"cost":2070,"effect":"Raidou and demon will null electric attacks for the duration.","elem":"support","target":"All allies"},"\u706b\u7130\u7121\u6548":{"cost":2070,"effect":"Raidou and demon will null fire attacks for the duration.","elem":"support","target":"All allies"},"Null Force":{"cost":2070,"effect":"Raidou and demon will null force attacks for the duration.","elem":"support","target":"All allies"},"\u51b0\u51cd\u7121\u6548":{"cost":2070,"effect":"Raidou and demon will null ice attacks for the duration.","elem":"support","target":"All allies"},"Null Mind":{"cost":2070,"effect":"Raidou and demon will null mind attacks for the duration.","elem":"support","target":"All allies"},"\u7269\u7406\u7121\u6548":{"cost":2070,"effect":"Raidou and demon will null physical attacks for the duration.","elem":"support","target":"All allies"},"\u5e15\u7279\u62c9":{"cost":1003,"effect":"Target recovers from all mind-type status ailments.","elem":"recovery","target":"One ally"},"Petra":{"cost":1005,"effect":"Light mind damage + stone to all enemies in line with demon.","elem":"mind","target":"All targets, Straight line"},"Phys Drain":{"cost":2100,"effect":"Raidou and demon will drain physical attacks for the duration.","elem":"support","target":"All allies"},"Phys Resist":{"effect":"Reduces physical damage taken by half. Cancels Weak vs. Physical.","elem":"passive"},"Provoke":{"effect":"Increases encounter rate","elem":"investigate"},"\u666e\u6797\u5e15":{"cost":1003,"effect":"Light mind damage + mute to target.","elem":"mind","target":"Single target, Straight Line"},"Quick Study":{"effect":"Demon will gain almost double experience after battles.","elem":"passive"},"Raging Blast":{"cost":2120,"effect":"Super physical damage to target","elem":"phys","target":"Radius around Raidou"},"\u62c9\u5eab\u5361\u52a0":{"cost":1006,"effect":"Lowers damage received until the end of the battle.","elem":"support","target":"One ally"},"Read Mind":{"effect":"Reads peoples\' minds.","elem":"investigate"},"\u5229\u5361\u59c6":{"cost":1008,"effect":"Revives target","elem":"recovery","target":"One ally"},"Regenerate":{"effect":"The demon and Raidou recover HP every few seconds in combat.","elem":"passive"},"Retribution":{"effect":"High chance to deal heavy Almighty damage to enemies in a radius when demon dies.","elem":"passive"},"Rush":{"cost":2120,"effect":"Inflicts super physical damage to all enemies in a straight line from the demon, moves demon along the path.","elem":"phys","target":"Straight line"},"\u85a9\u746a\u5229\u5361\u59c6":{"cost":1012,"effect":"Revives target with full HP","elem":"recovery","target":"One ally"},"Scavenger":{"effect":"Has a chance to obtain items","elem":"investigate"},"Scout":{"effect":"Search the area for enemies and items","elem":"investigate"},"Shock Shot":{"cost":2100,"effect":"Super gun damage to target, will shock if weak to Electric.","elem":"elec","target":"Single target, Straight Line"},"Shock Wave":{"cost":2180,"effect":"Heavy electric damage to all in the straight line.","elem":"elec","target":"All targets, Straight line"},"Sneak":{"effect":"Allows a demon to access unreachable areas","elem":"investigate"},"Spark":{"cost":1007,"effect":"Moderate electric damage to all enemies hit.","elem":"elec","target":"3-Way spread, Straight lines"},"\u5854\u723e\u5361\u52a0":{"cost":1006,"effect":"Raises allies physical attack until the end of the battle.","elem":"support","target":"One ally"},"Tempest":{"cost":1005,"effect":"Light force damage to target, Sluggish for a short time","elem":"force","target":"Single target, Tracking"},"Tetra Aura":{"cost":1008,"effect":"Raises all allies physical defense until the end of the battle.","elem":"support","target":"All allies"},"Thunderbolt":{"cost":2150,"effect":"Super electric damage to all enemies in straight line.","elem":"elec","target":"All targets, Straight line"},"Use Force":{"effect":"Moves heavy objects","elem":"investigate"},"Venomstrike":{"cost":1004,"effect":"Causes light physical damage + poison to a nearby enemy.","elem":"phys","target":"Single target, Near"},"Vile Storm":{"cost":2120,"effect":"Super physical damage to target, will bind if weak to Death.","elem":"death","target":"Radius around Raidou"},"Voltaic Ring":{"cost":2120,"effect":"Super physical damage to target, will shock if weak to Electric.","elem":"elec","target":"Radius around Raidou"},"War Cry":{"cost":1008,"effect":"Raises all allies attack until the end of the battle.","elem":"support","target":"All allies"},"\u771f\u7a7a\u5203":{"cost":2180,"effect":"Heavy force damage to all in the straight line.","elem":"force","target":"All targets, Straight line"},"Winged Fury":{"cost":1004,"effect":"Hits enemy with thrown weapon for light physical damage, chance to knock enemy down.","elem":"phys","target":"Single target, Straight line"},"Zan":{"cost":1003,"effect":"Light force damage to one target.","elem":"force","target":"Single target, Straight Line"},"Zandyne":{"cost":1007,"effect":"Heavy force damage to target, splash damage to enemies nearby.","elem":"force","target":"Single target, Straight Line"},"\u5409\u6b50":{"cost":1003,"effect":"Light electric damage to one target.","elem":"elec","target":"Single target, Straight line"},"\u5409\u6b50\u9054\u56e0":{"cost":1007,"effect":"Heavy electric damage to target, splash damage to enemies nearby.","elem":"elec","target":"Single target, Straight line"}}'),c=JSON.parse('{"races":["Pyro","Frost","Volt","Wind","\u6012\u9aee\u885d\u51a0","Pagan","Skill"],"table":[["Skill"],["Wind","Pagan"],["\u6012\u9aee\u885d\u51a0","\u6012\u9aee\u885d\u51a0","Pagan"],["Volt","Pyro","Frost","Skill"],["Wind","Volt","Frost","Pyro","Skill"],["Frost","\u6012\u9aee\u885d\u51a0","Pyro","Volt","Wind","Skill"],["Random","Random","Random","Random","Random","Random","Pagan"]]}'),h=JSON.parse('{"Legion A":"\u5408\u9ad4\u4e8b\u6545","Legion B":"\u5408\u9ad4\u4e8b\u6545","Legion C":"\u5408\u9ad4\u4e8b\u6545","Legion D":"\u5408\u9ad4\u4e8b\u6545","Legion E":"\u5408\u9ad4\u4e8b\u6545","Ichimokuren":"Defeat in Chapter 1","\u5207\u723e\u8afe\u4f2f\u683c":"Defeat in Chapter 3","Abihiko":"Defeat in Chapter 5","Nagasunehiko":"Defeat in Chapter 5","Hitokotonusi":"Defeat in Chapter 7","\u5fa1\u793e\u5bae\u53f8\u795e":"Defeat in Chapter 8","\u611b\u9e97\u7d72":"Defeat in Ginza-Cho","Raiho":"Defeat in Konnou-Ya","\u7fa9\u7d93":"Defeat in Training Hall","\u5225\u897f\u535c":"Defeat in Training Hall","Kudan":"Obtain Prophetic Book"}'),g=JSON.parse('{"Legion A":[],"Legion B":[],"Legion C":[],"Legion D":[],"Legion E":[]}');var d=s(8873),m=s(5466),f=s(9955),u=s(2451);function k(e){const t={};for(let s=0;s<e.length;s++)t[e[s]]=s;return t}const p=r.MG,y=r.sb.map(e=>e.slice(0,3)),v=y.concat(r.tA.map(e=>e.slice(0,3)));for(const F of Object.values(o)){const e=Math.floor(F.lvl),t=F.skills,s={};s[t[0]]=0,s[r.Z[F.race]]=0,s[t[t.length-2]]=e+2,s[t[t.length-1]]=e+1,t.length>3&&(s[t[1]]=0),F.skilli&&(s[F.skilli]=0),F.nskills=s}for(const F of Object.values(n))F.elem=F.elem.slice(0,3);for(const[F,R]of Object.entries(h))o[F].prereq=R;const S={appTitle:"Raidou Kuzunoha vs. The Soulless Army",gameTitles:{krch:"Raidou Kuzunoha vs. The Soulless Army"},appCssClasses:["kuzu","krch"],races:p,resistElems:y,skillElems:v,baseStats:r.co,fusionLvlMod:2.5,resistCodes:r.O9,raceOrder:k(p),elemOrder:k(v),fissionCalculator:l.uC,fusionCalculator:l.YP,demonData:{krch:[o]},skillData:{krch:[n]},normalTable:c,elementTable:{elems:[],races:[],table:[]},mitamaTable:[],specialRecipes:{krch:g}};let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({providers:[a.Dx,d.Y,[{provide:l.vE,useExisting:d.Y}],[{provide:l.I7,useValue:S}]],imports:[[i.ez,m.y,f.V]]}),e})()}}]);