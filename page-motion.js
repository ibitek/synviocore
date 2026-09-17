(() => {
  const enabled=()=>document.documentElement.dataset.motion!=='off'&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
  function init(){
    if(enabled()){
      document.body.classList.add('site-page-entering');
      document.body.addEventListener('animationend',event=>{if(event.target===document.body)document.body.classList.remove('site-page-entering');});
    }
    document.addEventListener('click',event=>{
      if(!enabled()||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
      const link=event.target.closest?.('a[href]');
      if(!link||link.hasAttribute('download')||link.target&&link.target!=='_self')return;
      const destination=new URL(link.href,location.href);
      if(destination.origin!==location.origin||destination.pathname===location.pathname)return;
      event.preventDefault();document.body.classList.add('site-page-leaving');
      window.setTimeout(()=>location.assign(destination.href),170);
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
