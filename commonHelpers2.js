import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";const t=document.querySelector("form");t.addEventListener("submit",m);function m(l){l.preventDefault();const o=Number(t.delay.value),i=t.elements.state.value;console.log(i),new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(o):r(o)},o)}).then(e=>{s.show({position:"topRight",titleColor:"white",titleSize:"18px",backgroundColor:"#59a10d",messageColor:"white",messageSize:"16px",title:"OK",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{s.show({position:"topRight",titleColor:"white",titleSize:"18px",backgroundColor:"#b54657",messageColor:"white",messageSize:"16px",title:"Error",message:`❌ Rejected promise in ${e}ms`})}),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
