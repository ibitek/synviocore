(() => {
  const mount = document.querySelector('#marketing-flow-widget');
  if (!mount) return;

  mount.hidden = true;
  mount.style.display = 'none';
  document.querySelectorAll('[data-open-chat]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = 'https://flow.synviocore.xyz/';
  }));
})();
