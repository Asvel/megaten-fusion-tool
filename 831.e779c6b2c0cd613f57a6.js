(self.webpackChunkmegaten_fusion_tool=self.webpackChunkmegaten_fusion_tool||[]).push([[831],{831:(e,a,t)=>{"use strict";t.r(a),t.d(a,{CompendiumModule:()=>P,SMT_COMP_CONFIG:()=>S});var s=t(3845),l=t(6556),i=t(562);const r={Deity:2,Dragon:1,Snake:1,Divine:1,Kishin:1};var n=t(7790);const v=JSON.parse('{"co":["HP","MP","St","Ma","Vi","En","Ag","Lu"],"tA":["phys","fire","ice","elec","force","recovery","support"],"Hv":[["DEITIES","Deity","Megami","Vile"],["NETHERS","Genma","Fairy","Tyrant"],["AERIALS","Divine","Fallen","Avian"],["DRAGONS","Dragon","Snake","Drake"],["BEASTS","Avatar","Beast","Wilder"],["BRUTES","Kishin","Touki","Jaki"]]}'),m=JSON.parse('{"\u963f\u5df4\u9813":{"lvl":56,"mvtype":"plains","race":"Vile","skills":["\u746a\u54c8\u5e03\u8299\u62c9","\u5e03\u8299\u62c9","\u5e03\u8299"],"stats":[447,215,18,13,9,25,15,5,6]},"\u5929\u923f\u5973\u547d":{"lvl":38,"mvtype":"flying","race":"Megami","skills":["\u8fea\u4e9e\u62c9\u746a","\u5e15\u7279\u62c9","Devil\'s Kiss"],"stats":[348,289,15,19,11,12,5,5,12]},"\u963f\u96e3\u9640":{"lvl":16,"mvtype":"plains","race":"Snake","stats":[152,0,13,7,7,10,5,6,7]},"\u5929\u4f7f":{"lvl":16,"mvtype":"flying","race":"Divine","skills":["\u8fea\u4e9e","Posumudi","Shock"],"stats":[122,107,6,13,5,6,7,6,9]},"Apophis":{"lvl":26,"mvtype":"flying","race":"Drake","stats":[279,0,19,7,12,6,5,6,8]},"\u98db\u5929":{"lvl":49,"mvtype":"flying","race":"Megami","skills":["\u6885\u8fea\u4e9e\u62c9\u7ff0","Sealing Song"],"stats":[437,513,12,26,12,9,11,8,12]},"Arioch":{"lvl":70,"mvtype":"plains","race":"Vile","skills":["\u746a\u54c8\u5e03\u8299\u62c9","\u746a\u54c8\u5e03\u8299","\u5e03\u8299\u62c9"],"stats":[680,553,19,23,20,26,6,5,6]},"Astaroth":{"lvl":76,"mvtype":"plains","race":"Tyrant","resists":"1-?--?s1?27?-----?-s211","skills":["\u746a\u54c8\u5e03\u8299\u62c9","\u746a\u54c8\u5e03\u8299","\u5e03\u8299\u62c9"],"stats":[734,470,27,19,21,20,7,5,9]},"\u963f\u4fee\u7f85\u738b":{"lvl":77,"mvtype":"plains","race":"Deity","skills":["\u746a\u54c8\u5409\u6b50\u52a0","\u746a\u54c8\u5409\u6b50"],"stats":[790,763,28,28,25,23,7,5,7]},"\u5df4\u529b":{"lvl":62,"mvtype":"plains","race":"Deity","skills":["\u746a\u54c8\u5409\u6b50","\u5409\u6b50\u52a0","\u5409\u6b50"],"stats":[588,484,21,22,17,16,7,8,7]},"Badb Catha":{"lvl":14,"mvtype":"flying","race":"Avian","stats":[132,0,10,5,7,6,6,9,7]},"Bai Long":{"lvl":35,"mvtype":"flying","race":"Dragon","skills":["Stun Bite"],"stats":[310,0,20,7,9,13,7,8,7]},"Bai Ze":{"lvl":25,"mvtype":"desert","race":"Avatar","skills":["Poison Claw","\u51b0\u584a"],"stats":[409,0,14,8,13,7,13,6,9]},"Balam":{"lvl":65,"mvtype":"plains","race":"Tyrant","resists":"1-?--?s1?27?-----?-1-11","skills":["\u746a\u54c8\u5e03\u8299\u62c9","\u746a\u54c8\u5e03\u8299","\u5e03\u8299"],"stats":[646,315,25,15,18,23,21,5,9]},"Balaur":{"lvl":42,"mvtype":"flying","race":"Drake","stats":[472,0,21,6,19,10,10,5,8]},"\u5df4\u9686":{"lvl":51,"mvtype":"desert","race":"Avatar","skills":["Sealing Song","Squash"],"stats":[689,0,25,9,17,13,13,9,9]},"Basilisk":{"lvl":25,"mvtype":"plains","race":"Snake","stats":[245,0,14,9,10,11,6,8,7]},"Baykok":{"lvl":28,"mvtype":"plains","race":"Jaki","stats":[311,0,15,17,13,7,8,7,7]},"Behemoth":{"lvl":48,"mvtype":"plains","race":"Vile","skills":["\u746a\u54c8\u62c9\u57fa","\u4e9e\u57fa\u62c9\u6b50","\u4e9e\u57fa"],"stats":[418,128,20,10,11,20,11,5,6]},"\u8c9d\u5229\u4e9e":{"lvl":54,"mvtype":"plains","race":"Tyrant","resists":"1-?--?s1?27?-----?-2s11","skills":["\u746a\u54c8\u62c9\u57fa\u7fc1","\u746a\u54c8\u62c9\u57fa","\u4e9e\u57fa\u62c9\u6b50"],"stats":[515,390,22,23,13,13,13,5,9]},"\u6bd8\u6c99\u9580\u5929":{"lvl":62,"mvtype":"plains","race":"Kishin","skills":["Squash"],"stats":[705,0,29,8,29,23,11,9,9]},"Bogle":{"lvl":20,"mvtype":"plains","race":"Touki","stats":[174,0,11,5,7,15,5,6,5]},"Bucca-Boo":{"lvl":27,"mvtype":"plains","race":"Touki","stats":[211,0,13,6,6,18,8,5,5]},"\u514b\u9b6f\u8c9d\u6d1b\u65af":{"lvl":45,"mvtype":"forest","race":"Beast","stats":[511,0,25,10,19,15,8,7,8]},"Chatterskull":{"lvl":5,"mvtype":"plains","race":"Jaki","stats":[45,0,7,8,6,5,5,5,7]},"\u5947\u7f8e\u62c9":{"lvl":37,"mvtype":"desert","race":"Avatar","skills":["Fire Breath","Fireball"],"stats":[555,0,18,9,15,11,5,5,9]},"Coatlicue":{"lvl":20,"mvtype":"flying","race":"Dragon","skills":["Poison Claw"],"stats":[172,0,14,6,7,10,6,6,7]},"Cockatrice":{"lvl":51,"mvtype":"plains","race":"Snake","stats":[547,0,25,7,20,19,8,8,7]},"\u5eab\u592b\u6797":{"lvl":48,"mvtype":"plains","race":"Genma","skills":["\u746a\u54c8\u5e03\u8299\u62c9","\u5e03\u8299\u62c9","\u5e03\u8299","Pore Wave","Shockwave"],"stats":[430,456,13,24,12,10,11,7,6]},"Dagon":{"lvl":81,"mvtype":"plains","race":"Vile","skills":["\u746a\u54c8\u62c9\u57fa","\u4e9e\u57fa\u62c9\u6b50","\u4e9e\u57fa"],"stats":[770,602,21,20,21,32,11,5,6]},"Dodongo":{"lvl":12,"mvtype":"waters","race":"Wilder","stats":[118,0,10,6,7,6,6,6,8]},"Dryad":{"lvl":31,"mvtype":"forest","race":"Fairy","skills":["\u6885\u8fea\u4e9e\u62c9\u7ff0","\u8fea\u4e9e"],"stats":[275,270,8,14,9,5,13,11,7]},"Dullahan":{"lvl":11,"mvtype":"plains","race":"Genma","skills":["Mazan","Zan","Paral Eyes","Eerie Laugh"],"stats":[109,72,7,9,6,6,6,6,6]},"Elf":{"lvl":22,"mvtype":"forest","race":"Fairy","skills":["\u8fea\u4e9e\u62c9\u7ff0","\u5e15\u7279\u62c9"],"stats":[176,180,7,12,6,7,10,9,7]},"Empusa":{"lvl":15,"mvtype":"plains","race":"Vile","skills":["\u746a\u54c8\u5e03\u8299","\u5e03\u8299"],"stats":[129,89,8,8,6,12,5,5,6]},"\u6cd5\u592b\u7d0d":{"lvl":36,"mvtype":"flying","race":"Drake","stats":[418,0,20,5,18,8,5,9,8]},"Feng Huang":{"lvl":38,"mvtype":"flying","race":"Avian","stats":[384,0,17,8,14,11,9,8,7]},"Fenrir":{"lvl":46,"mvtype":"waters","race":"Wilder","stats":[500,0,18,12,19,7,13,6,8]},"\u4f5b\u9215\u53f8":{"lvl":18,"mvtype":"flying","race":"Fallen","skills":["\u8fea\u4e9e\u62c9\u7ff0","\u5e15\u7279\u62c9"],"stats":[172,80,8,10,8,8,7,6,10]},"\u52a0\u767e\u5217":{"lvl":50,"mvtype":"flying","race":"Divine","skills":["\u6885\u8fea\u4e9e","\u8fea\u4e9e\u62c9\u746a","\u51b0\u584a"],"stats":[507,520,23,26,19,16,11,15,9]},"Gamigin":{"lvl":42,"mvtype":"flying","race":"Fallen","skills":["\u8fea\u4e9e\u62c9\u7ff0","\u8fea\u4e9e\u62c9\u746a","\u8fea\u4e9e"],"stats":[484,210,11,14,20,12,7,7,10]},"\u8c61\u982d\u795e":{"lvl":18,"mvtype":"plains","race":"Genma","skills":["\u746a\u54c8\u5e03\u8299\u62c9","\u5e03\u8299\u62c9","Stun Recovery","Patra Song"],"stats":[148,126,9,14,6,5,7,6,6]},"Ganga":{"lvl":23,"mvtype":"flying","race":"Dragon","skills":["Poison Bite"],"stats":[219,0,16,7,9,9,5,6,7]},"Gargoyle":{"lvl":25,"mvtype":"flying","race":"Fallen","skills":["\u8fea\u4e9e\u62c9\u746a","\u8fea\u4e9e"],"stats":[171,40,5,5,5,5,31,5,10]},"Garm":{"lvl":6,"mvtype":"waters","race":"Wilder","stats":[76,0,7,5,7,5,6,5,8]},"\u8fe6\u6a13\u7f85":{"lvl":46,"mvtype":"flying","race":"Avian","stats":[452,0,18,7,15,12,10,13,7]},"\u7384\u6b66":{"lvl":13,"mvtype":"desert","race":"Avatar","skills":["Stun Bite","Poison Breath"],"stats":[232,0,10,5,10,10,5,6,9]},"Goblin":{"lvl":13,"mvtype":"plains","race":"Touki","stats":[125,0,7,6,7,11,6,5,5]},"Gozuki":{"lvl":41,"mvtype":"plains","race":"Touki","stats":[405,0,17,5,14,22,5,7,5]},"Haniel":{"lvl":25,"mvtype":"flying","race":"Divine","skills":["Posumudi","Paraladi","\u5e15\u7279\u62c9","Pore Wave"],"stats":[233,211,10,18,9,8,7,5,9]},"\u54c8\u5974\u66fc":{"lvl":39,"mvtype":"plains","race":"Genma","skills":["Mazanma","Zanma","Zan","Shock","Raiden"],"stats":[355,379,16,23,11,7,6,5,6]},"Harpy":{"lvl":12,"mvtype":"flying","race":"Avian","stats":[106,0,8,6,6,5,8,8,7]},"Horkos":{"lvl":37,"mvtype":"plains","race":"Vile","skills":["\u4e9e\u57fa\u62c9\u6b50","\u4e9e\u57fa"],"stats":[365,110,15,11,13,15,7,5,6]},"Humbaba":{"lvl":24,"mvtype":"waters","race":"Wilder","stats":[238,0,12,8,10,6,10,7,8]},"Hydra":{"lvl":43,"mvtype":"plains","race":"Snake","stats":[515,0,28,5,22,17,5,5,7]},"Isora":{"lvl":18,"mvtype":"waters","race":"Wilder","stats":[184,0,15,7,9,6,5,5,8]},"Itzamna":{"lvl":58,"mvtype":"flying","race":"Drake","stats":[620,0,28,9,22,10,11,7,8]},"Izanami":{"lvl":67,"mvtype":"flying","race":"Megami","skills":["\u8fea\u4e9e\u62c9\u746a","\u8fea\u4e9e\u62c9\u7ff0","Paraladi","Patra Song"],"stats":[611,725,13,29,16,13,13,12,12]},"\u4f73\u5854\u7531":{"lvl":32,"mvtype":"flying","race":"Avian","stats":[294,0,20,10,10,9,6,6,7]},"\u6301\u570b\u5929":{"lvl":52,"mvtype":"plains","race":"Kishin","skills":["Paral Eyes"],"stats":[592,0,24,10,21,20,13,6,9]},"\u8fe6\u68a8":{"lvl":8,"mvtype":"plains","race":"Kishin","skills":["Eerie Laugh"],"stats":[80,0,8,5,6,7,6,5,9]},"Kazfiel":{"lvl":31,"mvtype":"flying","race":"Divine","skills":["\u8fea\u4e9e\u62c9\u7ff0","Posumudi","Shockwave"],"stats":[263,313,12,22,8,5,10,9,9]},"\u83ca\u7406\u5a9b":{"lvl":55,"mvtype":"flying","race":"Megami","skills":["\u6885\u8fea\u4e9e","Posumudi","Detoxify"],"stats":[527,638,9,29,16,8,12,10,12]},"Kinnari":{"lvl":32,"mvtype":"flying","race":"Megami","skills":["\u6885\u8fea\u4e9e","Paraladi","Sealing Song"],"stats":[318,191,13,15,12,8,7,6,12]},"Kobold":{"lvl":3,"mvtype":"plains","race":"Touki","stats":[24,0,6,5,5,7,5,5,5]},"\u5ee3\u76ee\u5929":{"lvl":46,"mvtype":"plains","race":"Kishin","skills":["Berserk"],"stats":[461,0,20,10,18,16,13,10,9]},"Kushinada-Hime":{"lvl":44,"mvtype":"flying","race":"Megami","skills":["Posumudi","\u5e15\u7279\u62c9","Song of Life"],"stats":[414,385,10,22,13,10,7,11,12]},"Kwancha":{"lvl":8,"mvtype":"plains","race":"Jaki","stats":[78,0,6,8,6,5,7,6,7]},"\u5409\u7965\u5929":{"lvl":70,"mvtype":"flying","race":"Megami","skills":["\u8fea\u4e9e\u62c9\u746a","\u6885\u8fea\u4e9e","Song of Life"],"stats":[644,780,14,30,17,13,13,12,12]},"Leonard":{"lvl":49,"mvtype":"flying","race":"Fallen","skills":["\u6885\u8fea\u4e9e\u62c9\u7ff0","Paraladi","\u5e15\u7279\u62c9"],"stats":[473,276,13,16,15,12,17,5,10]},"\u5229\u7dad\u5766":{"lvl":50,"mvtype":"flying","race":"Drake","stats":[552,0,25,5,21,9,9,10,8]},"\u7f85\u74e6":{"lvl":18,"mvtype":"plains","race":"Jaki","stats":[220,0,11,12,9,7,6,6,7]},"\u6d1b\u57fa":{"lvl":37,"mvtype":"plains","race":"Deity","skills":["Zanma"],"stats":[389,160,15,12,15,11,8,5,7]},"\u8def\u897f\u6cd5":{"lvl":88,"mvtype":"plains","race":"Tyrant","skills":["\u5409\u6b50\u52a0","\u746a\u54c8\u5409\u6b50","\u746a\u54c8\u5409\u6b50\u52a0"],"stats":[912,731,29,25,30,25,8,5,9]},"Mahakala":{"lvl":44,"mvtype":"plains","race":"Deity","skills":["Mazan","Zan"],"stats":[460,162,21,11,17,14,5,7,7]},"Maya":{"lvl":30,"mvtype":"flying","race":"Drake","stats":[304,0,18,6,12,7,11,5,8]},"Medusa":{"lvl":43,"mvtype":"plains","race":"Tyrant","resists":"1-?--?s1?27?-----?-ss11","skills":["\u746a\u54c8\u5e03\u8299","\u5e03\u8299\u62c9","\u5e03\u8299"],"stats":[408,232,20,15,11,17,10,5,9]},"Mezuki":{"lvl":48,"mvtype":"plains","race":"Touki","stats":[514,0,16,6,19,24,6,6,5]},"\u7c73\u8fe6\u52d2":{"lvl":60,"mvtype":"flying","race":"Divine","skills":["\u6885\u8fea\u4e9e\u62c9\u7ff0","\u8fea\u4e9e\u62c9\u7ff0","Fireball"],"stats":[621,674,27,29,25,18,7,8,9]},"Minotaur":{"lvl":20,"mvtype":"plains","race":"Tyrant","resists":"1-?--?s1?27?-----?-s711","skills":["\u746a\u54c8\u5409\u6b50","\u5409\u6b50\u52a0","\u5409\u6b50"],"stats":[280,96,15,8,11,12,10,5,9]},"\u6469\u6d1b":{"lvl":31,"mvtype":"plains","race":"Tyrant","resists":"1-?--?s1?27?-----?-7s11","skills":["\u746a\u54c8\u62c9\u57fa\u7fc1","\u4e9e\u57fa\u62c9\u6b50","\u4e9e\u57fa"],"stats":[337,180,17,10,10,14,10,5,9]},"Morrigan":{"lvl":8,"mvtype":"plains","race":"Genma","skills":["\u4e9e\u57fa\u62c9\u6b50","\u4e9e\u57fa","Paral Eyes","Devil\'s Kiss"],"stats":[78,56,6,8,6,6,5,6,6]},"\u90a3\u4f3d":{"lvl":60,"mvtype":"plains","race":"Snake","stats":[567,0,29,13,16,20,7,6,7]},"Nagasunehiko":{"lvl":18,"mvtype":"plains","race":"Kishin","skills":["\u51b0\u584a"],"stats":[172,0,11,6,8,10,5,7,9]},"Nandi":{"lvl":18,"mvtype":"desert","race":"Avatar","skills":["Ice Breath","Squash"],"stats":[307,0,11,6,12,8,6,8,9]},"\u8c93\u5996":{"lvl":10,"mvtype":"forest","race":"Beast","stats":[92,0,9,5,6,7,7,5,8]},"\u5967\u6c40":{"lvl":55,"mvtype":"plains","race":"Deity","skills":["Mazan","Zanma"],"stats":[515,471,22,23,15,11,5,8,7]},"Orias":{"lvl":13,"mvtype":"flying","race":"Fallen","skills":["\u8fea\u4e9e\u62c9\u746a","Posumudi","Paraladi"],"stats":[125,58,7,9,7,6,8,5,10]},"\u6b50\u82e5\u535a\u53f8":{"lvl":28,"mvtype":"flying","race":"Fallen","skills":["\u6885\u8fea\u4e9e","\u8fea\u4e9e\u62c9\u7ff0","\u8fea\u4e9e"],"stats":[266,146,11,13,10,9,7,7,10]},"\u6b50\u7279\u9b6f\u65af":{"lvl":27,"mvtype":"forest","race":"Beast","stats":[285,0,14,11,11,7,5,8,8]},"\u6b50\u8cfd":{"lvl":57,"mvtype":"flying","race":"Fallen","skills":["\u6885\u8fea\u4e9e","\u8fea\u4e9e\u62c9\u746a","Posumudi"],"stats":[685,355,14,18,28,13,7,6,10]},"Pabilsag":{"lvl":30,"mvtype":"waters","race":"Wilder","stats":[280,0,16,10,10,7,8,8,8]},"\u9cf3\u51f0":{"lvl":55,"mvtype":"flying","race":"Avian","stats":[575,0,21,9,20,14,12,8,7]},"\u76ae\u514b\u5e0c":{"lvl":2,"mvtype":"forest","race":"Fairy","skills":["\u8fea\u4e9e"],"stats":[24,20,5,6,5,6,5,5,7]},"Pooka":{"lvl":15,"mvtype":"forest","race":"Fairy","skills":["\u6885\u8fea\u4e9e"],"stats":[115,150,7,12,5,6,6,8,7]},"Porewit":{"lvl":50,"mvtype":"flying","race":"Dragon","skills":["Poison Breath"],"stats":[419,0,27,9,10,15,8,10,7]},"Purski":{"lvl":5,"mvtype":"plains","race":"Genma","skills":["\u5409\u6b50\u52a0","\u5409\u6b50","Raiden","Detoxify"],"stats":[57,48,6,8,6,5,5,5,6]},"Qilin":{"lvl":43,"mvtype":"desert","race":"Avatar","skills":["Poison Claw","Tackle"],"stats":[628,0,21,8,18,12,8,7,9]},"Qing Long":{"lvl":66,"mvtype":"flying","race":"Dragon","skills":["Stun Bite"],"stats":[691,0,30,11,15,21,7,11,7]},"\u7fbd\u86c7\u795e":{"lvl":43,"mvtype":"flying","race":"Dragon","skills":["Stun Bite"],"stats":[399,0,23,8,12,13,7,9,7]},"Rakcharango":{"lvl":18,"mvtype":"forest","race":"Beast","stats":[195,0,11,8,9,7,6,6,8]},"\u862d\u9054":{"lvl":38,"mvtype":"waters","race":"Wilder","stats":[432,0,20,11,18,6,7,5,8]},"\u62c9\u6590\u723e":{"lvl":43,"mvtype":"flying","race":"Divine","skills":["\u8fea\u4e9e\u62c9\u7ff0","Raiden"],"stats":[410,426,19,24,15,13,16,8,9]},"Ravana":{"lvl":49,"mvtype":"plains","race":"Deity","skills":["\u5409\u6b50\u52a0"],"stats":[535,310,22,15,16,14,6,5,7]},"Rusalka":{"lvl":5,"mvtype":"forest","race":"Fairy","skills":["\u8fea\u4e9e","Posumudi"],"stats":[45,45,6,7,5,5,5,6,7]},"Sallos":{"lvl":34,"mvtype":"plains","race":"Touki","stats":[296,0,15,6,9,20,7,6,5]},"\u5999\u97f3\u5929\u5973":{"lvl":60,"mvtype":"flying","race":"Megami","skills":["\u6885\u8fea\u4e9e","\u8fea\u4e9e","Stun Recovery"],"stats":[586,614,11,27,18,10,10,13,12]},"\u6492\u65e6":{"lvl":99,"mvtype":"plains","race":"Tyrant","skills":["Zanma","Mazan","Mazanma"],"stats":[999,917,32,28,30,27,14,5,9]},"Senko":{"lvl":4,"mvtype":"waters","race":"Wilder","stats":[38,0,6,6,5,6,5,5,8]},"\u6fd5\u5a46":{"lvl":83,"mvtype":"plains","race":"Deity","skills":["Mazanma","Zanma","Zan"],"stats":[825,810,31,29,28,25,6,7,7]},"Siren":{"lvl":20,"mvtype":"flying","race":"Avian","stats":[174,0,13,6,7,8,7,8,7]},"Sol Leon":{"lvl":56,"mvtype":"desert","race":"Avatar","skills":["Poison Breath","Berserk"],"stats":[741,0,27,10,19,14,10,10,9]},"Spartoi":{"lvl":15,"mvtype":"plains","race":"Jaki","stats":[187,0,9,10,9,6,6,5,7]},"Stonka":{"lvl":34,"mvtype":"forest","race":"Beast","stats":[380,0,20,7,16,7,6,7,8]},"Sylph":{"lvl":11,"mvtype":"forest","race":"Fairy","skills":["\u8fea\u4e9e\u62c9\u746a","Paraladi"],"stats":[102,90,6,8,6,6,5,9,7]},"Sytry":{"lvl":35,"mvtype":"flying","race":"Fallen","skills":["Posumudi","Paraladi","\u5e15\u7279\u62c9"],"stats":[279,169,10,13,7,12,16,6,10]},"Take-Mikazuchi":{"lvl":26,"mvtype":"plains","race":"Kishin","skills":["Raiden"],"stats":[240,0,12,10,9,12,7,7,9]},"\u5efa\u5fa1\u540d\u65b9":{"lvl":11,"mvtype":"plains","race":"Kishin","skills":["Shock"],"stats":[110,0,9,5,5,9,6,6,9]},"\u5854\u59c6\u6797":{"lvl":25,"mvtype":"plains","race":"Genma","skills":["\u746a\u54c8\u5409\u6b50","\u5409\u6b50\u52a0","\u5409\u6b50","Detoxify","Song of Life"],"stats":[233,180,10,16,9,6,8,5,6]},"Tamamo-no-mae":{"lvl":12,"mvtype":"forest","race":"Beast","stats":[130,0,8,7,8,6,6,6,8]},"Tammuz":{"lvl":22,"mvtype":"forest","race":"Beast","stats":[232,0,12,7,9,8,8,7,8]},"Tan-Ki":{"lvl":15,"mvtype":"forest","race":"Beast","stats":[162,0,10,7,8,7,7,6,8]},"Tao Tie":{"lvl":44,"mvtype":"plains","race":"Vile","skills":["\u746a\u54c8\u5e03\u8299","\u5e03\u8299\u62c9","\u5e03\u8299"],"stats":[320,205,17,16,7,18,10,5,6]},"Tezcatlipoca":{"lvl":40,"mvtype":"plains","race":"Jaki","stats":[403,0,17,19,15,7,16,6,7]},"\u6258\u723e":{"lvl":40,"mvtype":"plains","race":"Deity","skills":["\u746a\u54c8\u5409\u6b50","\u5409\u6b50"],"stats":[398,135,20,10,14,13,6,6,7]},"\u5ea7\u5929\u4f7f":{"lvl":20,"mvtype":"flying","race":"Divine","skills":["\u8fea\u4e9e\u62c9\u7ff0","\u8fea\u4e9e\u62c9\u746a","Raiden"],"stats":[210,160,9,16,10,6,5,6,9]},"Tiamat":{"lvl":76,"mvtype":"plains","race":"Snake","stats":[732,0,31,15,21,23,8,10,7]},"Turdak":{"lvl":11,"mvtype":"plains","race":"Jaki","stats":[111,0,7,9,7,8,7,5,7]},"Typhon":{"lvl":34,"mvtype":"plains","race":"Snake","stats":[332,0,20,6,12,13,5,5,7]},"Undine":{"lvl":42,"mvtype":"forest","race":"Fairy","skills":["\u6885\u8fea\u4e9e","\u8fea\u4e9e\u62c9\u746a"],"stats":[316,330,10,20,6,9,11,15,7]},"\u7368\u89d2\u7378":{"lvl":22,"mvtype":"desert","race":"Avatar","skills":["Tackle","Berserk"],"stats":[365,0,12,7,10,11,6,13,9]},"\u5c24\u5229\u723e":{"lvl":36,"mvtype":"flying","race":"Divine","skills":["\u8fea\u4e9e\u62c9\u746a","\u8fea\u4e9e","Shock"],"stats":[356,300,17,20,12,11,8,10,9]},"Utukku":{"lvl":3,"mvtype":"plains","race":"Jaki","stats":[31,0,6,7,5,5,5,5,7]},"\u5973\u6b66\u795e":{"lvl":31,"mvtype":"plains","race":"Genma","skills":["\u746a\u54c8\u62c9\u57fa","\u4e9e\u57fa\u62c9\u6b50","\u4e9e\u57fa","Devil\'s Kiss","Sealing Song"],"stats":[286,171,12,17,8,9,7,7,6]},"Vritra":{"lvl":67,"mvtype":"flying","race":"Drake","stats":[803,0,31,6,32,7,14,6,8]},"Werecat":{"lvl":8,"mvtype":"forest","race":"Fairy","skills":["\u8fea\u4e9e\u62c9\u7ff0"],"stats":[78,80,5,9,6,5,7,5,7]},"Weredog":{"lvl":6,"mvtype":"plains","race":"Touki","stats":[64,0,6,5,6,9,5,6,5]},"Wyrm":{"lvl":27,"mvtype":"flying","race":"Dragon","skills":["Fire Breath"],"stats":[211,0,18,9,6,10,6,6,7]},"Wyvern":{"lvl":58,"mvtype":"flying","race":"Dragon","skills":["Fire Breath"],"stats":[551,0,28,10,15,18,9,7,7]},"\u516b\u5c90\u5927\u86c7":{"lvl":69,"mvtype":"plains","race":"Snake","stats":[709,0,32,6,23,21,7,10,7]},"\u516b\u54ab\u70cf":{"lvl":26,"mvtype":"flying","race":"Avian","stats":[240,0,14,7,9,9,6,10,7]},"\u8679\u86c7":{"lvl":17,"mvtype":"flying","race":"Drake","stats":[165,0,14,6,8,6,6,6,8]},"Zoma":{"lvl":62,"mvtype":"plains","race":"Vile","skills":["\u746a\u54c8\u62c9\u57fa","\u4e9e\u57fa\u62c9\u6b50","\u4e9e\u57fa"],"stats":[659,207,19,11,21,29,6,5,6]},"\u589e\u9577\u5929":{"lvl":35,"mvtype":"plains","race":"Kishin","skills":["Tackle"],"stats":[380,0,17,6,14,15,7,11,9]}}'),o=JSON.parse('{"\u4e9e\u57fa":{"cost":1006,"element":"fir","power":15,"range":22,"target":"1 enemy"},"\u4e9e\u57fa\u62c9\u6b50":{"cost":1012,"element":"fir","power":30,"range":22,"target":"1 enemy"},"Berserk":{"effect":"Deals damage","element":"phy","hit":100,"power":150,"range":12,"target":"Multiple enemies"},"\u5e03\u8299":{"cost":1008,"element":"ice","power":18,"range":22,"target":"1 enemy"},"\u5e03\u8299\u62c9":{"cost":1016,"element":"ice","power":36,"range":22,"target":"1 enemy"},"Detoxify":{"effect":"Heals Poison status","element":"rec","hit":100,"range":12,"target":"1 ally"},"Devil\'s Kiss":{"effect":"Deals damage and Close status","element":"phy","hit":100,"power":25,"range":11,"target":"1 enemy"},"\u8fea\u4e9e":{"cost":1010,"effect":"Heals 1/4 of ally\'s max HP","element":"rec","range":2,"target":"1 ally"},"\u8fea\u4e9e\u62c9\u7ff0":{"cost":1040,"effect":"Heals all HP","element":"rec","range":2,"target":"1 ally"},"\u8fea\u4e9e\u62c9\u746a":{"cost":1020,"effect":"Heals 1/2 of ally\'s max HP","element":"rec","range":2,"target":"1 ally"},"Eerie Laugh":{"effect":"Deals damage and Close status","element":"phy","hit":50,"power":25,"range":11,"target":"1 enemy"},"Fire Breath":{"element":"fir","hit":100,"power":30,"range":22,"target":"1 enemy"},"Fireball":{"element":"fir","hit":100,"power":56,"range":22,"target":"Multiple enemies"},"Ice Breath":{"element":"ice","hit":100,"power":36,"range":22,"target":"1 enemy"},"\u51b0\u584a":{"element":"ice","hit":100,"power":64,"range":22,"target":"Multiple enemies"},"\u746a\u54c8\u5e03\u8299":{"cost":1016,"element":"ice","power":32,"range":22,"target":"Multiple enemies"},"\u746a\u54c8\u5e03\u8299\u62c9":{"cost":1032,"element":"ice","power":64,"range":22,"target":"Multiple enemies"},"\u746a\u54c8\u62c9\u57fa":{"cost":1014,"element":"fir","power":28,"range":22,"target":"Multiple enemies"},"\u746a\u54c8\u62c9\u57fa\u7fc1":{"cost":1028,"element":"fir","power":56,"range":22,"target":"Multiple enemies"},"Mazan":{"cost":1020,"element":"for","power":48,"range":22,"target":"Multiple enemies"},"Mazanma":{"cost":1040,"element":"for","power":96,"range":22,"target":"Multiple enemies"},"\u746a\u54c8\u5409\u6b50":{"cost":1018,"element":"ele","power":35,"range":22,"target":"Multiple enemies"},"\u746a\u54c8\u5409\u6b50\u52a0":{"cost":1036,"element":"ele","power":70,"range":22,"target":"Multiple enemies"},"\u6885\u8fea\u4e9e":{"cost":1030,"effect":"Heals 1/4 of allies\' max HP","element":"rec","range":2,"target":"Multiple allies"},"\u6885\u8fea\u4e9e\u62c9\u7ff0":{"cost":1060,"effect":"Heals 1/2 of allies\' max HP","element":"rec","range":2,"target":"Multiple allies"},"Paral Eyes":{"effect":"Deals damage and Paralysis status","element":"phy","hit":75,"power":25,"range":11,"target":"1 enemy"},"Paraladi":{"cost":1015,"effect":"Heals the Paralysis status","element":"rec","range":2,"target":"One ally"},"\u5e15\u7279\u62c9":{"cost":1015,"effect":"Heals the Close status","element":"rec","range":2,"target":"One ally"},"Patra Song":{"effect":"Heals Close status","element":"rec","hit":100,"range":12,"target":"1 ally"},"Poison Bite":{"effect":"Deals damage and Poison status","element":"phy","hit":50,"power":25,"range":11,"target":"1 enemy"},"Poison Breath":{"effect":"Deals damage and Poison status","element":"phy","hit":75,"power":25,"range":11,"target":"1 enemy"},"Poison Claw":{"effect":"Deals damage and Poison status","element":"phy","power":25,"range":11,"target":"1 enemy"},"Pore Wave":{"element":"for","hit":100,"power":64,"range":22,"target":"1 enemy"},"Posumudi":{"cost":1015,"effect":"Heals the Poison status","element":"rec","range":2,"target":"One ally"},"Raiden":{"element":"ele","hit":100,"power":70,"range":22,"target":"Multiple enemies"},"Rimdora":{"cost":1099,"element":"for","power":150,"range":23,"target":"Multiple enemies"},"Sabbatma":{"cost":1002,"effect":"Summon a demon from the COMP","element":"sup"},"Sealing Song":{"effect":"Deals damage and Close status","element":"phy","hit":75,"power":25,"range":11,"target":"1 enemy"},"Shock":{"element":"ele","hit":100,"power":45,"range":22,"target":"1 enemy"},"Shockwave":{"element":"for","hit":100,"power":96,"range":22,"target":"Multiple enemies"},"Song of Life":{"effect":"Heals 1/4 of allies\' max HP","element":"rec","hit":100,"range":12,"target":"Multiple allies"},"Squash":{"effect":"Deals damage","element":"phy","hit":100,"power":300,"range":11,"target":"1 enemy"},"Stun Bite":{"effect":"Deals damage and Paralysis status","element":"phy","hit":50,"power":25,"range":11,"target":"1 enemy"},"Stun Claw":{"effect":"Deals damage and Paralysis status","element":"phy","hit":100,"power":25,"range":11,"target":"1 enemy"},"Stun Recovery":{"effect":"Heals Paralysis status","element":"rec","hit":100,"range":12,"target":"1 ally"},"Tackle":{"effect":"Deals damage","element":"phy","hit":100,"power":200,"range":11,"target":"1 enemy"},"\u7279\u62c9\u57c3\u65af\u7279":{"cost":1000,"effect":"Flee the current map, but lose half your Macca","element":"sup"},"Zan":{"cost":1016,"element":"for","power":32,"range":22,"target":"1 enemy"},"Zanma":{"cost":1032,"element":"for","power":64,"range":22,"target":"1 enemy"},"\u5409\u6b50":{"cost":1010,"element":"ele","power":21,"range":22,"target":"1 enemy"},"\u5409\u6b50\u52a0":{"cost":1020,"element":"ele","power":45,"range":22,"target":"1 enemy"}}'),p=JSON.parse('{"races":["Megami","Deity","Dragon","Snake","Divine","Avian","Avatar","Beast","Genma","Fairy","Kishin","Touki"],"table":[["Deity"],["Kishin","Megami"],["Avian","Genma","Snake"],["Fairy","Dragon","Avatar","Dragon"],["Kishin","Avian","Megami","Touki","Avian"],["Avatar","Genma","Beast","Beast","Megami","Divine"],["Dragon","Beast","Beast","Dragon","Fairy","Beast","Beast"],["Fairy","Avatar","Avian","Avatar","Fairy","Avatar","Dragon","Avatar"],["Beast","Divine","Fairy","Beast","Kishin","Fairy","Beast","Touki","Fairy"],["Divine","Touki","Touki","Touki","Avian","Genma","Genma","Touki","Touki","Genma"],["Touki","Touki","Divine","Avatar","Avatar","Genma","Snake","Avian","Divine","Divine","Touki"],["Avian","Genma","Fairy","Fairy","Avian","Genma","Beast","Avian","Fairy","Genma","Genma","Kishin"]]}');var y=t(8873),c=t(5466),g=t(9955),f=t(2451);function k(e){const a={};for(let t=0;t<e.length;t++)a[e[t]]=t;return a}const u=new i.N([function(e,a,t){const s=[],{race:l,lvl:i}=a.getDemon(e),n=r[l]||0,v=a.getIngredientDemonLvls(l).indexOf(i);if(-1===v)return[];for(const[m,o]of Object.entries(t.getRaceFusions(l))){const e=a.getResultDemonLvls(o),t=r[m]||0,l=a.getIngredientDemonLvls(m);for(let i=0;i<l.length;i++){const r=Math.floor((v+n+i+t)/2);r<e.length&&s.push({name1:a.reverseLookupDemon(m,l[i]),name2:a.reverseLookupDemon(o,e[r])})}}return s}],[]),h=new i.N([function(e,a,t){const s=[],{race:l,lvl:i}=a.getDemon(e),n=a.getResultDemonLvls(l).indexOf(i);if(-1===n)return[];for(const[v,m]of Object.entries(t.getRaceFissions(l))){const e=r[v]||0,t=a.getIngredientDemonLvls(v);for(let l=0;l<t.length;l++)for(const i of m){const m=r[i]||0,o=a.getIngredientDemonLvls(i);for(let r=0;r<o.length;r++)Math.floor(l/2+r/2)==n&&(Math.floor((l+e+r+m)/2),s.push({name1:a.reverseLookupDemon(v,t[l]),name2:a.reverseLookupDemon(i,o[r])}))}}return s}],[]),d=[],D=(d.map(e=>e.slice(0,3)).slice(0,23),v.tA.map(e=>e.slice(0,3)));for(const w of v.Hv)for(const e of w)d.push(e);for(const[w,M]of Object.entries(m))M.stats=M.stats.slice(0,8),M.person=M.race,M.nskills=(M.skills||[]).reduce((e,a)=>(e[a]=0,e),{}),M.resists="";for(const[w,M]of Object.entries(o))M.elem=M.element,M.target=(M.target||"Self")+(M.range?" "+M.range:""),M.effect=M.effect||M.power+" dmg";const S={appTitle:"Majin Tensei",gameTitles:{mjn1:"Majin Tensei"},appCssClasses:["kuzu","mjn1"],races:d,resistElems:[],skillElems:D,baseStats:v.co,fusionLvlMod:2.5,resistCodes:{},raceOrder:k(d),elemOrder:k(D),fissionCalculator:h,fusionCalculator:u,demonData:{mjn1:[m]},skillData:{mjn1:[o]},normalTable:p,elementTable:{elems:[],races:[],table:[]},mitamaTable:[],specialRecipes:{mjn1:{}}};let P=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({providers:[l.Dx,y.Y,[{provide:n.vE,useExisting:y.Y}],[{provide:n.I7,useValue:S}]],imports:[[s.ez,c.y,g.V]]}),e})()}}]);