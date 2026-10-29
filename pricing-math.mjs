export function estimate(v){
 const n=k=>Math.max(0,Math.min(1e9,Number(v[k])||0));
 const channel=n('emailIn')*.002+n('emailOut')*.003+n('chatIn')*.001+n('chatOut')*.002+n('handoffs')*.001;
 const ai=v.byok?0:n('aiReplies')*(n('input')*2+n('cached')*.5+n('output')*8)/1e6;
 const total=channel+ai,deposit=Math.max(2,Math.min(100,n('deposit'))),t=Math.min(1,(deposit-2)/23),rate=.6*t*t*(3-2*t),credits=deposit*(1+rate),seats=Math.max(1,Math.floor(n('seats')));
 return {channel,ai,total,deposit,rate,credits,bonus:credits-deposit,funding:total===0?0:Math.ceil(total/credits)*deposit,plan:25*seats,allowance:60*seats,overage:Math.max(0,total-60*seats)};
}
