"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8198],{33494:function(N,Z,e){e.d(Z,{FN:function(){return o},WF:function(){return b}});var x=e(5574),_=e.n(x),p=e(67294);function O(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}function a(d){if(typeof window!="undefined"){var t=document.createElement("div");t.style.display="none",document.body.appendChild(t),d.forEach(function(y){var C=new Image;C.src=y,t.appendChild(C)})}}function b(){var d=p.useState({}),t=_()(d,2),y=t[0],C=t[1],P=p.useState(!1),E=_()(P,2),m=E[0],c=E[1];return p.useEffect(function(){Object.keys(y!=null?y:{}).length===0&&typeof fetch!="undefined"&&(c(!0),fetch("https://render.alipay.com/p/h5data/antd4-config_website-h5data.json").then(function(i){return i.json()}).then(function(i){C(i),c(!1)}))},[]),[y,m]}var n={name:"pe4q6k",styles:".slick-dots.slick-dots-bottom{bottom:-22px;li{width:6px;height:6px;background:#e1eeff;border-radius:50%;button{height:6px;background:#e1eeff;border-radius:50%;}&.slick-active{background:#4b9cff;button{background:#4b9cff;}}}}"},o=function(){return{carousel:n}}},74399:function(N,Z,e){var x=e(67294),_=function(){return ___EmotionJSX(React.Fragment,null,"API Table")},p=null},2068:function(N,Z,e){var x=e(67333),_=e.n(x),p=e(97857),O=e.n(p),a=e(13769),b=e.n(a),n=e(13669),o=e(67294),d=e(96923),t=["style"],y=function(P){var E=P.style,m=b()(P,t);return(0,d.tZ)(n.Alert,_()({},m,{style:O()({margin:"24px 0"},E)}))};Z.Z=y},63942:function(N,Z,e){var x=e(67294),_=e(10274),p=e(96923),O=e(52180),a=function(){var o=(0,O.Z)(),d=o.token;return{codeSpan:(0,p.iv)("padding:0.2em 0.4em;font-size:0.9em;background:",d.siteMarkdownCodeBg,";border-radius:",d.borderRadius,"px;font-family:monospace;",""),dot:(0,p.iv)("display:inline-block;width:6px;height:6px;border-radius:",d.borderRadiusSM,"px;margin-inline-end:4px;border:1px solid ",d.colorSplit,";","")}},b=function(o){var d=a(),t=o.color,y=o.children,C=x.useMemo(function(){var P=new _.C(t).toHex8String();return P.endsWith("ff")?P.slice(0,-2):P},[t]);return(0,p.tZ)("span",{css:d.codeSpan},(0,p.tZ)("span",{css:d.dot,style:{backgroundColor:C}}),y!=null?y:C)};Z.Z=b},24628:function(N,Z,e){e.d(Z,{Z:function(){return C}});var x=e(5574),_=e.n(x),p=e(67294),O=e(94065),a=e(34081),b=e(37472),n=e(96923),o=70,d=70,t=function(){var E=(0,p.useState)("#1890ff"),m=_()(E,2),c=m[0],i=m[1],r=(0,p.useState)(null),M=_()(r,2),u=M[0],s=M[1],j=function(v,D){var l=v.target?v.target.value:v;i(l),s(D)},R=(0,p.useMemo)(function(){var S="";return u&&(u.hsv.s*100<o&&(S+=" \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(o,"\uFF08\u73B0\u5728 ").concat((u.hsv.s*100).toFixed(2),"\uFF09")),u.hsv.v*100<d&&(S+=" \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(d,"\uFF08\u73B0\u5728 ").concat((u.hsv.v*100).toFixed(2),"\uFF09"))),(0,n.tZ)("span",{className:"color-palette-picker-validation"},S.trim())},[u,o,d]);return(0,n.tZ)("div",{className:"color-palette-horizontal"},(0,n.tZ)("div",{className:"color-palette-pick"},(0,n.tZ)(O._H,{id:"app.docs.color.pick-primary"})),(0,n.tZ)("div",{className:"main-color"},(0,b.Z)({color:c})),(0,n.tZ)("div",{className:"color-palette-picker"},(0,n.tZ)("span",{style:{display:"inline-block",verticalAlign:"middle"}},(0,n.tZ)(a.Z,{color:c,onChange:j})),(0,n.tZ)("span",{className:"color-palette-picker-value"},c),R))},y=t,C=y},19260:function(N,Z,e){e.d(Z,{Z:function(){return P}});var x=e(5574),_=e.n(x),p=e(67294),O=e(94065),a=e(13669),b=e(34081),n=e(37472),o=e(96923),d=70,t=70,y=function(){var m=(0,p.useState)("#1890ff"),c=_()(m,2),i=c[0],r=c[1],M=(0,p.useState)("#141414"),u=_()(M,2),s=u[0],j=u[1],R=(0,p.useState)(null),S=_()(R,2),v=S[0],D=S[1],l=function(g,B){var U=g.target?g.target.value:g;r(U),D(B)},h=function(g){var B=g.target?g.target.value:g;j(B)},I=(0,p.useMemo)(function(){var T="";return v&&(v.hsv.s*100<d&&(T+=" \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(d,"\uFF08\u73B0\u5728 ").concat((v.hsv.s*100).toFixed(2),"\uFF09")),v.hsv.v*100<t&&(T+=" \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(t,"\uFF08\u73B0\u5728 ").concat((v.hsv.v*100).toFixed(2),"\uFF09"))),(0,o.tZ)("span",{className:"color-palette-picker-validation color-palette-picker-validation-dark"},T.trim())},[v]);return(0,o.tZ)("div",{className:"color-palette-horizontal color-palette-horizontal-dark"},(0,o.tZ)("div",{className:"main-color"},(0,n.Z)({color:i,dark:!0,backgroundColor:s})),(0,o.tZ)("div",{className:"color-palette-picker"},(0,o.tZ)(a.Row,null,(0,o.tZ)(a.Col,{span:12},(0,o.tZ)("div",{className:"color-palette-pick"},(0,o.tZ)(O._H,{id:"app.docs.color.pick-primary"})),(0,o.tZ)("span",{style:{display:"inline-block",verticalAlign:"middle"}},(0,o.tZ)(a.Row,null,(0,o.tZ)(a.Col,{span:18},(0,o.tZ)(b.Z,{color:i,onChange:l})),(0,o.tZ)(a.Col,{span:6},(0,o.tZ)("span",{className:"color-palette-pick-hex"},i))))),(0,o.tZ)(a.Col,{span:12},(0,o.tZ)("div",{className:"color-palette-pick"},(0,o.tZ)(O._H,{id:"app.docs.color.pick-background"})),(0,o.tZ)("span",{style:{display:"inline-block",verticalAlign:"middle"}},(0,o.tZ)(a.Row,null,(0,o.tZ)(a.Col,{span:18},(0,o.tZ)(b.Z,{color:s,onChange:h})),(0,o.tZ)(a.Col,{span:6},(0,o.tZ)("span",{className:"color-palette-pick-hex"},s)))))),I))},C=y,P=C},16073:function(N,Z,e){e.d(Z,{Z:function(){return d}});var x=e(67294),_=e(94184),p=e.n(_),O=e(63379),a=e(96923),b=[{name:"red",english:"Dust Red",chinese:"\u8584\u66AE",description:"\u6597\u5FD7\u3001\u5954\u653E"},{name:"volcano",english:"Volcano",chinese:"\u706B\u5C71",description:"\u9192\u76EE\u3001\u6F8E\u6E43"},{name:"orange",english:"Sunset Orange",chinese:"\u65E5\u66AE",description:"\u6E29\u6696\u3001\u6B22\u5FEB"},{name:"gold",english:"Calendula Gold",chinese:"\u91D1\u76CF\u82B1",description:"\u6D3B\u529B\u3001\u79EF\u6781"},{name:"yellow",english:"Sunrise Yellow",chinese:"\u65E5\u51FA",description:"\u51FA\u751F\u3001\u9633\u5149"},{name:"lime",english:"Lime",chinese:"\u9752\u67E0",description:"\u81EA\u7136\u3001\u751F\u673A"},{name:"green",english:"Polar Green",chinese:"\u6781\u5149\u7EFF",description:"\u5065\u5EB7\u3001\u521B\u65B0"},{name:"cyan",english:"Cyan",chinese:"\u660E\u9752",description:"\u5E0C\u671B\u3001\u575A\u5F3A"},{name:"blue",english:"Daybreak Blue",chinese:"\u62C2\u6653\u84DD",description:"\u5305\u5BB9\u3001\u79D1\u6280\u3001\u666E\u60E0"},{name:"geekblue",english:"Geek Blue",chinese:"\u6781\u5BA2\u84DD",description:"\u63A2\u7D22\u3001\u94BB\u7814"},{name:"purple",english:"Golden Purple",chinese:"\u9171\u7D2B",description:"\u4F18\u96C5\u3001\u6D6A\u6F2B"},{name:"magenta",english:"Magenta",chinese:"\u6CD5\u5F0F\u6D0B\u7EA2",description:"\u660E\u5FEB\u3001\u611F\u6027"}],n=function(y){var C=y.dark,P=p()("color-palettes",{"color-palettes-dark":!!C});return(0,a.tZ)("div",{className:P},b.map(function(E){return(0,a.tZ)(O.Z,{key:E.name,color:E,dark:C,showTitle:!0})}))},o=n,d=o},56140:function(N,Z,e){e.d(Z,{Z:function(){return v}});var x=e(97857),_=e.n(x),p=e(5574),O=e.n(p),a=e(67294),b=e(94065),n=e(96923),o=e(23279),d=e.n(o),t=e(13669),y=e(40110),C=[{cover:"https://gw.alipayobjects.com/zos/antfincdn/4n5H%24UX%24j/bianzu%2525204.svg",link:"https://procomponents.ant.design/components/layout",subtitle:"\u9AD8\u7EA7\u5E03\u5C40",title:"ProLayout",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/mStei5BFC/bianzu%2525207.svg",link:"https://procomponents.ant.design/components/form",subtitle:"\u9AD8\u7EA7\u8868\u5355",title:"ProForm",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg",link:"https://procomponents.ant.design/components/table",subtitle:"\u9AD8\u7EA7\u8868\u683C",title:"ProTable",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/H0%26LSYYfh/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/descriptions",subtitle:"\u9AD8\u7EA7\u5B9A\u4E49\u5217\u8868",title:"ProDescriptions",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/uZUmLtne5/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/list",subtitle:"\u9AD8\u7EA7\u5217\u8868",title:"ProList",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/N3eU432oA/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/editable-table",subtitle:"\u53EF\u7F16\u8F91\u8868\u683C",title:"EditableProTable",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"}],P=C,E=e(52180);function m(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var c={name:"1lyd58t",styles:"display:flex;transition:all 0.3s;justify-content:space-between"},i={name:"l0aeht",styles:"cursor:pointer;transition:all 0.5s;&:hover{box-shadow:0 6px 16px -8px #00000014,0 9px 28px #0000000d,0 12px 48px 16px #00000008;}"},r={name:"eyizcg",styles:"display:flex;align-items:center;justify-content:center;height:152px"},M={name:"smln73",styles:"margin-bottom:24px!important"},u=function(){var l=(0,E.Z)(),h=l.token;return{componentsOverviewGroupTitle:M,componentsOverviewTitle:(0,n.iv)("overflow:hidden;color:",h.colorTextHeading,";text-overflow:ellipsis;",""),componentsOverviewImg:r,componentsOverviewCard:i,componentsOverviewAffix:c,componentsOverviewSearch:(0,n.iv)("padding:0;.anticon-search{color:",h.colorTextDisabled,";}",""),componentsOverviewContent:(0,n.iv)("&:empty:after{display:block;padding:16px 0 40px;color:",h.colorTextDisabled,";text-align:center;border-bottom:1px solid ",h.colorSplit,";content:'Not Found';}","")}},s=function(l){window.gtag&&window.gtag("event","\u70B9\u51FB",{event_category:"\u7EC4\u4EF6\u603B\u89C8\u5361\u7247",event_label:l})},j=d()(function(D){window.gtag&&window.gtag("event","\u641C\u7D22",{event_category:"\u7EC4\u4EF6\u603B\u89C8\u5361\u7247",event_label:D})},2e3),R=t.Typography.Title,S=function(){var l=u(),h=(0,b.tx)(),I=(0,a.useState)(!1),T=O()(I,2),g=T[0],B=T[1],U=(0,E.Z)(),F=U.token,G=F.borderRadius,ie=F.colorBgContainer,ne=F.fontSizeXL,X={boxShadow:"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px",padding:8,margin:-8,borderRadius:G,backgroundColor:ie},ee=(0,b.TH)(),w=ee.search,H=(0,b.YB)(),V=H.locale,de=H.formatMessage,ce=(0,a.useState)(""),_e=O()(ce,2),te=_e[0],me=_e[1],ve=(0,a.useRef)(null),W=function(k){if(k.keyCode===13&&te.trim().length){var K,A;(K=ve.current)===null||K===void 0||(A=K.querySelector(".components-overview-card"))===null||A===void 0||A.click()}},L=(0,a.useMemo)(function(){return h.filter(function(f){return f==null?void 0:f.title}).map(function(f){return{title:f==null?void 0:f.title,children:f.children.map(function(k){var K;return{title:(K=k.frontmatter)===null||K===void 0?void 0:K.title,subtitle:k.frontmatter.subtitle,cover:k.frontmatter.cover,link:k.link}})}}).concat([{title:V==="zh-CN"?"\u91CD\u578B\u7EC4\u4EF6":"Others",children:V==="zh-CN"?P:P.map(function(f){return _()(_()({},f),{},{subtitle:""})})}])},[h,V]);return(0,n.tZ)("section",{className:"markdown",ref:ve},(0,n.tZ)(t.Divider,null),(0,n.tZ)(t.Affix,{offsetTop:24,onChange:B},(0,n.tZ)("div",{css:l.componentsOverviewAffix,style:g?X:{}},(0,n.tZ)(t.Input,{autoFocus:!0,value:te,placeholder:de({id:"app.components.overview.search"}),css:l.componentsOverviewSearch,onChange:function(k){me(k.target.value),j(k.target.value)},onKeyDown:W,bordered:!1,suffix:(0,n.tZ)(y.Z,null),style:{fontSize:g?ne-2:ne}}))),(0,n.tZ)(t.Divider,null),(0,n.tZ)("div",{css:l.componentsOverviewContent},L.filter(function(f){return f==null?void 0:f.title}).map(function(f){var k,K=f==null||(k=f.children)===null||k===void 0?void 0:k.filter(function(A){var z,$;return!te.trim()||(A==null||(z=A.title)===null||z===void 0||($=z.toLowerCase())===null||$===void 0?void 0:$.includes(te.trim().toLowerCase()))||((A==null?void 0:A.subtitle)||"").toLowerCase().includes(te.trim().toLowerCase())});return K!=null&&K.length?(0,n.tZ)("div",{key:f==null?void 0:f.title},(0,n.tZ)(R,{level:2,css:l.componentsOverviewGroupTitle},(0,n.tZ)(t.Space,{align:"center"},(0,n.tZ)("span",{style:{fontSize:24}},f==null?void 0:f.title),(0,n.tZ)(t.Tag,{style:{display:"block"}},K.length))),(0,n.tZ)(t.Row,{gutter:[24,24]},K.map(function(A){var z=A.link.startsWith("http"),$="".concat(A.link);z||($+=w);var J=z?"a":b.rU;return(0,n.tZ)(t.Col,{xs:24,sm:12,lg:8,xl:6,key:A==null?void 0:A.title},(0,n.tZ)(J,{to:$,href:$,onClick:function(){return s($)}},(0,n.tZ)(t.Card,{bodyStyle:{backgroundRepeat:"no-repeat",backgroundPosition:"bottom right",backgroundImage:"url(".concat((A==null?void 0:A.tag)||"",")")},size:"small",css:l.componentsOverviewCard,title:(0,n.tZ)("div",{css:l.componentsOverviewTitle},A==null?void 0:A.title," ",A.subtitle)},(0,n.tZ)("div",{css:l.componentsOverviewImg},(0,n.tZ)("img",{src:A.cover,alt:A==null?void 0:A.title})))))}))):null})))},v=(0,a.memo)(S)},5388:function(N,Z,e){var x=e(97857),_=e.n(x),p=e(5574),O=e.n(p),a=e(67294),b=e(94065),n=e(13669),o=e(39020),d=e(89035),t=e(2659),y=e(37993),C=e(94184),P=e.n(C),E=e(24229),m=e(96923),c=function(r){var M=r.items,u=(0,a.useContext)(E.Z),s=u.showDebug,j=u.setShowDebug,R=(0,a.useState)(!1),S=O()(R,2),v=S[0],D=S[1],l=P()("code-box-expand-trigger",{"code-box-expand-trigger-active":v}),h=function(){j==null||j(!s)},I=function(){D(!v)},T=a.useMemo(function(){return M.reduce(function(g,B){var U=B.previewerProps,F=U.debug;return F&&!s?g:g.concat(_()(_()({},B),{},{previewerProps:_()(_()({},U),{},{expand:v,debug:!1,originDebug:F})}))},[])},[v,s]);return(0,m.tZ)("div",{className:"demo-wrapper"},(0,m.tZ)("span",{className:"all-code-box-controls"},(0,m.tZ)(n.Tooltip,{title:(0,m.tZ)(b._H,{id:"app.component.examples.".concat(v?"collapse":"expand")})},v?(0,m.tZ)(o.Z,{className:l,onClick:I}):(0,m.tZ)(d.Z,{className:l,onClick:I})),(0,m.tZ)(n.Tooltip,{title:(0,m.tZ)(b._H,{id:"app.component.examples.".concat(s?"hide":"visible")})},s?(0,m.tZ)(t.Z,{className:l,onClick:h}):(0,m.tZ)(y.Z,{className:l,onClick:h}))),(0,m.tZ)(b.Z1,{items:T,key:"".concat(v).concat(s)}))};Z.Z=c},49545:function(N,Z,e){e.d(Z,{Z:function(){return ve}});var x=e(97857),_=e.n(x),p=e(5574),O=e.n(p),a=e(67294),b=e(78005),n=e(16165),o=e(13669),d=e(94065),t=e(23279),y=e.n(t),C=e(9783),P=e.n(C),E=e(74855),m=e.n(E),c=e(94184),i=e.n(c),r=e(96923),M=b,u=function(L){var f=L.name,k=L.isNew,K=L.justCopied,A=L.onCopied,z=L.theme,$=i()(P()({copied:K===f},z,!!z)),J=function(re,oe){oe?A(f,re):o.message.error("Copy icon name failed, please try again.")};return(0,r.tZ)(m(),{text:"<".concat(f," />"),onCopy:J},(0,r.tZ)("li",{className:$},a.createElement(M[f]),(0,r.tZ)("span",{className:"anticon-class"},(0,r.tZ)(o.Badge,{dot:k},f))))},s=u,j=function(L){var f=L.icons,k=L.title,K=L.newIcons,A=L.theme,z=(0,d.YB)(),$=a.useState(null),J=O()($,2),ue=J[0],re=J[1],oe=a.useRef(null),pe=a.useCallback(function(Q,fe){o.message.success((0,r.tZ)("span",null,(0,r.tZ)("code",{className:"copied-code"},fe)," copied \u{1F389}")),re(Q),oe.current=setTimeout(function(){re(null)},2e3)},[]);return a.useEffect(function(){return function(){oe.current&&clearTimeout(oe.current)}},[]),(0,r.tZ)("div",null,(0,r.tZ)("h3",null,z.formatMessage({id:"app.docs.components.icon.category.".concat(k)})),(0,r.tZ)("ul",{className:"anticons-list"},f.map(function(Q){return(0,r.tZ)(s,{key:Q,name:Q,theme:A,isNew:K.includes(Q),justCopied:ue,onCopied:pe})})))},R=j,S=e(67333),v=e.n(S),D=function(L){var f="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z";return(0,r.tZ)("svg",v()({},L,{viewBox:"0 0 1024 1024"}),(0,r.tZ)("path",{d:f}))},l=function(L){var f="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z";return(0,r.tZ)("svg",v()({},L,{viewBox:"0 0 1024 1024"}),(0,r.tZ)("path",{d:f}))},h=function(L){var f="M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z";return(0,r.tZ)("svg",v()({},L,{viewBox:"0 0 1024 1024"}),(0,r.tZ)("path",{d:f}))},I=e(62816),T=Object.keys(I).map(function(W){return W.replace(/(Outlined|Filled|TwoTone)$/,"")}).filter(function(W,L,f){return f.indexOf(W)===L}),g=["StepBackward","StepForward","FastBackward","FastForward","Shrink","ArrowsAlt","Down","Up","Left","Right","CaretUp","CaretDown","CaretLeft","CaretRight","UpCircle","DownCircle","LeftCircle","RightCircle","DoubleRight","DoubleLeft","VerticalLeft","VerticalRight","VerticalAlignTop","VerticalAlignMiddle","VerticalAlignBottom","Forward","Backward","Rollback","Enter","Retweet","Swap","SwapLeft","SwapRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PlayCircle","UpSquare","DownSquare","LeftSquare","RightSquare","Login","Logout","MenuFold","MenuUnfold","BorderBottom","BorderHorizontal","BorderInner","BorderOuter","BorderLeft","BorderRight","BorderTop","BorderVerticle","PicCenter","PicLeft","PicRight","RadiusBottomleft","RadiusBottomright","RadiusUpleft","RadiusUpright","Fullscreen","FullscreenExit"],B=["Question","QuestionCircle","Plus","PlusCircle","Pause","PauseCircle","Minus","MinusCircle","PlusSquare","MinusSquare","Info","InfoCircle","Exclamation","ExclamationCircle","Close","CloseCircle","CloseSquare","Check","CheckCircle","CheckSquare","ClockCircle","Warning","IssuesClose","Stop"],U=["Edit","Form","Copy","Scissor","Delete","Snippets","Diff","Highlight","AlignCenter","AlignLeft","AlignRight","BgColors","Bold","Italic","Underline","Strikethrough","Redo","Undo","ZoomIn","ZoomOut","FontColors","FontSize","LineHeight","Dash","SmallDash","SortAscending","SortDescending","Drag","OrderedList","UnorderedList","RadiusSetting","ColumnWidth","ColumnHeight"],F=["AreaChart","PieChart","BarChart","DotChart","LineChart","RadarChart","HeatMap","Fall","Rise","Stock","BoxPlot","Fund","Sliders"],G=["Android","Apple","Windows","Ie","Chrome","Github","Aliwangwang","Dingding","WeiboSquare","WeiboCircle","TaobaoCircle","Html5","Weibo","Twitter","Wechat","Youtube","AlipayCircle","Taobao","Skype","Qq","MediumWorkmark","Gitlab","Medium","Linkedin","GooglePlus","Dropbox","Facebook","Codepen","CodeSandbox","CodeSandboxCircle","Amazon","Google","CodepenCircle","Alipay","AntDesign","AntCloud","Aliyun","Zhihu","Slack","SlackSquare","Behance","BehanceSquare","Dribbble","DribbbleSquare","Instagram","Yuque","Alibaba","Yahoo","Reddit","Sketch"],ie=[].concat(g,B,U,F,G),ne=T.filter(function(W){return!ie.includes(W)}),X={direction:g,suggestion:B,editor:U,data:F,logo:G,other:ne},ee=null,w=e(52180);function H(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var V;(function(W){W.Filled="Filled",W.Outlined="Outlined",W.TwoTone="TwoTone"})(V||(V={}));var de=b,ce={name:"1lyd58t",styles:"display:flex;transition:all 0.3s;justify-content:space-between"},_e=function(){return{iconSearchAffix:ce}},te=function(L){return[{value:V.Outlined,icon:(0,r.tZ)(n.Z,{component:l}),label:L.formatMessage({id:"app.docs.components.icon.outlined"})},{value:V.Filled,icon:(0,r.tZ)(n.Z,{component:D}),label:L.formatMessage({id:"app.docs.components.icon.filled"})},{value:V.TwoTone,icon:(0,r.tZ)(n.Z,{component:h}),label:L.formatMessage({id:"app.docs.components.icon.two-tone"})}]},me=function(){var L=(0,d.YB)(),f=_e(),k=f.iconSearchAffix,K=(0,a.useState)({searchKey:"",theme:V.Outlined}),A=O()(K,2),z=A[0],$=A[1],J=[],ue=y()(function(se){$(function(le){return _()(_()({},le),{},{searchKey:se.target.value})})},300),re=(0,a.useCallback)(function(se){$(function(le){return _()(_()({},le),{},{theme:se})})},[]),oe=(0,a.useMemo)(function(){var se=z.searchKey,le=se===void 0?"":se,Ce=z.theme,Ee=Object.keys(X).map(function(ae){var Y=X[ae];if(le){var he=le.replace(new RegExp("^<([a-zA-Z]*)\\s/>$","gi"),function(q,Me){return Me}).replace(/(Filled|Outlined|TwoTone)$/,"").toLowerCase();Y=Y.filter(function(q){return q.toLowerCase().includes(he)})}return Y=Y.filter(function(q){return q!=="CopyrightCircle"}),{category:ae,icons:Y.map(function(q){return q+Ce}).filter(function(q){return de[q]})}}).filter(function(ae){var Y=ae.icons;return!!Y.length}).map(function(ae){var Y=ae.category,he=ae.icons;return(0,r.tZ)(R,{key:Y,title:Y,theme:Ce,icons:he,newIcons:J})});return Ee.length?Ee:(0,r.tZ)(o.Empty,{style:{margin:"2em 0"}})},[z.searchKey,z.theme]),pe=(0,a.useState)(!1),Q=O()(pe,2),fe=Q[0],be=Q[1],ye=(0,w.Z)(),ge=ye.token,Pe=ge.borderRadius,De=ge.colorBgContainer,Oe={boxShadow:"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px",padding:8,margin:-8,borderRadius:Pe,backgroundColor:De};return(0,r.tZ)("div",{className:"markdown"},(0,r.tZ)(o.Affix,{offsetTop:24,onChange:be},(0,r.tZ)("div",{css:k,style:fe?Oe:{}},(0,r.tZ)(o.Segmented,{size:"large",value:z.theme,options:te(L),onChange:re}),(0,r.tZ)(o.Input.Search,{placeholder:L.formatMessage({id:"app.docs.components.icon.search.placeholder"}),style:{flex:1,marginInlineStart:16},allowClear:!0,autoFocus:!0,size:"large",onChange:ue}))),oe)},ve=me},6965:function(N,Z,e){var x=e(67333),_=e.n(x),p=e(97857),O=e.n(p),a=e(67294),b=e(94184),n=e.n(b),o=e(13669),d=e(45598),t=e(96923);function y(i){return/\bgood\b/i.test(i)}function C(i){return/\bbad\b/i.test(i)}function P(i){return/\binline\b/i.test(i)}function E(i){return i.isGood||i.isBad}function m(i){return E(i)||i.inline}var c=function(r){var M=r.children,u=(0,d.default)(M).filter(function(l){return l.type==="img"}),s=u.map(function(l){var h=l.props,I=h.alt,T=h.description,g=h.src,B=h.className;return{className:B,alt:I,description:T,src:g,isGood:y(B),isBad:C(B),inline:P(B)}}),j=s.map(function(l,h){var I=O()({},l);return delete I.description,delete I.isGood,delete I.isBad,(0,t.tZ)("div",{key:h},(0,t.tZ)("div",{className:"image-modal-container"},(0,t.tZ)("img",_()({},I,{src:l.src,alt:l.alt}))))}),R=u.length===2&&s.every(m)||u.length>=2&&s.every(E),S=R?{width:"".concat((100/u.length).toFixed(3),"%")}:{},v=u.length>1&&!R,D=n()({"preview-image-boxes":!0,clearfix:!0,"preview-image-boxes-compare":R,"preview-image-boxes-with-carousel":v});return(0,t.tZ)("div",{className:D},j.map(function(l,h){if(!R&&h!==0)return null;var I=s[h],T=n()("preview-image-wrapper",{good:I.isGood,bad:I.isBad});return(0,t.tZ)("div",{className:"preview-image-box",style:S,key:h},(0,t.tZ)("div",{className:T},(0,t.tZ)(o.Image,{className:I.className,src:I.src,alt:I.alt})),(0,t.tZ)("div",{className:"preview-image-title"},I.alt),(0,t.tZ)("div",{className:"preview-image-description",dangerouslySetInnerHTML:{__html:I.description}}))}))};Z.Z=c},49706:function(N,Z,e){var x=e(63379);Z.Z=x.Z},95127:function(N,Z,e){var x=e(19632),_=e.n(x),p=e(5574),O=e.n(p),a=e(67294),b=e(27484),n=e.n(b),o=e(94065),d=e(13669),t=e(96923),y=e(33494),C=e(52180),P=function(){var c=(0,C.Z)(),i=c.token,r=i.antCls;return{articles:(0,t.iv)("h4{margin:40px 0 24px;font-weight:500;font-size:20px;}",r,"-skeleton{h3{margin:0;}ul li{display:block;margin-left:0;}}",r,"-tabs-nav::before{display:none;}table{width:100%;table-layout:fixed;td{width:50%;vertical-align:top;}}",""),articleList:(0,t.iv)("li{margin:1em 0;padding:0;font-size:14px;list-style:none;}",r,"-avatar>img{max-width:unset;}","")}},E=function(c){var i=c.name,r=c.data,M=r===void 0?[]:r,u=c.authors,s=u===void 0?[]:u,j=P(),R=j.articleList;return(0,t.tZ)("td",null,(0,t.tZ)("h4",null,i),(0,t.tZ)("ul",{css:R},M.length===0?(0,t.tZ)(d.Empty,{image:d.Empty.PRESENTED_IMAGE_SIMPLE}):M.map(function(S,v){var D=s.find(function(l){return l.name===S.author});return(0,t.tZ)("li",{key:v},(0,t.tZ)("a",{href:D==null?void 0:D.href,target:"_blank",rel:"noreferrer"},(0,t.tZ)(d.Avatar,{size:"small",src:D==null?void 0:D.avatar})),(0,t.tZ)(d.Divider,{type:"vertical"}),(0,t.tZ)("a",{href:S.href,target:"_blank",rel:"noreferrer"},S==null?void 0:S.title))})))};Z.Z=function(){var m=(0,o.YB)(),c=m.locale,i=c==="zh-CN",r=(0,y.WF)(),M=O()(r,2),u=M[0],s=u.articles,j=s===void 0?{cn:[],en:[]}:s,R=u.authors,S=R===void 0?[]:R,v=M[1],D=P(),l=a.useMemo(function(){var T,g={};return(T=j[i?"cn":"en"])===null||T===void 0||T.forEach(function(B){var U=n()(B.date).year();g[U]=g[U]||{},g[U][B.type]=[].concat(_()(g[U][B.type]||[]),[B])}),g},[j]),h;if(v)h=(0,t.tZ)(d.Skeleton,{active:!0});else{var I=Object.keys(l).sort(function(T,g){return Number(g)-Number(T)});h=I.length?(0,t.tZ)(d.Tabs,null,I.map(function(T){return(0,t.tZ)(d.Tabs.TabPane,{tab:"".concat(T).concat(i?" \u5E74":""),key:T},(0,t.tZ)("table",null,(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)(E,{name:(0,t.tZ)(o._H,{id:"app.docs.resource.design"}),data:l[T].design,authors:S}),(0,t.tZ)(E,{name:(0,t.tZ)(o._H,{id:"app.docs.resource.develop"}),data:l[T].develop,authors:S})))))})):null}return(0,t.tZ)("div",{id:"articles",css:D.articles},h)}},74418:function(N,Z,e){var x=e(5574),_=e.n(x),p=e(67294),O=e(13669),a=e(96923),b=e(11475),n=e(52180),o=e(2559);function d(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var t={name:"1rmwczg",styles:"margin:0 20px 20px;color:#697b8c;font-size:14px;line-height:22px"},y={name:"6nm2f1",styles:"margin:16px 20px 8px;color:#0d1a26;font-size:20px;line-height:28px"},C={name:"1i5lwbl",styles:"position:absolute;top:8px;right:8px;padding:4px 8px;color:#fff;font-size:12px;line-height:1;background:rgba(0, 0, 0, 0.65);border-radius:1px;box-shadow:0 0 2px rgba(255, 255, 255, 0.2);display:inline-flex;column-gap:4px"},P={name:"12391av",styles:"width:calc(100% + 2px);max-width:none;height:184px;margin:-1px -1px 0;object-fit:cover"},E=function(){var M=(0,n.Z)(),u=M.token,s=u.boxShadowSecondary;return{card:(0,a.iv)("position:relative;display:flex;flex-direction:column;height:100%;color:inherit;list-style:none;border:1px solid #e6e6e6;border-radius:2px;cursor:pointer;transition:box-shadow 0.3s;&:hover{box-shadow:",s,";}",""),image:P,badge:C,title:y,description:t}},m={cn:{official:"\u5B98\u65B9",thirdPart:"\u975E\u5B98\u65B9",thirdPartDesc:"\u975E\u5B98\u65B9\u4EA7\u54C1\uFF0C\u8BF7\u81EA\u884C\u786E\u8BA4\u53EF\u7528\u6027"},en:{official:"Official",thirdPart:"Third Part",thirdPartDesc:"Unofficial product, please take care confirm availability"}},c=function(M){var u=M.resource,s=E(),j=(0,o.Z)(m),R=_()(j,1),S=R[0],v=u.title,D=u.description,l=u.cover,h=u.src,I=u.official,T=null,g=v,B=v.match(/(.*)(#[\dA-Fa-f]{6})/);return B&&(g=B[1].trim(),T=B[2]),(0,a.tZ)(O.Col,{xs:24,sm:12,md:8,lg:6,style:{padding:12}},(0,a.tZ)("a",{css:s.card,target:"_blank",href:h,rel:"noreferrer"},(0,a.tZ)("img",{css:s.image,src:l,alt:g,style:T?{backgroundColor:T}:{}}),I?(0,a.tZ)("div",{css:s.badge},S.official):(0,a.tZ)(O.Tooltip,{title:S.thirdPartDesc},(0,a.tZ)("div",{css:s.badge},(0,a.tZ)(b.Z,null),S.thirdPart)),(0,a.tZ)("p",{css:s==null?void 0:s.title},g),(0,a.tZ)("p",{css:s.description},D)))},i=function(M){var u=M.resources;return(0,a.tZ)(O.Row,{style:{margin:"-12px -12px 0 -12px"}},u.map(function(s){return(0,a.tZ)(c,{resource:s,key:s==null?void 0:s.title})}))};Z.Z=i},73024:function(N,Z,e){var x=e(5574),_=e.n(x),p=e(67294),O=e(27693),a=e(97501),b=e(13669),n=e(96923),o=e(2559),d=e(52180),t=e(63942),y=(0,a.Z)(),C={cn:{token:"Token \u540D\u79F0",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",value:"\u9ED8\u8BA4\u503C"},en:{token:"Token Name",description:"Description",type:"Type",value:"Default Value"}},P=function(){var c=(0,d.Z)(),i=c.token;return{codeSpan:(0,n.iv)("margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",i.siteMarkdownCodeBg,";border:1px solid ",i.colorSplit,";border-radius:3px;font-family:monospace;","")}},E=function(c){var i=c.type,r=P(),M=(0,o.Z)(C),u=_()(M,2),s=u[0],j=u[1],R=[{title:s.token,key:"name",dataIndex:"name"},{title:s.description,key:"desc",dataIndex:"desc"},{title:s.type,key:"type",dataIndex:"type",render:function(D,l){return(0,n.tZ)("span",{css:r.codeSpan},l.type)}},{title:s.value,key:"value",render:function(D,l){var h=typeof l.value=="string"&&(l.value.startsWith("#")||l.value.startsWith("rgb"));return h?(0,n.tZ)(t.Z,{color:l.value},l.value):typeof l.value!="string"?JSON.stringify(l.value):l.value}}],S=(0,p.useMemo)(function(){return Object.entries(O).filter(function(v){var D=_()(v,2),l=D[1];return l.source===i}).map(function(v){var D=_()(v,2),l=D[0],h=D[1];return{name:l,desc:j==="cn"?h.desc:h.descEn,type:h.type,value:y[l]}})},[i,j]);return(0,n.tZ)(b.Table,{dataSource:S,columns:R,pagination:!1,bordered:!0})};Z.Z=E},37472:function(N,Z,e){e.d(Z,{Z:function(){return E}});var x=e(67294),_=e(16397),p=e(44908),O=e.n(p),a=e(5574),b=e.n(a),n=e(74855),o=e.n(n),d=e(13669),t=e(96923),y=function(c){var i=c.color,r=c.index,M=c.dark,u=(0,x.useMemo)(function(){var s={default:["#fff","unset"],dark:["#314659","#fff"]},j=M?s.dark:s.default,R=b()(j,2),S=R[0],v=R[1];return{background:i,color:r>5?S:v,fontWeight:r===6?"bold":"normal"}},[i,M,r]);return(0,t.tZ)(o(),{text:i,onCopy:function(){return d.message.success("Copied: ".concat(i))}},(0,t.tZ)("div",{className:"main-color-item",style:u},"color-",r,(0,t.tZ)("span",{className:"main-color-value"},i.toLowerCase())))},C=y,P=function(c){var i=c.color,r=c.dark,M=c.backgroundColor,u=(0,_.generate)(i,r?{theme:"dark",backgroundColor:M}:{});return O()(u).map(function(s,j){return(0,t.tZ)(C,{color:s,index:j+1,dark:r,key:s})})},E=P},34081:function(N,Z,e){var x=e(5574),_=e.n(x),p=e(67294),O=e(713),a=e(96923),b=function(){},n=function(d){var t=d.small,y=d.position,C=y===void 0?"bottom":y,P=d.presetColors,E=d.onChange,m=E===void 0?b:E,c=d.onChangeComplete,i=c===void 0?b:c,r=(0,p.useState)(d.color),M=_()(r,2),u=M[0],s=M[1],j=(0,p.useState)(!1),R=_()(j,2),S=R[0],v=R[1],D=function(){v(function(G){return!G})},l=function(){v(!1)},h=function(G){s(G.hex),m(G.hex,G)},I=function(G){s(G.hex),i(G.hex)},T=t?80:120,g={color:{width:"".concat(T,"px"),height:t?"16px":"24px",borderRadius:"2px",background:u},swatch:{padding:"4px",background:"#fff",borderRadius:"2px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:10},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},wrapper:{position:"inherit",zIndex:100}};C==="top"&&(g.wrapper.transform="translate(calc(-100% + ".concat(T+8,"px), -100%)"),g.wrapper.paddingBottom=8);var B=(0,a.tZ)("div",{style:g.swatch,onClick:D},(0,a.tZ)("div",{style:g.color})),U=S?(0,a.tZ)("div",{style:g.popover},(0,a.tZ)("div",{style:g.cover,onClick:l}),(0,a.tZ)("div",{style:g.wrapper},(0,a.tZ)(O.xS,{presetColors:P,color:u,onChange:h,onChangeComplete:I}))):null;return C==="top"?(0,a.tZ)("div",null,U,B):(0,a.tZ)("div",null,B,U)};Z.Z=n},63379:function(N,Z,e){var x=e(5574),_=e.n(x),p=e(67294),O=e(13669),a=e(74855),b=e.n(a),n=e(16397),o=e(96923),d=function(C){var P=C.match(/\d+/g),E=parseInt(P[0],10).toString(16),m=parseInt(P[1],10).toString(16),c=parseInt(P[2],10).toString(16);return E=E.length===1?"0".concat(E):E,m=m.length===1?"0".concat(m):m,c=c.length===1?"0".concat(c):c,"#".concat(E).concat(m).concat(c)},t=function(C){var P=C.showTitle,E=C.direction,m=C.dark,c=C.color,i=c===void 0?{name:"gray",count:13}:c,r=i.name,M=i.count,u=M===void 0?10:M,s=i.description,j=i.english,R=i.chinese,S=p.useState({}),v=_()(S,2),D=v[0],l=v[1],h=p.useRef({});(0,p.useEffect)(function(){var ee={};Object.keys(h.current||{}).forEach(function(w){var H=getComputedStyle(h.current[w])["background-color"];H.includes("rgba")?ee[w]=H:ee[w]=d(H)}),l(ee)},[]);for(var I=E==="horizontal"?"color-palette-horizontal":"color-palette",T=[],g="".concat(j," / ").concat(R),B={dark:["#fff","unset"],default:["rgba(0,0,0,0.85)","#fff"]},U=m?B.dark:B.default,F=_()(U,2),G=F[0],ie=F[1],ne=function(w){var H="".concat(r,"-").concat(w),V=m?n.presetDarkPalettes[r][w-1]:"";T.push((0,o.tZ)(b(),{text:D[H],onCopy:function(){return O.message.success("@".concat(H," copied: ").concat(D[H]))},key:H},(0,o.tZ)("div",{key:w,ref:function(ce){h.current["".concat(r,"-").concat(w)]=ce},className:"main-color-item palette-".concat(r,"-").concat(w),style:{color:(r==="yellow"?w>6:w>5)?ie:G,fontWeight:w===6?"bold":"normal",backgroundColor:V},title:"click to copy color"},(0,o.tZ)("span",{className:"main-color-text"},H),(0,o.tZ)("span",{className:"main-color-value"},D[H]))))},X=1;X<=u;X+=1)ne(X);return(0,o.tZ)("div",{className:I},P&&(0,o.tZ)("div",{className:"color-title"},g,(0,o.tZ)("span",{className:"color-description"},s)),(0,o.tZ)("div",{className:"main-color"},T))};Z.Z=t},24229:function(N,Z,e){var x=e(67294),_=(0,x.createContext)({});Z.Z=_}}]);
