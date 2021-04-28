(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[20],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a(120),r=a(117),n=a(97),i=a(1);function o(e,t,a){var o,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!e||!t||!a)return null;var l=n.a.getStatVariant(a)||"success",d=e/100*(t[a]||0),m=Object(i.jsx)("span",{className:"text-".concat(l),children:(null===d||void 0===d||null===(o=d.toFixed)||void 0===o?void 0:o.call(d,c))||d}),p=Object(i.jsx)(s.a,{placement:"top",overlay:Object(i.jsxs)(r.a,{children:[e,"% ",n.a.getStatNamePretty(a)]}),children:m});return Object(i.jsxs)("span",{children:["(",p,")"]})}},117:function(e,t,a){"use strict";var s=a(2),r=a(4),n=a(5),i=a.n(n),o=a(0),c=a.n(o),l=(a(152),a(7)),d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.placement,o=e.className,d=e.style,m=e.children,p=e.arrowProps,_=(e.popper,e.show,Object(r.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));a=Object(l.a)(a,"tooltip");var f=((null==n?void 0:n.split("-"))||[])[0];return c.a.createElement("div",Object(s.a)({ref:t,style:d,role:"tooltip","x-placement":f,className:i()(o,a,"bs-tooltip-"+f)},_),c.a.createElement("div",Object(s.a)({className:"arrow"},p)),c.a.createElement("div",{className:a+"-inner"},m))}));d.defaultProps={placement:"right"},d.displayName="Tooltip",t.a=d},120:function(e,t,a){"use strict";var s=a(2),r=a(4),n=a(142),i=a(129),o=a(0),c=a.n(o),l=a(130),d=a(127),m=(a(77),a(32)),p=a(5),_=a.n(p),f=a(8),g=a(11),u=a(3),h=a.n(u),b=a(24),y=a.n(b),I=a(132),w=a(52),x=a(123),j=a(163),v=a(164),E=a(144),k=a(158),O=c.a.forwardRef((function(e,t){var a=e.flip,s=e.offset,r=e.placement,n=e.containerPadding,i=void 0===n?5:n,l=e.popperConfig,d=void 0===l?{}:l,m=e.transition,p=Object(I.a)(),_=p[0],u=p[1],h=Object(I.a)(),b=h[0],x=h[1],O=Object(w.a)(u,t),C=Object(E.a)(e.container),T=Object(E.a)(e.target),S=Object(o.useState)(!e.show),M=S[0],B=S[1],D=Object(j.a)(T,_,Object(k.a)({placement:r,enableEvents:!!e.show,containerPadding:i||5,flip:a,offset:s,arrowElement:b,popperConfig:d})),G=D.styles,F=D.attributes,P=Object(g.a)(D,["styles","attributes"]);e.show?M&&B(!1):e.transition||M||B(!0);var A=e.show||m&&!M;if(Object(v.a)(_,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!A)return null;var R=e.children(Object(f.a)({},P,{show:!!e.show,props:Object(f.a)({},F.popper,{style:G.popper,ref:O}),arrowProps:Object(f.a)({},F.arrow,{style:G.arrow,ref:x})}));if(m){var N=e.onExit,H=e.onExiting,W=e.onEnter,L=e.onEntering,V=e.onEntered;R=c.a.createElement(m,{in:e.show,appear:!0,onExit:N,onExiting:H,onExited:function(){B(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:W,onEntering:L,onEntered:V},R)}return C?y.a.createPortal(R,C):null}));O.displayName="Overlay",O.propTypes={show:h.a.bool,placement:h.a.oneOf(x.h),target:h.a.any,container:h.a.any,flip:h.a.bool,children:h.a.func.isRequired,containerPadding:h.a.number,popperConfig:h.a.object,rootClose:h.a.bool,rootCloseEvent:h.a.oneOf(["click","mousedown"]),rootCloseDisabled:h.a.bool,onHide:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),s=1;s<t;s++)a[s-1]=arguments[s];var r;return e.rootClose?(r=h.a.func).isRequired.apply(r,[e].concat(a)):h.a.func.apply(h.a,[e].concat(a))},transition:h.a.elementType,onEnter:h.a.func,onEntering:h.a.func,onEntered:h.a.func,onExit:h.a.func,onExiting:h.a.func,onExited:h.a.func};var C=O,T=a(157),S=a(121),M={transition:S.a,rootClose:!1,show:!1,placement:"top"};function B(e){var t=e.children,a=e.transition,n=e.popperConfig,i=void 0===n?{}:n,l=Object(r.a)(e,["children","transition","popperConfig"]),m=Object(o.useRef)({}),p=Object(T.a)(),f=p[0],g=p[1],u=!0===a?S.a:a||null;return c.a.createElement(C,Object(s.a)({},l,{ref:f,popperConfig:Object(s.a)({},i,{modifiers:g.concat(i.modifiers||[])}),transition:u}),(function(e){var n,i=e.props,o=e.arrowProps,l=e.show,p=e.update,f=(e.forceUpdate,e.placement),g=e.state,u=Object(r.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var a=e.ref,s=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(d.a)(e))}),t.ref=s.__wrapped||(s.__wrapped=function(e){return s(Object(d.a)(e))})}(i,o);var h=Object.assign(m.current,{state:g,scheduleUpdate:p,placement:f,outOfBoundaries:(null==g||null==(n=g.modifiersData.hide)?void 0:n.isReferenceHidden)||!1});return"function"===typeof t?t(Object(s.a)({},u,i,{placement:f,show:l},!a&&l&&{className:"show"},{popper:h,arrowProps:o})):c.a.cloneElement(t,Object(s.a)({},u,i,{placement:f,arrowProps:o,popper:h,className:_()(t.props.className,!a&&l&&"show"),style:Object(s.a)({},t.props.style,i.style)}))}))}B.defaultProps=M;var D=B,G=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return this.props.children},t}(c.a.Component);function F(e,t,a){var s=t[0],r=s.currentTarget,n=s.relatedTarget||s.nativeEvent[a];n&&n===r||Object(i.a)(r,n)||e.apply(void 0,t)}function P(e){var t=e.trigger,a=e.overlay,n=e.children,i=e.popperConfig,p=void 0===i?{}:i,_=e.show,f=e.defaultShow,g=void 0!==f&&f,u=e.onToggle,h=e.delay,b=e.placement,y=e.flip,I=void 0===y?b&&-1!==b.indexOf("auto"):y,w=Object(r.a)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),x=Object(o.useRef)(null),j=Object(l.a)(),v=Object(o.useRef)(""),E=Object(m.b)(_,g,u),k=E[0],O=E[1],C=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(h),T="function"!==typeof n?c.a.Children.only(n).props:{},S=T.onFocus,M=T.onBlur,B=T.onClick,P=Object(o.useCallback)((function(){return Object(d.a)(x.current)}),[]),A=Object(o.useCallback)((function(){j.clear(),v.current="show",C.show?j.set((function(){"show"===v.current&&O(!0)}),C.show):O(!0)}),[C.show,O,j]),R=Object(o.useCallback)((function(){j.clear(),v.current="hide",C.hide?j.set((function(){"hide"===v.current&&O(!1)}),C.hide):O(!1)}),[C.hide,O,j]),N=Object(o.useCallback)((function(){A();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==S||S.apply(void 0,t)}),[A,S]),H=Object(o.useCallback)((function(){R();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==M||M.apply(void 0,t)}),[R,M]),W=Object(o.useCallback)((function(){O(!k),B&&B.apply(void 0,arguments)}),[B,O,k]),L=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];F(A,t,"fromElement")}),[A]),V=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];F(R,t,"toElement")}),[R]),z=null==t?[]:[].concat(t),U={};return-1!==z.indexOf("click")&&(U.onClick=W),-1!==z.indexOf("focus")&&(U.onFocus=N,U.onBlur=H),-1!==z.indexOf("hover")&&(U.onMouseOver=L,U.onMouseOut=V),c.a.createElement(c.a.Fragment,null,"function"===typeof n?n(Object(s.a)({},U,{ref:x})):c.a.createElement(G,{ref:x},Object(o.cloneElement)(n,U)),c.a.createElement(D,Object(s.a)({},w,{show:k,onHide:R,flip:I,placement:b,popperConfig:p,target:P}),a))}P.defaultProps={defaultShow:!1,trigger:["hover","focus"]};t.a=P},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0),r=a(131),n=a(143),i=Math.pow(2,31)-1;function o(e,t,a){var s=a-Date.now();e.current=s<=i?setTimeout(t,s):setTimeout((function(){return o(e,t,a)}),i)}function c(){var e=Object(r.a)(),t=Object(s.useRef)();return Object(n.a)((function(){return clearTimeout(t.current)})),Object(s.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(s,r){void 0===r&&(r=0),e()&&(a(),r<=i?t.current=setTimeout(s,r):o(t,s,Date.now()+r))},clear:a}}),[])}},177:function(e,t,a){"use strict";a.r(t);var s=a.p+"static/media/Item_Adventurer's_Flower.31b0a44c.png",r=a.p+"static/media/Item_Adventurer's_Tail_Feather.495e630d.png",n=a.p+"static/media/Item_Adventurer's_Pocket_Watch.25c28494.png",i=a.p+"static/media/Item_Adventurer's_Golden_Goblet.7d50b5cd.png",o=a.p+"static/media/Item_Adventurer's_Bandana.ffcc9215.png",c=a(102),l=a(1),d={name:"Adventurer",rarity:[3],pieces:{flower:"Adventurer's Flower",plume:"Adventurer's Tail Feather",sands:"Adventurer's Pocket Watch",goblet:"Adventurer's Golden Goblet",circlet:"Adventurer's Bandana"},icons:{flower:s,plume:r,sands:n,goblet:i,circlet:o},setEffects:{2:{text:"Max HP increased by 1,000.",stats:{hp:1e3}},4:{text:function(e){return Object(l.jsxs)("span",{children:["Opening chest regenerates 30% Max HP",Object(c.a)(30,e,"finalHP")," over 5s."]})}}}},m=d,p=a.p+"static/media/Item_Flower_of_Creviced_Cliff.901bea9e.png",_=a.p+"static/media/Item_Feather_of_Jagged_Peaks.bfbdbc15.png",f=a.p+"static/media/Item_Sundial_of_Enduring_Jade.b2538326.png",g=a.p+"static/media/Item_Goblet_of_Chiseled_Crag.053335a8.png",u=a.p+"static/media/Item_Mask_of_Solitude_Basalt.c354cf5c.png",h={set4:{name:"Obtaining Crystallize Shard",states:{pyro:{name:"Pyro",stats:{pyro_dmg_:35}},electro:{name:"Electro",stats:{electro_dmg_:35}},hydro:{name:"Hydro",stats:{hydro_dmg_:35}},cryo:{name:"Cryo",stats:{cryo_dmg_:35}}}}},b={name:"Archaic Petra",rarity:[4,5],pieces:{flower:"Flower of Creviced Cliff",plume:"Feather of Jagged Peaks",sands:"Sundial of Enduring Jade",goblet:"Goblet of Chiseled Crag",circlet:"Mask of Solitude Basalt"},icons:{flower:p,plume:_,sands:f,goblet:g,circlet:u},conditionals:h,setEffects:{2:{text:Object(l.jsxs)("span",{children:["Gain a 15% ",Object(l.jsx)("span",{className:"text-geo",children:"Geo DMG Bonus"})]}),stats:{geo_dmg_:15}},4:{text:Object(l.jsxs)("span",{children:["Upon obtaining an Elemental Shard created through a ",Object(l.jsx)("span",{className:"text-crystallize",children:"Crystallize"})," Reaction, all party members gain 35% DMG to that particular element for 10s. Only one form of Elemental DMG can be gained in this manner at any one time."]}),conditional:h.set4}}},y=b,I=a.p+"static/media/Item_Berserker's_Rose.06c4442d.png",w=a.p+"static/media/Item_Berserker's_Indigo_Feather.a6e6a86e.png",x=a.p+"static/media/Item_Berserker's_Timepiece.b2ad1dd7.png",j=a.p+"static/media/Item_Berserker's_Bone_Goblet.bd66d90a.png",v=a.p+"static/media/Item_Berserker's_Battle_Mask.9c6f00a1.png",E={set4:{name:"HP below 70%",stats:{critRate_:24}}},k={name:"Berserker",rarity:[3,4],pieces:{flower:"Berserker's Rose",plume:"Berserker's Indigo Feather",sands:"Berserker's Timepiece",goblet:"Berserker's Bone Goblet",circlet:"Berserker's Battle Mask"},icons:{flower:I,plume:w,sands:x,goblet:j,circlet:v},conditionals:E,setEffects:{2:{text:"CRIT Rate +12%",stats:{critRate_:12}},4:{text:"When HP is below 70%, CRIT Rate increases by an additional 24%.",conditional:E.set4}}},O=k,C=a.p+"static/media/Item_Snowswept_Memory.ece730e7.png",T=a.p+"static/media/Item_Icebreaker's_Resolve.96a7db37.png",S=a.p+"static/media/Item_Frozen_Homeland's_Demise.84d51820.png",M=a.p+"static/media/Item_Frost-Weaved_Dignity.20a2ea65.png",B=a.p+"static/media/Item_Broken_Rime's_Echo.a9551983.png",D={set4:{name:"Attack enemy",states:{c:{name:"Affected By Cryo",stats:{critRate_:20}},f:{name:"Frozen",stats:{critRate_:40}}}}},G={name:"Blizzard Strayer",rarity:[4,5],pieces:{flower:"Snowswept Memory",plume:"Icebreaker's Resolve",sands:"Frozen Homeland's Demise",goblet:"Frost-Weaved Dignity",circlet:"Broken Rime's Echo"},icons:{flower:C,plume:T,sands:S,goblet:M,circlet:B},conditionals:D,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-cryo",children:"Cryo DMG Bonus"})," +15%"]}),stats:{cryo_dmg_:15}},4:{text:Object(l.jsxs)("span",{children:["When a character attacks an enemy affected by ",Object(l.jsx)("span",{className:"text-cryo",children:"Cryo"}),", their CRIT Rate is increased by 20%. If the enemy is Frozen, CRIT Rate is increased by an additional 20%"]}),conditional:D.set4}}},F=G,P=a.p+"static/media/Item_Bloodstained_Flower_of_Iron.e720eb8c.png",A=a.p+"static/media/Item_Bloodstained_Black_Plume.f643c83d.png",R=a.p+"static/media/Item_Bloodstained_Final_Hour.7f3cf2fb.png",N={set4:{name:"After defeating an opponent",stats:{charged_dmg_:50,staminaDec_:100}}},H={name:"Bloodstained Chivalry",rarity:[4,5],pieces:{flower:"Bloodstained Flower of Iron",plume:"Bloodstained Black Plume",sands:"Bloodstained Final Hour",goblet:"Bloodstained Chevalier's Goblet",circlet:"Bloodstained Iron Mask"},icons:{flower:P,plume:A,sands:R,goblet:a.p+"static/media/Item_Bloodstained_Chevalier's_Goblet.60ebe6c0.png",circlet:a.p+"static/media/Item_Bloodstained_Iron_Mask.78c7e58f.png"},conditionals:N,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-physical",children:"Physical DMG"})," +25%"]}),stats:{physical_dmg_:25}},4:{text:"After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.",conditional:N.set4}}},W={set4:{name:"Enemy with more than 50% HP",stats:{dmg_:30}}},L={name:"Brave Heart",rarity:[3,4],pieces:{flower:"Medal of the Brave",plume:"Prospect of the Brave",sands:"Fortitude of the Brave",goblet:"Outset of the Brave",circlet:"Crown of the Brave"},icons:{flower:a.p+"static/media/Item_Medal_of_the_Brave.4963f0c4.png",plume:a.p+"static/media/Item_Prospect_of_the_Brave.08ad41b6.png",sands:a.p+"static/media/Item_Fortitude_of_the_Brave.4d790285.png",goblet:a.p+"static/media/Item_Outset_of_the_Brave.b2a757fc.png",circlet:a.p+"static/media/Item_Crown_of_the_Brave.43f41135.png"},conditionals:W,setEffects:{2:{text:"2-piece Set Bonus: ATK +18%",stats:{atk_:18}},4:{text:"Increases DMG by 30% against enemies with more than 50% HP.",conditional:W.set4}}},V={set4:{name:"Using an Elemental SKill",maxStack:3,stats:{pyro_dmg_:7.5}}},z={name:"Crimson Witch of Flames",rarity:[4,5],pieces:{flower:"Witch's Flower of Blaze",plume:"Witch's Ever-Burning Plume",sands:"Witch's End Time",goblet:"Witch's Heart Flames",circlet:"Witch's Scorching Hat"},icons:{flower:a.p+"static/media/Item_Witch's_Flower_of_Blaze.f8ecb4fc.png",plume:a.p+"static/media/Item_Witch's_Ever-Burning_Plume.7e706c41.png",sands:a.p+"static/media/Item_Witch's_End_Time.de3c175b.png",goblet:a.p+"static/media/Item_Witch's_Heart_Flames.505a6377.png",circlet:a.p+"static/media/Item_Witch's_Scorching_Hat.2070d8b6.png"},conditionals:V,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-pyro",children:"Pyro DMG Bonus"})," +15%"]}),stats:{pyro_dmg_:15}},4:{text:"Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases 2-Piece Set effects by 50% for 10s. Max 3 stacks.",stats:{overloaded_dmg_:40,burning_dmg_:40,vaporize_dmg_:15,melt_dmg_:15},conditional:V.set4}}},U={anemo:{name:"Anemo in party",stats:{anemo_res_:30}},geo:{name:"Geo in party",stats:{geo_res_:30}},electro:{name:"Electro in party",stats:{electro_res_:30}},hydro:{name:"Hydro in party",stats:{hydro_res_:30}},pyro:{name:"Pyro in party",stats:{pyro_res_:30}},cryo:{name:"Cryo in party",stats:{cryo_res_:30}}},K={name:"Defender's Will",rarity:[3,4],pieces:{flower:"Guardian's Flower",plume:"Guardian's Sigil",sands:"Guardian's Clock",goblet:"Guardian's Vessel",circlet:"Guardian's Band"},icons:{flower:a.p+"static/media/Item_Guardian's_Flower.5e495e58.png",plume:a.p+"static/media/Item_Guardian's_Sigil.9bd56afb.png",sands:a.p+"static/media/Item_Guardian's_Clock.de1c1bf4.png",goblet:a.p+"static/media/Item_Guardian's_Vessel.5fc31ffe.png",circlet:a.p+"static/media/Item_Guardian's_Band.92ad19a4.png"},conditionals:U,setEffects:{2:{text:"Base DEF +30%",stats:{def_:30}},4:{text:"Increases Elemental RES by 30% for each element present in the party.",conditionals:U}}},J={set4:{name:"Defeating an enemy",stats:{skillCDRed_:100},fields:[{text:"CD",value:"15s"}]}},q={name:"Gambler",rarity:[3,4],pieces:{flower:"Gambler's Brooch",plume:"Gambler's Feathered Accessory",sands:"Gambler's Pocket Watch",goblet:"Gambler's Dice Cup",circlet:"Gambler's Earrings"},icons:{flower:a.p+"static/media/Item_Gambler's_Brooch.10f2af6d.png",plume:a.p+"static/media/Item_Gambler's_Feather_Accessory.b5eb9a72.png",sands:a.p+"static/media/Item_Gambler's_Pocket_Watch.3d084b2a.png",goblet:a.p+"static/media/Item_Gambler's_Dice_Cup.2bf67f76.png",circlet:a.p+"static/media/Item_Gambler's_Earrings.6edf9099.png"},conditionals:J,setEffects:{2:{text:"Elemental Skill DMG increased by 20%",stats:{skill_dmg_:20}},4:{text:"Defeating an enemy has 100% chance to remove Elemental Skill CD. Can only occur once every 15s.",conditional:J.set4}}},Q={set4:{name:"Owner uses a Melee weapon",stats:{normal_dmg_:35}}},Y={name:"Gladiator's Finale",rarity:[4,5],pieces:{flower:"Gladiator's Nostalgia",plume:"Gladiator's Destiny",sands:"Gladiator's Longing",goblet:"Gladiator's Intoxication",circlet:"Gladiator's Triumphus"},icons:{flower:a.p+"static/media/Item_Gladiator's_Nostalgia.c19c4d65.png",plume:a.p+"static/media/Item_Gladiator's_Destiny.1547cb34.png",sands:a.p+"static/media/Item_Gladiator's_Longing.04ca82f3.png",goblet:a.p+"static/media/Item_Gladiator's_Intoxication.e37b1905.png",circlet:a.p+"static/media/Item_Gladiator's_Triumphus.aa1627e5.png"},conditionals:Q,setEffects:{2:{text:"ATK +18%",stats:{atk_:18}},4:{text:"If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.",conditional:Q.set4}}},X={set4:{name:"After using Elemental Skill",stats:{normal_dmg_:30,charged_dmg_:30}}},Z={name:"Heart of Depth",rarity:[4,5],pieces:{flower:"Gilded Corsage",plume:"Gust of Nostalgia",sands:"Copper Compass",goblet:"Goblet of Thundering Deep",circlet:"Wine-Stained Tricorne"},icons:{flower:a.p+"static/media/Item_Gilded_Corsage.5f37f891.png",plume:a.p+"static/media/Item_Gust_of_Nostalgia.0bcf7c7d.png",sands:a.p+"static/media/Item_Copper_Compass.15f1961a.png",goblet:a.p+"static/media/Item_Goblet_of_Thundering_Deep.bb3d1636.png",circlet:a.p+"static/media/Item_Wine-Stained_Tricorne.968f992f.png"},conditionals:X,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-hydro",children:"Hydro DMG Bonus"})," +15%"]}),stats:{hydro_dmg_:15}},4:{text:"After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s",conditional:X.set4}}},$={set4:{name:"After using Elemental Skill",stats:{eleMas:120}}},ee={name:"Instructor",rarity:[3,4],pieces:{flower:"Instructor's Brooch",plume:"Instructor's Feathered Accessory",sands:"Instructor's Pocket Watch",goblet:"Instructor's Tea Cup",circlet:"Instructor's Cap"},icons:{flower:a.p+"static/media/Item_Instructor's_Brooch.0a67a037.png",plume:a.p+"static/media/Item_Instructor's_Feather_Accessory.37620927.png",sands:a.p+"static/media/Item_Instructor's_Pocket_Watch.c9f63dde.png",goblet:a.p+"static/media/Item_Instructor's_Tea_Cup.88db1f5e.png",circlet:a.p+"static/media/Item_Instructor's_Cap.bc19a939.png"},conditionals:$,setEffects:{2:{text:"Increases Elemental Mastery by 80.",stats:{eleMas:80}},4:{text:"After using Elemental Skill, increases all party members' Elemental Mastery by 120 for 8s.",conditional:$.set4}}},te=a.p+"static/media/Item_Lavawalker's_Resolution.96cda8ad.png",ae=a.p+"static/media/Item_Lavawalker's_Salvation.13dec22c.png",se=a.p+"static/media/Item_Lavawalker's_Torment.094818ab.png",re=a.p+"static/media/Item_Lavawalker's_Epiphany.0978abb7.png",ne=a.p+"static/media/Item_Lavawalker's_Wisdom.f458e8cc.png",ie={set4:{name:Object(l.jsxs)("span",{children:["Enemies that are Burning or affected by ",Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"})]}),stats:{dmg_:35}}},oe={name:"Lavawalker",rarity:[4,5],pieces:{flower:"Lavawalker's Resolution",plume:"Lavawalker's Salvation",sands:"Lavawalker's Torment",goblet:"Lavawalker's Epiphany",circlet:"Lavawalker's Wisdom"},icons:{flower:te,plume:ae,sands:se,goblet:re,circlet:ne},conditionals:ie,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-pyro",children:"Pyro RES"})," increased by 40%"]}),stats:{pyro_res_:40}},4:{text:Object(l.jsxs)("span",{children:["Increases DMG against enemies that are Burning or affected by ",Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"})," by 35%."]}),conditional:ie.set4}}},ce={name:"Lucky Dog",rarity:[3],pieces:{flower:"Lucky Dog's Clover",plume:"Lucky Dog's Eagle Feather",sands:"Lucky Dog's Hourglass",goblet:"Lucky Dog's Goblet",circlet:"Lucky Dog's Silver Circlet"},icons:{flower:a.p+"static/media/Item_Lucky_Dog's_Clover.fc1d61ff.png",plume:a.p+"static/media/Item_Lucky_Dog's_Eagle_Feather.12c09a28.png",sands:a.p+"static/media/Item_Lucky_Dog's_Hourglass.46ff4dce.png",goblet:a.p+"static/media/Item_Lucky_Dog's_Goblet.3f90e132.png",circlet:a.p+"static/media/Item_Lucky_Dog's_Silver_Circlet.2f5e8cf3.png"},setEffects:{2:{text:"DEF increased by 100.",stats:{def:100}},4:{text:"Picking up Mora restores 300 HP."}}},le={set4:{name:"Using an Elemental Skill or Burst",stats:{incHeal_:20}}},de={name:"Maiden Beloved",rarity:[4,5],pieces:{flower:"Maiden's Distant Love",plume:"Maiden's Heart-stricken Infatuation",sands:"Maiden's Passing Youth",goblet:"Maiden's Fleeting Leisure",circlet:"Maiden's Fading Beauty"},icons:{flower:a.p+"static/media/Item_Maiden's_Distant_Love.37a0415f.png",plume:a.p+"static/media/Item_Maiden's_Heart-stricken_Infatuation.50d5b60d.png",sands:a.p+"static/media/Item_Maiden's_Passing_Youth.b130e0ac.png",goblet:a.p+"static/media/Item_Maiden's_Fleeting_Leisure.3a3a72d9.png",circlet:a.p+"static/media/Item_Maiden's_Fading_Beauty.7b20fa37.png"},conditionals:le,setEffects:{2:{text:"Character Healing Effectiveness +15%",stats:{heal_:15}},4:{text:"Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.",conditional:le.set4}}},me={set4:{name:"After using Elemental Skill",stats:{normal_dmg_:25,charged_dmg_:25}}},pe={name:"Martial Artist",rarity:[3,4],pieces:{flower:"Martial Artist's Red Flower",plume:"Martial Artist's Feathered Accessory",sands:"Martial Artist's Water Hourglass",goblet:"Martial Artist's Wine Cup",circlet:"Martial Artist's Bandana"},icons:{flower:a.p+"static/media/Item_Martial_Artist's_Red_Flower.dcb104dd.png",plume:a.p+"static/media/Item_Martial_Artist's_Feather_Accessory.ce725e1d.png",sands:a.p+"static/media/Item_Martial_Artist's_Water_Hourglass.59992bd2.png",goblet:a.p+"static/media/Item_Martial_Artist's_Wine_Cup.fa9c4b25.png",circlet:a.p+"static/media/Item_Martial_Artist's_Bandana.7f0f8850.png"},conditionals:me,setEffects:{2:{text:"Increases Normal Attack and Charged Attack DMG by 15%.",stats:{normal_dmg_:15,charged_dmg_:15}},4:{text:"After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.",conditional:me.set4}}},_e={set4:{name:"Using an Elemental Burst",stats:{atk_:20}}},fe={name:"Noblesse Oblige",rarity:[4,5],pieces:{flower:"Royal Flora",plume:"Royal Plume",sands:"Royal Pocket Watch",goblet:"Royal Silver Urn",circlet:"Royal Masque"},icons:{flower:a.p+"static/media/Item_Royal_Flora.e33039ae.png",plume:a.p+"static/media/Item_Royal_Plume.60d4ec7b.png",sands:a.p+"static/media/Item_Royal_Pocket_Watch.243a6478.png",goblet:a.p+"static/media/Item_Royal_Silver_Urn.f2a46be3.png",circlet:a.p+"static/media/Item_Royal_Masque.3bc7e315.png"},conditionals:_e,setEffects:{2:{text:"Elemental Burst DMG +20%",stats:{burst_dmg_:20}},4:{text:"Using an Elemental Burst increase all party members' ATK by 20% for 12s. This effect cannot stack.",conditional:_e.set4}}},ge=a.p+"static/media/Item_Pale_Flame_Flower.a553796e.png",ue={set4:{name:"Elemental Skill hits an opponent",states:{s1:{name:"1 Stack",stats:{atk_:9},fields:[{text:"Duration",value:"7s"}]},s2:{name:"2 Stacks",stats:{atk_:18},fields:[{text:"Duration",value:"7s"}]}}}},he={name:"Pale Flame",rarity:[4,5],pieces:{flower:"Stainless Bloom",plume:"Wise Doctor's Pinion",sands:"Moment of Cessation",goblet:"Noble's Pledging Vessel",circlet:"Mocking Mask"},icons:{flower:ge,plume:ge,sands:ge,goblet:ge,circlet:ge},conditionals:ue,setEffects:{2:{text:"Physical DMG +25%",stats:{physical_dmg_:25}},4:{text:"When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.",conditional:ue.set4}}},be={name:"Prayers for Destiny",rarity:[3,4],pieces:{circlet:"Tiara of Torrents"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Torrents.eda6e71b.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-hydro",children:"Hydro"})," for 40% less time."]}),stats:{}}}},ye={name:"Prayers for Illumination",rarity:[3,4],pieces:{circlet:"Tiara of Flame"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Flame.2143b195.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"})," for 40% less time."]}),stats:{}}}},Ie={name:"Prayers for Wisdom",rarity:[3,4],pieces:{circlet:"Tiara of Thunder"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Thunder.3969dc1d.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-electro",children:"Electro"})," for 40% less time."]}),stats:{}}}},we={name:"Prayers to Springtime",rarity:[3,4],pieces:{circlet:"Tiara of Frost"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Frost.45d02907.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-cryo",children:"Cryo"})," for 40% less time."]}),stats:{}}}},xe={name:"Resolution of Sojourner",rarity:[3,4],pieces:{flower:"Heart of Comradeship",plume:"Feather of Homecoming",sands:"Sundial of the Sojourner",goblet:"Goblet of the Sojourner",circlet:"Crown of Parting"},icons:{flower:a.p+"static/media/Item_Heart_of_Comradeship.682913d0.png",plume:a.p+"static/media/Item_Feather_of_Homecoming.3abb439f.png",sands:a.p+"static/media/Item_Sundial_of_the_Sojourner.5d2205a3.png",goblet:a.p+"static/media/Item_Goblet_of_the_Sojourner.2001e918.png",circlet:a.p+"static/media/Item_Crown_of_Parting.9f8b613d.png"},setEffects:{2:{text:"ATK +18%",stats:{atk_:18}},4:{text:"Increases Charged Attack CRIT Rate by 30%.",stats:{charged_critRate_:30}}}},je=a.p+"static/media/Item_Summer_Night's_Bloom.3cfa81cb.png",ve=a.p+"static/media/Item_Summer_Night's_Finale.e29ff9bc.png",Ee=a.p+"static/media/Item_Summer_Night's_Mask.8fb771ab.png",ke={set4:{name:"With Shield",stats:{normal_dmg_:40,charged_dmg_:40}}},Oe={name:"Retracing Bolide",rarity:[4,5],pieces:{flower:"Summer Night's Bloom",plume:"Summer Night's Finale",sands:"Summer Night's Moment",goblet:"Summer Night's Waterballoon",circlet:"Summer Night's Mask"},icons:{flower:je,plume:ve,sands:a.p+"static/media/Item_Summer_Night's_Moment.e8b7b580.png",goblet:a.p+"static/media/Item_Summer_Night's_Waterballoon.6c220a1c.png",circlet:Ee},conditionals:ke,setEffects:{2:{text:"Increases the effectiveness of shields by 35%",stats:{powShield_:35}},4:{text:"Gain an additional 40% Normal and Charged Attack DMG while under the protection of a shield.",conditional:ke.set4}}},Ce={name:"Scholar",rarity:[3,4],pieces:{flower:"Scholar's Bookmark",plume:"Scholar's Quill Pen",sands:"Scholar's Clock",goblet:"Scholar's Ink Cup",circlet:"Scholar's Lens"},icons:{flower:a.p+"static/media/Item_Scholar's_Bookmark.9b69d6da.png",plume:a.p+"static/media/Item_Scholar's_Quill_Pen.2da0fcf3.png",sands:a.p+"static/media/Item_Scholar's_Clock.8a56fdb1.png",goblet:a.p+"static/media/Item_Scholar's_Ink_Cup.677fe884.png",circlet:a.p+"static/media/Item_Scholar's_Lens.cb800c47.png"},setEffects:{2:{text:"Energy Recharge +20%",stats:{enerRech_:20}},4:{text:"Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s."}}},Te=a.p+"static/media/Item_Tenacity_of_the_Millelith_Flower.8fd7668a.png",Se={set4:{name:"Elemental Skill hits an opponent",stats:{atk_:20,powShield_:30}}},Me={name:"Tenacity of the Millelith",rarity:[4,5],pieces:{flower:"Flower of Accolades",plume:"Ceremonial War-Plume",sands:" Orichalceous Time-Dial",goblet:"Noble's Pledging Vessel",circlet:"General's Ancient Helm"},icons:{flower:Te,plume:Te,sands:Te,goblet:Te,circlet:Te},conditionals:Se,setEffects:{2:{text:"HP +20%",stats:{hp_:20}},4:{text:"When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.",conditional:Se.set4}}},Be={name:"The Exile",rarity:[3,4],pieces:{flower:"Exile's Flower",plume:"Exile's Feather",sands:"Exile's Pocket Watch",goblet:"Exile's Goblet",circlet:"Exile's Circlet"},icons:{flower:a.p+"static/media/Item_Exile's_Flower.ce15b17f.png",plume:a.p+"static/media/Item_Exile's_Feather.389f300d.png",sands:a.p+"static/media/Item_Exile's_Pocket_Watch.2c9318eb.png",goblet:a.p+"static/media/Item_Exile's_Goblet.025d895b.png",circlet:a.p+"static/media/Item_Exile's_Circlet.24d7cb3f.png"},setEffects:{2:{text:"Energy Recharge +20%",stats:{enerRech_:20}},4:{text:"Using an Elemental Burst regenerates 2 Energy for other party members every 2s for 6s. This effect cannot stack."}}},De={name:"Thundering Fury",rarity:[4,5],pieces:{flower:"Thunderbird's Mercy",plume:"Survivor of Catastrophe",sands:"Hourglass of Thunder",goblet:"Omen of Thunderstorm",circlet:"Thunder Summoner's Crown"},icons:{flower:a.p+"static/media/Item_Thunderbird's_Mercy.177c2948.png",plume:a.p+"static/media/Item_Survivor_of_Catastrophe.120209f4.png",sands:a.p+"static/media/Item_Hourglass_of_Thunder.81e88e56.png",goblet:a.p+"static/media/Item_Omen_of_Thunderstorm.d6516589.png",circlet:a.p+"static/media/Item_Thunder_Summoner's_Crown.8dc75e93.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-electro",children:"Electro DMG Bonus"})," +15%"]}),stats:{electro_dmg_:15}},4:{text:"Increases damage caused by Overloaded, Electro-Charged, and Superconduct DMG by 40%. Triggering such effects decreases Elemental Skill CD by 1s. Can only occur once every 0.8s.",stats:{overloaded_dmg_:40,electrocharged_dmg_:40,superconduct_dmg_:40}}}},Ge=a.p+"static/media/Item_Thundersoother's_Heart.2efdfc95.png",Fe=a.p+"static/media/Item_Thundersoother's_Plume.137f2173.png",Pe=a.p+"static/media/Item_Hour_of_Soothing_Thunder.97cfc9f7.png",Ae=a.p+"static/media/Item_Thundersoother's_Goblet.c202e226.png",Re=a.p+"static/media/Item_Thundersoother's_Diadem.3d4c1cd2.png",Ne={set4:{name:Object(l.jsxs)("span",{children:["Enemies affected by ",Object(l.jsx)("span",{className:"text-electro",children:"Electro"})]}),stats:{dmg_:35}}},He={name:"Thundersoother",rarity:[4,5],pieces:{flower:"Thundersoother's Heart",plume:"Thundersoother's Plume",sands:"Hour of Soothing Thunder",goblet:"Thundersoother's Goblet",circlet:"Thundersoother's Diadem"},icons:{flower:Ge,plume:Fe,sands:Pe,goblet:Ae,circlet:Re},conditionals:Ne,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-electro",children:"Electro RES"})," increased by 40%"]}),stats:{electro_res_:40}},4:{text:Object(l.jsxs)("span",{children:["Increases DMG against enemies affected by ",Object(l.jsx)("span",{className:"text-electro",children:"Electro"})," by 35%."]}),conditional:Ne.set4}}},We=a.p+"static/media/Item_Tiny_Miracle's_Flower.bd09d3e3.png",Le=a.p+"static/media/Item_Tiny_Miracle's_Feather.741ccc8d.png",Ve=a.p+"static/media/Item_Tiny_Miracle's_Hourglass.7c6d9210.png",ze=a.p+"static/media/Item_Tiny_Miracle's_Goblet.3b911cbf.png",Ue=a.p+"static/media/Item_Tiny_Miracle's_Earrings.7b4aa983.png",Ke={set4:{name:"Incoming DMG",states:{anemo:{name:Object(l.jsx)("span",{className:"text-anemo",children:"Anemo"}),stats:{anemo_res_:30}},geo:{name:Object(l.jsx)("span",{className:"text-geo",children:"Geo"}),stats:{geo_res_:30}},electro:{name:Object(l.jsx)("span",{className:"text-electro",children:"Electro"}),stats:{electro_res_:30}},hydro:{name:Object(l.jsx)("span",{className:"text-hydro",children:"Hydro"}),stats:{hydro_res_:30}},pyro:{name:Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"}),stats:{pyro_res_:30}},cryo:{name:Object(l.jsx)("span",{className:"text-cryo",children:"Cryo"}),stats:{cryo_res_:30}}},fields:[{text:"CD",value:"10s"}]}},Je={name:"Tiny Miracle",rarity:[3,4],pieces:{flower:"Tiny Miracle's Flower",plume:"Tiny Miracle's Feather",sands:"Tiny Miracle's Hourglass",goblet:"Tiny Miracle's Goblet",circlet:"Tiny Miracle's Earrings"},icons:{flower:We,plume:Le,sands:Ve,goblet:ze,circlet:Ue},conditionals:Ke,setEffects:{2:{text:"All Elemental RES increased by 20%",stats:{anemo_res_:20,geo_res_:20,electro_res_:20,hydro_res_:20,pyro_res_:20,cryo_res_:20}},4:{text:"Incoming elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.",conditional:Ke.set4}}},qe={name:"Traveling Doctor",rarity:[3],pieces:{flower:"Traveling Doctor's Silver Lotus",plume:"Traveling Doctor's Owl Feather",sands:"Traveling Doctor's Pocket Watch",goblet:"Traveling Doctor's Medicine Pot",circlet:"Traveling Doctor's Handkerchief Crown"},icons:{flower:a.p+"static/media/Item_Traveling_Doctor's_Silver_Lotus.382008d6.png",plume:a.p+"static/media/Item_Traveling_Doctor's_Owl_Feather.601e6044.png",sands:a.p+"static/media/Item_Traveling_Doctor's_Pocket_Watch.9240117c.png",goblet:a.p+"static/media/Item_Traveling_Doctor's_Medicine_Pot.46120643.png",circlet:a.p+"static/media/Item_Traveling_Doctor's_Handkerchief.99f2ad66.png"},setEffects:{2:{text:"Increases incoming healing by 20%.",stats:{incHeal_:20}},4:{text:function(e){return Object(l.jsxs)("span",{children:["Using Elemental Burst restores 20% HP",Object(c.a)(20,e,"finalHP"),"."]})}}}},Qe=a(122),Ye=a(16),Xe=a.p+"static/media/Item_In_Remembrance_of_Viridescent_Fields.0b1e1ed3.png",Ze=a.p+"static/media/Item_Viridescent_Arrow_Feather.4c374131.png",$e=a.p+"static/media/Item_Viridescent_Venerer's_Determination.7d9dd598.png",et=a.p+"static/media/Item_Viridescent_Venerer's_Vessel.df772eed.png",tt=a.p+"static/media/Item_Viridescent_Venerer's_Diadem.12cf1052.png",at=a(106),st={set4:{name:"Element Swirled",states:Object.fromEntries(Object.entries(at.a).filter((function(e){var t=Object(Ye.a)(e,1)[0];return"anemo"!==t&&"geo"!==t&&"physical"!==t})).map((function(e){var t=Object(Ye.a)(e,2),a=t[0],s=t[1].name;return[a,{name:Object(l.jsx)("span",{className:"text-".concat(a),children:s}),stats:Object(Qe.a)({},"".concat(a,"_enemyRes_"),-40)}]})))}},rt={set4:{name:"Character uses a ranged weapon",stats:{charged_dmg_:35}}},nt={Adventurer:m,ArchaicPetra:y,Berserker:O,BlizzardStrayer:F,BloodstainedChivalry:H,BraveHeart:L,CrimsonWitchOfFlames:z,DefendersWill:K,Gambler:q,GladiatorsFinale:Y,HeartOfDepth:Z,Instructor:ee,Lavawalker:oe,LuckyDog:ce,MaidenBeloved:de,MartialArtist:pe,NoblesseOblige:fe,PaleFlame:he,PrayersForDestiny:be,PrayersForIllumination:ye,PrayersForWisdom:Ie,PrayersToSpringtime:we,ResolutionOfSojourner:xe,RetracingBolide:Oe,Scholar:Ce,TenacityOfTheMillelith:Me,TheExile:Be,ThunderingFury:De,Thundersoother:He,TinyMiracle:Je,TravelingDoctor:qe,ViridescentVenerer:{name:"Viridescent Venerer",rarity:[4,5],pieces:{flower:"In Remembrance of Viridescent Fields",plume:"Viridescent Arrow Feather",sands:"Viridescent Venerer's Determination",goblet:"Viridescent Venerer's Vessel",circlet:"Viridescent Venerer's Diadem"},icons:{flower:Xe,plume:Ze,sands:$e,goblet:et,circlet:tt},conditionals:st,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-anemo",children:"Anemo DMG Bonus"})," +15%"]}),stats:{anemo_dmg_:15}},4:{text:"Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s.",stats:{swirl_dmg_:60},conditional:st.set4}}},WanderersTroupe:{name:"Wanderer's Troupe",rarity:[4,5],pieces:{flower:"Troupe's Dawnlight",plume:"Bard's Arrow Feather",sands:"Concert's Final Hour",goblet:"Wanderer's String-Kettle",circlet:"Conductor's Top Hat"},icons:{flower:a.p+"static/media/Item_Troupe's_Dawnlight.28b136bd.png",plume:a.p+"static/media/Item_Bard's_Arrow_Feather.28f8817b.png",sands:a.p+"static/media/Item_Concert's_Final_Hour.96fae1f1.png",goblet:a.p+"static/media/Item_Wanderer's_String_Kettle.ab979823.png",circlet:a.p+"static/media/Item_Conductor's_Top_Hat.5e063b6e.png"},conditionals:rt,setEffects:{2:{text:"Elemental Mastery +80",stats:{eleMas:80}},4:{text:"Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.",conditional:rt.set4}}}};t.default=nt}}]);
//# sourceMappingURL=20.365a8fde.chunk.js.map