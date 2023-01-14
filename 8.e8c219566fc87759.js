"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8],{107:(e,t,n)=>{n.d(t,{Z:()=>S});var l=n(31461),r=n(7896),i=n(2784),o=n(6277),s=n(69075),a=n(47591),c=n(65992),d=n(43853),Z=n(7342),h=n(17377),p=n(69222),u=n(15672);function x(e){return(0,u.Z)("MuiAlert",e)}const m=(0,p.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var f=n(85801),v=n(6620),g=n(52322);const C=(0,v.Z)((0,g.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),b=(0,v.Z)((0,g.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),y=(0,v.Z)((0,g.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),P=(0,v.Z)((0,g.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var M=n(80592);const w=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],j=(0,c.ZP)(h.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,Z.Z)(n.color||n.severity)}`]]}})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?a._j:a.$n,l="light"===e.palette.mode?a.$n:a._j,i=t.color||t.severity;return(0,r.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${i}StandardBg`]:l(e.palette[i].light,.9),[`& .${m.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),border:`1px solid ${(e.vars||e).palette[i].light}`,[`& .${m.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&"filled"===t.variant&&(0,r.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${i}FilledColor`],backgroundColor:e.vars.palette.Alert[`${i}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[i].dark:e.palette[i].main,color:e.palette.getContrastText(e.palette[i].main)}))})),B=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),X=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),A=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),k={success:(0,g.jsx)(C,{fontSize:"inherit"}),warning:(0,g.jsx)(b,{fontSize:"inherit"}),error:(0,g.jsx)(y,{fontSize:"inherit"}),info:(0,g.jsx)(P,{fontSize:"inherit"})},S=i.forwardRef((function(e,t){var n,i,a,c,h,p;const u=(0,d.Z)({props:e,name:"MuiAlert"}),{action:m,children:v,className:C,closeText:b="Close",color:y,components:P={},componentsProps:S={},icon:z,iconMapping:L=k,onClose:$,role:E="alert",severity:I="success",slotProps:O={},slots:R={},variant:W="standard"}=u,N=(0,l.Z)(u,w),F=(0,r.Z)({},u,{color:y,severity:I,variant:W}),G=(e=>{const{variant:t,color:n,severity:l,classes:r}=e,i={root:["root",`${t}${(0,Z.Z)(n||l)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(i,x,r)})(F),H=null!=(n=null!=(i=R.closeButton)?i:P.CloseButton)?n:f.Z,T=null!=(a=null!=(c=R.closeIcon)?c:P.CloseIcon)?a:M.Z,V=null!=(h=O.closeButton)?h:S.closeButton,_=null!=(p=O.closeIcon)?p:S.closeIcon;return(0,g.jsxs)(j,(0,r.Z)({role:E,elevation:0,ownerState:F,className:(0,o.Z)(G.root,C),ref:t},N,{children:[!1!==z?(0,g.jsx)(B,{ownerState:F,className:G.icon,children:z||L[I]||k[I]}):null,(0,g.jsx)(X,{ownerState:F,className:G.message,children:v}),null!=m?(0,g.jsx)(A,{ownerState:F,className:G.action,children:m}):null,null==m&&$?(0,g.jsx)(A,{ownerState:F,className:G.action,children:(0,g.jsx)(H,(0,r.Z)({size:"small","aria-label":b,title:b,color:"inherit",onClick:$},V,{children:(0,g.jsx)(T,(0,r.Z)({fontSize:"small"},_))}))}):null]}))}))},80592:(e,t,n)=>{n.d(t,{Z:()=>i});n(2784);var l=n(6620),r=n(52322);const i=(0,l.Z)((0,r.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},81008:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var l=n(67550),r=n(2784),i=n(61877),o=n(6620),s=n(52322);const a=(0,o.Z)((0,s.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");var c=n(41075),d=n(62197),Z=n(38553),h=n(83249),p=n(56961),u=n(7671),x=n(107),m=n(79536),f=n(87985),v=n(67937),g=n(2344),C=n(89343),b=n(52757),y=n(26578),P=n(87051),M=n(41015),w=n(52903);const j={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:m.Z.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:m.Z.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:m.Z.exp_books.wit}},B=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],X=[20,40,50,60,70,80,90];function A(){const[e,t]=(0,r.useState)((()=>({mora:0,level:1,curExp:0,goUnder:!1,books:{advice:0,experience:0,wit:0}}))),{mora:n,level:i,curExp:o,goUnder:s,books:m,books:{advice:b,experience:A,wit:S}}=e,z=X.find((e=>e>i));let L=-o;for(let l=i;l<Math.min(z,B.length);l++)L+=B[l];const $=function(e,t,n,l,r){let i=r?Math.floor(l/1e3):Math.ceil(l/1e3);const o=Math.min(Math.floor(i/20),e);i-=20*o;const s=Math.min(Math.floor(i/5),t);i-=5*s;const a=Math.min(i,n);if(i-=a,r||0===i)return[o,s,a];if(3===s&&o!==e)return[o+1,0,0];if(s!==t)return[o,s+1,0];if(o!==e)return[o+1,0,0];return null}(S,A,b,L,s)||[],[E=0,I=0,O=0]=$,R={advice:O,experience:I,wit:E},W=2e4*E+5e3*I+1e3*O,N=W/5,F=L-W,G=n-N;let H=W+o,T=i;for(;T<Math.min(z,B.length)&&B[T]<=H;T++)H-=B[T];T===z&&(H=0);let V="";return G<0?V=(0,w.BX)("span",{children:["You don't have enough ",(0,w.tZ)("b",{children:"Mora"})," for this operation."]}):0===$.length?V=(0,w.BX)("span",{children:["You don't have enough ",(0,w.tZ)("b",{children:"EXP. books"})," to level to the next milestone."]}):90===i&&(V="You are at the maximum level."),(0,w.BX)(f.Z,{children:[(0,w.BX)(c.ZP,{container:!0,sx:{px:2,py:1},spacing:2,children:[(0,w.tZ)(c.ZP,{item:!0,children:(0,w.tZ)(y.Z,{src:j.wit.img,sx:{fontSize:"2em"}})}),(0,w.tZ)(c.ZP,{item:!0,flexGrow:1,children:(0,w.tZ)(d.Z,{variant:"h6",children:"Experience Calculator"})}),(0,w.tZ)(c.ZP,{item:!0,children:(0,w.BX)(Z.Z,{children:[(0,w.tZ)(h.Z,{color:"primary",disabled:!s,onClick:()=>t(Object.assign({},e,{goUnder:!1})),children:"Full Level"}),(0,w.tZ)(h.Z,{color:"primary",disabled:s,onClick:()=>t(Object.assign({},e,{goUnder:!0})),children:"Don't fully level"})]})})]}),(0,w.tZ)(p.Z,{}),(0,w.tZ)(u.Z,{children:(0,w.BX)(c.ZP,{container:!0,spacing:1,children:[(0,w.tZ)(c.ZP,{item:!0,children:(0,w.BX)(d.Z,{children:[(0,w.tZ)("span",{children:"This calculator tries to calculate the amount of exp books required to get to the next milestone level. "}),s?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]})}),(0,w.tZ)(c.ZP,{item:!0,xs:6,md:3,children:(0,w.BX)(Z.Z,{sx:{display:"flex"},children:[(0,w.tZ)(P.Z,{children:"Current Level"}),(0,w.tZ)(C.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,w.tZ)(C.ZP,{value:i,onChange:n=>t(Object.assign({},e,{level:(0,M.uZ)(n,0,90)})),sx:{px:2}})})]})}),(0,w.tZ)(c.ZP,{item:!0,xs:6,md:3,children:(0,w.BX)(Z.Z,{sx:{display:"flex"},children:[(0,w.tZ)(P.Z,{children:"Current EXP."}),(0,w.tZ)(C.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,w.tZ)(C.ZP,{value:o,onChange:n=>t(Object.assign({},e,{curExp:(0,M.uZ)(n,0,(B[i]||1)-1)})),endAdornment:`/${B[i]||0}`,sx:{px:2}})})]})}),(0,w.tZ)(c.ZP,{item:!0,xs:6,md:3,children:(0,w.tZ)(v.Z,{children:(0,w.BX)(l.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(d.Z,{children:"Next Milestone Level:"}),(0,w.tZ)(d.Z,{children:(0,w.tZ)("b",{children:z})})]})})}),(0,w.tZ)(c.ZP,{item:!0,xs:6,md:3,children:(0,w.tZ)(v.Z,{children:(0,w.BX)(l.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(d.Z,{children:"EXP. to milestone:"}),(0,w.tZ)(d.Z,{children:(0,w.BX)("span",{children:[(0,w.tZ)("strong",{children:W})," / ",(0,w.tZ)("strong",{children:L})]})})]})})}),Object.entries(m).map((([n])=>(0,w.tZ)(c.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(k,{bookKey:n,value:m[n],setValue:l=>t(Object.assign({},e,{books:Object.assign({},m,{[n]:l})})),required:R[n]})},n))),(0,w.tZ)(c.ZP,{item:!0,xs:12,md:4,children:(0,w.BX)(Z.Z,{sx:{display:"flex"},children:[(0,w.tZ)(P.Z,{children:"Current Mora"}),(0,w.tZ)(C.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,w.tZ)(C.ZP,{value:n,onChange:n=>t(Object.assign({},e,{mora:Math.max(null!=n?n:0,0)})),sx:{px:2}})})]})}),(0,w.tZ)(c.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(v.Z,{children:(0,w.BX)(l.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(d.Z,{children:"Mora Cost: "}),(0,w.tZ)(d.Z,{children:(0,w.tZ)("b",{children:N})})]})})}),(0,w.tZ)(c.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(v.Z,{children:(0,w.BX)(l.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.BX)(d.Z,{children:["EXP ",s?"Diff":"Waste",": "]}),(0,w.tZ)(d.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(g.Z,{color:F<0?"error":"success",children:F})})})]})})}),(0,w.tZ)(c.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(v.Z,{children:(0,w.BX)(l.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(d.Z,{children:"Final Mora: "}),(0,w.tZ)(d.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(g.Z,{color:G<0?"error":"success",children:G})})})]})})}),(0,w.tZ)(c.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(v.Z,{children:(0,w.BX)(l.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(d.Z,{children:"Final Level: "}),(0,w.tZ)(d.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(g.Z,{color:"success",children:T})})})]})})}),(0,w.tZ)(c.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(v.Z,{children:(0,w.BX)(l.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(d.Z,{children:"Final EXP: "}),(0,w.tZ)(d.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(g.Z,{color:H<0?"error":"success",children:H})})})]})})})]})}),(0,w.tZ)(p.Z,{}),(0,w.tZ)(u.Z,{sx:{py:1},children:(0,w.BX)(c.ZP,{container:!0,spacing:2,children:[(0,w.tZ)(c.ZP,{item:!0,flexGrow:1,children:!!V&&(0,w.tZ)(x.Z,{variant:"filled",severity:"error",children:V})}),(0,w.tZ)(c.ZP,{item:!0,xs:"auto",children:(0,w.tZ)(h.Z,{disabled:!!V,onClick:()=>t(Object.assign({},e,{level:T,curExp:H,books:(0,M.xh)(R,((e,t)=>m[t]-e)),mora:G})),color:"success",startIcon:(0,w.tZ)(a,{}),sx:{height:"100%"},children:"Apply"})})]})})]})}function k(e){const{bookKey:t,value:n=0,setValue:r,required:i=0}=e;return(0,w.BX)(v.Z,{children:[(0,w.tZ)(u.Z,{sx:{py:1},children:(0,w.tZ)(d.Z,{children:j[t].name})}),(0,w.tZ)(p.Z,{}),(0,w.tZ)(u.Z,{children:(0,w.BX)(c.ZP,{container:!0,children:[(0,w.tZ)(c.ZP,{item:!0,xs:3,children:(0,w.tZ)(b.Z,{src:j[t].img})}),(0,w.BX)(c.ZP,{item:!0,xs:9,children:[(0,w.BX)(Z.Z,{sx:{display:"flex"},children:[(0,w.tZ)(P.Z,{children:"Amount"}),(0,w.tZ)(C.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,w.tZ)(C.ZP,{value:n,onChange:e=>r(Math.max(null!=e?e:0,0)),sx:{px:2}})})]}),(0,w.BX)(l.Z,{display:"flex",justifyContent:"space-between",mt:1,children:[(0,w.tZ)(d.Z,{children:"Required:"}),(0,w.tZ)(d.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(g.Z,{color:i?"success":"",children:i})})})]})]})]})})]})}var S=n(81624),z=n(74133);function L(e){return i.ZP.send({hitType:"pageview",page:"/tools"}),(0,w.BX)(l.Z,{display:"flex",flexDirection:"column",gap:1,my:1,children:[(0,w.tZ)(z.ZP,{}),(0,w.tZ)(S.ZP,{}),(0,w.tZ)(A,{})]})}}}]);