(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2],{314:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("0c9d5702",content,!0,{sourceMap:!1})},315:function(t,e,r){"use strict";r.r(e);var o={props:{avatar:{default:"~/assets/image/Affiche_CDF.png",type:String},name:{default:"Joueur",type:String}}},n=(r(316),r(25)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"joueur"},[r("img",{attrs:{src:t.avatar}}),t._v(" "),r("div",{staticClass:"name"},[r("h4",{staticClass:"font-text"},[t._v("\n            "+t._s(t.name)+"\n        ")])])])}),[],!1,null,"8960f490",null);e.default=component.exports},316:function(t,e,r){"use strict";r(314)},317:function(t,e,r){var o=r(33)(!1);o.push([t.i,".joueur[data-v-8960f490]{display:flex;flex-direction:column;width:150px;height:190px;background-color:var(--color-black);border-radius:20px;overflow:hidden;margin:.5em;transition:.2s ease-in-out}.joueur img[data-v-8960f490]{border-radius:inherit;width:100%;height:80%}.joueur .name[data-v-8960f490]{display:flex;align-items:center;justify-content:center;width:100%;height:20%}.joueur .name h4[data-v-8960f490]{color:var(--color-text);padding:0 1em;text-align:center}.joueur[data-v-8960f490]:hover{background-color:var(--color-text-highlight)}@media (max-width:500px){.joueur[data-v-8960f490]{width:105px;height:140px;margin:.5em .3em;border-radius:12px}.joueur .name[data-v-8960f490]{height:23%}.joueur .name h4[data-v-8960f490]{width:inherit;font-size:.8em;padding:.1em 0;text-overflow:ellipsis}}",""]),t.exports=o},318:function(t,e,r){t.exports=r.p+"img/Affiche_CDF.d09be8f.png"},354:function(t,e,r){var content=r(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("29593453",content,!0,{sourceMap:!1})},367:function(t,e,r){"use strict";r(354)},368:function(t,e,r){var o=r(33)(!1);o.push([t.i,"h2[data-v-20d0de4d],p[data-v-20d0de4d]{color:var(--color-text)}h2[data-v-20d0de4d]{margin-bottom:1em;text-decoration:underline;font-size:1.6em;letter-spacing:1px}p[data-v-20d0de4d]{margin-bottom:.7em;font-size:1.1em}.main[data-v-20d0de4d]{margin-top:1em}img[data-v-20d0de4d]{width:100%;border-radius:15px;margin-bottom:2em}span[data-v-20d0de4d]{color:var(--color-text-highlight)}span[data-v-20d0de4d]:hover{cursor:inherit;text-decoration:underline}.description[data-v-20d0de4d]{display:flex;flex-direction:column;text-align:center;margin-bottom:1em;margin-left:auto;margin-right:auto;width:85%}.players-display[data-v-20d0de4d]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;width:100%;height:800px;overflow-y:scroll;scrollbar-color:var(--color-text-highlight) var(--color-main-background-color);margin-bottom:2.5em}@media (max-width:500px){.players-display[data-v-20d0de4d]{border-top:2px solid var(--color-text-highlight);border-bottom:2px solid var(--color-text-highlight);height:500px}}",""]),t.exports=o},383:function(t,e,r){"use strict";r.r(e);var o={components:{Player:r(315).default},data:function(){return{players:[]}},mounted:function(){this.players=this.$getPlayerData()}},n=(r(367),r(25)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("img",{attrs:{src:r(318),alt:"Affiche du CDF"}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"players-display"},t._l(t.players,(function(t){return o("Player",{key:t.name,attrs:{name:t.name,avatar:t.avatar}})})),1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"description"},[r("h2",{staticClass:"font-title"},[t._v("UNE COUPE DE FRANCE AoE2")]),t._v(" "),r("p",{staticClass:"font-text"},[t._v("\n            La "),r("span",[t._v("Coupe de France AoE II")]),t._v(" est un tournoi sur des cartes aléatoires en 1V1organisé par "),r("span",[t._v("Thalounette")]),t._v(".\n        ")]),t._v(" "),r("p",{staticClass:"font-text"},[t._v("\n            L’objectif est de déterminer le "),r("span",[t._v("meilleur joueur francophone")]),t._v(" de l’année 2021! Ce tournoi compte 128 places, cependant, seuls les joueurs ayant le niveau le plus élevé parmis les inscrits pourront participer.\n            Il se tient du 15 novembre au 19 décembre.\n        ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"description"},[r("div",{staticClass:"font-title"},[r("h2",[t._v("DES JOUEURS")])])])}],!1,null,"20d0de4d",null);e.default=component.exports;installComponents(component,{Player:r(315).default})}}]);