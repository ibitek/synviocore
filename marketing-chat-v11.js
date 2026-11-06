(() => {
  'use strict';
  const origin='https://flow.synviocore.xyz',botId='be400619-9cff-4066-ba07-e028043d5b1c';
  const mount=document.querySelector('#marketing-flow-widget'),state=document.querySelector('#marketing-chat-state'),retry=document.querySelector('#marketing-chat-retry');
  let library,widget,loading=false;
  function loadLibrary(){
    if(window.SynvioFlowWidget)return Promise.resolve();
    if(library)return library;
    library=new Promise((resolve,reject)=>{
      const script=document.createElement('script');script.src=origin+'/js/flow-widget.js?v=11.1';script.async=true;
      const timer=setTimeout(()=>finish(new Error('Chat loading timed out.')),15000);
      function finish(error){clearTimeout(timer);script.onload=script.onerror=null;if(error){script.remove();library=null;reject(error);}else resolve();}
      script.onload=()=>finish(window.SynvioFlowWidget?null:new Error('Chat could not start.'));
      script.onerror=()=>finish(new Error('Chat is temporarily unavailable.'));
      document.head.append(script);
    });return library;
  }
  async function call(data){
    let response;
    try{response=await fetch(origin+'/api/flow',{method:'POST',headers:{'content-type':'application/json'},signal:AbortSignal.timeout(60000),body:JSON.stringify({...data,botId})});}
    catch{throw Object.assign(new Error('Connection lost. Retry the same message.'),{code:'NETWORK'});}
    let result;try{result=await response.json();}catch{throw Object.assign(new Error('Server response interrupted. Retry the same message.'),{code:'NETWORK'});}
    if(!response.ok)throw Object.assign(new Error(result.error||'Chat is temporarily unavailable.'),{status:response.status,code:result.code});
    return result;
  }
  function reveal(){
    // Published FLOW settings own format, dimensions, position, colors and motion.
    widget.open=true;widget.render();widget.animate();
    if(widget.effective().format==='inline')widget.root.querySelector('.chat').scrollIntoView({block:'center'});
    widget.root.querySelector('.entry input')?.focus({preventScroll:true});
  }
  async function openChat(){
    if(widget){reveal();return;}if(loading)return;
    loading=true;state.hidden=false;state.querySelector('p').textContent='Opening your conversation…';retry.hidden=true;
    try{
      const [,result]=await Promise.all([loadLibrary(),call({action:'config'})]);
      if(!result.config)throw new Error('Chat is temporarily unavailable.');
      // Marketing CTAs reopen the chat; do not add a second corner launcher.
      // Keep the node for the widget's positioning logic, across every render.
      class MarketingWidget extends window.SynvioFlowWidget {
        render(){
          super.render();
          const style=document.createElement('style');
          style.textContent='.launch{display:none!important}';
          this.root.append(style);
        }
      }
      widget=new MarketingWidget({mount,config:result.config,call,storageKey:'synvio-flow:'+botId});
      state.hidden=true;reveal();
    }catch{state.hidden=false;state.querySelector('p').textContent='We couldn’t open the conversation. Please try again.';retry.hidden=false;}
    finally{loading=false;}
  }
  document.querySelectorAll('[data-open-chat]').forEach(button=>button.addEventListener('click',openChat));
  retry.addEventListener('click',openChat);
  const openFromLink=()=>{if(location.hash==='#talk-to-ai')openChat();};
  window.addEventListener('hashchange',openFromLink);openFromLink();
  document.querySelector('#marketing-chat-dismiss').addEventListener('click',()=>state.hidden=true);
})();
