import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const t=document.querySelector("form");t.addEventListener("submit",m);function m(o){o.preventDefault(),new Promise((e,r)=>{const s=Number(t.delay.value);t.state.value==="fulfilled"?setTimeout(()=>e(s),s):t.state.value==="rejected"&&setTimeout(()=>r(s),s)}).then(e=>{i.show({titleColor:white,title:"OK",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{i.show({title:"Error",message:`❌ Rejected promise in ${e}ms`})}),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map