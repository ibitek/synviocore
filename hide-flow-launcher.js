(() => {
  const mount = document.querySelector('#marketing-flow-widget');
  if (!mount) return;

  const getLaunch = () => mount.firstElementChild?.shadowRoot?.querySelector('.launch');
  const parkLaunch = () => {
    const launch = getLaunch();
    if (!launch) return null;
    launch.setAttribute('aria-hidden', 'true');
    launch.style.cssText += ';position:fixed!important;left:-10000px!important;bottom:auto!important;opacity:0!important;pointer-events:none!important;';
    return launch;
  };

  const openChat = event => {
    event?.preventDefault();
    event?.stopPropagation();
    let tries = 0;
    const trigger = () => {
      const launch = getLaunch();
      if (!launch && tries++ < 40) return setTimeout(trigger, 250);
      if (!launch) return;
      launch.removeAttribute('hidden');
      launch.removeAttribute('aria-hidden');
      launch.style.pointerEvents = 'auto';
      launch.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      setTimeout(parkLaunch, 100);
    };
    trigger();
  };

  document.querySelectorAll('[data-open-chat]').forEach(button => button.addEventListener('click', openChat));
  new MutationObserver(parkLaunch).observe(mount, { childList: true, subtree: true });
  window.addEventListener('synvio-flow-ready', () => setTimeout(parkLaunch, 0));
  let attempts = 0;
  const waitForWidget = setInterval(() => {
    parkLaunch();
    if (++attempts >= 120) clearInterval(waitForWidget);
  }, 250);
})();
