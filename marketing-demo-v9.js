(() => {
  const viewport=document.querySelector('.demo-viewport'),frame=viewport?.querySelector('iframe');
  if(!viewport||!frame)return;
  const fit=()=>{frame.style.transform=`scale(${viewport.clientWidth/1440})`;};
  new ResizeObserver(fit).observe(viewport);fit();
})();
