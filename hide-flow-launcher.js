(()=>{
 const mount=document.querySelector('#marketing-flow-widget');
 let watched;
 const hide=()=>{
  const root=mount?.firstElementChild?.shadowRoot;
  const launch=root?.querySelector('.launch');
  if(launch){launch.hidden=true;launch.style.display='none';}
  if(root&&root!==watched){watched=root;new MutationObserver(hide).observe(root,{childList:true,subtree:true});}
  return launch;
 };
 const open=()=>{const launch=hide();if(!launch)return;launch.hidden=false;launch.style.display='';launch.click();queueMicrotask(hide);setTimeout(hide,20);};
 document.querySelectorAll('[data-open-chat]').forEach(button=>button.addEventListener('click',open));
 new MutationObserver(hide).observe(mount,{childList:true});
 window.addEventListener('synvio-flow-ready',hide);
 const retry=setInterval(hide,100);setTimeout(()=>clearInterval(retry),12000);
})();
