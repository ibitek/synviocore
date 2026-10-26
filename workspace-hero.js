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
