(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{600:function(e,t,r){var content=r(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("3a2412fd",content,!0,{sourceMap:!1})},601:function(e,t,r){"use strict";r.r(t);var o={props:{avatar:{default:"~/assets/image/Affiche_CDF.png",type:String},name:{default:"Joueur",type:String}}},n=(r(602),r(24)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"joueur"},[r("img",{attrs:{src:e.avatar}}),e._v(" "),r("div",{staticClass:"name"},[r("h4",[e._v("\n            "+e._s(e.name)+"\n        ")])])])}),[],!1,null,"3082e4fe",null);t.default=component.exports},602:function(e,t,r){"use strict";r(600)},603:function(e,t,r){var o=r(36)(!1);o.push([e.i,".joueur[data-v-3082e4fe]{display:flex;flex-direction:column;width:150px;height:190px;background-color:var(--color-black);border-radius:20px;overflow:hidden;margin:.5em;transition:.2s ease-in-out}.joueur img[data-v-3082e4fe]{border-radius:inherit;width:100%;height:80%}.joueur .name[data-v-3082e4fe]{display:flex;align-items:center;justify-content:center;width:100%;height:20%}.joueur .name h4[data-v-3082e4fe]{color:var(--color-text);padding:0 1em;text-align:center}.joueur[data-v-3082e4fe]:hover{background-color:var(--color-text-highlight)}@media (max-width:500px){.joueur[data-v-3082e4fe]{width:105px;height:140px;margin:.5em .3em;border-radius:12px}.joueur .name[data-v-3082e4fe]{height:23%}.joueur .name h4[data-v-3082e4fe]{width:inherit;font-size:.8em;padding:.1em 0;text-overflow:ellipsis}}",""]),e.exports=o},604:function(e,t,r){e.exports=r.p+"img/Affiche_CDF.cc47df5.png"},642:function(e,t,r){var content=r(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("04606fc3",content,!0,{sourceMap:!1})},661:function(e,t,r){"use strict";r(642)},662:function(e,t,r){var o=r(36)(!1);o.push([e.i,"h2[data-v-1134803e],p[data-v-1134803e]{color:var(--color-text)}h2[data-v-1134803e]{margin-bottom:1em;text-decoration:underline;font-size:1.6em;letter-spacing:1px}p[data-v-1134803e]{margin-bottom:.7em;font-size:1.1em}img[data-v-1134803e]{width:100%;border-radius:15px;margin-bottom:2em}span[data-v-1134803e]{color:var(--color-text-highlight)}span[data-v-1134803e]:hover{cursor:inherit;text-decoration:underline}.description[data-v-1134803e]{display:flex;flex-direction:column;text-align:center;margin-bottom:1em;margin-left:auto;margin-right:auto;width:85%}.players-display[data-v-1134803e]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;width:100%;height:420px;overflow-y:hidden;scrollbar-color:var(--color-text-highlight) var(--color-main-background-color);margin-bottom:2.5em}@media (max-width:500px){.players-display[data-v-1134803e]{overflow-y:scroll;border-top:2px solid var(--color-text-highlight);border-bottom:2px solid var(--color-text-highlight);height:500px}}",""]),e.exports=o},678:function(e,t,r){"use strict";r.r(t);r(366),r(61),r(38);var o={components:{Player:r(601).default},data:function(){return{allPlayers:null,somePlayers:null}},mounted:function(){this.allPlayers=this.$getPlayerData(),this.somePlayers=this.allPlayers.sort((function(){return.5-Math.random()})).slice(0,14).sort((function(e,t){return e.name.localeCompare(t.name)}))}},n=(r(661),r(24)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("img",{attrs:{src:r(604),alt:"Affiche du CDF"}}),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),o("div",{staticClass:"players-display"},e._l(e.somePlayers,(function(e){return o("Player",{key:e.name,attrs:{name:e.name,avatar:e.avatar}})})),1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"description"},[r("h2",[e._v("UNE COUPE DE FRANCE AoE2")]),e._v(" "),r("p",[e._v("\n            La "),r("span",[e._v("Coupe de France AoE II")]),e._v(" est un tournoi sur des cartes aléatoires en 1V1organisé par "),r("span",[e._v("Thalounette")]),e._v(".\n        ")]),e._v(" "),r("p",[e._v("\n            L’objectif est de déterminer le "),r("span",[e._v("meilleur joueur francophone")]),e._v(" de l’année 2021! Ce tournoi compte 128 places, cependant, seuls les joueurs ayant le niveau le plus élevé parmis les inscrits pourront participer.\n            Il se tient du 15 novembre au 19 décembre.\n        ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"description"},[r("div",[r("h2",[e._v("DES JOUEURS")])])])}],!1,null,"1134803e",null);t.default=component.exports;installComponents(component,{Player:r(601).default})}}]);