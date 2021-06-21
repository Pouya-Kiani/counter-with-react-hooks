import{P as e,r as t,R as r,a}from"./vendor.9d62b5e7.js";const n=(e,r)=>{const[a,n]=t.exports.useReducer(((e,t)=>{switch(t){case"UPDATE":return e+1;case"RESET":return 0;default:return e}}),0);t.exports.useEffect((()=>{if(!r)return;const t=setInterval((()=>n("UPDATE")),e);return()=>{clearInterval(t)}}),[a,r]);return{counterValue:a,resetCounter:()=>{n("RESET")}}};n.propTypes={interval:e.number,isRunning:e.bool};const l=(e,t)=>{var r;const a=(null==(r=null==t?void 0:t.target)?void 0:r.value)||t;return parseInt(a,10)||""},s=r.memo((e=>{const{id:a,label:n,value:s,onBlur:o,error:u,touched:c}=e,[i,p]=t.exports.useReducer(l,s);return t.exports.useEffect((()=>{u&&u.length>0&&p(s),s&&s!==i&&p(s)}),[u,s]),r.createElement("div",{className:"input-wrapper"},r.createElement("label",{className:"counter-interval-label",htmlFor:a},n),r.createElement("input",{className:"counter-interval",id:a,value:i,onChange:p,onBlur:o}),u&&c&&r.createElement("div",{className:"error"},u))}));s.propTypes={id:e.string,label:e.string,value:e.oneOfType([e.string,e.number]),onBlur:e.func.isRequired,error:e.string,touched:e.bool},s.defaultProps={id:"number-input",label:null,value:"",error:"",touched:!1};const o=r.memo((e=>{const{name:a,label:n,className:l,handleClick:s}=e,[o,u]=t.exports.useState(!1);return t.exports.useEffect((()=>{if(!o)return;const e=setInterval(s,100);return()=>{clearInterval(e)}}),[s,o]),r.createElement("button",{className:`button${l&&` ${l}`}`,type:"button",name:a,onClick:s,onMouseDown:()=>{u(!0)},onMouseUp:()=>{u(!1)},onMouseOut:()=>{u(!1)}},n)}));o.propTypes={name:e.string,label:e.string,handleClick:e.func.isRequired,className:e.string},o.defaultProps={name:"",label:"",className:null};const u=r.memo((()=>{const[e,a]=t.exports.useState(!1),{intervalValue:l,increase:u,decrease:c,setValue:i}=(()=>{const[e,r]=t.exports.useReducer(((e,t)=>{switch(t.type){case"SET":return t.payload;case"INCREASE":return e+t.payload;case"DECREASE":return e-t.payload;default:return e}}),1e3);return{intervalValue:e,increase:t.exports.useCallback(((e=10)=>{r({type:"INCREASE",payload:e})}),[r]),decrease:t.exports.useCallback(((e=10)=>{r({type:"DECREASE",payload:e})}),[r]),setValue:t.exports.useCallback(((e=10)=>{r({type:"SET",payload:e})}),[r])}})(),{counterValue:p,resetCounter:m}=n(l,e),{error:d,setError:E,touched:b}=function(e=3e3){const[r,a]=t.exports.useState(null),[n,l]=t.exports.useState(!1);return t.exports.useEffect((()=>{if(!r||""===r)return;l(!0);const t=setTimeout((()=>{a(null)}),e);return()=>clearTimeout(t)}),[r,e]),{error:r,setError:a,touched:n,setTouched:l}}(),v=t.exports.useCallback((({target:e})=>{const t=parseInt(e.value,10);!t||t<=0?E("Invalid input..."):i(t)}),[E,i]),f=t.exports.useCallback((()=>{a(!1),m()}),[m]);return r.createElement("div",{className:"App"},r.createElement("div",{className:"app-wrapper"},r.createElement("h1",{className:"counter-value"},p),r.createElement("div",{className:"counter-interval-wrapper"},r.createElement(o,{className:"in-form decrease",name:"decrease",label:"-",handleClick:()=>c()}),r.createElement(s,{id:"input-value",className:"counter-interval-input",label:"Counter Interval(ms)",error:d,touched:b,value:l,onBlur:v}),r.createElement(o,{className:"in-form increase",name:"increase",label:"+",handleClick:()=>u()})),r.createElement("div",{className:"action-buttons-wrapper"},r.createElement("button",{className:"action-button start",type:"button",name:"start-stop",onClick:()=>a(!e)},e?"stop":"start"),r.createElement("button",{className:"action-button reset",disabled:0===p,type:"button",name:"reset",onClick:()=>f()},"reset"))))}));a.render(r.createElement(r.StrictMode,null,r.createElement(u,null)),document.getElementById("root"));
