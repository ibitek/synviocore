(()=>{
 const host=document.querySelector('.preview');if(!host)return;
 host.innerHTML=`<figure class="workspace-shot"><img src="assets/workspace-inbox-demo.png" alt="SYNVIO Workspace Inbox preview"><figcaption><span>Workspace / Inbox</span><button type="button">Open expanded preview</button></figcaption></figure><dialog class="workspace-lightbox"><button class="close" aria-label="Close preview">×</button><img src="assets/workspace-inbox-demo.png" alt="Expanded SYNVIO Workspace Inbox preview"></dialog>`;
 const dialog=host.querySelector('dialog'),open=host.querySelector('figcaption button'),close=dialog.querySelector('.close');
 open.onclick=()=>dialog.showModal();close.onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
})();
