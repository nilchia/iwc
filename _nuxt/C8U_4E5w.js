import{_ as t,l as o,I as i,k as n,K as p}from"./0r1VIuXN.js";import{p as m}from"./DbDykiJz.js";import"./CXTLJslI.js";import"./MjjPqMBM.js";import"./IShi1APO.js";import"./Cpj98o6Y.js";import"./DUo3OtiL.js";import"./CGUBTRoO.js";import"./CdaT7hAD.js";var g={parse:t(async r=>{const a=await m("info",r);o.debug(a)},"parse")},v={version:p},d=t(()=>v.version,"getVersion"),c={getVersion:d},l=t((r,a,s)=>{o.debug(`rendering info diagram
`+r);const e=i(a);n(e,100,400,!0),e.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},F={parser:g,db:c,renderer:f};export{F as diagram};
