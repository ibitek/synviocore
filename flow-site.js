/* A real published Flow bot is selected by FLOW_MARKETING_BOT_ID on the app server. */
(()=>{const app='https://flow.synviocore.xyz';
 const fallback=document.createElement('a');fallback.id='flow-fallback';fallback.href=app+'/';fallback.textContent='✦ Build with Synvio Flow';document.body.append(fallback);
 fetch(app+'/api/flow?action=marketing').then(async r=>{if(!r.ok)return;const data=await r.json();if(!data.botId)return;const script=document.createElement('script');script.src=app+'/js/flow-widget.js';script.dataset.bot=data.botId;window.addEventListener('synvio-flow-ready',()=>fallback.remove(),{once:true});document.body.append(script);}).catch(()=>{});
})();
