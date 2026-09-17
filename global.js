(() => {
  function init() {
    if (window.__synvioMarketingReady) return;
    window.__synvioMarketingReady = true;
    const templates = {"index.html": {"header": "<header id=\"site-header\" class=\"sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b hairline\">\n    <div class=\"max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6\">\n      <a href=\"./index.html\" class=\"flex items-center gap-3 text-lg font-black tracking-[.14em] text-white shrink-0\">\n        <span class=\"w-6 h-6 border border-white/60 rounded-[3px] grid place-items-center\">\n          <span class=\"w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00e7f2]\"></span>\n        </span>\n        <span>SYNVIO<span class=\"text-neutral-600 font-normal\">/</span>AI</span>\n      </a>\n\n      <nav class=\"hidden lg:flex gap-7 text-[10px] font-mono uppercase tracking-[.12em] text-neutral-500\">\n        <a href=\"#product\" class=\"hover:text-white transition-colors\">Product</a>\n        <a href=\"#chat\" class=\"hover:text-white transition-colors\">AI Chat</a>\n        <a href=\"#demo\" class=\"hover:text-white transition-colors\">Demo</a>\n        <a href=\"#roles\" class=\"hover:text-white transition-colors\">Teams</a>\n        <a href=\"#pricing\" class=\"hover:text-white transition-colors\">Pricing</a>\n        <a href=\"./subpages/faq.html\" class=\"hover:text-white transition-colors\">FAQ</a>\n        <a href=\"./subpages/legal.html\" class=\"hover:text-white transition-colors\">Legal</a>\n      </nav>\n\n      <div class=\"flex items-center gap-2 sm:gap-3\">\n        <a href=\"https://app.synviocore.xyz/login.html\"\n           class=\"hidden sm:inline-flex px-3.5 py-2.5 text-[10px] font-mono uppercase tracking-[.12em] text-neutral-300 hover:text-white\">\n          Sign in\n        </a>\n        <a href=\"#contact\"\n           class=\"inline-flex px-4 sm:px-5 py-2.5 rounded-lg bg-white text-black text-[10px] font-mono uppercase tracking-[.12em] font-black hover:bg-neutral-200 transition-colors\">\n          Book a pilot\n        </a>\n      </div>\n    </div>\n  </header>", "footer": "<footer id=\"site-footer\" class=\"bg-black border-t hairline px-6 py-12\">\n    <div class=\"max-w-7xl mx-auto\">\n      <div class=\"flex flex-col lg:flex-row lg:items-end justify-between gap-8\">\n        <div class=\"max-w-xl\">\n          <div class=\"text-sm font-black tracking-[.14em] text-white\">SYNVIO<span class=\"text-neutral-600 font-normal\">/</span>AI</div>\n          <p class=\"mt-4 text-xs leading-6 text-neutral-500\">Email, AI web chat and human support handoff in one customer-service workspace.</p>\n        </div>\n        <div class=\"flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-mono uppercase tracking-[.12em] text-neutral-500\">\n          <a href=\"#product\" class=\"hover:text-white\">Product</a>\n          <a href=\"#chat\" class=\"hover:text-white\">AI Chat</a>\n          <a href=\"#pricing\" class=\"hover:text-white\">Pricing</a>\n          <a href=\"./subpages/faq.html\" class=\"hover:text-white\">FAQ</a>\n          <a href=\"./subpages/legal.html\" class=\"hover:text-white\">Legal</a>\n          <a href=\"https://app.synviocore.xyz/login.html\" class=\"hover:text-white\">Sign in</a>\n        </div>\n      </div>\n      <div class=\"mt-9 pt-5 border-t hairline flex flex-col sm:flex-row justify-between gap-3 text-[9px] font-mono uppercase tracking-[.1em] text-neutral-700\">\n        <span>© 2026 Synvio AI</span><span>Customer support, with a human when it matters.</span>\n      </div>\n    </div>\n  </footer>"}, "subpages/faq.html": {"header": "<header class=\"sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10\">\n    <div class=\"max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6\">\n      <a href=\"../index.html\" class=\"flex items-center gap-3 text-lg font-black tracking-[.14em] text-white\">\n        <span class=\"w-6 h-6 border border-white/60 rounded-[3px] grid place-items-center\"><span class=\"w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00e7f2]\"></span></span>\n        <span>SYNVIO<span class=\"text-neutral-600 font-normal\">/</span>AI</span>\n      </a>\n      <nav class=\"hidden lg:flex gap-7 text-[10px] font-mono uppercase tracking-[.12em] text-neutral-500\">\n        <a href=\"../index.html#product\" class=\"hover:text-white\">Product</a>\n        <a href=\"../index.html#chat\" class=\"hover:text-white\">AI Chat</a>\n        <a href=\"../index.html#pricing\" class=\"hover:text-white\">Pricing</a>\n        <a href=\"./faq.html\" class=\"text-white\">FAQ</a>\n        <a href=\"./legal.html\" class=\"hover:text-white\">Legal</a>\n      </nav>\n      <div class=\"flex items-center gap-2\">\n        <a href=\"https://app.synviocore.xyz/login.html\" class=\"hidden sm:inline-flex px-3 py-2 text-[10px] font-mono uppercase tracking-[.12em] text-neutral-300\">Sign in</a>\n        <a href=\"../index.html#contact\" class=\"px-4 py-2.5 rounded-lg bg-white text-black text-[10px] font-mono uppercase tracking-[.12em] font-black\">Book a pilot</a>\n      </div>\n    </div>\n  </header>", "footer": "<footer class=\"bg-black border-t border-white/10 px-6 py-12\">\n    <div class=\"max-w-7xl mx-auto\">\n      <div class=\"flex flex-col md:flex-row justify-between gap-8\">\n        <div><div class=\"text-sm font-black tracking-[.14em] text-white\">SYNVIO<span class=\"text-neutral-600 font-normal\">/</span>AI</div><p class=\"mt-3 text-xs leading-6 text-neutral-500\">Email, AI web chat and human support handoff in one workspace.</p></div>\n        <div class=\"flex flex-wrap gap-5 text-[10px] font-mono uppercase tracking-[.12em] text-neutral-500\">\n          <a href=\"../index.html#product\">Product</a><a href=\"../index.html#pricing\">Pricing</a><a href=\"./faq.html\">FAQ</a><a href=\"./legal.html\">Legal</a>\n        </div>\n      </div>\n      <div class=\"mt-8 pt-5 border-t border-white/10 text-[9px] font-mono uppercase tracking-[.1em] text-neutral-700\">© 2026 Synvio AI</div>\n    </div>\n  </footer>"}, "subpages/legal.html": {"header": "<header class=\"sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10\">\n    <div class=\"max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6\">\n      <a href=\"../index.html\" class=\"flex items-center gap-3 text-lg font-black tracking-[.14em] text-white\">\n        <span class=\"w-6 h-6 border border-white/60 rounded-[3px] grid place-items-center\"><span class=\"w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00e7f2]\"></span></span>\n        <span>SYNVIO<span class=\"text-neutral-600 font-normal\">/</span>AI</span>\n      </a>\n      <nav class=\"hidden lg:flex gap-7 text-[10px] font-mono uppercase tracking-[.12em] text-neutral-500\">\n        <a href=\"../index.html#product\" class=\"hover:text-white\">Product</a>\n        <a href=\"../index.html#chat\" class=\"hover:text-white\">AI Chat</a>\n        <a href=\"../index.html#pricing\" class=\"hover:text-white\">Pricing</a>\n        <a href=\"./faq.html\" class=\"hover:text-white\">FAQ</a>\n        <a href=\"./legal.html\" class=\"text-white\">Legal</a>\n      </nav>\n      <div class=\"flex items-center gap-2\">\n        <a href=\"https://app.synviocore.xyz/login.html\" class=\"hidden sm:inline-flex px-3 py-2 text-[10px] font-mono uppercase tracking-[.12em] text-neutral-300\">Sign in</a>\n        <a href=\"../index.html#contact\" class=\"px-4 py-2.5 rounded-lg bg-white text-black text-[10px] font-mono uppercase tracking-[.12em] font-black\">Book a pilot</a>\n      </div>\n    </div>\n  </header>", "footer": "<footer class=\"bg-black border-t border-white/10 px-6 py-12\">\n    <div class=\"max-w-7xl mx-auto\">\n      <div class=\"flex flex-col md:flex-row justify-between gap-8\">\n        <div><div class=\"text-sm font-black tracking-[.14em] text-white\">SYNVIO<span class=\"text-neutral-600 font-normal\">/</span>AI</div><p class=\"mt-3 text-xs leading-6 text-neutral-500\">Email, AI web chat and human support handoff in one workspace.</p></div>\n        <div class=\"flex flex-wrap gap-5 text-[10px] font-mono uppercase tracking-[.12em] text-neutral-500\">\n          <a href=\"../index.html#product\">Product</a><a href=\"../index.html#pricing\">Pricing</a><a href=\"./faq.html\">FAQ</a><a href=\"./legal.html\">Legal</a>\n        </div>\n      </div>\n      <div class=\"mt-8 pt-5 border-t border-white/10 text-[9px] font-mono uppercase tracking-[.1em] text-neutral-700\">© 2026 Synvio AI</div>\n    </div>\n  </footer>"}};
    for (const page of Object.values(templates)) {
      page.header = page.header.replace('<a href=', '<a class="site-brand" href=');
      // Merge the two class attributes into one valid class attribute.
      page.header = page.header.replace(/class="site-brand" href="([^"]+)" class="([^"]+)"/, 'href="$1" class="site-brand $2"');
    }
    const key = location.pathname.endsWith('/faq.html') ? 'subpages/faq.html' : location.pathname.endsWith('/legal.html') ? 'subpages/legal.html' : 'index.html';
    for (const tag of ['header', 'footer']) {
      const mount = document.getElementById(`site-${tag}-mount`);
      if (mount && !document.querySelector(tag)) {
        mount.insertAdjacentHTML('beforebegin', templates[key][tag]);
        document.querySelector(tag).id = `site-${tag}`;
        mount.remove();
      }
    }
    const footer = document.getElementById('site-footer');
    if (footer) footer.insertAdjacentHTML('afterbegin', `
      <section class="core-signature" aria-label="Synvio Core">
        <div class="core-orbit" aria-hidden="true">
          <div class="core-halo"></div><div class="core-ring ring-outer"><i></i><i></i></div>
          <div class="core-wire wire-one"></div><div class="core-wire wire-two"></div>
          <div class="core-ring ring-inner"><i></i></div><div class="core-ray ray-one"></div><div class="core-ray ray-two"></div>
          <div class="core-center"><span class="core-mark"></span><strong>SYNVIO CORE</strong><small>Built around people</small></div>
        </div>
        <div class="core-copy"><span class="eyebrow">The Synvio core</span><h2>A little more calm.<br>A lot more clarity.</h2><p>One place for your conversations, your team and the knowledge that makes a good reply possible.</p>
          <button type="button" class="core-theme-button" data-open-appearance aria-haspopup="dialog">Theme &amp; motion <span aria-hidden="true">↗</span></button>
        </div>
      </section>`);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const fine = matchMedia('(hover: hover) and (pointer: fine)');
    const cards = document.querySelectorAll('.panel, .soft, .faq-item, .legal, main article, main section.rounded-2xl');
    cards.forEach(card => card.classList.add('premium-surface'));
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.append(glow);
    let frame = 0, x = 0, y = 0, target = null;
    function reset() {
      glow.classList.remove('visible');
      cards.forEach(card => card.classList.remove('pointer-active'));
    }
    document.addEventListener('pointermove', event => {
      if (reduced.matches || document.documentElement.dataset.motion === 'off' || !fine.matches || event.pointerType === 'touch') return;
      x = event.clientX; y = event.clientY;
      target = event.target.closest('.premium-surface');
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        glow.classList.add('visible');
        cards.forEach(card => card.classList.toggle('pointer-active', card === target));
        if (target) {
          const rect = target.getBoundingClientRect();
          target.style.setProperty('--pointer-x', `${x - rect.left}px`);
          target.style.setProperty('--pointer-y', `${y - rect.top}px`);
        }
      });
    }, {passive: true});
    document.documentElement.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    window.addEventListener('scroll', reset, {passive:true});
    reduced.addEventListener('change', reset);
    fine.addEventListener('change', reset);
    (() => {
  const ticketData = [
    {
      channel: "Email conversation",
      subject: "Change delivery address",
      customer: "Maya Chen • maya@northlane.co",
      messages: [
        ["customer", "Hi — I just noticed the shipping address on order #4831 is my old office. Can you change it before it goes out?"],
        ["system", "Order context: #4831 • paid • not yet dispatched"]
      ],
      reply: "Hi Maya,\n\nThanks for flagging this. Please send the new delivery address and we’ll confirm the change before dispatch.\n\nBest,\nSupport"
    },
    {
      channel: "Web chat • human handoff",
      subject: "Need a person about billing",
      customer: "Website visitor #2148",
      messages: [
        ["system", "AI chat context: customer asked about billing and then requested a human."],
        ["customer", "I need to change the invoice details and I’d rather speak with a person."]
      ],
      reply: "Hi — I’ve taken over the conversation. Send me the invoice details you need changed and I’ll help from here."
    },
    {
      channel: "Email conversation",
      subject: "Invoice request",
      customer: "Studio Seven • accounts@studio7.com",
      messages: [
        ["customer", "Could you send us the VAT invoice for order #8012?"],
        ["system", "Order context: #8012 • completed"]
      ],
      reply: "Hi,\n\nOf course. I’ll send the VAT invoice for order #8012 to this address.\n\nBest,\nSupport"
    }
  ];

  function escapeHtml(v = "") {
    return String(v).replace(/[&<>"']/g, ch => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[ch]));
  }

  const demoButtons = [...document.querySelectorAll("[data-demo-ticket]")];
  const channel = document.getElementById("demo-channel");
  const subject = document.getElementById("demo-subject");
  const customer = document.getElementById("demo-customer");
  const thread = document.getElementById("demo-thread");
  const reply = document.getElementById("demo-reply");
  const status = document.getElementById("demo-status");
  const demoContent=[channel,subject,customer,thread,reply,status].filter(Boolean);
  let demoTransition=0;
  let draftTimer=0;
  const demoMotion=()=>document.documentElement.dataset.motion!=='off'&&!matchMedia('(prefers-reduced-motion: reduce)').matches;

  async function loadTicket(index,instant=false) {
    const item = ticketData[index];
    if (!item || !thread) return;
    if(draftTimer){clearInterval(draftTimer);draftTimer=0;}
    const transition=++demoTransition;
    demoContent.forEach(node=>node.getAnimations?.().forEach(animation=>animation.cancel()));
    if(!instant&&demoMotion()){
      await Promise.all(demoContent.map(node=>node.animate([{opacity:1},{opacity:0}],{duration:140,easing:'ease-in'}).finished.catch(()=>{})));
      if(transition!==demoTransition)return;
    }
    demoButtons.forEach(btn => btn.classList.toggle("active", Number(btn.dataset.demoTicket) === index));
    channel.textContent = item.channel;
    subject.textContent = item.subject;
    customer.textContent = item.customer;
    reply.value = item.reply;
    status.textContent = "Ready for agent review";
    thread.innerHTML = item.messages.map(([type, text]) => `
      <div class="chat-bubble mb-3 rounded-xl border ${type === "customer" ? "border-white/10 bg-white/[.02]" : "border-cyan/15 bg-cyan/[.02]"} p-4">
        <div class="font-mono text-[8px] uppercase tracking-[.1em] ${type === "customer" ? "text-neutral-600" : "text-cyan/70"}">${type === "customer" ? "Customer" : "Synvio context"}</div>
        <div class="mt-2 text-xs leading-6 text-neutral-300">${escapeHtml(text)}</div>
      </div>
    `).join("");
    if(!instant&&demoMotion())demoContent.forEach(node=>node.animate([{opacity:0},{opacity:1}],{duration:310,easing:'cubic-bezier(.2,.8,.2,1)'}));
  }

  demoButtons.forEach(btn => btn.addEventListener("click", () => loadTicket(Number(btn.dataset.demoTicket))));
  loadTicket(0,true);

  document.getElementById("demo-generate")?.addEventListener("click", () => {
    if (!reply) return;
    if(draftTimer)clearInterval(draftTimer);
    const final = ticketData[Number(document.querySelector("[data-demo-ticket].active")?.dataset.demoTicket || 0)].reply;
    reply.value = "";
    status.textContent = "Generating draft…";
    let i = 0;
    draftTimer = setInterval(() => {
      reply.value = final.slice(0, i += 5);
      if (i >= final.length) {
        clearInterval(draftTimer);draftTimer=0;
        reply.value = final;
        status.textContent = "Draft ready for review";
      }
    }, 18);
  });

  document.getElementById("demo-send")?.addEventListener("click", () => {
    status.textContent = "Reply sent • conversation updated";
    setTimeout(() => status.textContent = "Ready for agent review", 2600);
  });

  const handoffButton = document.getElementById("handoff-button");
  const handoffChat = document.getElementById("handoff-chat");
  const handoffEmpty = document.getElementById("handoff-empty");
  const handoffTicket = document.getElementById("handoff-ticket");
  handoffButton?.addEventListener("click", () => {
    if (handoffButton.dataset.done) return;
    handoffButton.dataset.done = "1";
    handoffButton.textContent = "Connecting to an employee…";
    setTimeout(() => {
      handoffChat?.insertAdjacentHTML("beforeend", `
        <div class="chat-bubble max-w-[82%] rounded-xl border border-green/20 bg-green/[.035] p-4 text-xs leading-6 text-neutral-200">
          I’m handing this conversation to the support team now. They’ll see the context above.
        </div>
      `);
      handoffEmpty?.classList.add("hidden");
      handoffTicket?.classList.remove("hidden");
      handoffButton.textContent = "Human support connected";
      handoffButton.classList.remove("bg-white","text-black");
      handoffButton.classList.add("border","border-green/30","bg-green/[.05]","text-green");
    }, 650);
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("on");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .1 });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("on"));
  }

  const pricingInputs = ['tickets','calls','input','output'].map(name => document.getElementById(`price-${name}-input`));
  function updatePricing() {
    if (pricingInputs.some(input => !input)) return;
    const [tickets,callsPerTicket,inputTokens,outputTokens] = pricingInputs.map(input => Number(input.value));
    const actions = tickets * callsPerTicket;
    const perCall = (inputTokens*4 + outputTokens*16)/1_000_000;
    for (const [name,value] of Object.entries({tickets,calls:callsPerTicket,input:inputTokens,output:outputTokens}))
      document.getElementById(`price-${name}`).textContent = value.toLocaleString('en-US');
    document.getElementById("price-actions").textContent = actions.toLocaleString("en-US");
    document.getElementById("price-amount").textContent = (actions*perCall).toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:4});
    document.getElementById("price-per-call").textContent = '$'+perCall.toFixed(4);
  }
  pricingInputs.forEach(el => el?.addEventListener("input", updatePricing));
  updatePricing();

  const form = document.getElementById("pilot-form");
  const formStatus = document.getElementById("pilot-status");
  form?.addEventListener("submit", async event => {
    event.preventDefault();
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    const old = button.textContent;
    button.textContent = "Sending…";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (!res.ok) throw new Error("Unable to send");
      form.reset();
      formStatus.textContent = "Request received. We’ll contact you about the next step.";
      formStatus.className = "text-xs leading-6 text-green";
    } catch {
      formStatus.textContent = "Could not send the form. Please try again.";
      formStatus.className = "text-xs leading-6 text-red";
    } finally {
      button.disabled = false;
      button.textContent = old;
    }
  });
})();

  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
