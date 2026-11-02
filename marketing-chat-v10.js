(() => {
  'use strict';
  const origin='https://flow.synviocore.xyz';
  // Existing published marketing assistant; this is a public embed identifier.
  const botId='be400619-9cff-4066-ba07-e028043d5b1c';
  const dialog=document.querySelector('#marketing-chat'),mount=document.querySelector('#marketing-chat-mount'),state=document.querySelector('#marketing-chat-state'),retry=document.querySelector('#marketing-chat-retry');
  let library,widget,loading=false,generation=0,opener;
  function loadLibrary(){
    if(window.SynvioFlowWidget)return Promise.resolve();
    if(library)return library;
    library=new Promise((resolve,reject)=>{
      const script=document.createElement('script');script.src=origin+'/js/flow-widget.js';script.async=true;
      const timer=setTimeout(()=>finish(new Error('Chat loading timed out.')),15000);
      function finish(error){clearTimeout(timer);script.onload=script.onerror=null;if(error){script.remove();library=null;reject(error);}else resolve();}
      script.onload=()=>finish(window.SynvioFlowWidget?null:new Error('Chat could not start.'));
      script.onerror=()=>finish(new Error('Chat is temporarily unavailable.'));
      document.head.append(script);
    });return library;
  }
  async function call(data){
    const response=await fetch(origin+'/api/flow',{method:'POST',headers:{'content-type':'application/json'},signal:AbortSignal.timeout(60000),body:JSON.stringify({...data,botId})});
    const result=await response.json();
    if(!response.ok)throw Object.assign(new Error(result.error||'Chat is temporarily unavailable.'),{status:response.status,code:result.code});
    return result;
  }
  async function start(){
    if(loading||widget)return;
    loading=true;const current=++generation;
    state.hidden=false;state.querySelector('p').textContent='Opening your conversation…';retry.hidden=true;
    try{
      const [,result]=await Promise.all([loadLibrary(),call({action:'config'})]);
      if(current!==generation||!dialog.open)return;
      if(!result.config)throw new Error('Chat is temporarily unavailable.');
      class MarketingChat extends window.SynvioFlowWidget{
        render(){super.render();const style=document.createElement('style');style.textContent=':host{display:block;width:100%;height:100%}.chat{position:relative!important;inset:auto!important;transform:none!important;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;border:0;border-radius:0;box-shadow:none}.launch,.scrim,#close,.move{display:none!important}.head{padding:12px 20px}.entry{padding:16px}.log{padding:20px}.entry input{font-size:16px}.send{background:#5f77ed}.powered{padding-bottom:10px}';this.root.append(style);}
      }
      widget=new MarketingChat({mount,config:{...result.config,format:'inline',responsive:{},animation:'none',background:'#151820',text:'#eef2fa',headerBackground:'#191f29',headerText:'#eef2fa',aiBackground:'#242d3a',aiText:'#eef2fa',userBackground:'#3d5093',userText:'#fff',inputBackground:'#191f29',inputText:'#eef2fa',accent:'#5f77ed'},call,storageKey:'synvio-flow:'+botId});
      state.hidden=true;widget.root.querySelector('.entry input')?.focus();
    }catch(error){if(current===generation&&dialog.open){state.querySelector('p').textContent='We couldn’t open the conversation. Please try again.';retry.hidden=false;}}
    finally{if(current===generation)loading=false;}
  }
  document.querySelectorAll('[data-open-chat]').forEach(button=>button.addEventListener('click',()=>{opener=button;if(!dialog.open)dialog.showModal();start();}));
  retry.addEventListener('click',start);
  dialog.querySelector('.marketing-chat-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{generation++;loading=false;widget?.destroy();widget=null;mount.replaceChildren();opener?.focus({preventScroll:true});});
})();
