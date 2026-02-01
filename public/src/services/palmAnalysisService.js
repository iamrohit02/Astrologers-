import { analyzeImage } from './aiService';

/**
 * Palm Analysis Service
 * Orchestrates the Vision AI analysis for palmistry.
 */

const PALM_PROMPT_TEMPLATE = (language, userContext) => `
Analyze this image of a human palm strictly for the purpose of Palmistry (Chiromancy).
The user's language is: ${language === 'bn' ? 'Bangla (Bengali)' : 'English'}.
User Context: ${JSON.stringify(userContext)}

INSTRUCTIONS:
1. Identify the 4 major lines: Heart Line, Head Line, Life Line, and Fate Line.
2. Provide a spiritual and symbolic interpretation for each line based on its visible length, curve, and depth.
3. Keep the tone mystical, calm, and empowering.
4. DO NOT provide medical diagnoses or predict death.
5. If the image is not a clear palm, return an error in the JSON structure.

OUTPUT FORMAT:
You MUST return a valid JSON object strictly adhering to this structure:

{
  "isValidPalm": boolean,
  "lines": {
    "heart": { "description": "string", "meaning": "string" },
    "head": { "description": "string", "meaning": "string" },
    "life": { "description": "string", "meaning": "string" },
    "fate": { "description": "string", "meaning": "string" }
  },
  "summary": "string"
}

If 'isValidPalm' is false, 'lines' should be null and 'summary' should explain why the image was rejected.
`;

export const analyzePalm = async (base64Image, language, userProfile) => {
  try {
    const prompt = PALM_PROMPT_TEMPLATE(language, userProfile);
    
    // Call the Vision AI
    const rawResponse = await analyzeImage(base64Image, prompt);

    // Clean up response (sometimes AI adds markdown code blocks)
    const jsonString = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
    
    const data = JSON.parse(jsonString);

    if (!data.isValidPalm) {
      throw new Error(data.summary || 'Could not detect a clear palm. Please try again with better lighting.');
    }

    return data;

  } catch (error) {
    console.error('Palm Analysis Failed:', error);
    // Fallback if JSON parsing fails or AI goes rogue
    throw new Error('The spirits are unclear. Please try capturing your palm again.');
  }
};
