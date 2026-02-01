import { callAI } from './aiService';

/**
 * Horoscope Service
 * Generates daily astrological insights.
 */

const HOROSCOPE_PROMPT = (sign, date, language) => `
Generate a daily horoscope for: ${sign}
Date: ${date}
Language: ${language === 'bn' ? 'Bangla' : 'English'}

INSTRUCTIONS:
1. Provide a short, uplifting forecast for today.
2. Include specific ratings (0-100) for Love, Career, and Health.
3. Suggest a "Lucky Color" and "Lucky Number".
4. Tone: Cosmic, positive, guiding.

OUTPUT FORMAT:
Return valid JSON:
{
  "prediction": "string (max 50 words)",
  "ratings": {
    "love": number,
    "career": number,
    "health": number
  },
  "lucky_color": "string",
  "lucky_number": "number",
  "mood": "string (one word)"
}
`;

export const getDailyHoroscope = async (sign, language) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    
    // Check local storage cache first to save API calls
    const cacheKey = `horoscope_${sign}_${today}_${language}`;
    const cached = localStorage.getItem(cacheKey);
    
    if (cached) {
      return JSON.parse(cached);
    }

    const prompt = HOROSCOPE_PROMPT(sign, today, language);
    const messages = [{ role: 'user', content: prompt }];
    
    const rawResponse = await callAI(messages);
    const jsonString = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
    const data = JSON.parse(jsonString);

    // Cache for 24 hours
    localStorage.setItem(cacheKey, JSON.stringify(data));
    
    return data;

  } catch (error) {
    console.error('Horoscope Error:', error);
    return {
      prediction: "The stars are quiet today. Look inward for your own light.",
      ratings: { love: 50, career: 50, health: 50 },
      lucky_color: "White",
      lucky_number: 7,
      mood: "Peaceful"
    };
  }
};
