(()=>{
 const form=document.querySelector('#usage-calculator');if(!form)return;
 const replies=document.querySelector('#calc-replies');if(!replies)return;
 const chat=document.createElement('label');chat.innerHTML='Incoming chat & Instagram messages<input id="calc-chat-incoming" type="number" value="1000" min="0">';replies.closest('label').before(chat);
 const note=document.createElement('p');note.className='channel-fee-note';note.textContent='Channel pricing: inbound web chat or Instagram DM $0.001 · handoff $0.001 · outbound web chat or Instagram DM $0.002. AI is charged separately.';form.before(note);
 const input=id=>Math.max(0,Number(document.querySelector('#'+id)?.value)||0),money=n=>n.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2});
 const result=document.querySelector('#usage-result');
 const refresh=()=>{const aiMode=document.querySelector('#calc-billing')?.value==='byok';const channels=input('calc-incoming')*.002+input('calc-outgoing')*.003+input('calc-chat-incoming')*.001+input('calc-replies')*.002+input('calc-handoffs')*.001;const ai=aiMode?0:(input('calc-input')*2+input('calc-cached')*.5+input('calc-output')*8)/1e6;const total=channels+ai;if(result)result.querySelectorAll('.v31-fees').forEach(x=>x.remove());const line=document.createElement('p');line.className='v31-fees';line.innerHTML=`<b>Updated channel estimate:</b> ${money(channels)} <span>(${money(total)} including ${aiMode?'BYOK AI': 'SYNVIO/CORE AI'})</span>`;result?.prepend(line);};
 form.addEventListener('input',()=>setTimeout(refresh,0));refresh();
})();
