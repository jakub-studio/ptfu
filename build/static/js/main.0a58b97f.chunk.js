(this.webpackJsonpptfu=this.webpackJsonpptfu||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(12),r=n.n(a),s=(n(22),n(23),n(2)),l=n.n(s),u=(n(24),n(0)),o=function(e){var t=e.secondary,n=e.horizontal;return Object(u.jsx)("div",{className:l()(t?"divider-secondary":"divider-primary",n?"divider-horizontal":"divider-vertical")})},d=(n(26),function(e){var t=e.title,n=e.id,i=e.children;return Object(u.jsxs)("div",{className:"section",id:n,children:[Object(u.jsx)("h1",{className:"mb-8 lineheight80",children:t}),Object(u.jsx)(o,{horizontal:!0}),i]})}),b=n(9),j=n(5),h=0,v=function(){return"assignee-".concat(++h)},f=function(){var e=Math.round(Math.random()),t=function(e,t){var n=Math.random()*(t-e)+e;return Math.floor(n)}(0,359);return"hsl(".concat(t,", 100%, ").concat(e?85:75,"%)")},p=Object(b.a)((function(e,t){return{assignees:[],addIndividual:function(t){var n={name:t,colour:f(),type:"indivdual",id:v()};return e((function(e){return Object(j.a)(e,(function(e){e.assignees.push(n)}))})),n},addGroup:function(t,n){var i={name:t,colour:f(),type:"group",id:v(),members:n||[]};return e((function(e){return Object(j.a)(e,(function(e){e.assignees.push(i)}))})),i},getAssignee:function(e){return t().assignees.find((function(t){return t.id===e}))}}})),O=n(8),m=function(e){return e.calculated=function(e,t){var n,i=t.filter((function(e){return"indivdual"===e.type})),c=0,a=0,r=0,s={},l=Object(O.a)(i);try{for(l.s();!(n=l.n()).done;)s[n.value.id]={total:0,indivdual:0}}catch(x){l.e(x)}finally{l.f()}var u,o=Object(O.a)(e);try{for(o.s();!(u=o.n()).done;){var d=u.value;if(0===d.assignees.length)r=(a+=d.price)/i.length;else{var b,j=d.price/d.assignees.length,h=Object(O.a)(d.assignees);try{for(h.s();!(b=h.n()).done;){var v=b.value;s[v].indivdual=s[v].indivdual+j}}catch(x){h.e(x)}finally{h.f()}}c+=d.price}}catch(x){o.e(x)}finally{o.f()}var f,p=Object(O.a)(i);try{for(p.s();!(f=p.n()).done;){var m=s[f.value.id];m.total=m.total+m.indivdual+r}}catch(x){p.e(x)}finally{p.f()}return{total:c,allMembers:{total:a,indivdual:r},indivduals:s}}(e.entries,p.getState().assignees),e},x=Object(b.a)((function(e,t){return{name:"Untitled Shop",entries:[],calculated:{total:0,allMembers:{total:0,indivdual:0},indivduals:{}},addEntry:function(t){return e((function(e){return Object(j.a)(e,(function(e){e.entries.push(t),m(e)}))}))},removeEntry:function(t){return e((function(e){return Object(j.a)(e,(function(e){t>-1&&e.entries.splice(t,1),m(e)}))}))},clear:function(){return e((function(e){return Object(j.a)(e,(function(e){e.entries=[],m(e)}))}))}}})),g=function(e){return"\xa3"+e.toLocaleString("en",{minimumFractionDigits:2})},k=function(e){return"  -  "+e},y=n(13),C=n(14),N=n(4),I=n(17),S=n(15),E=n(3),A=(n(28),function(e){var t=e.onClickOut,n=e.placeholder,c=e.onSubmit,a=Object(i.useRef)(null),r=Object(i.useState)(""),s=Object(E.a)(r,2),l=s[0],o=s[1],d=function(e){console.log(e),a.current&&!a.current.contains(e.target)&&(console.log("click out event"),t())};Object(i.useEffect)((function(){return document.addEventListener("click",d),function(){document.removeEventListener("click",d)}}),[]);var b=Object(i.useCallback)((function(){""!==l.trim()&&(c(l.trim()),t())}),[l,c,t]),j=Object(i.useCallback)((function(e){var t=e.nativeEvent.data;if(console.log(t),"Enter"===t)return console.warn("enter key hit"),e.preventDefault(),b();o(e.target.value)}),[o,b]);return Object(u.jsxs)("div",{className:"assignee-input-container",onClick:function(e){e.stopPropagation(),e.preventDefault()},children:[Object(u.jsx)("input",{size:10,autoFocus:!0,value:l,onChange:j,onClick:function(e){e.stopPropagation(),e.preventDefault()},placeholder:n,className:"use-blue-focus",ref:a}),Object(u.jsx)("div",{onClick:b,className:"submit-button",children:"+"})]})}),M=function(e){Object(I.a)(n,e);var t=Object(S.a)(n);function n(e){var i;return Object(y.a)(this,n),(i=t.call(this,e)).state={displayInput:!1},i.onOuterClick=i.onOuterClick.bind(Object(N.a)(i)),i.renderCheckbox=i.renderCheckbox.bind(Object(N.a)(i)),i.getStyle=i.getStyle.bind(Object(N.a)(i)),i.canBecomeInput=i.canBecomeInput.bind(Object(N.a)(i)),i.renderChildren=i.renderChildren.bind(Object(N.a)(i)),i.onInputSubmit=i.onInputSubmit.bind(Object(N.a)(i)),i.onInputHide=i.onInputHide.bind(Object(N.a)(i)),i.isClickable=i.isClickable.bind(Object(N.a)(i)),i}return Object(C.a)(n,[{key:"canBecomeInput",value:function(){return"object"===typeof this.props.input}},{key:"isClickable",value:function(){return Boolean(this.props.onClick||this.canBecomeInput())}},{key:"onOuterClick",value:function(e){var t=this.props.onClick;if(e.preventDefault(),"function"===typeof t)return t();this.canBecomeInput()&&!1===this.state.displayInput&&this.setState({displayInput:!0})}},{key:"onInputSubmit",value:function(e){var t;null===(t=this.props.input)||void 0===t||t.onInput(e)}},{key:"onInputHide",value:function(){this.setState({displayInput:!1})}},{key:"getStyle",value:function(){var e=this.props,t=e.colour,n={backgroundColor:t||"hsl(0, 0%, 90%)"};return e.dashed&&(n.backgroundColor=void 0),n}},{key:"renderCheckbox",value:function(){return"boolean"===typeof this.props.checkbox&&Object(u.jsx)("div",{className:l()("checkbox","checkbox-".concat(this.props.checkbox))})}},{key:"renderChildren",value:function(){var e;return this.state.displayInput?Object(u.jsx)(A,{onSubmit:this.onInputSubmit,onClickOut:this.onInputHide,placeholder:null===(e=this.props.input)||void 0===e?void 0:e.placeholder}):this.props.children}},{key:"render",value:function(){var e=this.props.dashed,t=this.isClickable();return Object(u.jsxs)("button",{className:l()("assignee use-blue-focus",e&&"dashed",t&&"clickable"),onClick:this.onOuterClick,style:this.getStyle(),tabIndex:t?0:-1,children:[this.renderCheckbox(),this.renderChildren()]})}}]),n}(c.a.Component),w=function(e){var t=e.children;return Object(u.jsx)("div",{className:"assignee-list",children:t})},z=M,B=(n(29),function(e){var t=e.onClick,n=e.submit,i=e.primary,c=e.children,a=e.className,r=e.width100;return Object(u.jsx)("input",{onClick:t,type:n?"submit":"button",value:c,className:l()("button use-blue-focus",{"button-primary":i,"width-100":r},a)})}),D=function(e){var t=e.value,n=e.symbol;return Object(u.jsxs)(u.Fragment,{children:[n||"\xa3",t.toLocaleString("en",{minimumFractionDigits:2})]})},F=function(){var e=x(),t=e.calculated,n=p(),c=n.getAssignee,a=n.assignees,r=Object(i.useCallback)((function(){navigator.clipboard.writeText(function(e,t){return["Receipt Breakdown - ".concat(e.name),"","Total Receipt Charge: ".concat(g(e.calculated.total)),"","All Members:",k("Total Charge: ".concat(g(e.calculated.allMembers.total))),k("Individual Charge: ".concat(g(e.calculated.allMembers.indivdual))),"",Object.keys(e.calculated.indivduals).map((function(n){var i=t.find((function(e){return e.id===n}));return i?["".concat(i.name,":"),"Total Charge: ".concat(g(e.calculated.indivduals[i.id].total)),0===e.calculated.indivduals[i.id].indivdual?"":"(Individual Charge: ".concat(g(e.calculated.indivduals[i.id].indivdual),")")].join(" ").trim():""})),"","Receipt Items:",e.entries.map((function(e){return"".concat(e.description," - ").concat(g(e.price)," (").concat(0===e.assignees.length?"All":e.assignees.map((function(e){var n=t.find((function(t){return t.id===e}));return e?null===n||void 0===n?void 0:n.name:null})).filter(Boolean).join(", "),")")}))].flat().join("\n")}(e,a))}),[e,a]);return Object(u.jsxs)(d,{title:"breakdown",id:"section-manage",children:[Object(u.jsxs)("div",{className:"receipt-item lineheight80",children:[Object(u.jsx)("b",{children:"total"}),Object(u.jsx)("b",{children:Object(u.jsx)(D,{value:t.total})})]}),Object(u.jsx)(o,{horizontal:!0,secondary:!0}),Object(u.jsxs)(w,{children:[Object(u.jsx)(z,{children:"All Members"}),Object(u.jsxs)("h2",{children:["Total: ",Object(u.jsx)(D,{value:t.allMembers.total})]}),Object(u.jsxs)("h2",{children:["Indivdual: ",Object(u.jsx)(D,{value:t.allMembers.indivdual})]})]}),Object(u.jsx)("div",{className:"mb-8"}),Object.keys(t.indivduals).map((function(e,n,i){var a=c(e);return a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(w,{children:[Object(u.jsx)(z,{colour:a.colour,children:a.name}),Object(u.jsxs)("h2",{children:["Total: ",Object(u.jsx)(D,{value:t.indivduals[e].total})]}),Object(u.jsxs)("h2",{children:["Indivdual: ",Object(u.jsx)(D,{value:t.indivduals[e].indivdual})]})]},a.id),i.length!==n+1&&Object(u.jsx)("div",{className:"mb-8"})]}):null})),Object(u.jsx)(o,{horizontal:!0}),Object(u.jsx)("div",{children:Object(u.jsx)(B,{onClick:r,children:"copy"})})]})},T=(n(30),function(e){var t=e.entry,n=e.index,c=x().removeEntry,a=p().getAssignee,r=Object(i.useCallback)((function(){c(n)}),[n,c]);return Object(u.jsx)("div",{className:"receipt-entry-container",children:Object(u.jsxs)("div",{className:"receipt-item lineheight80 receipt-entry",children:[Object(u.jsxs)(w,{children:[Object(u.jsx)("span",{children:t.description}),0===t.assignees.length&&Object(u.jsx)(z,{children:"All Members"}),t.assignees.map((function(e){var t=a(e);return t?Object(u.jsx)(z,{colour:t.colour,children:t.name},t.id):null}))]}),Object(u.jsxs)("span",{children:[Object(u.jsx)(D,{value:t.price}),Object(u.jsx)("button",{className:"receipt-delete-entry-button",onClick:r,children:"x"})]})]})})}),L=function(){var e=x().entries;return Object(u.jsx)(d,{title:"receipt",id:"section-receipt",children:Object(u.jsx)("div",{className:"receipt-container",children:Object(u.jsx)("div",{className:"receipt-entries",children:e.map((function(e,t){return Object(u.jsx)(T,{entry:e,index:t},t)}))})})})},R=(n(31),function(e){var t=e.value,n=e.onChange,i=e.placeholder,a=e.number,r=e.autofocus,s=e.id,o=e.size,d=e.error,b=c.a.useCallback((function(e){var t=e.target.value,i=e.nativeEvent.data;if(!a)return n(t);var c=t.split("."),r=c.length-1;if(null===i)return n(t);if("."===i){if(r>=2)return;return n(t)}isNaN(parseInt(i,10))||1===r&&c[1].length>=3||n(t)}),[n,a]);return Object(u.jsxs)("div",{className:"input-field-container",children:[Object(u.jsx)("input",{autoFocus:r,className:l()("input-field use-blue-focus",d&&"error"),value:t,onChange:b,placeholder:i,id:s,autoComplete:"off",size:o}),"string"===typeof d&&Object(u.jsxs)("div",{className:"error-box",children:[Object(u.jsx)("span",{children:"error:"}),d]})]})}),H=n(16),J=function(e,t,n){return function(){return t(e.filter((function(e){return e!==n})))}},P=function(e){var t=p(),n=t.assignees,i=t.addIndividual,c=t.getAssignee,a=0===e.assignees.length;return Object(u.jsxs)("div",{className:"mb-8",children:[Object(u.jsxs)(w,{children:[Object(u.jsx)("h2",{children:"Assigned to:"}),a&&Object(u.jsx)(z,{children:"All Members"}),e.assignees.map((function(t){var n=c(t);return n?Object(u.jsx)(z,{colour:n.colour,onClick:J(e.assignees,e.setAssignees,n.id),children:n.name},t):null}))]}),Object(u.jsx)(o,{horizontal:!0,secondary:!0}),Object(u.jsxs)(w,{children:[n.map((function(t){var n,i,c,a=e.assignees.includes(t.id);return Object(u.jsx)(z,{checkbox:a,colour:t.colour,onClick:a?J(e.assignees,e.setAssignees,t.id):(n=e.assignees,i=e.setAssignees,c=t.id,function(){return i(Array.from(new Set([].concat(Object(H.a)(n),[c]))))}),children:t.name},t.id)})),Object(u.jsx)(z,{dashed:!0,input:{placeholder:"name",onInput:i},children:"+"})]})]})},G=(n(32),"submit-item-desc-input"),U="submit-item-price-input",V=function(){var e;return null===(e=document.getElementById(G))||void 0===e?void 0:e.focus()},q=function(){var e=Object(i.useState)(""),t=Object(E.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),s=Object(E.a)(r,2),l=s[0],o=s[1],b=Object(i.useState)(void 0),j=Object(E.a)(b,2),h=j[0],v=j[1],f=Object(i.useState)(void 0),p=Object(E.a)(f,2),O=p[0],m=p[1],g=Object(i.useState)([]),k=Object(E.a)(g,2),y=k[0],C=k[1],N=x((function(e){return e.addEntry})),I=c.a.useCallback((function(e){return e.preventDefault(),""===n.trim()?(v("description missing"),void V()):""===l.trim()?(m("price missing"),void function(){var e;null===(e=document.getElementById(U))||void 0===e||e.focus()}()):(N({description:n.trim(),price:parseFloat(l.trim()),assignees:y}),a(""),o(""),void V())}),[n,l,N,y]),S=Object(i.useCallback)((function(e){h&&v(void 0),a(e)}),[h,v,a]),A=Object(i.useCallback)((function(e){O&&m(void 0),o(e)}),[O,m,o]);return Object(u.jsx)(d,{title:"submit",id:"section-submit",children:Object(u.jsxs)("form",{onSubmit:I,children:[Object(u.jsxs)("div",{className:"input-array mb-8",children:[Object(u.jsx)(R,{autofocus:!0,placeholder:"item description",value:n,onChange:S,id:G,error:h}),Object(u.jsx)(R,{placeholder:"\xa3 item price",value:l,onChange:A,number:!0,id:U,error:O,size:30})]}),Object(u.jsx)(P,{assignees:y,setAssignees:C}),Object(u.jsx)(B,{primary:!0,submit:!0,width100:!0,className:"mb-8",children:"+ add to receipt"})]})})},K=(n(33),function(){var e=x((function(e){return e.clear}));return Object(u.jsx)(d,{title:"manage",id:"section-manage",children:Object(u.jsxs)("div",{className:"button-array",children:[Object(u.jsx)(B,{onClick:e,children:"clear receipt"}),Object(u.jsx)(B,{onClick:function(){return p.setState({assignees:[]})},children:"clear indivduals"})]})})}),Q=(n(34),function(e){var t=Object(i.useState)(!1),n=Object(E.a)(t,2),c=n[0],a=n[1],r=Object(i.useRef)(null),s=Object(i.useCallback)((function(){a(!0)}),[]),o=Object(i.useCallback)((function(){a(!1)}),[]),d=Object(i.useCallback)((function(t){t.preventDefault();var n=new FormData(t.currentTarget);e.onChange(n.get("value").trim()),a(!1)}),[e]),b=function(e){r.current&&!r.current.contains(e.target)&&o()};return Object(i.useEffect)((function(){return document.addEventListener("click",b),function(){document.removeEventListener("click",b)}}),[]),Object(u.jsx)("button",{className:l()("editable use-blue-focus",e.large&&"large",c?"editing":"idle"),onClick:s,ref:r,children:c?Object(u.jsx)("form",{onSubmit:d,children:Object(u.jsx)("input",{name:"value",defaultValue:e.value,autoFocus:!0,className:l()("use-blue-focus",e.large&&"large"),size:15})}):e.value})}),W=function(){var e=x((function(e){return e.name})),t=Object(i.useCallback)((function(e){x.setState({name:e})}),[]);return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"app-header",children:[Object(u.jsx)("div",{className:"app-logo",children:Object(u.jsx)("h1",{children:"\ud83d\udcb5 pay the f*** up"})}),Object(u.jsx)(Q,{large:!0,value:e,onChange:t})]}),Object(u.jsxs)("div",{className:"app-sections",children:[Object(u.jsx)(F,{}),Object(u.jsx)(o,{}),Object(u.jsx)(L,{}),Object(u.jsx)(o,{}),Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)(q,{}),Object(u.jsx)(K,{})]})]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0a58b97f.chunk.js.map