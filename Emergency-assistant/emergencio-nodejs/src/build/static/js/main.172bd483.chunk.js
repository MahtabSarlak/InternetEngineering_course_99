(this.webpackJsonpemergencio=this.webpackJsonpemergencio||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){},114:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},140:function(e,t,n){e.exports=n(210)},167:function(e,t,n){},200:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(12),c=n.n(l),o=n(10),i=n(11),u=n(22);n(94);function s(e){return r.a.createElement(u.b,{className:"d-flex list-item-container list-item-color",to:"/fill-forms/"+e.form._id},r.a.createElement("div",null,e.form._id.substring(0,5)),r.a.createElement("div",null,e.form.title))}var m=n(120),d=n(119),f=n.n(d),b=function(){return r.a.createElement(f.a,{showAt:100,speed:1,easing:"easeOutSine"},r.a.createElement(m.a,{className:"arrow-up scroll"}))},p=(n(103),n(36)),E=n(30),v=n(53),g=n(89),h=n(41),j=Object(v.b)({uri:"https://emergencio.herokuapp.com/graphql"}),O={watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}},y=Object(g.a)((function(e,t){var n=t.headers,a=localStorage.getItem("token");return{headers:Object(p.a)(Object(p.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),x=new E.a({link:y.concat(j),cache:new h.a({dataIdFromObject:function(e){return e._id?"".concat(e.__typename,":").concat(e._id):null}}),defaultOptions:O}),w=n(35),C=n(33);function N(){var e=Object(w.a)(["\n  {\n    getAllAreas {\n      _id\n      title\n      geoLocation {\n        type\n        properties {\n          name\n        }\n        geometry {\n          coordinates\n        }\n      }\n    }\n  }\n"]);return N=function(){return e},e}function k(){var e=Object(w.a)(["\n  query Role($username: String!) {\n    getRoleByUserName(userName: $username) {\n      _id\n      userName\n      role\n    }\n  }\n"]);return k=function(){return e},e}function S(){var e=Object(w.a)(["\n  query {\n    getAllFilledForms {\n      _id\n      title\n      formId\n      fields {\n        name\n        title\n        type\n        value\n      }\n    }\n  }\n"]);return S=function(){return e},e}function F(){var e=Object(w.a)(["\n  query {\n    getAllFilledForms {\n      _id\n      title\n      formId\n    }\n  }\n"]);return F=function(){return e},e}function I(){var e=Object(w.a)(["\n  query Form($id: String!) {\n    getFilledFormById(id: $id) {\n      _id\n      title\n      fields {\n        name\n        title\n        type\n        value\n      }\n    }\n  }\n"]);return I=function(){return e},e}function L(){var e=Object(w.a)(["\n  query Form($id: String!) {\n    getFormById(id: $id) {\n      _id\n      title\n      fields {\n        name\n        title\n        type\n        required\n        options {\n          label\n          value\n        }\n      }\n    }\n  }\n"]);return L=function(){return e},e}function A(){var e=Object(w.a)(["\n  {\n    getAllEmptyForms {\n      title\n      _id\n      fields {\n        name\n        title\n        type\n        required\n        options {\n          _id\n          label\n          value\n        }\n      }\n    }\n  }\n"]);return A=function(){return e},e}var _=Object(C.a)(A()),z=Object(C.a)(L()),q=Object(C.a)(I()),B=Object(C.a)(F()),R=Object(C.a)(S()),V=Object(C.a)(k()),P=Object(C.a)(N()),M=n(25),H=n(255),$=n(67),J=(n(167),n(254)),Q=n(9),U=Object(Q.a)({root:{backgroundColor:"#004654",color:"white",boxShadow:"0 3px 5px 2px rgba(255, 255, 255, .1)"},label:{fontSize:"25px"}})(J.a),T=Object(Q.a)({root:{backgroundColor:"#004654",color:"white",boxShadow:"0 3px 5px 2px rgba(255, 255, 255, .1)"},label:{fontSize:"10px"}})(J.a),W=Object(Q.a)({root:{backgroundColor:"white",color:"#808080",boxShadow:"0 3px 5px 2px rgba(255, 255, 255, .1)"},label:{fontSize:"10px"}})(J.a),D=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),l=n[0],c=n[1],i=e.onSearch,u=e.variant,s=void 0===u?"main":u,m=e.text,d=void 0===m?"\u062c\u0633\u062a \u0648 \u062c\u0648":m,f=r.a.useState(null),b=Object(o.a)(f,2),p=b[0],E=b[1],v=function(e){E(e.currentTarget)},g=Boolean(p),h=g?"simple-popover":void 0;return r.a.createElement("div",{className:"search-container d-flex flex-column justify-content-center align-items-center"},"main"===s&&r.a.createElement(T,{onClick:v},r.a.createElement($.b,{className:"search-icon"}),r.a.createElement("div",{className:"search-text"},d)),"light"===s&&r.a.createElement(W,{onClick:v},r.a.createElement($.b,{className:"search-icon"}),r.a.createElement("div",{className:"search-text"},d)),r.a.createElement(H.a,{id:h,open:g,anchorEl:p,onClose:function(){E(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement("input",{type:"text",dir:"rtl",placeholder:"\u062c\u0633\u062a \u0648 \u062c\u0648",defaultValue:""!==l?l:null,className:"form-control",onChange:function(e){var t=e.target.value.toLowerCase();i(t),c(t)}})))};function G(e){return r.a.createElement("div",{className:"d-flex  list-item-container list-header-sticky list-header-color"},r.a.createElement("div",null,"\u0634\u0645\u0627\u0631\u0647\u200c\u06cc\u200c \u0641\u0631\u0645"),r.a.createElement("div",{className:"d-flex list-row-item"},r.a.createElement(D,{onSearch:e.onSearch,text:"\u0646\u0627\u0645 \u0641\u0631\u0645"})))}var Z=n(266),K=n(265),X=n(256),Y=function(e){return r.a.createElement(K.a,Object.assign({elevation:6,variant:"filled"},e))},ee=Object(X.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),te=function(){console.error("openSuccessSnack isn't set yet!")},ne=function(){console.error("openErrorSnack isn't set yet!")},ae=function(e){var t=ee(),n=r.a.useState(!1),a=Object(o.a)(n,2),l=a[0],c=a[1],i=r.a.useState(!1),u=Object(o.a)(i,2),s=u[0],m=u[1],d=r.a.useState(""),f=Object(o.a)(d,2),b=f[0],p=f[1];te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" \u0645\u0648\u0641\u0651\u0642\u06cc\u0651\u062a \u0622\u0645\u06cc\u0632 \u0628\u0648\u062f";p(e),m(!0)},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"!\u0627\u0648\u0647 \u0627\u0648\u0647 \u0627\u062a\u0651\u064e\u0641\u0627\u0642 \u0628\u062f\u06cc \u0627\u0641\u062a\u0627\u062f";p(e),c(!0)};var E=function(e,t){"clickaway"!==t&&(m(!1),c(!1))};return r.a.createElement("div",{className:t.root},r.a.createElement(Z.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:s,autoHideDuration:2e3,onClose:E},r.a.createElement(Y,{onClose:E,severity:"success"},b)),r.a.createElement(Z.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:l,autoHideDuration:1e4,onClose:E},r.a.createElement(Y,{onClose:E,severity:"error"},b)))},re=n(268),le=n(257),ce=Object(X.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#004654"}}})),oe=function(e){var t=ce();return r.a.createElement("div",null,r.a.createElement(re.a,{className:t.backdrop,open:e.open},r.a.createElement(le.a,{color:"white"})))};var ie=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),u=Object(o.a)(c,2),m=u[0],d=u[1],f=Object(i.g)(),p=Object(M.b)(_,{client:x}),E=p.loading,v=p.error,g=p.data;return v&&(ne("\u062f\u0631 \u06af\u0631\u0641\u062a\u0646 \u0627\u0637\u0651\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0645 \u0645\u0634\u06a9\u0644\u06cc \u0631\u062e \u062f\u0627\u062f"),f.push("/")),Object(a.useEffect)((function(){g&&l(g.getAllEmptyForms)}),[g]),r.a.createElement("div",{className:"fillformlist d-flex flex-column justify-content-center align-items-center"},r.a.createElement(G,{onSearch:d}),n.filter((function(e){return e.title.toLowerCase().includes(m)})).map((function(e){return r.a.createElement(s,{form:e})})),r.a.createElement(b,null),r.a.createElement(oe,{open:E}))},ue=n(54),se=n(267),me=n(264),de=n(214),fe=function(e,t){if(!e||""===e||'""'===e)return"---";switch(t.toLowerCase()){case"date":return(e=JSON.parse(e)).year+"/"+e.month+"/"+e.day;case"location":var n=JSON.parse(e),a=parseFloat(n.lat),r=parseFloat(n.lng);return"("+a.toFixed(4)+", "+r.toFixed(4)+")";default:return e.substring(1,e.length-1)}},be=(n(84),n(86)),pe=n.n(be),Ee=(n(105),function(e){return e.disabled?r.a.createElement(ve,Object.assign({},e,{checkforError:function(){}})):r.a.createElement(me.a,{disableUnderline:!0,onChange:e.updateValue(e.index,e.field.required),displayEmpty:!0,className:"form-control input "+(e.error?"is-invalid":""),value:e.disabled?e.field.value:e.value,disabled:e.disabled},e.field.options.map((function(e){return r.a.createElement(se.a,{value:e.value},e.label)})))}),ve=function(e){var t=e.field,n=t.value,a=t.required,l=(t.index,t.type);return r.a.createElement("input",{type:"text",dir:"rtl",className:"form-control input "+(e.error?"is-invalid":""),id:e.field.name,onChange:e.updateValue(e.index,a),onFocus:e.checkforError(e.index,a),value:e.disabled?fe(n,l):e.value,disabled:e.disabled})},ge=function(e){return e.disabled?r.a.createElement(ve,Object.assign({},e,{checkforError:function(){}})):r.a.createElement("input",{type:"number",dir:"rtl",className:"form-control input "+(e.error?"is-invalid":""),id:e.field.name,onChange:e.updateValue(e.index,e.field.required),onFocus:e.checkforError(e.index,e.field.required),value:e.disabled?e.field.value:null,disabled:e.disabled})},he=function(e){return e.disabled?r.a.createElement(ve,Object.assign({},e,{checkforError:function(){}})):r.a.createElement(pe.a,{locale:"fa",calendarPopperPosition:"bottom",colorPrimary:"#004654",value:e.value,shouldHighlightWeekends:!0,inputPlaceholder:"\u0631\u0648\u06cc \u062a\u0642\u0648\u06cc\u0645 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",inputClassName:"form-control input "+(e.error?"is-invalid":""),onChange:e.updateValue(e.index,e.field.required)})},je=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",null,!l&&r.a.createElement("button",{onClick:function(){c(!0)},className:"input map-button form-control "+(e.error?"is-invalid":"")},e.disabled?"\u0645\u0634\u0627\u0647\u062f\u0647 \u0631\u0648\u06cc \u0646\u0642\u0634\u0647":e.value?"\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0646\u062a\u062e\u0627\u0628":"\u0631\u0648\u06cc \u0646\u0642\u0634\u0647 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"),r.a.createElement(de.a,{open:l,onClose:function(){c(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(Oe,{google:e.google,index:e.index,initiLocation:e.initiLocation,value:e.value,mapOnClick:e.mapOnClick})))},Oe=function(e){return r.a.createElement(ue.Map,{google:e.google,zoom:15,containerStyle:{width:"80%",height:"60%"},initialCenter:e.value?e.value:e.initiLocation,key:e.index,onClick:e.mapOnClick(e.index),className:"map"},e.value&&r.a.createElement(ue.Marker,{key:e.index,position:e.value}))};var ye=function(e){var t=e.value,n=e.error,a=e.index,l=e.field,c=e.updateValue,o=e.checkforError,i=e.mapOnClick,u=e.google,s=e.isFilled;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-column "},r.a.createElement("label",{for:l.name},":",l.title),l.options&&l.options.length>0?r.a.createElement(Ee,{index:a,error:n,field:l,value:t,disabled:s,updateValue:c}):"text"===l.type.toLowerCase()?r.a.createElement(ve,{index:a,error:n,field:l,value:t,updateValue:c,disabled:s,checkforError:o}):"number"===l.type.toLowerCase()?r.a.createElement(ge,{index:a,error:n,field:l,updateValue:c,disabled:s,checkforError:o}):"date"===l.type.toLowerCase()?r.a.createElement(he,{index:a,error:n,field:l,updateValue:c,disabled:s,value:t}):"location"===l.type.toLowerCase()?r.a.createElement(je,{index:a,error:n,field:l,updateValue:c,value:s?JSON.parse(l.value):t,mapOnClick:i,disabled:s,google:u}):void 0)),r.a.createElement("div",{className:"error-message"},n?"\u0644\u0637\u0641\u0627\u064b \u0645\u0642\u062f\u0627\u0631 \u0628\u0627\u0644\u0627 \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f":""))};function xe(){var e=Object(w.a)(["\n  mutation($filledForm: FilledFormInput) {\n    createFilledForm(filledForm: $filledForm) {\n      _id\n    }\n  }\n"]);return xe=function(){return e},e}var we=Object(C.a)(xe());n(183);var Ce=Object(ue.GoogleApiWrapper)({apiKey:"AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28"})((function(e){var t=Object(i.g)(),n=e.form.fields?e.form.fields:[],l=Object(a.useState)({}),c=Object(o.a)(l,2),u=c[0],s=c[1],m=Object(a.useState)({}),d=Object(o.a)(m,2),f=d[0],b=d[1],E=Object(M.a)(we,{client:x}),v=Object(o.a)(E,2),g=v[0],h=(v[1].data,Object(a.useState)({lat:35.80209937653889,lng:51.3935485060881})),j=Object(o.a)(h,2),O=j[0],y=j[1];Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){y({lat:e.coords.latitude,lng:e.coords.longitude})}),(function(e){return console.log(e)}))}),[]);var w=function(t,n){return function(n,a,r){if(!e.isFilled){var l=r.latLng.lat(),c=r.latLng.lng(),o=Object(p.a)({},u);o[t]={lat:l,lng:c},s(o)}}},C=function(e,t){return function(n){N(e,t)(n);var a=n.target?n.target.value:n,r=Object(p.a)({},u);r[e]=a,s(r)}},N=function(e,t){return function(n){var a=n.target?n.target.value:n,r=Object(p.a)({},f);return r[e]=t&&(!a||""===a),b(r),r[e]}};return r.a.createElement("div",{className:"d-flex flex-column  p-5 m-3 form-container"},n.map((function(t,n){return r.a.createElement(ye,{index:n,value:u[n],error:f[n],field:t,updateValue:C,checkforError:N,mapOnClick:w,initiLocation:O,google:e.google,isFilled:e.isFilled})})),!e.isFilled&&r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"submit-button",onClick:function(){var a=!0,r=Object(p.a)({},f);if(n.forEach((function(e,t){r[t]=n[t].required&&(!u[t]||""===u[t]),u[t]||(u[t]=""),a=a?!r[t]:a})),b(r),a){var l=Object.keys(u).map((function(e,t){return{name:n[e].name,title:n[e].title,type:n[e].type,value:JSON.stringify(u[e]?u[e]:"")}})),c={};c.title=e.form.title,c.formId=e.form._id,c.fields=l;try{g({variables:{filledForm:c}}),te("\u0641\u0631\u0645 \u0628\u0627 \u0645\u0648\u0641\u0651\u0642\u06cc\u0651\u062a \u062b\u0628\u062a \u0634\u062f")}catch(o){ne()}t.push("/")}}},"\u062b\u0628\u062a")))}));n(200);function Ne(e){var t=!1,n=Object(i.g)();e.location.pathname.includes("/reports/details/")&&(t=!0);var l=Object(i.i)().formId,c=Object(a.useState)([]),u=Object(o.a)(c,2),s=u[0],m=u[1],d=Object(M.b)(t?q:z,{client:x,variables:{id:l}}),f=d.loading,b=d.error,p=d.data;return b&&(ne("\u062f\u0631 \u06af\u0631\u0641\u062a\u0646 \u0627\u0637\u0651\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0645 \u0645\u0634\u06a9\u0644\u06cc \u0631\u062e \u062f\u0627\u062f"),n.push("/")),Object(a.useEffect)((function(){p&&m(t?p.getFilledFormById:p.getFormById)}),[f,p]),r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center form-card-container"},r.a.createElement("div",{className:"d-flex flex-column m-3 p-3 justify-content-center align-items-center form-card-back"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(Ce,{isFilled:t,form:s}))),r.a.createElement(oe,{open:f}))}n(114);var ke=n(32),Se=(n(63),function(e){var t=Object(ke.useMediaQuery)({maxAspectRatio:"4/3"}),n=Object(i.g)(),a=e.fields,l=e.index,c=e.recordId;return r.a.createElement("tr",{class:"list-group-item-info",onClick:function(){return n.push({pathname:"/reports/details/"+c,state:{filledFields:a,isFilled:!0}})}},t&&r.a.createElement("td",{class:"countryCardHeader"},r.a.createElement("div",{class:"d-flex flex-row justify-content-center"},r.a.createElement("div",null,l+1))),a.map((function(e){return r.a.createElement("td",null,r.a.createElement("div",{class:"cardInfo"},r.a.createElement("div",null,fe(e.value,e.type.toLowerCase())),r.a.createElement("div",{class:"propLabel"},e.title)))})))}),Fe=function(e){var t=e.data;return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("th",{class:"headcolstick"},e.title)}))))},Ie=n(55),Le=n(128),Ae=(n(204),function(e){return r.a.createElement("div",null,r.a.createElement(Le.CSVLink,{data:e.data,filename:e.filename+".csv"},r.a.createElement(Ie.a,{className:"csv-icon csv"})))}),_e=n(258),ze=n(260),qe=n(259),Be=(n(205),Object(X.a)({root:{minWidth:"50vh",borderRadius:15,borderColor:"#004654",borderStyle:"solid",borderWidth:"5px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})),Re=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)([]),s=Object(o.a)(u,2),m=s[0],d=s[1],f=Object(i.g)(),b=Object(a.useState)(["\u0647\u06cc\u062c\u06a9\u062f\u0627\u0645"]),p=Object(o.a)(b,2),E=p[0],v=p[1],g=Object(a.useState)("\u0647\u06cc\u062c\u06a9\u062f\u0627\u0645"),h=Object(o.a)(g,2),j=h[0],O=h[1],y=Object(a.useState)("\u0647\u06cc\u062c\u06a9\u062f\u0627\u0645"),w=Object(o.a)(y,2),C=w[0],N=w[1],k=Object(M.b)(P,{client:x}),S=k.loading,F=k.error,I=k.data,L=e.forms[0].fields.filter((function(e){return"location"===e.type.toLowerCase()}));F&&(ne(),f.push("/")),Object(a.useEffect)((function(){I&&(d(I.getAllAreas),v((function(){return I.getAllAreas.map((function(e){return e.title})).concat(["\u0647\u06cc\u0686\u06a9\u062f\u0627\u0645"])})))}),[I]);var A=Be(),_=function(){c(!1)};return r.a.createElement("div",null,r.a.createElement(Ie.b,{className:"filter-icon filterBtn",onClick:function(){c(!0)}}),r.a.createElement(de.a,{open:l,onClose:_,style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(_e.a,{className:A.root,variant:"outlined"},r.a.createElement(qe.a,null,r.a.createElement("div",{className:"d-flex flex-row justify-content-around align-items-center"},r.a.createElement("div",{className:" filter-label"},"\u0645\u06a9\u0627\u0646"),r.a.createElement("div",{className:"filter-label"},"\u0645\u0646\u0637\u0642\u0647")),r.a.createElement("div",{className:"d-flex flex-row justify-content-around align-items-center"},r.a.createElement(me.a,{disableUnderline:!0,onChange:function(e){O(e.target.value)},displayEmpty:!0,className:"m-2 form-control input ",value:j},E.map((function(e){return r.a.createElement(se.a,{value:e},r.a.createElement("div",null,e))}))),r.a.createElement(me.a,{disableUnderline:!0,onChange:function(e){N(e.target.value)},displayEmpty:!0,className:"m-2 form-control input ",value:C},L.map((function(e){return r.a.createElement(se.a,{value:e.title},r.a.createElement("div",null,e.title))})))),r.a.createElement("div",{className:"d-flex mt-4 flex-row justify-content-around align-items-center"},r.a.createElement(T,{onClick:function(){_(),e.setNewFilter({location:C,area:m.find((function(e){return e.title===j}))})}}," \u0627\u0639\u0645\u0627\u0644"),r.a.createElement(T,{onClick:e.resetFilter},"\u0627\u0632 \u0646\u0648"))),r.a.createElement(ze.a,null))),r.a.createElement(oe,{open:S}))},Ve=n(79),Pe=function(e){for(var t=Object(ke.useMediaQuery)({maxAspectRatio:"4/3"}),n=(Object(i.g)(),e.records),a=[],l=0;l<n[0].fields.length;l++){var c={sum:0,title:n[0].fields[l].title,type:n[0].fields[l].type};if("number"===n[0].fields[l].type.toLowerCase())for(var o=0;o<n.length;o++)c.sum+=parseFloat(fe(n[o].fields[l].value,"number"));a.push(c)}return r.a.createElement("tr",{class:"list-group-item-info"},t&&r.a.createElement("td",{class:"countryCardHeader"},r.a.createElement("div",{class:"d-flex flex-row justify-content-center"},r.a.createElement("div",null,"\u0645\u062c\u0645\u0648\u0639"))),a.map((function(e){return r.a.createElement("td",{className:"footerBg"},r.a.createElement("div",{class:"footerCardInfo"},r.a.createElement("div",null,"number"===e.type.toLowerCase()?e.sum:"-"),r.a.createElement("div",{class:"propLabel"},e.title)))})))},Me=function(e){if(0!==e.length){var t=e[0].fields.map((function(e){return e.title})),n=e.map((function(e){return e.fields.map((function(e){return e.value}))}));return[t].concat(n)}},He=function(){var e=Object(i.i)().formId,t=Object(a.useState)([]),n=Object(o.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)(!1),s=Object(o.a)(u,2),m=s[0],d=s[1],f=Object(a.useState)({}),p=Object(o.a)(f,2),E=p[0],v=p[1],g=Object(i.g)(),h=Object(M.b)(R,{client:x}),j=h.loading,O=h.error,y=h.data;O&&(ne("\u062f\u0631 \u06af\u0631\u0641\u062a\u0646 \u0627\u0637\u0651\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0645 \u0645\u0634\u06a9\u0644\u06cc \u0631\u062e \u062f\u0627\u062f"),g.push("/")),Object(a.useEffect)((function(){return y&&w()}),[y,j]);var w=function(){c(y.getAllFilledForms.filter((function(t){return t.formId===e})),(function(){return d(!0)}))},C=Object(ke.useMediaQuery)({maxAspectRatio:"4/3"}),N=Me(l);return l.length>0?r.a.createElement("div",{className:"reportslist d-flex flex-column justify-content-center align-items-center"},r.a.createElement(Re,{forms:l,setNewFilter:function(e){v(e)},resetFilter:function(){v({})}}),r.a.createElement("table",null,!C&&r.a.createElement(Fe,{data:l[0].fields}),r.a.createElement("tbody",null,l.filter((function(e){return!E.area||!E.location||e.fields.filter((function(e){if("location"!==e.type.toLowerCase()||e.title!==E.location)return!1;var t=JSON.parse(e.value);try{var n=Ve.point([parseFloat(t.lng),parseFloat(t.lat)]),a=Ve.polygon(E.area.geoLocation.geometry.coordinates);return Ve.booleanPointInPolygon(n,a)}catch(O){return!1}})).length>0})).map((function(e,t){return r.a.createElement(Se,{fields:e.fields,index:t,recordId:e._id})})),r.a.createElement(Pe,{records:l}))),r.a.createElement(Ae,{data:N,filename:"Form-"+l[0].formId+"-Reports"}),r.a.createElement(b,null)):((!j&&m||!e||"null"===e)&&g.push("/404"),r.a.createElement(oe,{open:j}))},$e=function(e){var t=Object(ke.useMediaQuery)({maxAspectRatio:"4/3"}),n=Object(i.g)(),a=e.form;return r.a.createElement("tr",{class:"list-group-item-info",onClick:function(){return n.push("/reports/"+a.formId)}},t&&r.a.createElement("td",{class:"countryCardHeader"},r.a.createElement("div",{class:"d-flex flex-row justify-content-center"},r.a.createElement("div",null,a.title))),r.a.createElement("td",null,r.a.createElement("div",{class:"cardInfo"},r.a.createElement("div",null,a.formId.substring(0,5)),r.a.createElement("div",{class:"propLabel"},"\u0646\u0627\u0645 \u0641\u0631\u0645"))),r.a.createElement("td",null,r.a.createElement("div",{class:"cardInfo"},r.a.createElement("div",null,a.filled),r.a.createElement("div",{class:"propLabel"},"\u062a\u0639\u062f\u0627\u062f \u06af\u0632\u0627\u0631\u0634\u0627\u062a "))),!t&&r.a.createElement("td",{class:"countryCardHeader"},r.a.createElement("div",{class:"d-flex flex-row justify-content-center"},r.a.createElement("div",null,a.title))))},Je=function(e){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{class:"headcolstick"},"\u0634\u0645\u0627\u0631\u0647\u200c\u06cc \u0641\u0631\u0645"),r.a.createElement("th",{class:"headcolstick"},"\u062a\u0639\u062f\u0627\u062f \u06af\u0632\u0627\u0631\u0634\u0627\u062a \u062b\u0628\u062a \u0634\u062f\u0647"),r.a.createElement("th",{class:"headcolstick"},r.a.createElement(D,{onSearch:e.onSearch,variant:"light",text:"\u0646\u0627\u0645 \u0641\u0631\u0645"}))))},Qe=function(){var e=Object(M.b)(B,{client:x}),t=e.loading,n=(e.error,e.data),l=Object(a.useState)([]),c=Object(o.a)(l,2),i=c[0],u=c[1];Object(a.useEffect)((function(){return n&&s()}),[t,n]);var s=function(){var e=n.getAllFilledForms.reduce((function(e,t){return(e[t.formId]=e[t.formId]||[]).push(t),e}),{});u(Object.keys(e).map((function(t){return{formId:t,title:e[t][0].title,filled:e[t].length}})))},m=Object(ke.useMediaQuery)({maxAspectRatio:"4/3"}),d=Object(a.useState)(""),f=Object(o.a)(d,2),p=f[0],E=f[1];return r.a.createElement("div",{className:"reportslist d-flex flex-column justify-content-center align-items-center"},m&&r.a.createElement(D,{onSearch:E}),r.a.createElement("table",null,!m&&r.a.createElement(Je,{onSearch:E}),r.a.createElement("tbody",null,i.filter((function(e){return e.title.toLowerCase().includes(p)&&"null"!==e.formId})).map((function(e){return r.a.createElement($e,{form:e})})))),r.a.createElement(b,null),r.a.createElement(oe,{open:t}))},Ue=(n(117),function(e){return r.a.createElement(U,{variant:"contained",onClick:e.onClick},"\u0648\u0631\u0648\u062f")}),Te=function(e){return r.a.createElement(J.a,{className:" mt-4 ",variant:"contained",onClick:function(){return e.logout({returnTo:window.location.origin})}},"\u062e\u0631\u0648\u062c")},We=n(39),De=n(261);function Ge(e){var t=e.user,n=t.name,a=t.picture;t.email;return r.a.createElement("div",{style:{width:"100%"},className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("img",{src:a,alt:"Profile",className:" rounded-circle img-fluid profile-picture mb-3"}),r.a.createElement(De.a,{style:{width:"100%"}}),r.a.createElement("div",{className:" mt-3 profile-text "},n))}function Ze(e){var t=Object(We.b)(),n=(t.isLoading,t.user),a=t.loginWithRedirect,l=t.isAuthenticated,c=t.logout;return r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement("div",{className:"centerize main-card d-flex flex-column justify-content-center align-items-center "},r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center "},l?r.a.createElement("div",{style:{width:"100%"},className:"d-flex flex-column justify-content-center align-items-center "},r.a.createElement(Ge,{user:n}),r.a.createElement(Te,{logout:c})):r.a.createElement("div",{style:{width:"100%"},className:"d-flex flex-column justify-content-center align-items-center "},r.a.createElement("div",{className:" mb-3 profile-text "},"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0628\u0631\u0646\u0627\u0645\u0647 \u0644\u0637\u0641\u0627\u064b \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f"),r.a.createElement(Ue,{onClick:a})))))}var Ke,Xe=n(262),Ye=n(263),et=n(129),tt=(n(208),Object(X.a)({root:{width:"100%",maxHeight:"30%",backgroundColor:"rgba(22, 40, 65, 00)",flex:1,flexDirection:"column"}})),nt=Object(X.a)({root:{width:"100%",maxHeight:"30%",backgroundColor:"rgba(22, 40, 65, 00)",flex:1,flexDirection:"row"}}),at=Object(X.a)({root:{color:"gray","&$selected":{color:"white"}},selected:{}}),rt=function(e){return r.a.createElement(Ye.a,{classes:e,label:r.a.createElement("div",null,"\u062e\u0627\u0646\u0647"),icon:r.a.createElement($.a,null)})},lt=function(e){return r.a.createElement(Ye.a,{classes:e,label:r.a.createElement("div",null,"\u0644\u06cc\u0633\u062a \u0641\u0631\u0645\u200c\u200c\u0647\u0627"),icon:r.a.createElement(Ie.c,null)})},ct=function(e){return r.a.createElement(Ye.a,{classes:e,label:r.a.createElement("div",null,"\u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627\u06cc \u0645\u0623\u0645\u0648\u0631\u0627\u0646"),icon:r.a.createElement(et.a,null)})},ot=function(e,t){switch(e){case 0:t.push("/");break;case 1:t.push("/fill-forms");break;case 2:t.push("/reports")}},it=function(e){switch(console.log(e),e){case"/":return 0;case"/fill-forms":return 1;case"/reports":return 2}},ut=function(e){e.isAuthenticated;var t=e.role;Ke=Object(ke.useMediaQuery)({maxAspectRatio:"4/3"});var n=Object(i.g)(),l=Object(i.h)(),c=Object(a.useState)(0),u=Object(o.a)(c,2),s=u[0],m=u[1];Object(a.useEffect)((function(){m(it(l.pathname))}),[l.pathname]);var d=at(),f=nt(),b=tt();return r.a.createElement("div",{className:"d-flex header-nav"},r.a.createElement(Xe.a,{value:s,onChange:function(e,t){m(t),ot(t,n)},showLabels:!0,className:Ke?f.root:b.root},rt(d),("fieldagent"===t||"owner"===t)&&lt(d),("controller"===t||"owner"===t)&&ct(d)))},st=function(e,t){return function(){e({audience:"https://emergencio-api-v2/"}).then((function(e){var t;t=e,y=Object(g.a)((function(e,n){var a=n.headers;return console.log(t),{headers:Object(p.a)(Object(p.a)({},a),{},{authorization:t?"Bearer ".concat(t):""})}})),x=new E.a({link:y.concat(j),cache:new h.a({dataIdFromObject:function(e){return e._id?"".concat(e.__typename,":").concat(e._id):null}}),defaultOptions:O})})).catch((function(e){}))}},mt=(n(118),function(){return r.a.createElement("div",{class:"errContainer"},r.a.createElement("div",{class:"errorText"},r.a.createElement("h1",null,"\u06af\u0634\u062a\u0645 \u0646\u0628\u0648\u062f \u0646\u06af\u0631\u062f \u0646\u06cc\u0633\u062a"),r.a.createElement("h4",null,"\u0635\u0641\u062d\u0647\u200c\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f \u06f4\u06f0\u06f4")))}),dt=(n(209),function(){return r.a.createElement("div",{class:"errContainer"},r.a.createElement("div",{class:"errorText"},r.a.createElement("h1",null,"\u0627\u0648\u0647 \u0627\u0648\u0647... \u062e\u0631\u0627\u0628\u06a9\u0627\u0631\u06cc \u0634\u062f"),r.a.createElement("h4",null,"\u0633\u0631\u0648\u0631 \u0628\u0647 \u0645\u0634\u06a9\u0644\u06cc \u062e\u0648\u0631\u062f \u06f5\u06f0\u06f0")))}),ft=function(){var e=Object(We.b)(),t=e.isLoading,n=e.getAccessTokenSilently,l=e.isAuthenticated,c=e.user,s=Object(M.b)(V,{client:x,variables:{username:c?c.email:""}}),m=s.loading,d=(s.error,s.data),f=Object(a.useState)(localStorage.getItem("role")),b=Object(o.a)(f,2),p=b[0],E=b[1];return Object(a.useEffect)((function(){return st(n)}),[t,n]),Object(a.useEffect)((function(){l||E("",(function(){return localStorage.setItem("role","")}))}),[]),Object(a.useEffect)((function(){d&&d.getRoleByUserName&&(E(d.getRoleByUserName.role),localStorage.setItem("role",d.getRoleByUserName.role))}),[m,d]),r.a.createElement(u.a,null,r.a.createElement(ut,{isAuthenticated:l,role:p}),r.a.createElement("div",{className:"App"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:Ze}),("fieldagent"===p||"owner"===p)&&r.a.createElement(i.b,{exact:!0,path:"/fill-forms",component:ie}),("fieldagent"===p||"owner"===p)&&r.a.createElement(i.b,{exact:!0,path:"/fill-forms/:formId",component:Ne}),("controller"===p||"owner"===p)&&r.a.createElement(i.b,{exact:!0,path:"/reports",component:Qe}),("controller"===p||"owner"===p)&&r.a.createElement(i.b,{exact:!0,path:"/reports/:formId",component:He}),("controller"===p||"owner"===p)&&r.a.createElement(i.b,{exact:!0,path:"/reports/details/:formId",component:Ne}),r.a.createElement(i.b,{path:"/500",component:dt}),r.a.createElement(i.b,{path:"/404",component:mt}),""!==p&&p&&r.a.createElement(i.a,{to:"/404"})),r.a.createElement(ae,null),r.a.createElement(oe,{open:m})))},bt=function(e){var t=e.children,n=Object(i.g)();return r.a.createElement(We.a,{domain:"emergencio.eu.auth0.com",clientId:"09GuttMyq5nzv70Vs61adwQBLh3ZJCzZ",redirectUri:window.location.origin,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"https://emergencio-api-v2/",cacheLocation:"localstorage"},t)};c.a.render(r.a.createElement(u.a,null,r.a.createElement(bt,null,r.a.createElement(ft,null))),document.getElementById("root"))},63:function(e,t,n){},94:function(e,t,n){}},[[140,1,2]]]);
//# sourceMappingURL=main.172bd483.chunk.js.map