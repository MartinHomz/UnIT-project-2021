import"./esm-chunk-d81494b9.js";import{ensureElement as e,getParentByClassName as t,attachEventToElement as o,detachEventFromElement as n}from"./esm-dom-utils-88a2c0cb.js";import{d as s,r as a}from"./esm-chunk-fc46b9cc.js";import{K as r}from"./esm-chunk-54fd5426.js";function i(e,t){e&&(e.dataset.previousValue=t)}function d(i,d){i=e(i);const c=t(i,"dxbs-spin-edit");if(!i)return;s(i);const u=(l=d.decimalSeparator,f=d.needExponentialView,p=i,function(e){let t=p.dataset.selectionStartBeforePaste?p.value.trim():p.value,o=/^-?(\d)*$/;l&&(t=t.replace(/[.|,]/g,l),o=f?/^-?(\d+|[,.]\d+|\d+[,.]\d+|\d+[,.]|[,.])?([eE]?[+-]?(\d)*)?$/:/^-?(\d+|[,.]\d+|\d+[,.]\d+|\d+[,.]|[,.])?$/);let n=p.selectionStart,s=p.selectionEnd;o.test(t)?(t!==p.value&&(p.value=t),p.dataset.previousValue=t):(p.dataset.selectionStartBeforePaste?(n=p.dataset.selectionStartBeforePaste,s=p.dataset.selectionEndBeforePaste):(n--,s+=p.dataset.previousValue.length-t.length),p.value=p.dataset.previousValue),p.dataset.selectionStartBeforePaste&&(p.removeAttribute("data-selection-start-before-paste"),p.removeAttribute("data-selection-end-before-paste")),p.selectionStart=n,p.selectionEnd=s});var l,f,p;const m=function(e){return function(t){e.dataset.selectionStartBeforePaste=e.selectionStart,e.dataset.selectionEndBeforePaste=e.selectionEnd}}(i),v=function(e){(function(e){return e.keyCode===r.Up||e.keyCode===r.Down})(e)&&(e.stopPropagation(),e.preventDefault())};return o(i,"input",u),o(i,"paste",m),o(i,"keydown",v),a(c,(function(){n(i,"input",u),n(i,"keydown",v),n(i,"paste",m)})),Promise.resolve("ok")}function c(e,t){let o=document.activeElement;for(;null!==o&&o!==e;)o=o.parentElement;null===o&&t.invokeMethodAsync("FocusLost")}function u(t){if(t=e(t))return s(t),Promise.resolve("ok")}const l={init:d,dispose:u,setPreviousValue:i,checkFocusedState:c};export default l;export{c as checkFocusedState,u as dispose,d as init,i as setPreviousValue};