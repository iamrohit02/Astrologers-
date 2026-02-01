import { callAI } from './aiService';

/**
 * Daily Guidance Service
 * Provides general spiritual energy readings for the day.
 */

const GUIDANCE_PROMPT = (date, language) => `
Provide a spiritual "Daily Guidance" for today: ${date}.
Language: ${language === 'bn' ? 'Bangla' : 'English'}

INSTRUCTIONS:
1. Identify the general "Cosmic Energy" of the day (e.g., High, Reflective, Chaotic).
2. Suggest one thing to "Focus On" and one thing to "Avoid".
3. Provide a short "Affirmation".

OUTPUT FORMAT:
Return valid JSON:
{
  "energy_type": "string",
  "focus_on": "string",
  "avoid": "string",
  "affirmation": "string"
}
`;

export const getDailyGuidance = async (language) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const cacheKey = `daily_guidance_${today}_${language}`;
    
    // Check cache
    const cached = localStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);

    const prompt = GUIDANCE_PROMPT(today, language);
    const messages = [{ role: 'user', content: prompt }];
    
    const rawResponse = await callAI(messages);
    const data = JSON.parse(rawResponse.replace(/```json/g, '').replace(/```/g, '').trim());

    localStorage.setItem(cacheKey, JSON.stringify(data));
    return data;

  } catch (error) {
    console.error('Daily Guidance Error:', error);
    return {
      energy_type: "Neutral",
      focus_on: "Inner Peace",
      avoid: "Stress",
      affirmation: "I am at peace with the universe."
    };
  }
};
