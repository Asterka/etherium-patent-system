(this["webpackJsonpethirium-patent-system"]=this["webpackJsonpethirium-patent-system"]||[]).push([[0],{240:function(e,t){},249:function(e,t){},267:function(e,t){},269:function(e,t){},286:function(e,t){},287:function(e,t){},352:function(e,t){},354:function(e,t){},363:function(e,t){},365:function(e,t){},390:function(e,t){},392:function(e,t){},393:function(e,t){},399:function(e,t){},412:function(e,t){},424:function(e,t){},427:function(e,t){},431:function(e,t){},444:function(e,t){},496:function(e,t,n){},498:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),c=n(76),r=n.n(c),l=n(26),u=n.n(l),o=n(38),d=n(113);function m(e){var t=e.id,n=e.name,i=e.placeholder;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"input-component",children:[Object(a.jsx)("h4",{children:n}),Object(a.jsx)("input",{id:t,placeholder:i})]})})}function j(e){var t=e.id,n=e.nameBig,i=e.nameSmall,s=e.placeholder1,c=e.placeholder2;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"two-lined-input",children:[Object(a.jsxs)("div",{className:"input-component-big",children:[Object(a.jsx)("h4",{children:n}),Object(a.jsx)("input",{id:t,placeholder:s})]}),Object(a.jsxs)("div",{className:"input-component-small",children:[Object(a.jsx)("h4",{children:i}),Object(a.jsx)("input",{placeholder:c})]})]})})}function p(e){var t=e.web3instance,n=e.myName;return Object(a.jsxs)("div",{className:"sticky-footer",children:[Object(a.jsx)("div",{className:"opacity-div"}),Object(a.jsx)("button",{onClick:function(){!function(e,t){document.getElementById("noi").value;var n=document.getElementById("it").value,a=(document.getElementById("an").value,document.getElementById("noa").value),i=document.getElementById("cn").value;e.patentContract.methods.createPatent(t,"inventor",a,n,"10/12/2020",i).send({from:t})}(t,n)},children:"Save patent"})]})}function b(e){var t=e.web3instance,n=e.myName;return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)(m,{id:"it",name:"invention title",placeholder:"Artificial intelligence disease type analysis method, smart server and storage"}),Object(a.jsx)(m,{name:"website",placeholder:"example.com"})]}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)(m,{id:"noi",name:"name of the inventor",placeholder:"Dmity G."}),Object(a.jsx)(m,{id:"an",name:"applicant's name",placeholder:"Svetlana Vorobyova"}),Object(a.jsx)(m,{id:"noa",name:"the name of the agent",placeholder:"Askar Khabibullin"})]}),Object(a.jsxs)("div",{className:"two-lined-input-group",children:[Object(a.jsx)(j,{id:"cn",nameBig:"coutry",nameSmall:"patent number in the country",placeholder1:"",placeholder2:""}),Object(a.jsx)(j,{id:"sn",nameBig:"state",nameSmall:"number of the law in the state",placeholder1:"",placeholder2:""}),Object(a.jsx)(m,{name:"address",placeholder:"Rossiyskaya str. 31"})]}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)(m,{id:"cln",name:"international classification number",placeholder:"Artificial intelligence disease type analysis method, smart server and storage"}),Object(a.jsx)(m,{id:"rp",name:"the name of person responsible for granting classification numbers",placeholder:"Albert P."})]}),Object(a.jsx)(p,{web3instance:t,myName:n})]})}function h(e){var t=e.source,n=e.name,i=e.company_name;return Object(a.jsxs)("div",{className:"person-card",children:[Object(a.jsx)("img",{id:"person-pic",src:t,alt:"Pic"}),Object(a.jsxs)("div",{className:"person-card__titles",children:[Object(a.jsx)("h3",{children:n}),Object(a.jsx)("h4",{children:i})]})]})}var y=n(206),x=n.n(y),O=n(77);function f(e){var t=e.locationName,n=e.name,i=e.destination,s=e.setLocationName,c=e.setBreadCrumbsMain,r=e.setQueue;return Object(a.jsxs)("div",{className:"sidebar-menu-item",children:[Object(a.jsx)(x.a,{style:{fill:t===n?"#FFAD33":"white",filter:t===n?"drop-shadow(0 0 3px rgba(255,173,51,0.5))":"drop-shadow(0 0 3px rgba(255,173,51,0))"}}),Object(a.jsx)(O.b,{to:"/".concat(i),onClick:function(){!function(e,t,n,a){switch(e){case"my_patents":t("My Patents"),n("my patents"),a("");break;case"top_patents":t("Top Patents"),n("top patents"),a("")}}(i,s,c,r)},children:n})]})}function g(e){var t=e.locationName,n=e.setLocationName,i=e.setBreadCrumbsMain,s=e.setQueue;return Object(a.jsxs)("div",{className:"sidebar-menu",children:[Object(a.jsx)(f,{name:"My Patents",locationName:t,destination:"my_patents",setLocationName:n,setBreadCrumbsMain:i,setQueue:s}),Object(a.jsx)(f,{name:"Top Patents",locationName:t,destination:"top_patents",setLocationName:n,setBreadCrumbsMain:i,setQueue:s})]})}function v(e){var t=e.myName,n=e.locationName,i=e.setLocationName,s=e.setBreadCrumbsMain,c=e.setQueue;return Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsx)(h,{name:t,company_name:"General Motors",source:"https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=656&q=80"}),Object(a.jsx)(g,{locationName:n,setLocationName:i,setBreadCrumbsMain:s,setQueue:c})]})}function N(e){var t=e.loadBlockchainData;return Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:t,children:"Connect"})})}function w(e){var t=e.previousPage,n=e.nextPage,i=e.loadBlockchainData;return Object(a.jsxs)("div",{className:"breadcrumbs",children:[Object(a.jsx)(N,{loadBlockchainData:i}),Object(a.jsxs)("a",{children:[t," / "]}),Object(a.jsx)("a",{children:n})]})}function T(e){var t=e.name;return Object(a.jsx)("div",{className:"main-header",children:Object(a.jsx)("h1",{children:t})})}function B(e){var t=e.setQueue;return Object(a.jsx)("div",{className:"search-input",children:Object(a.jsx)("input",{onChange:function(e){t(e.target.value)}})})}function C(e){var t=e.data,n=e.type,i=e.queue,s=[];return s="my"===n?(t=t.filter((function(e){if(-1!=e.title.indexOf(i))return e}))).map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"name-column",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("h4",{className:"uuid",children:e.uuid})]}),Object(a.jsx)("td",{className:"date-column",children:Object(a.jsx)("h4",{children:e.date})}),Object(a.jsx)("td",{className:"membership",children:Object(a.jsx)("h4",{children:e.role})})]})})):(t=t.filter((function(e){if(-1!=e.title.indexOf(i))return e}))).map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"name-column",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("h4",{className:"uuid",children:e.uuid})]}),Object(a.jsx)("td",{className:"inventor_name",children:Object(a.jsx)("h4",{children:e.agentName})}),Object(a.jsx)("td",{className:"date-column",children:Object(a.jsx)("h4",{children:e.date})})]})})),Object(a.jsx)("div",{className:"patent-table",children:Object(a.jsxs)("table",{className:"table is-fullwidth",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"name",children:Object(a.jsx)("h4",{children:"name"})}),Object(a.jsx)("td",{className:"date-column",children:Object(a.jsx)("h4",{children:"my"===n?"creation date":"inventor"})}),Object(a.jsx)("td",{className:"membership",children:Object(a.jsx)("h4",{children:"my"===n?"your membership":"creation date"})})]})}),Object(a.jsx)("tbody",{children:s})]})})}function M(e){var t=e.queue,n=e.setQueue,i=e.setBreadCrumbsMain,s=e.data;return console.log(s),Object(a.jsxs)("div",{className:"my-patents-main",children:[Object(a.jsx)(B,{setQueue:n}),Object(a.jsx)(C,{data:s,type:"my",queue:t,setBreadCrumbsMain:i})]})}function P(e){var t=e.queue,n=e.setQueue,i=e.data;return Object(a.jsxs)("div",{className:"my-patents-main",children:[Object(a.jsx)(B,{setQueue:n}),Object(a.jsx)(C,{data:i,type:"top",queue:t})]})}var _="0x293922336e85be6ece601db403f4c5b45905bf12",k=[{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"uid",type:"uint256"},{indexed:!1,internalType:"address",name:"by",type:"address"}],name:"CreatePatent",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"string",name:"_role",type:"string"},{internalType:"string",name:"_agentName",type:"string"},{internalType:"string",name:"_title",type:"string"},{internalType:"string",name:"_date",type:"string"},{internalType:"string",name:"_country",type:"string"}],name:"createPatent",outputs:[{internalType:"uint256",name:"uid",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"uid",type:"uint256"}],name:"getPatent",outputs:[{components:[{internalType:"uint256",name:"uid",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"string",name:"role",type:"string"},{internalType:"string",name:"agentName",type:"string"},{internalType:"enum State",name:"state",type:"uint8"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"date",type:"string"},{internalType:"string",name:"country",type:"string"},{internalType:"uint256",name:"patentNumber",type:"uint256"},{internalType:"uint256",name:"internationalClassificationNumber",type:"uint256"}],internalType:"struct PatentAgency.Patent",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPatents",outputs:[{components:[{internalType:"uint256",name:"uid",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"string",name:"role",type:"string"},{internalType:"string",name:"agentName",type:"string"},{internalType:"enum State",name:"state",type:"uint8"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"date",type:"string"},{internalType:"string",name:"country",type:"string"},{internalType:"uint256",name:"patentNumber",type:"uint256"},{internalType:"uint256",name:"internationalClassificationNumber",type:"uint256"}],internalType:"struct PatentAgency.Patent[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"patentUids",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],A=n(14),S=n(116);function Q(){return D.apply(this,arguments)}function D(){return(D=Object(d.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new S(S.givenProvider||"ws://localhost:8545"),n=new t.eth.Contract(k,_),e.next=4,t.eth.getAccounts();case 4:return a=e.sent,e.abrupt("return",{myAccountAddress:a[0],web3:{web3:t,patentContract:n}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(d.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.getPatents().call();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)([]),r=Object(o.a)(c,2),l=r[0],u=r[1],d=Object(i.useState)([]),m=Object(o.a)(d,2),j=m[0],p=m[1],h=Object(i.useState)(null),y=Object(o.a)(h,2),x=y[0],f=y[1],g=Object(i.useState)("My patents"),N=Object(o.a)(g,2),B=N[0],C=N[1],_=Object(i.useState)("my patents"),k=Object(o.a)(_,2),S=k[0],D=k[1],E=Object(i.useState)(""),L=Object(o.a)(E,2),I=L[0],F=L[1];return Object(i.useEffect)((function(){Q().then((function(e){s(e.myAccountAddress),f(e.web3),function(e,t){return q.apply(this,arguments)}(e.web3.web3,e.web3.patentContract).then((function(t){console.log(t[0].owner+" "+n);var a=t;t=t.filter((function(t){if(t.owner===e.myAccountAddress)return t})),u(t),p(a)}))}))}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(v,{myName:n,locationName:B,setLocationName:C,setBreadCrumbsMain:D,setQueue:F}),Object(a.jsx)(w,{previousPage:S,nextPage:"creation",loadBlockchainData:Q}),Object(a.jsx)(T,{name:B}),Object(a.jsxs)(A.c,{children:[Object(a.jsx)(A.a,{path:"/creation",children:Object(a.jsx)(b,{web3instance:x,myName:n})}),Object(a.jsx)(A.a,{path:"/my_patents",children:Object(a.jsx)(M,{queue:I,setQueue:F,data:l})}),Object(a.jsx)(A.a,{path:"/top_patents",children:Object(a.jsx)(P,{queue:I,setQueue:F,data:j})})]})]})})}n(116),n(496);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}},[[498,1,2]]]);
//# sourceMappingURL=main.54c9750b.chunk.js.map