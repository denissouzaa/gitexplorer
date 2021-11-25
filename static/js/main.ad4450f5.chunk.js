(this.webpackJsonpgithubexplorer=this.webpackJsonpgithubexplorer||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,s,l,d,p,b,j=t(0),x=t.n(j),u=t(34),g=t.n(u),h=t(4),O=t(5),f=t.p+"static/media/github-background.7fa45dda.svg",m=Object(O.a)(r||(r=Object(h.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    body { \n        background-image: url(",");\n        background-repeat: no-repeat;\n        background-position: 70% top;\n        background-color: #F0F0F5;\n    }\n\n    body, input, button {\n        font: 16px Roboto, sans-serif;\n    }\n\n    #root {\n        max-width: 960px;\n        margin: 0 auto;\n        padding-top: 20px;\n        padding-bottom: 20px;\n        padding-left: 10px;\n        padding-right: 10px;\n\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n\n        \n        height: 100vh;\n    }\n\n    button {\n        cursor: pointer;\n    }\n\n"])),f),v=t(10),y=t(2),k=t(22),w=t.n(k),S=t(41),_=t(38),z=t(12),E=t(16),F=O.b.h1(o||(o=Object(h.a)(["\n    font-size: 48px;\n    color: #3A3A3A;\n\n    margin-top: 40px;\n"]))),D=O.b.form(i||(i=Object(h.a)(["\n    margin-top: 30px;\n    max-width: 700px;\n    \n    display: flex;\n\n    input { \n        flex: 1;\n        padding: 22px;\n        background-color: #fff;\n        border: 0px;\n        width: 60%;  \n    }\n\n    button { \n        padding: 22px;\n        border: 0px;\n\n        background-color: #2b9348;\n        color: #fff;\n\n        &:hover {\n            background-color: #55a630;\n        }\n    }"]))),B=O.b.p(c||(c=Object(h.a)(["\n        margin-top: 20px;\n        color: #e63946;\n "]))),C=O.b.div(a||(a=Object(h.a)(["\n    margin-top: 40px;\n    max-width: 700px;\n\n    a {\n        background-color: #ffffff;\n        border-radius: 5px;\n        padding: 15px;\n        display: block;\n        display: flex;\n\n        align-items: center;\n        text-decoration: none;\n\n        &:hover {\n            transform: translateX(10px);\n        }\n\n        & + a {\n            margin-top: 10px;\n        }\n     }\n\n    img {\n        width: 70px;\n        border-radius: 50%;\n    }\n\n    div {\n        margin-left: 20px;\n    }\n\n    strong {\n        color: #000;\n    }\n\n    p {\n        margin-top: 5px;\n        color: #6c757d;\n    }\n\n    svg {\n        margin-left: auto;\n        color: #CBCBD6;\n    }\n"]))),G=t.p+"static/media/logo.469cc31b.svg",I=t(39),A=t.n(I).a.create({baseURL:"https://api.github.com/"}),J=O.b.footer(s||(s=Object(h.a)(["\n    display: flex;\n    height: 50px;\n    align-items: center;\n;    \n\n    p {\n        color: #343a40;\n    }\n    \n"]))),H=t(1),L=function(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(J,{children:Object(H.jsxs)("p",{children:["Desenvolvido por Denis Souza - ",Object(H.jsx)("a",{href:"https://www.linkedin.com/in/denis-souzaa/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),"."]})})})},N=function(){var n=Object(j.useState)(""),e=Object(z.a)(n,2),t=e[0],r=e[1],o=Object(j.useState)((function(){var n=localStorage.getItem("@GithubExplorer/repositories");return n?JSON.parse(n):[]})),i=Object(z.a)(o,2),c=i[0],a=i[1],s=Object(j.useState)(""),l=Object(z.a)(s,2),d=l[0],p=l[1];function b(){return(b=Object(_.a)(w.a.mark((function n(e){var r,o;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return p("Digite o autor/nome reposit\xf3rio"),n.abrupt("return");case 4:return n.prev=4,n.next=7,A.get("repos/".concat(t));case 7:r=n.sent,o=r.data,a([].concat(Object(S.a)(c),[o])),p(""),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(4),p("Algo deu errado digite o autor/nome reposit\xf3rio corretamente");case 16:case"end":return n.stop()}}),n,null,[[4,13]])})))).apply(this,arguments)}return Object(j.useEffect)((function(){localStorage.setItem("@GithubExplorer/repositories",JSON.stringify(c))}),[c]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("div",{children:[Object(H.jsx)("img",{src:G,alt:"GitHub Explorer",width:"215px"}),Object(H.jsx)(F,{children:"Explore reposit\xf3rios no Github."}),Object(H.jsxs)(D,{onSubmit:function(n){return b.apply(this,arguments)},children:[Object(H.jsx)("input",{type:"text",placeholder:"",onChange:function(n){return r(n.target.value)},value:t}),Object(H.jsx)("button",{type:"submit",children:"Pesquisar"})]}),Object(H.jsx)(B,{children:d}),Object(H.jsx)(C,{children:c.map((function(n){return Object(H.jsxs)(v.b,{to:"/explorer/".concat(n.full_name),children:[Object(H.jsx)("img",{src:n.owner.avatar_url,alt:""}),Object(H.jsxs)("div",{children:[Object(H.jsx)("strong",{children:n.full_name}),Object(H.jsx)("p",{children:n.description})]}),Object(H.jsx)(E.b,{size:20})]},n.full_name)}))})]}),Object(H.jsx)("div",{children:Object(H.jsx)(L,{})})]})},R=O.b.header(l||(l=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    a {\n        display: flex;\n        text-decoration: none;\n        align-items: center;\n        color: #495057;\n\n        &:visited {\n            color: #495057;\n        }\n\n        &:hover {\n            color: #666;\n        }\n\n        svg {\n            margin-right: 4px;\n        }\n    }\n"]))),X=O.b.div(d||(d=Object(h.a)(["\n    margin-top: 50px;\n    max-width: 700px;\n\n    header {\n        display: flex;\n        align-items: center;\n    }\n\n    img {\n        width: 70px;\n        border-radius: 50%;\n    }\n\n    div {\n        margin-left: 20px;\n    }\n\n    p {\n        margin-top: 5px;\n        color: #6c757d;\n    }\n\n    ul {\n        margin-top: 20px;\n        list-style: none;\n        display: flex;\n\n        li {\n            & + li {\n                margin-left: 80px;\n            }\n            strong {\n                display: block;\n                font-size: 30px;\n                color: #3d3d4d;\n            }\n            \n            span {\n                display: block;\n                margin-top: 4px;\n                color: #3d3d4d;\n            }\n        }\n\n    }\n\n"]))),q=O.b.div(p||(p=Object(h.a)(["\n    margin-top: 50px;\n    max-width: 700px;\n\n    a {\n        background-color: #ffffff;\n        border-radius: 5px;\n        padding: 20px;\n        display: block;\n        display: flex;\n\n        align-items: center;\n        text-decoration: none;\n\n        &:hover {\n            transform: translateX(10px);\n        }\n\n        & + a {\n            margin-top: 10px;\n        }\n     }\n\n    div {\n        margin-left: 20px;\n    }\n\n    strong {\n        color: #212529;\n    }\n\n    p {\n        margin-top: 5px;\n        color: #6c757d;\n    }\n\n    svg {\n        margin-left: auto;\n        color: #CBCBD6;\n    }\n"]))),M=(O.b.footer(b||(b=Object(h.a)(["\n    bottom: 0px;\n    position: absolute;\n\n    p {\n        color: #343a40;\n    }\n    \n"]))),function(){var n=Object(j.useState)(null),e=Object(z.a)(n,2),t=e[0],r=e[1],o=Object(j.useState)([]),i=Object(z.a)(o,2),c=i[0],a=i[1],s=Object(y.f)().params;return Object(j.useEffect)((function(){A.get("repos/".concat(s.repository)).then((function(n){r(n.data)})),A.get("repos/".concat(s.repository,"/issues")).then((function(n){a(n.data)}))}),[s.repository]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("div",{children:[Object(H.jsxs)(R,{children:[Object(H.jsx)("img",{src:G,alt:"GitHub Explorer",width:"215px"}),Object(H.jsxs)(v.b,{to:"../",children:[Object(H.jsx)(E.a,{size:"20"}),"Voltar"]})]}),Object(H.jsxs)(X,{children:[Object(H.jsxs)("header",{children:[Object(H.jsx)("img",{src:null===t||void 0===t?void 0:t.owner.avatar_url,alt:""}),Object(H.jsxs)("div",{children:[Object(H.jsx)("strong",{children:s.repository}),Object(H.jsx)("p",{children:null===t||void 0===t?void 0:t.description})]})]}),Object(H.jsxs)("ul",{children:[Object(H.jsxs)("li",{children:[Object(H.jsx)("strong",{children:null===t||void 0===t?void 0:t.stargazers_count}),Object(H.jsx)("span",{children:"Stars"})]}),Object(H.jsxs)("li",{children:[Object(H.jsx)("strong",{children:null===t||void 0===t?void 0:t.forks_count}),Object(H.jsx)("span",{children:"Forks"})]}),Object(H.jsxs)("li",{children:[Object(H.jsx)("strong",{children:null===t||void 0===t?void 0:t.open_issues_count}),Object(H.jsx)("span",{children:"Issues abertas"})]})]})]}),Object(H.jsx)(q,{children:c.map((function(n){return Object(H.jsxs)("a",{href:n.html_url,target:"_blank",rel:"noreferrer",children:[Object(H.jsxs)("div",{children:[Object(H.jsx)("strong",{children:n.title}),Object(H.jsx)("p",{children:n.user.login})]}),Object(H.jsx)(E.b,{size:20})]},n.id)}))})]}),Object(H.jsx)("div",{children:Object(H.jsx)(L,{})})]})}),P=function(){return Object(H.jsxs)(y.c,{children:[Object(H.jsx)(y.a,{path:"/explorer/:repository+",component:M}),Object(H.jsx)(y.a,{path:"/",component:N})]})};var U=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(v.a,{children:Object(H.jsx)(P,{})}),Object(H.jsx)(m,{})]})};g.a.render(Object(H.jsx)(x.a.StrictMode,{children:Object(H.jsx)(U,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.ad4450f5.chunk.js.map