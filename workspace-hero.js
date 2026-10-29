(() => {
  const host = document.querySelector('.preview');
  if (!host) return;

  host.innerHTML = `
    <figure class="workspace-hero-shot">
      <img src="assets/workspace-hero-ai.png" alt="Fictional SYNVIO Workspace conversation preview showing inbox, open conversation, and Copilot">
      <figcaption>
        <span>Workspace / Inbox · interactive product preview</span>
        <button type="button">Open large preview</button>
      </figcaption>
    </figure>
    <dialog class="workspace-lightbox">
      <button class="close" aria-label="Close preview">×</button>
      <img src="assets/workspace-hero-ai.png" alt="Expanded fictional SYNVIO Workspace conversation preview">
    </dialog>`;

  const dialog = host.querySelector('dialog');
  host.querySelector('figcaption button').addEventListener('click', () => dialog.showModal());
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
})();

// Keep the channel catalogue current without changing the existing marketing
// layout: Commerce is the shared Shopify connector for both FLOW and Workspace.
(() => {
  const grid = document.querySelector('#channels .grid');
  if (!grid || grid.querySelector('[data-commerce-channel]')) return;
  const card = document.createElement('article');
  card.className = 'card channel';
  card.dataset.commerceChannel = 'true';
  card.innerHTML = '<i>▦</i><h3>Shopify Commerce</h3><p>Connect a Shopify store through the central Commerce gateway. FLOW and Workspace can check products, inventory, orders and fulfilment without exposing store tokens.</p><mark>Available now</mark><a class="text-link" href="https://commerce.synviocore.xyz/shopify-admin.html">Open Commerce ↗</a>';
  grid.append(card);
})();
