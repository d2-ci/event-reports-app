(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[135],{669:function(e,a,t){e.exports={eventReportsApp:"App_eventReportsApp__1IBE2",flexCt:"App_flexCt__1IpfG",flexDirCol:"App_flexDirCol__1Cgay",flexGrow1:"App_flexGrow1__8jN-Q",flexBasis0:"App_flexBasis0__1mO1H",sectionToolbar:"App_sectionToolbar__12zaV",toolbarType:"App_toolbarType__2hDGa",toolbarMenubar:"App_toolbarMenubar__3audl",mainLeft:"App_mainLeft__G8BTJ",mainRight:"App_mainRight__BzcXA",mainCenterCanvas:"App_mainCenterCanvas__2pvhq"}},701:function(e,a,t){e.exports={menuButton:"MenuButton_menuButton__1AF2U"}},704:function(e){e.exports=JSON.parse('{"Column sub-totals":"Column sub-totals","Columns totals":"Columns totals","Event data":"Event data","Only include completed events":"Only include completed events","Digit group separator":"Digit group separator","None":"None","Space":"Space","Comma":"Comma","Display density":"Display density","Comfortable":"Comfortable","Normal":"Normal","Compact":"Compact","Font size":"Font size","Large":"Large","Small":"Small","Hide empty rows":"Hide empty rows","Use legend for chart colors":"Use legend for chart colors","Legend style":"Legend style","Legend type":"Legend type","Use pre-defined legend per data item":"Use pre-defined legend per data item","Select a single legend for the entire visualization":"Select a single legend for the entire visualization","Legend changes background color":"Legend changes background color","Legend changes text color":"Legend changes text color","Legend":"Legend","Select from legends":"Select from legends","Loading legends":"Loading legends","You can set a minimum or maximum value. This will apply to the entire visualization, all values outside of the minimum/maximum range will not be displayed":"You can set a minimum or maximum value. This will apply to the entire visualization, all values outside of the minimum/maximum range will not be displayed","Minimum data value":"Minimum data value","Maximum data value":"Maximum data value","Clear min/max limits":"Clear min/max limits","Row sub-totals":"Row sub-totals","Row totals":"Row totals","Dimension labels":"Dimension labels","Display organisation unit hierarchy":"Display organisation unit hierarchy","Show legend key":"Show legend key","Add a title":"Add a title","Options":"Options","Table title":"Table title","Display":"Display","Empty data":"Empty data","Totals":"Totals","Data":"Data","Limit values":"Limit values","Limit number of values":"Limit number of values","Limit minimum/maximum values":"Limit minimum/maximum values","Style":"Style"}')},788:function(e,a,t){"use strict";t.r(a);var l=t(791),n=t(8),o=t(705),i=t(0),s=t.n(i),r=t(636),m=t(668),d=t(669),c=t.n(d),u=t(790),p=t(3),v=t(789),b=t(10),y=t(2),g=t.n(y);g.a,b.S.dp24,g.a,b.S.dp24,g.a,b.S.dp16,b.Q.grey300,b.S.dp8,g.a,g.a,b.S.dp12,b.Q.grey900;const E="jsx-3115295887",h=(g.a,b.S.dp8,"jsx-642558349"),C=(g.a,b.S.dp16,"jsx-1665807213"),f=(g.a,b.S.dp8,g.a,b.S.dp8,b.Q.grey700,"jsx-3330936769"),S=(g.a,b.S.dp4,"jsx-684239008"),O=(g.a,g.a,"jsx-1912734430"),x=(g.a,b.S.dp4,b.Q.grey600,"legendDisplayStrategy"),N="legendDisplayStyle",T="legendSet",_={showHierarchy:{defaultValue:!1,requestable:!0,savable:!0},showDimensionLabels:{defaultValue:!1,requestable:!1,savable:!0},colTotals:{defaultValue:!1,requestable:!1,savable:!0},colSubTotals:{defaultValue:!1,requestable:!1,savable:!0},rowTotals:{defaultValue:!1,requestable:!1,savable:!0},rowSubTotals:{defaultValue:!1,requestable:!1,savable:!0},hideEmptyRowItems:{defaultValue:"NONE",requestable:!1,savable:!0},hideEmptyRows:{defaultValue:!1,requestable:!1,savable:!0},legend:{defaultValue:{},requestable:!1,savable:!0},title:{defaultValue:void 0,requestable:!1,savable:!0},displayDensity:{defaultValue:"NORMAL",requestable:!1,savable:!0},fontSize:{defaultValue:"NORMAL",requestable:!1,savable:!0},digitGroupSeparator:{defaultValue:"SPACE",requestable:!1,savable:!0}};const w="SET_UI_OPTIONS",L={options:Object.entries({..._}).reduce(((e,[a,t])=>(e[a]=t.defaultValue,e)),{})};const A=e=>(e=>e.ui)(e).options,k=e=>({type:w,value:e}),D=e=>({type:"SET_UI_OPTION",value:e});var j=Object(r.b)(((e,a)=>({value:A(e)[a.option.name]})),((e,a)=>({onChange:t=>e(k({[a.option.name]:t}))})))((({option:e,label:a,value:t,onChange:l,inverted:n,dataTest:o})=>s.a.createElement("div",{className:C},s.a.createElement(b.f,{checked:n?!t:t,label:a,name:e.name,onChange:({checked:e})=>l(n?!e:e),dense:!0,dataTest:o}))));var $=()=>s.a.createElement("div",{className:C},s.a.createElement(b.D,null,p.a.t("Event data")),s.a.createElement(j,{label:p.a.t("Only include completed events"),option:{name:"completedOnly"}}));var M=Object(r.b)(((e,a)=>({value:A(e)[a.option.name]})),((e,a)=>({onChange:t=>e(k({[a.option.name]:t}))})))((({option:e,label:a,value:t,onChange:l,dataTest:n})=>{var o;const i=null===(o=e.items.find((e=>e.value===t)))||void 0===o?void 0:o.value;return s.a.createElement("div",{className:C},s.a.createElement(b.M,{name:`${e.name}-select`,label:a,onChange:({selected:e})=>l(e),selected:i,inputWidth:"280px",dense:!0,dataTest:`${n}-select`},e.items.map((({value:e,label:a})=>s.a.createElement(b.N,{key:e,value:e,label:a,dataTest:`${n}-option`})))))}));var R=()=>s.a.createElement(M,{label:p.a.t("Digit group separator"),option:{name:"digitGroupSeparator",items:[{value:"NONE",label:p.a.t("None")},{value:"SPACE",label:p.a.t("Space")},{value:"COMMA",label:p.a.t("Comma")}]}});var V=()=>s.a.createElement(M,{label:p.a.t("Display density"),option:{name:"displayDensity",items:[{value:"COMFORTABLE",label:p.a.t("Comfortable")},{value:"NORMAL",label:p.a.t("Normal")},{value:"COMPACT",label:p.a.t("Compact")}]}});var I=()=>s.a.createElement(M,{label:p.a.t("Font size"),option:{name:"fontSize",items:[{value:"LARGE",label:p.a.t("Large")},{value:"NORMAL",label:p.a.t("Normal")},{value:"SMALL",label:p.a.t("Small")}]}}),U=({content:e})=>({key:"data-display",label:p.a.t("Display"),content:e}),q=e=>({key:"data-tab",label:p.a.t("Data"),content:e}),P=e=>({key:"style-tab",label:p.a.t("Style"),content:e});var z=()=>s.a.createElement(j,{label:p.a.t("Column sub-totals"),option:{name:"colSubTotals"}});var F=()=>s.a.createElement(j,{label:p.a.t("Columns totals"),option:{name:"colTotals"}});var B=()=>s.a.createElement(j,{label:p.a.t("Hide empty rows"),option:{name:"hideEmptyRows"}});var G=()=>s.a.createElement(j,{label:p.a.t("Row sub-totals"),option:{name:"rowSubTotals"}});var X=()=>s.a.createElement(j,{label:p.a.t("Row totals"),option:{name:"rowTotals"}});var H=()=>s.a.createElement(j,{label:p.a.t("Dimension labels"),option:{name:"showDimensionLabels"}});var Q=()=>s.a.createElement(j,{label:p.a.t("Display organisation unit hierarchy"),option:{name:"showHierarchy"}});const J=({type:e,label:a,placeholder:t,width:l,option:n,value:o,onChange:i,disabled:r,dataTest:m})=>s.a.createElement("div",{className:C},s.a.createElement(b.C,{type:e,label:a,onChange:({value:e})=>i(e),name:n.name,value:o,placeholder:t,inputWidth:l,dense:!0,disabled:r,dataTest:`${m}-input`}));J.defaultProps={option:{}};var K=Object(r.b)(((e,a)=>({value:A(e)[a.option.name]})),((e,a)=>({onChange:t=>e(k({[a.option.name]:t}))})))(J);var W=({label:e})=>s.a.createElement(K,{type:"text",width:"280px",label:e,placeholder:p.a.t("Add a title"),option:{name:"title"}}),Y=({content:e})=>({key:"data-empty-data",label:p.a.t("Empty data"),content:e}),Z=({content:e})=>({key:"data-totals",label:p.a.t("Totals"),content:e}),ee=t(787),ae=t(5),te=t.n(ae);const le={legendSets:{resource:"legendSets",params:{fields:["id","displayName~rename(name)","legends[id,displayName~rename(name),startValue,endValue,color]"],paging:"false"}}},ne=({value:e,loading:a,options:t,onFocus:l,onChange:n,dataTest:o})=>s.a.createElement(b.M,{name:"legendSetSelect",label:p.a.t("Legend"),selected:null===e||void 0===e?void 0:e.id,inputWidth:"280px",placeholder:p.a.t("Select from legends"),loadingText:p.a.t("Loading legends"),loading:a,dense:!0,onFocus:l,onChange:({selected:e})=>n({id:e,displayName:t.find((a=>a.value===e)).label}),dataTest:`${o}-select`},t.map((({value:e,label:a})=>s.a.createElement(b.N,{key:e,value:e,label:a,dataTest:`${o}-option`}))));var oe=Object(r.b)((e=>({value:void 0})),(e=>({onChange:({id:a,displayName:t})=>e(D({value:{id:a,displayName:t},optionId:T}))})))((({value:e,onChange:a,dataTest:t})=>{const l=Object(n.e)(),[o,r]=Object(i.useState)([]),[m,d]=Object(i.useState)(!1);e&&e.id&&(o.find((a=>a.value===e.id))||r([...o,{value:e.id,label:e.displayName}]));return s.a.createElement(ne,{loading:!m,value:e,options:o,onChange:a,onFocus:async()=>{if(!m){const{legendSets:e}=await l.query(le);if(e){const a=e.legendSets.map((e=>({value:e.id,label:e.name})));r(a)}d(!0)}},dataTest:t})}));var ie=Object(r.b)((e=>({value:void 0})),(e=>({onChange:({value:a})=>e(D({optionId:x,value:a}))})))((({value:e,onChange:a})=>s.a.createElement(i.Fragment,null,s.a.createElement(b.i,{name:x,dense:!0},s.a.createElement(b.K,{key:ee.a,label:p.a.t("Use pre-defined legend per data item"),value:ee.a,checked:e===ee.a,onChange:a,dense:!0,dataTest:`legend-display-strategy-${ee.a}`}),s.a.createElement(b.K,{key:ee.b,label:p.a.t("Select a single legend for the entire visualization"),value:ee.b,checked:e===ee.b,onChange:a,dense:!0,dataTest:`legend-display-strategy-${ee.b}`})),e===ee.b?s.a.createElement("div",{className:S},s.a.createElement(oe,{dataTest:"fixed-legend-set"})):null)));var se=Object(r.b)(((e,a)=>({value:a.option.id?void a.option.id:A(e)[a.option.name]})),((e,a)=>({onChange:t=>a.option.id?e(D({optionId:a.option.id,value:t})):e(k({[a.option.name]:t}))})))((({option:e,label:a,value:t,onChange:l,disabled:n,dataTest:o})=>s.a.createElement(b.i,{name:e.name,label:a,dense:!0},e.items.map((({id:e,label:a})=>s.a.createElement(b.K,{key:e,label:a,value:e,checked:t===e,onChange:({value:e})=>l(e),disabled:n,dense:!0,dataTest:`${o}-option-${e}`}))))));var re=()=>s.a.createElement(se,{option:{id:N,items:[{id:ee.c,label:p.a.t("Legend changes background color")},{id:ee.d,label:p.a.t("Legend changes text color")}]},dataTest:"legend-display-style"});var me=()=>s.a.createElement(j,{label:p.a.t("Show legend key"),option:{id:"showLegendKey"},dataTest:"option-legend-key"});var de=Object(r.b)((e=>({legendSet:void 0,legendDisplayStrategy:void 0})),(e=>({onChange:a=>e(D(a))})))((({legendSet:e,legendDisplayStrategy:a,onChange:t,hideStyleOptions:l})=>{const[n,o]=Object(i.useState)(!((!a||a===ee.b)&&!e));return s.a.createElement("div",{className:C},s.a.createElement(b.f,{checked:n,label:p.a.t("Use legend for chart colors"),onChange:({checked:e})=>{o(e),e?(t({optionId:x,value:ee.a}),t({optionId:N,value:ee.c})):(t({optionId:x,value:ee.b}),t({optionId:T,value:void 0}),t({optionId:N,value:void 0}))},dense:!0}),n?s.a.createElement("div",{className:S},l?null:s.a.createElement("div",{className:C},s.a.createElement(b.j,null,s.a.createElement(b.F,null,s.a.createElement("span",{className:te()(E,h)},p.a.t("Legend style"))),s.a.createElement("div",{className:C},s.a.createElement(re,null)))),s.a.createElement("div",{className:C},s.a.createElement(b.j,null,s.a.createElement(b.F,null,s.a.createElement("span",{className:te()(E,{[h]:l})},p.a.t("Legend type"))),s.a.createElement("div",{className:C},s.a.createElement(ie,null)))),s.a.createElement("div",null,s.a.createElement(me,null))):null)}));function ce(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const ue=({name:e,value:a,onChange:t})=>s.a.createElement("div",{style:{width:"112px"}},s.a.createElement(b.L,{name:e,onChange:({selected:e})=>{t(e)},selected:a,tabIndex:"0",inputMaxWidth:"106px",dense:!0},[{id:"EQ",label:"="},{id:"GT",label:">"},{id:"GE",label:">="},{id:"LT",label:"<"},{id:"LE",label:"<="}].map((({id:e,label:a})=>s.a.createElement(b.N,{key:e,value:e,label:a}))))),pe=({name:e,value:a,onChange:t})=>s.a.createElement(b.B,{name:e,value:a,type:"number",onChange:({value:e})=>t(e),width:"72px",dense:!0});class ve extends i.Component{constructor(e){super(e),ce(this,"onClear",(()=>this.setState(this.defaultState,this.props.onChange("")))),ce(this,"onChange",(e=>a=>{this.setState({[e]:a},(()=>{const{op1:e,v1:a,op2:t,v2:l}=this.state,n=[];e&&a&&n.push(`${e}:${a}`),t&&l&&n.push(`${t}:${l}`),this.props.onChange(n.length>0?n.join(";"):"")}))})),this.defaultState={op1:"",v1:"",op2:"",v2:""};const[a="",t="",l="",n=""]=e.value.split(/[;:]/);this.state={op1:a,v1:t,op2:l,v2:n}}render(){const{op1:e,v1:a,op2:t,v2:l}=this.state;return s.a.createElement("div",{className:C},s.a.createElement("p",{className:f},p.a.t("You can set a minimum or maximum value. This will apply to the entire visualization, all values outside of the minimum/maximum range will not be displayed")),s.a.createElement("div",{className:O},s.a.createElement("div",{style:{width:"250px"}},s.a.createElement(b.D,null,p.a.t("Minimum data value")),s.a.createElement("div",{className:O},s.a.createElement(ue,{name:"op1",value:e,onChange:this.onChange("op1")}),s.a.createElement(pe,{name:"v1",value:a,onChange:this.onChange("v1")}))),s.a.createElement("div",{style:{width:"250px"}},s.a.createElement(b.D,null,p.a.t("Maximum data value")),s.a.createElement("div",{className:O},s.a.createElement(ue,{name:"op2",value:t,onChange:this.onChange("op2")}),s.a.createElement(pe,{name:"v2",value:l,onChange:this.onChange("v2")})))),s.a.createElement("div",{style:{paddingTop:"16px"}},s.a.createElement(b.c,{onClick:this.onClear},p.a.t("Clear min/max limits"))))}}var be=Object(r.b)((e=>({value:A(e).measureCriteria||""})),(e=>({onChange:a=>e(k({measureCriteria:a}))})))(ve);const ye=e=>e===v.a?[q([U({content:s.a.Children.toArray([s.a.createElement(Q,null),s.a.createElement(H,null)])}),Z({content:s.a.Children.toArray([s.a.createElement(F,null),s.a.createElement(z,null),s.a.createElement(X,null),s.a.createElement(G,null)])}),Y({content:s.a.Children.toArray([s.a.createElement(B,null)])})]),{key:"legend-tab",label:p.a.t("Legend"),content:[{key:"legend-section-1",content:s.a.Children.toArray([s.a.createElement(de,null)])}]},P([{key:"style-section-1",content:s.a.Children.toArray([s.a.createElement(W,{label:p.a.t("Table title")}),s.a.createElement(V,null),s.a.createElement(I,null),s.a.createElement(R,null)])}]),{key:"limitValues-tab",label:p.a.t("Limit values"),content:[{key:"limitValues-limit-min-max",label:p.a.t("Limit minimum/maximum values"),content:s.a.Children.toArray([s.a.createElement(be,null)])}]}]:[q([U({content:s.a.Children.toArray([s.a.createElement($,null)])})]),P([{key:"style-section-1",content:s.a.Children.toArray([s.a.createElement(V,null),s.a.createElement(I,null),s.a.createElement(R,null)])}])];var ge=t(701),Ee=t.n(ge);var he=({children:e,dataTest:a,disabled:t,name:l,onBlur:n,onClick:o,onFocus:i})=>s.a.createElement("button",{className:Ee.a.menuButton,"data-test":a,disabled:t,name:l,onBlur:n,onClick:o,onFocus:i},e);var Ce=Object(r.b)((()=>({})))((()=>{const[e,a]=Object(i.useState)(!1),t=()=>{l()},l=()=>{a(!e)},n=ye();return s.a.createElement(s.a.Fragment,null,s.a.createElement(he,{"data-test":"app-menubar-options-button",onClick:l},p.a.t("Options")),e&&s.a.createElement(u.a,{optionsConfig:n,onUpdate:()=>{t()},onClose:t}))}));const fe=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:`${c.a.eventReportsApp} flex-ct flex-dir-col`},s.a.createElement("div",{className:`${c.a.sectionToolbar} ${c.a.flexCt}`},s.a.createElement("div",{className:c.a.toolbarType},"vis type selector"),s.a.createElement("div",{className:`${c.a.toolbarMenubar} ${c.a.flexGrow1}`},"menubar",s.a.createElement(Ce,null))),s.a.createElement("div",{className:`${c.a.sectionMain} ${c.a.flexGrow1} ${c.a.flexCt}`},s.a.createElement("div",{className:c.a.mainLeft},"dimension panel"),s.a.createElement("div",{className:`${c.a.mainCenter} ${c.a.flexGrow1} ${c.a.flexBasis0} ${c.a.flexCt} ${c.a.flexDirCol}`},s.a.createElement("div",{className:c.a.mainCenterLayout},"layout"),s.a.createElement("div",{className:c.a.mainCenterTitlebar},"titlebar"),s.a.createElement("div",{className:`${c.a.mainCenterCanvas} ${c.a.flexGrow1}`},"visualization")))));fe.contextTypes={},fe.childContextTypes={};var Se=Object(r.b)((()=>({})),{})(fe);const Oe={resource:"userSettings",params:{key:["keyUiLocale","keyAnalysisDisplayProperty"]}},xe=Object(i.createContext)({});var Ne=({children:e})=>{const[a,t]=Object(i.useState)([]),l=Object(n.e)();return Object(i.useEffect)((()=>{!async function(){const{userSettings:e}=await l.query({userSettings:Oe});t({...e,displayProperty:e.keyAnalysisDisplayProperty,displayPropertyName:"name"===e.keyAnalysisDisplayProperty?"displayName":"displayShortName",uiLocale:e.keyUiLocale})}()}),[]),s.a.createElement(xe.Provider,{value:{userSettings:a}},e)};var Te=t(665);t(702);const _e="ADD_METADATA",we={};var Le=Object(Te.b)({ui:(e=L,a)=>{switch(a.type){case"SET_UI":return{...a.value};case w:return{...e,options:{...e.options,...a.value}};default:return e}},metadata:(e=we,a)=>a.type===_e?{...e,...a.value}:e});var Ae=e=>{const a="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name:"data-visualizer-app"}):Te.c;return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,Object(Te.d)(Le,a(Object(Te.a)(...e)))};var ke=({dispatch:e})=>a=>t=>{var l;"object"===typeof t.metadata&&!Array.isArray(t.metadata)&&e((l=t.metadata,{type:_e,value:l})),a(t)},De=t(703),je=Object(De.a)(),$e=t(704);p.a.addResources("en","default",$e);p.a;a.default=()=>{const{baseUrl:e}=Object(n.d)(),a=Object(n.e)(),t=Ae([m.a.withExtraArgument(a),ke]);window.Cypress&&(window.store=t);const[d,c]=Object(i.useState)(null),u=Object(i.useCallback)((async()=>await Object(l.a)(a)),[a]);Object(i.useEffect)((()=>{(async()=>{const e=await u();c(e)})()}),[]);const p={schemas:[]};return s.a.createElement(r.a,{store:t},s.a.createElement(Ne,null,s.a.createElement(xe.Consumer,null,(({userSettings:t})=>null!==t&&void 0!==t&&t.keyUiLocale?s.a.createElement(o.a,{d2Config:p,i18nRoot:"./i18n_old",locale:t.keyUiLocale},(({d2:l})=>l?s.a.createElement(Se,{d2:l,location:je.location,baseUrl:e,dataEngine:a,ouLevels:d,userSettings:t}):null)):null))))}}}]);
//# sourceMappingURL=app.53a67450.chunk.js.map