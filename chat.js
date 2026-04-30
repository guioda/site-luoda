document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('chatToggle');
  const panel = document.getElementById('chatPanel');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');

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

  function appendMessage(text, who='bot'){
    const el = document.createElement('div');
    el.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
    el.textContent = text;
    messages.appendChild(el);
    scrollBottom();
  }

  function botReply(userText){
    const t = userText.toLowerCase();
    // regras simples de resposta
    if (/hor[ií]rio|quando|agenda/.test(t)) return 'Atendemos por agendamento. Quer que eu envie o link do WhatsApp para agendar?';
    if (/pre[çc]o|valor|quanto/.test(t)) return 'Os valores variam conforme a técnica. Quer que eu descreva os serviços e preços?';
    if (/drenagem|linf[aã]tica/.test(t)) return 'A drenagem linfática é indicada para reduzir retenção e pós-operatório. Deseja saber duração e preço?';
    if (/relaxante|massagem relaxante/.test(t)) return 'A massagem relaxante foca em bem-estar e redução de estresse. Posso explicar a sessão típica.';
    if (/shiatsu|miofascial|terap[eê]utica/.test(t)) return 'Posso explicar cada técnica. Qual delas você quer conhecer primeiro?';
    if (/oi|ol[aá]|olá|bom dia|boa tarde|boa noite/.test(t)) return 'Olá! Como posso ajudar você hoje?';
    if (/contato|whatsapp|instagram/.test(t)) return 'Você pode agendar pelo WhatsApp: https://wa.me/5541987890037';
    return 'Desculpe, não entendi. Pode reformular? Posso ajudar com agendamento pelo WhatsApp.';
  }

  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    input.value = '';
    // simular digitação
    setTimeout(() => {
      const reply = botReply(text);
      appendMessage(reply, 'bot');
    }, 600 + Math.random() * 400);
  });

  // initial greeting
  appendMessage('Olá! Eu sou um chat automático. Pergunte sobre serviços ou agendamento.');
});
