import { callAI } from './aiService';

/**
 * Love Reading Service
 * Calculates compatibility and relationship advice.
 */

const LOVE_PROMPT = (name1, sign1, name2, sign2, language) => `
Analyze the relationship compatibility between:
Person 1: ${name1} (${sign1})
Person 2: ${name2} (${sign2})
Language: ${language === 'bn' ? 'Bangla' : 'English'}

INSTRUCTIONS:
1. Calculate a "Compatibility Score" (0-100) based on Zodiac elemental harmony.
2. Identify 3 "Strengths" of this pairing.
3. Identify 1 "Challenge" to watch out for.
4. Provide a short, sweet verdict.

OUTPUT FORMAT:
Return valid JSON:
{
  "score": number,
  "verdict": "string",
  "strengths": ["string", "string", "string"],
  "challenge": "string"
}
`;

export const getLoveCompatibility = async (partnerA, partnerB, language) => {
  try {
    const prompt = LOVE_PROMPT(partnerA.name, partnerA.sign, partnerB.name, partnerB.sign, language);
    const messages = [{ role: 'user', content: prompt }];

    const rawResponse = await callAI(messages);
    const jsonString = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return JSON.parse(jsonString);

  } catch (error) {
    console.error('Love Reading Error:', error);
    return {
      score: 75,
      verdict: "A connection with potential, requiring patience.",
      strengths: ["Mutual Respect", "Shared Goals", "Chemistry"],
      challenge: "Communication differences"
    };
  }
};
