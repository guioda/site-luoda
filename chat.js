document.addEventListener('DOMContentLoaded', () => {
  const widget  = document.getElementById('chatWidget');
  const toggle  = document.getElementById('chatToggle');
  const form    = document.getElementById('chatForm');
  const input   = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');

  const AI_ENDPOINT = 'https://super-night-79d0.guilhermeoda25.workers.dev';

  const history = [];
  let isLoading = false;

  function scrollBottom() { messages.scrollTop = messages.scrollHeight; }

  toggle.addEventListener('click', () => {
    const opening = !widget.classList.contains('is-open');
    widget.classList.toggle('is-open', opening);
    toggle.setAttribute('aria-label', opening ? 'Fechar chat' : 'Abrir chat');
    if (opening) input.focus();
  });

  function appendMessage(text, who = 'bot') {
    const el = document.createElement('div');
    el.className = 'msg ' + who;
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

    if (!res.ok) {
      const err = await res.text().catch(() => res.status);
      console.error('Worker error:', err);
      throw new Error(String(err));
    }

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
    form.querySelector('button').disabled = true;
    showTyping();

    try {
      const reply = await askAI(text);
      hideTyping();
      appendMessage(reply, 'bot');
    } catch {
      hideTyping();
      appendMessage('Não consegui responder agora. Entre em contato pelo WhatsApp 😊', 'bot');
    } finally {
      isLoading = false;
      input.disabled = false;
      form.querySelector('button').disabled = false;
      input.focus();
    }
  });

  appendMessage('Olá! Sou a assistente virtual da LuOda. Como posso ajudar você hoje? 🌿');
});
