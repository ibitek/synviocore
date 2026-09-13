/**
 * Synvio AI - Global Bundle
 * Header, Footer and Voiceflow Chat
 */

(function () {
  const isSubpage =
    window.location.pathname.includes('/subpages/') ||
    window.location.pathname.endsWith('faq.html') ||
    window.location.pathname.endsWith('legal.html');

  const rootPath = isSubpage ? '../' : './';
  const subpagePath = isSubpage ? './' : 'subpages/';
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  function initGlobalShell() {
    // =========================================================
    // HEADER
    // =========================================================
    if (!document.getElementById('synvio-header')) {
      const header = document.createElement('header');
      header.id = 'synvio-header';
      header.className =
        'sticky top-0 z-50 bg-pitch/90 backdrop-blur-md border-b border-white/10';

      header.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="${rootPath}index.html" class="flex items-center gap-3 text-lg font-black tracking-widest text-white group">
            <div class="w-6 h-6 border border-white/80 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
              <div class="w-2 h-2 bg-accentCyan shadow-[0_0_8px_#00f0ff]"></div>
            </div>
            <span>SYNVIO<span class="text-neutral-500 font-normal">/</span>AI</span>
          </a>

          <nav class="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href="${rootPath}index.html#about" class="hover:text-white transition-colors duration-200">About Us</a>
            <a href="${rootPath}index.html#capabilities" class="hover:text-white transition-colors duration-200">AI Capabilities</a>
            <a href="${rootPath}index.html#demo" class="hover:text-white transition-colors duration-200">Triage Hub</a>
            <a href="${subpagePath}faq.html" class="hover:text-white transition-colors duration-200 ${
              currentFile === 'faq.html'
                ? 'text-white font-bold border-b border-white pb-0.5'
                : ''
            }">FAQ</a>
            <a href="${subpagePath}legal.html" class="hover:text-white transition-colors duration-200 ${
              currentFile === 'legal.html'
                ? 'text-white font-bold border-b border-white pb-0.5'
                : ''
            }">Legal</a>
          </nav>

          <div class="flex items-center gap-4">
            <a href="${rootPath}index.html#contact" class="hidden sm:inline-block px-4 py-2 text-xs uppercase font-mono tracking-wider text-neutral-300 border border-white/20 rounded hover:text-white hover:border-white transition-all">Sign In</a>
            <a href="${rootPath}index.html#contact" class="px-5 py-2.5 text-xs uppercase font-mono tracking-wider font-bold text-pitch bg-white rounded hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)]">Free Consultation</a>
          </div>
        </div>
      `;

      document.body.prepend(header);
    }

    // =========================================================
    // FOOTER
    // =========================================================
    if (!document.getElementById('synvio-footer')) {
      const footer = document.createElement('footer');
      footer.id = 'synvio-footer';
      footer.className = 'bg-obsidian border-t border-white/10 py-12 px-6 mt-auto';

      footer.innerHTML = `
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <span class="text-sm font-black tracking-widest text-white">SYNVIO<span class="text-neutral-500 font-normal">/</span>AI</span>
            <span class="text-xs text-neutral-600 font-mono">|</span>
            <span class="text-xs text-neutral-400 font-mono">All systems deploy built-in safety guardrails protecting against AI hallucinations across Email and SMS.</span>
          </div>

          <div class="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href="${rootPath}index.html" class="hover:text-white transition-colors">Home</a>
            <a href="${subpagePath}faq.html" class="hover:text-white transition-colors">FAQ</a>
            <a href="${subpagePath}legal.html" class="hover:text-white transition-colors">Legal Terms</a>
          </div>
        </div>
      `;

      document.body.appendChild(footer);
    }

    // =========================================================
    // CHAT
    // =========================================================
    if (!document.getElementById('synvio-chat-sidebar')) {
      const toggle = document.createElement('button');
      toggle.id = 'synvio-chat-toggle';
      toggle.setAttribute('aria-label', 'Open Synvio AI chat');

      toggle.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span style="writing-mode:vertical-rl;text-orientation:mixed;font-size:12px;letter-spacing:.2em;margin-top:8px;">CHAT</span>
      `;

      toggle.style.cssText = `
        position:fixed;
        top:50%;
        right:0;
        transform:translateY(-50%);
        z-index:10001;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:68px;
        min-height:104px;
        padding:20px 13px;
        background:#000;
        border:1px solid #fff;
        border-right:none;
        border-radius:14px 0 0 14px;
        color:#fff;
        cursor:pointer;
        box-shadow:-4px 0 20px rgba(0,0,0,.45);
        font-family:'JetBrains Mono',monospace;
        font-weight:700;
        transition:background .2s ease,color .2s ease,border-color .2s ease,box-shadow .2s ease;
      `;

      toggle.addEventListener('mouseenter', function () {
        toggle.style.background = '#00f0ff';
        toggle.style.color = '#000';
        toggle.style.borderColor = '#00f0ff';
        toggle.style.boxShadow = '-6px 0 28px rgba(0,240,255,.25)';
      });

      toggle.addEventListener('mouseleave', function () {
        toggle.style.background = '#000';
        toggle.style.color = '#fff';
        toggle.style.borderColor = '#fff';
        toggle.style.boxShadow = '-4px 0 20px rgba(0,0,0,.45)';
      });

      const sidebar = document.createElement('div');
      sidebar.id = 'synvio-chat-sidebar';

      sidebar.style.cssText = `
        position:fixed;
        top:0;
        right:0;
        width:420px;
        max-width:100vw;
        height:100vh;
        height:100dvh;
        z-index:10000;
        background:#000;
        border-left:1px solid rgba(255,255,255,.35);
        transform:translateX(100%);
        transition:transform .35s cubic-bezier(.16,1,.3,1);
        display:flex;
        flex-direction:column;
        box-shadow:-10px 0 40px rgba(0,0,0,.75);
      `;

      sidebar.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-bottom:1px solid rgba(255,255,255,.18);background:#000;flex-shrink:0;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:8px;height:8px;border-radius:50%;background:#00f0ff;box-shadow:0 0 9px rgba(0,240,255,.85);"></div>
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#fff;">Synvio AI Assistant</span>
          </div>

          <button id="synvio-chat-close" aria-label="Close chat" style="background:none;border:none;color:#fff;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;border-radius:6px;transition:background .2s ease,color .2s ease;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div id="voiceflow-chat-container" style="flex:1;min-height:0;overflow:hidden;background:#000;color:#fff;"></div>
      `;

      document.body.appendChild(sidebar);
      document.body.appendChild(toggle);

      const closeButton = sidebar.querySelector('#synvio-chat-close');

      closeButton.addEventListener('mouseenter', function () {
        closeButton.style.background = '#fff';
        closeButton.style.color = '#000';
      });

      closeButton.addEventListener('mouseleave', function () {
        closeButton.style.background = 'transparent';
        closeButton.style.color = '#fff';
      });

      let chatOpen = false;
      let chatLoaded = false;

      function openSidebar() {
        chatOpen = true;
        sidebar.style.transform = 'translateX(0)';
        toggle.style.display = 'none';

        if (!chatLoaded) {
          chatLoaded = true;
          loadVoiceflowChat();
        }
      }

      function closeSidebar() {
        chatOpen = false;
        sidebar.style.transform = 'translateX(100%)';
        toggle.style.display = 'flex';
      }

      toggle.addEventListener('click', openSidebar);
      closeButton.addEventListener('click', closeSidebar);

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && chatOpen) {
          closeSidebar();
        }
      });

      // =======================================================
      // VOICEFLOW
      // =======================================================
      function loadVoiceflowChat() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';

        script.onload = function () {
          const voiceflowCSS = `
            *,
            *::before,
            *::after {
              box-sizing:border-box;
            }

            .vfrc-widget,
            .vfrc-container,
            .vfrc-chat,
            .vfrc-chat-container,
            .vfrc-chat--embedded,
            .vfrc-conversation,
            .vfrc-placeholder,
            .vfrc-footer,
            .vfrc-footer__content {
              background:#000 !important;
              background-color:#000 !important;
              color:#fff !important;
            }

            .vfrc-header {
              background:#000 !important;
              color:#fff !important;
              border-bottom:1px solid rgba(255,255,255,.18) !important;
            }

            .vfrc-header,
            .vfrc-header * {
              color:#fff !important;
              -webkit-text-fill-color:#fff !important;
            }

            .vfrc-system-response .vfrc-message,
            .vfrc-system-response .vfrc-message--chat,
            .vfrc-system-response .vfrc-bubble {
              background:#fff !important;
              color:#000 !important;
              border:1px solid #fff !important;
              box-shadow:none !important;
            }

            .vfrc-system-response .vfrc-message *,
            .vfrc-system-response .vfrc-message--chat *,
            .vfrc-system-response .vfrc-bubble * {
              color:#000 !important;
              -webkit-text-fill-color:#000 !important;
            }

            .vfrc-user-response .vfrc-message,
            .vfrc-user-response .vfrc-message--chat,
            .vfrc-user-response .vfrc-bubble {
              background:#000 !important;
              color:#fff !important;
              border:1px solid rgba(255,255,255,.65) !important;
              box-shadow:none !important;
            }

            .vfrc-user-response .vfrc-message *,
            .vfrc-user-response .vfrc-message--chat *,
            .vfrc-user-response .vfrc-bubble * {
              color:#fff !important;
              -webkit-text-fill-color:#fff !important;
            }

            /* =================================================
               USUWA SCROLL TO BOTTOM
               ================================================= */

            .vfrc-footer__content-scroll-to-bottom {
              display:none !important;
              visibility:hidden !important;
              opacity:0 !important;
              pointer-events:none !important;
              width:0 !important;
              height:0 !important;
              margin:0 !important;
              padding:0 !important;
              overflow:hidden !important;
            }

            /* =================================================
               CALE OKNO WPISYWANIA
               ================================================= */

            .vfrc-input-container {
              position:relative !important;
              background:#111 !important;
              background-color:#111 !important;
              border:1px solid rgba(255,255,255,.42) !important;
              border-radius:999px !important;
              box-shadow:none !important;
              opacity:1 !important;
              visibility:visible !important;
              overflow:visible !important;
              transition:border-color .18s ease,box-shadow .18s ease !important;
            }

            .vfrc-input-container:focus-within {
              background:#111 !important;
              background-color:#111 !important;
              border-color:#00f0ff !important;
              box-shadow:
                0 0 0 1px rgba(0,240,255,.28),
                0 0 14px rgba(0,240,255,.10) !important;
              opacity:1 !important;
              visibility:visible !important;
            }

            .vfrc-input-container-inner {
              background:#111 !important;
              background-color:#111 !important;
              color:#fff !important;
              opacity:1 !important;
              visibility:visible !important;
              border-radius:999px !important;
            }

            /* =================================================
               VOICEFLOW FOCUS RING - WYLACZAMY
               ================================================= */

            .vfrc-chat-focus-ring {
              display:none !important;
              visibility:hidden !important;
              opacity:0 !important;
              pointer-events:none !important;
            }

            /* =================================================
               PRAWDZIWY TEXTAREA VOICEFLOW
               ================================================= */

            textarea.vfrc-chat-input,
            textarea.vfrc-chat-input:hover,
            textarea.vfrc-chat-input:focus,
            textarea.vfrc-chat-input:active,
            .vfrc-chat-input,
            .vfrc-chat-input:hover,
            .vfrc-chat-input:focus,
            .vfrc-chat-input:active {
              display:block !important;
              background:transparent !important;
              background-color:transparent !important;
              color:#fff !important;
              -webkit-text-fill-color:#fff !important;
              caret-color:#00f0ff !important;
              opacity:1 !important;
              visibility:visible !important;
              outline:none !important;
              border:none !important;
              box-shadow:none !important;
              text-shadow:none !important;
            }

            textarea.vfrc-chat-input::placeholder,
            .vfrc-chat-input::placeholder {
              color:#7d7d7d !important;
              -webkit-text-fill-color:#7d7d7d !important;
              opacity:1 !important;
            }

            textarea.vfrc-chat-input::selection,
            .vfrc-chat-input::selection {
              background:rgba(0,240,255,.32) !important;
              color:#fff !important;
              -webkit-text-fill-color:#fff !important;
            }

            /* =================================================
               TYLKO PRAWDZIWY SEND BUTTON
               NIE LAPIE SCROLL-TO-BOTTOM
               ================================================= */

            .vfrc-input-container-inner button,
            .vfrc-input-container > button {
              background:#fff !important;
              background-color:#fff !important;
              color:#000 !important;
              border:1px solid #fff !important;
              opacity:1 !important;
              visibility:visible !important;
              transition:
                background .18s ease,
                border-color .18s ease,
                transform .18s ease,
                box-shadow .18s ease !important;
            }

            .vfrc-input-container-inner button svg,
            .vfrc-input-container-inner button svg *,
            .vfrc-input-container > button svg,
            .vfrc-input-container > button svg * {
              color:#000 !important;
              stroke:#000 !important;
              opacity:1 !important;
            }

            .vfrc-input-container-inner button:hover,
            .vfrc-input-container > button:hover {
              background:#00f0ff !important;
              background-color:#00f0ff !important;
              border-color:#00f0ff !important;
              transform:scale(1.05) !important;
              box-shadow:0 0 16px rgba(0,240,255,.28) !important;
            }

            /* =================================================
               QUICK REPLIES
               ================================================= */

            .vfrc-button,
            .vfrc-button--primary,
            .vfrc-button--secondary,
            .vfrc-button-container button {
              background:#fff !important;
              color:#000 !important;
              -webkit-text-fill-color:#000 !important;
              border:1px solid #fff !important;
              cursor:pointer !important;
              transition:
                transform .2s cubic-bezier(.16,1,.3,1),
                background .2s ease,
                border-color .2s ease,
                box-shadow .2s ease !important;
            }

            .vfrc-button *,
            .vfrc-button--primary *,
            .vfrc-button--secondary *,
            .vfrc-button-container button * {
              color:#000 !important;
              -webkit-text-fill-color:#000 !important;
            }

            .vfrc-button:hover,
            .vfrc-button--primary:hover,
            .vfrc-button--secondary:hover,
            .vfrc-button-container button:hover {
              background:#00f0ff !important;
              border-color:#00f0ff !important;
              color:#000 !important;
              -webkit-text-fill-color:#000 !important;
              transform:translateX(4px) scale(1.012) !important;
              box-shadow:0 0 18px rgba(0,240,255,.24) !important;
            }

            .vfrc-system-response a {
              color:#000 !important;
              -webkit-text-fill-color:#000 !important;
            }

            .vfrc-user-response a {
              color:#fff !important;
              -webkit-text-fill-color:#fff !important;
            }

            ::-webkit-scrollbar {
              width:7px;
            }

            ::-webkit-scrollbar-track {
              background:#000;
            }

            ::-webkit-scrollbar-thumb {
              background:#444;
              border-radius:10px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background:#00f0ff;
            }
          `;

          window.voiceflow.chat.load({
            verify: {
              projectID: '6aa5513d4fc43923d7ed1282'
            },

            url: 'https://general-runtime.voiceflow.com',

            voice: {
              url: 'https://runtime-api.voiceflow.com'
            },

            render: {
              mode: 'embedded',
              target: document.getElementById('voiceflow-chat-container')
            },

            assistant: {
              color: '#000000',
              stylesheet:
                'data:text/css;base64,' +
                btoa(
                  unescape(
                    encodeURIComponent(voiceflowCSS)
                  )
                )
            }
          });

          // ===================================================
          // HARD FIX POD RZECZYWISTY DOM VOICEFLOW
          // ===================================================

          const chatRoot =
            document.getElementById('voiceflow-chat-container');

          const watchedRoots = new WeakSet();

          function injectFixStyle(root) {
            if (
              !root ||
              !root.querySelector ||
              root.querySelector(
                'style[data-synvio-vf-fix="1"]'
              )
            ) {
              return;
            }

            try {
              const style =
                document.createElement('style');

              style.setAttribute(
                'data-synvio-vf-fix',
                '1'
              );

              style.textContent =
                voiceflowCSS;

              root.appendChild(style);
            } catch (_) {}
          }

          function setImportant(
            element,
            property,
            value
          ) {
            if (
              !element ||
              !element.style
            ) {
              return;
            }

            element.style.setProperty(
              property,
              value,
              'important'
            );
          }

          function fixInput(root) {
            if (
              !root ||
              !root.querySelectorAll
            ) {
              return;
            }

            // ===============================================
            // USUN SCROLL-TO-BOTTOM
            // ===============================================

            root
              .querySelectorAll(
                '.vfrc-footer__content-scroll-to-bottom'
              )
              .forEach(function (element) {
                setImportant(
                  element,
                  'display',
                  'none'
                );

                setImportant(
                  element,
                  'visibility',
                  'hidden'
                );

                setImportant(
                  element,
                  'opacity',
                  '0'
                );

                setImportant(
                  element,
                  'pointer-events',
                  'none'
                );

                setImportant(
                  element,
                  'width',
                  '0'
                );

                setImportant(
                  element,
                  'height',
                  '0'
                );

                setImportant(
                  element,
                  'margin',
                  '0'
                );

                setImportant(
                  element,
                  'padding',
                  '0'
                );
              });

            // ===============================================
            // USUN FOCUS RING VOICEFLOW
            // ===============================================

            root
              .querySelectorAll(
                '.vfrc-chat-focus-ring'
              )
              .forEach(function (element) {
                setImportant(
                  element,
                  'display',
                  'none'
                );

                setImportant(
                  element,
                  'visibility',
                  'hidden'
                );

                setImportant(
                  element,
                  'opacity',
                  '0'
                );

                setImportant(
                  element,
                  'pointer-events',
                  'none'
                );
              });

            // ===============================================
            // INPUT CONTAINER
            // ===============================================

            root
              .querySelectorAll(
                '.vfrc-input-container'
              )
              .forEach(function (container) {
                setImportant(
                  container,
                  'background',
                  '#111111'
                );

                setImportant(
                  container,
                  'background-color',
                  '#111111'
                );

                setImportant(
                  container,
                  'border',
                  '1px solid rgba(255,255,255,.42)'
                );

                setImportant(
                  container,
                  'border-radius',
                  '999px'
                );

                setImportant(
                  container,
                  'opacity',
                  '1'
                );

                setImportant(
                  container,
                  'visibility',
                  'visible'
                );

                if (
                  !container.dataset
                    .synvioFocusBound
                ) {
                  container.dataset
                    .synvioFocusBound = '1';

                  container.addEventListener(
                    'focusin',
                    function () {
                      setImportant(
                        container,
                        'background',
                        '#111111'
                      );

                      setImportant(
                        container,
                        'background-color',
                        '#111111'
                      );

                      setImportant(
                        container,
                        'border-color',
                        '#00f0ff'
                      );

                      setImportant(
                        container,
                        'box-shadow',
                        '0 0 0 1px rgba(0,240,255,.28), 0 0 14px rgba(0,240,255,.10)'
                      );
                    }
                  );

                  container.addEventListener(
                    'focusout',
                    function () {
                      setImportant(
                        container,
                        'background',
                        '#111111'
                      );

                      setImportant(
                        container,
                        'background-color',
                        '#111111'
                      );

                      setImportant(
                        container,
                        'border-color',
                        'rgba(255,255,255,.42)'
                      );

                      setImportant(
                        container,
                        'box-shadow',
                        'none'
                      );
                    }
                  );
                }
              });

            // ===============================================
            // INPUT INNER
            // ===============================================

            root
              .querySelectorAll(
                '.vfrc-input-container-inner'
              )
              .forEach(function (inner) {
                setImportant(
                  inner,
                  'background',
                  '#111111'
                );

                setImportant(
                  inner,
                  'background-color',
                  '#111111'
                );

                setImportant(
                  inner,
                  'color',
                  '#ffffff'
                );

                setImportant(
                  inner,
                  'opacity',
                  '1'
                );

                setImportant(
                  inner,
                  'visibility',
                  'visible'
                );

                setImportant(
                  inner,
                  'border-radius',
                  '999px'
                );
              });

            // ===============================================
            // PRAWDZIWY TEXTAREA
            // ===============================================

            root
              .querySelectorAll(
                'textarea.vfrc-chat-input, .vfrc-chat-input'
              )
              .forEach(function (input) {

                function applyInputStyle() {
                  setImportant(
                    input,
                    'display',
                    'block'
                  );

                  setImportant(
                    input,
                    'background',
                    'transparent'
                  );

                  setImportant(
                    input,
                    'background-color',
                    'transparent'
                  );

                  setImportant(
                    input,
                    'color',
                    '#ffffff'
                  );

                  setImportant(
                    input,
                    '-webkit-text-fill-color',
                    '#ffffff'
                  );

                  setImportant(
                    input,
                    'caret-color',
                    '#00f0ff'
                  );

                  setImportant(
                    input,
                    'opacity',
                    '1'
                  );

                  setImportant(
                    input,
                    'visibility',
                    'visible'
                  );

                  setImportant(
                    input,
                    'outline',
                    'none'
                  );

                  setImportant(
                    input,
                    'border',
                    'none'
                  );

                  setImportant(
                    input,
                    'box-shadow',
                    'none'
                  );

                  setImportant(
                    input,
                    'text-shadow',
                    'none'
                  );
                }

                applyInputStyle();

                if (
                  !input.dataset
                    .synvioInputBound
                ) {
                  input.dataset
                    .synvioInputBound = '1';

                  [
                    'focus',
                    'click',
                    'beforeinput',
                    'input',
                    'keydown',
                    'keyup'
                  ].forEach(
                    function (
                      eventName
                    ) {
                      input.addEventListener(
                        eventName,
                        function () {
                          applyInputStyle();

                          requestAnimationFrame(
                            applyInputStyle
                          );

                          setTimeout(
                            applyInputStyle,
                            0
                          );

                          setTimeout(
                            applyInputStyle,
                            25
                          );

                          setTimeout(
                            applyInputStyle,
                            100
                          );
                        }
                      );
                    }
                  );
                }
              });

            // ===============================================
            // TYLKO SEND BUTTON W INPUT CONTAINER
            // ===============================================

            root
              .querySelectorAll(
                '.vfrc-input-container-inner button, .vfrc-input-container > button'
              )
              .forEach(function (button) {
                setImportant(
                  button,
                  'background',
                  '#ffffff'
                );

                setImportant(
                  button,
                  'background-color',
                  '#ffffff'
                );

                setImportant(
                  button,
                  'color',
                  '#000000'
                );

                setImportant(
                  button,
                  'border-color',
                  '#ffffff'
                );

                setImportant(
                  button,
                  'opacity',
                  '1'
                );

                setImportant(
                  button,
                  'visibility',
                  'visible'
                );

                button
                  .querySelectorAll(
                    'svg, svg *, path, line, polyline'
                  )
                  .forEach(
                    function (icon) {
                      setImportant(
                        icon,
                        'color',
                        '#000000'
                      );

                      setImportant(
                        icon,
                        'stroke',
                        '#000000'
                      );

                      setImportant(
                        icon,
                        'opacity',
                        '1'
                      );
                    }
                  );
              });
          }

          // ===================================================
          // OBSERVE SHADOW DOM
          // ===================================================

          function observeRoot(root) {
            if (
              !root ||
              watchedRoots.has(root)
            ) {
              return;
            }

            watchedRoots.add(root);

            injectFixStyle(root);
            fixInput(root);

            try {
              const observer =
                new MutationObserver(
                  function () {
                    injectFixStyle(root);
                    fixInput(root);
                    discoverRoots(root);
                  }
                );

              observer.observe(
                root,
                {
                  childList:true,
                  subtree:true,
                  attributes:true,
                  attributeFilter:[
                    'class',
                    'style'
                  ]
                }
              );
            } catch (_) {}
          }

          function discoverRoots(root) {
            if (!root) {
              return;
            }

            observeRoot(root);

            if (
              root.querySelectorAll
            ) {
              root
                .querySelectorAll('*')
                .forEach(
                  function (element) {
                    if (
                      element.shadowRoot
                    ) {
                      observeRoot(
                        element.shadowRoot
                      );

                      discoverRoots(
                        element.shadowRoot
                      );
                    }
                  }
                );
            }
          }

          function runFix() {
            discoverRoots(chatRoot);
            fixInput(chatRoot);
          }

          [
            0,
            50,
            100,
            200,
            400,
            700,
            1000,
            1500,
            2500,
            4000,
            7000
          ].forEach(
            function (delay) {
              setTimeout(
                runFix,
                delay
              );
            }
          );

          // Przez pierwsze 15 sekund widget jeszcze renderuje
          // elementy Reactem, więc poprawka pilnuje stanu.
          const temporaryFixInterval =
            setInterval(
              runFix,
              250
            );

          setTimeout(
            function () {
              clearInterval(
                temporaryFixInterval
              );
            },
            15000
          );
        };

        const firstScript =
          document.getElementsByTagName(
            'script'
          )[0];

        if (
          firstScript &&
          firstScript.parentNode
        ) {
          firstScript.parentNode.insertBefore(
            script,
            firstScript
          );
        } else {
          document.head.appendChild(
            script
          );
        }
      }
    }
  }

  if (
    document.readyState ===
    'loading'
  ) {
    document.addEventListener(
      'DOMContentLoaded',
      initGlobalShell
    );
  } else {
    initGlobalShell();
  }
})();