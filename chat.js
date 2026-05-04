document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('chatToggle');
  const panel = document.getElementById('chatPanel');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');

  // ── Configure após deploy do Cloudflare Worker (veja worker.js) ──
  const AI_ENDPOINT = 'https://super-night-79d0.guilhermeoda25.workers.dev';
  // ─────────────────────────────────────────────────────────────────

  const history = [];
  let isLoading = false;

  function scrollBottom() { messages.scrollTop = messages.scrollHeight; }

  toggle.addEventListener('click', () => {
    const open = panel.hasAttribute('hidden');
    if (open) {
      panel.removeAttribute('hidden');
      toggle.textContent = 'Fechar';
      input.focus();
    } else {
      panel.setAttribute('hidden', '');
      toggle.textContent = 'Chat';
    }
  });

  function appendMessage(text, who = 'bot') {
    const el = document.createElement('div');
    el.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
    el.textContent = text;
    messages.appendChild(el);
    scrollBottom();
    return el;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'msg bot typing';
    el.id = 'typingIndicator';
    el.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(el);
    scrollBottom();
  }

  function hideTyping() {
    document.getElementById('typingIndicator')?.remove();
  }

  async function askAI(userText) {
    const res = await fetch(AI_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userText, history }),
    });

    if (!res.ok) throw new Error('status ' + res.status);

    const data = await res.json();
    const reply = data.reply;

    history.push({ role: 'user', content: userText });
    history.push({ role: 'assistant', content: reply });
    if (history.length > 10) history.splice(0, history.length - 10);

    return reply;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isLoading) return;
    const text = input.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    input.value = '';
    isLoading = true;
    input.disabled = true;
    showTyping();

    try {
      const reply = await askAI(text);
      hideTyping();
      appendMessage(reply, 'bot');
    } catch {
      hideTyping();
      appendMessage('Tive um problema ao responder. Fale comigo pelo WhatsApp: wa.me/5541987890037', 'bot');
    } finally {
      isLoading = false;
      input.disabled = false;
      input.focus();
    }
  });

  appendMessage('Olá! Sou a assistente virtual da LuOda. Posso ajudar com informações sobre serviços e agendamentos. 😊');
});
