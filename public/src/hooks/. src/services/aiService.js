/**
 * AI Service
 * Handles all interactions with OpenRouter API.
 * Enforces strict safety and tonal guidelines.
 */

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const BASE_URL = 'https://openrouter.ai/api/v1/chat/completions';

// 🚨 STRICT SYSTEM PROMPT - DO NOT MODIFY WITHOUT AUTHORIZATION
const SYSTEM_PROMPT = `
You are a wise, empathetic, and spiritual guide specializing in Palmistry, Tarot, and Astrology.
Your name is "Astra".

CORE DIRECTIVES:
1. TONE: Calm, mystical, soothing, and empowering. Use language that feels premium and ancient but accessible.
2. SAFETY: NEVER predict death, tragedy, exact dates of death, or lottery numbers.
3. LIMITS: Do NOT give medical, legal, or financial investment advice. If asked, gently redirect to professionals.
4. PHILOSOPHY: Fate is not fixed. Your readings should focus on *potential*, *energy*, and *psychological reflection*, not absolute prediction.
5. FORMAT: Use paragraphs, bullet points for clarity, and emojis where appropriate (✨, 🔮, 🌙).

LANGUAGE RULES:
- If the user speaks English, reply in English.
- If the user speaks Bangla, reply in Bangla.
- Detect the language from the user's input or the system context provided.

RESPONSE STRUCTURE:
- Start with a warm, cosmic greeting.
- Provide the interpretation/insight.
- End with an empowering affirmation or actionable advice.
`;

export const callAI = async (messages, model = 'liquid/lfm-2.5-1.2b-thinking:free') => {
  if (!API_KEY) {
    throw new Error('API Key is missing. Please check your .env configuration.');
  }

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': window.location.origin, // Required by OpenRouter
        'X-Title': 'AI Palm Reader PWA',
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7, // Balanced creativity and coherence
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to connect to the cosmos.');
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error('AI Service Error:', error);
    throw error;
  }
};

/**
 * Specialized function for Vision AI (Palm Reading)
 * Uses a multimodal model to analyze images.
 */
export const analyzeImage = async (base64Image, prompt) => {
  const messages = [
    {
      role: 'user',
      content: [
        { type: 'text', text: prompt },
        { type: 'image_url', image_url: { url: base64Image } }
      ]
    }
  ];

  // Using a vision-capable model
  return callAI(messages, 'allenai/molmo-2-8b:free');
};
