(()=>{
 const root=document.getElementById('cost-calculator');if(!root)return;
 const number=id=>{const el=document.getElementById('calc-'+id);return Math.max(Number(el.min)||0,Math.min(1e9,Number(el.value)||0));};
 const usd=n=>n.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:4});
 function update(){
  const seats=Math.max(1,Math.floor(number('seats'))),byok=document.getElementById('calc-byok').value==='yes',bonus=Number(document.getElementById('calc-bonus').value);
  const channels=number('emailIn')*.002+number('emailOut')*.003+number('chatOut')*.002+number('handoff')*.002;
  const ai=byok?0:(number('input')*4+number('cached')+number('output')*16)/1e6;
  const total=channels+ai,payg=Math.max(channels,total/(1+bonus)),plan=25*seats,allowance=60*seats,overage=Math.max(0,total-allowance);
  const result=document.getElementById('calc-results');result.replaceChildren();
  for(const [label,value] of [['Channel & handoff fees',channels],['Synvio AI fee',ai],['Total usage value',total],['Estimated PAYG funding with selected bonus',payg],['30-day plan payment',plan],['Pooled plan allowance',allowance],['Estimated additional PAYG after plan (opt-in required)',overage]]){const row=document.createElement('div');row.textContent=label+': ';const strong=document.createElement('strong');strong.textContent=usd(value);row.append(strong);result.append(row);}
  const verdict=document.createElement('p');verdict.textContent=plan+overage<payg?'At these assumptions, the plan plus overage costs less than PAYG. No automatic upgrade.':'At these assumptions, PAYG costs no more than the plan plus overage.';result.append(verdict);
  if(byok){const note=document.createElement('p');note.textContent='BYOK provider charges are paid separately and are not included above. AI-only deposit bonus cannot pay channel fees.';result.append(note);}
 }
 root.addEventListener('input',update);root.addEventListener('change',update);update();
})();
