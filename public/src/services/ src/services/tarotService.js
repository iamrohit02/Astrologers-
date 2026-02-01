import { callAI } from './aiService';
import { TAROT_DECK } from '../data/tarotCards'; // Will be created in File 58

/**
 * Tarot Service
 * Handles drawing cards and generating AI interpretations.
 */

// Draw 3 random cards without replacement
export const drawCards = (count = 3) => {
  const deck = [...TAROT_DECK];
  const hand = [];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    
    // 30% chance of reversal (spiritual standard)
    const isReversed = Math.random() < 0.3;
    
    hand.push({ ...card, isReversed });
    deck.splice(randomIndex, 1);
  }
  
  return hand;
};

const TAROT_PROMPT = (cards, category, language, userContext) => `
You are an expert Tarot Reader.
User Language: ${language === 'bn' ? 'Bangla' : 'English'}
User Context: ${JSON.stringify(userContext)}
Reading Category: ${category}

The user has drawn the following cards:
${cards.map((c, i) => `${i + 1}. ${c.name} (${c.isReversed ? 'Reversed' : 'Upright'})`).join('\n')}

INSTRUCTIONS:
1. Provide a cohesive interpretation connecting these 3 cards to the category "${category}".
2. Do NOT just list meanings. Weave a story.
3. Card 1 represents the Past/Foundation.
4. Card 2 represents the Present/Challenge.
5. Card 3 represents the Future/Advice.
6. Tone: Mystical, empowering, gentle.
7. Keep it under 200 words.

OUTPUT FORMAT:
Return a valid JSON object:
{
  "general_meaning": "string",
  "advice": "string"
}
`;

export const getTarotReading = async (cards, category, language, userProfile) => {
  try {
    const prompt = TAROT_PROMPT(cards, category, language, userProfile);
    
    const messages = [{ role: 'user', content: prompt }];
    
    const rawResponse = await callAI(messages); // Uses default text model
    
    const jsonString = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(jsonString);

  } catch (error) {
    console.error('Tarot Reading Failed:', error);
    // Fallback static advice if AI fails
    return {
      general_meaning: "The cards suggest a time of reflection. Trust your intuition as you move forward.",
      advice: "Take a moment to meditate on your next steps."
    };
  }
};
