// LuOda Massoterapeuta — Cloudflare Worker (proxy seguro para Claude AI)
//
// DEPLOY:
//   1. Acesse https://workers.cloudflare.com e crie um Worker
//   2. Cole este arquivo
//   3. Em Settings > Variables > Secrets, adicione: ANTHROPIC_API_KEY
//   4. Copie a URL do Worker e cole em chat.js (constante AI_ENDPOINT)
//
// CORS: por segurança, troque '*' pelo domínio real em produção:
//   const ALLOWED_ORIGIN = 'https://www.luodamassoterapeuta.com.br';

const ALLOWED_ORIGIN = '*';

const SYSTEM_PROMPT = `Você é a assistente virtual da LuOda Massoterapeuta, clínica de massoterapia profissional em Curitiba/PR.

Serviços disponíveis:
• Massagem Relaxante — técnicas suaves para alívio do estresse e tensão muscular
• Massagem Terapêutica — manobras direcionadas para dor em áreas específicas
• Drenagem Linfática — estimula o sistema linfático, reduz inchaços, indicada para pós-operatório
• Liberação Miofascial — trabalha a fáscia muscular para melhorar mobilidade e postura
• Shiatsu — técnica japonesa milenar de pressão em meridianos para equilíbrio de energia
• Quick Massage — sessão rápida e revitalizante

Agendamento e contato:
• WhatsApp: +55 41 98789-0037 → https://wa.me/5541987890037
• Instagram: @luoda38
• Site: www.luodamassoterapeuta.com.br

Regras:
- Responda sempre em português brasileiro com tom acolhedor, gentil e profissional.
- Para perguntas sobre preços e horários, oriente o cliente a entrar em contato pelo WhatsApp.
- Incentive o agendamento sempre que pertinente.
- Seja concisa: máximo 2 a 3 frases por resposta, sem listas desnecessárias.
- Nunca invente informações além das fornecidas acima.`;

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400 });
    }

    const { message, history = [] } = body;
    if (!message) return new Response('Missing message', { status: 400 });

    const messages = [...history, { role: 'user', content: message }];

    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!apiRes.ok) {
      const err = await apiRes.text();
      return new Response('Upstream error: ' + err, {
        status: 502,
        headers: { 'Access-Control-Allow-Origin': ALLOWED_ORIGIN },
      });
    }

    const data = await apiRes.json();
    const reply = data.content?.[0]?.text ?? 'Desculpe, não consegui processar sua mensagem.';

    return new Response(JSON.stringify({ reply }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      },
    });
  },
};
