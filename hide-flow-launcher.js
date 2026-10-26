(() => {
  const mount = document.querySelector('#marketing-flow-widget');
  if (!mount) return;

  const getLaunch = () => mount.firstElementChild?.shadowRoot?.querySelector('.launch');
  const openChat = event => {
    event?.preventDefault();
    event?.stopImmediatePropagation();
    let tries = 0;
    const trigger = () => {
      const launch = getLaunch();
      if (!launch && tries++ < 40) return setTimeout(trigger, 250);
      if (!launch) return;
      launch.click();
    };
    trigger();
  };

  document.querySelectorAll('[data-open-chat]').forEach(button => button.addEventListener('click', openChat));
  window.addEventListener('synvio-flow-ready', () => {});
})();
