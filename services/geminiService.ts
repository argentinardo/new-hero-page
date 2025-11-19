import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini API client
// The API key must be provided via the environment variable process.env.API_KEY
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "Mission Control", a gritty, military-style tactical AI for the video game "Super Miner: H.E.R.O. Chronicles".
The game is a modern pixel-art tribute to the Atari classic H.E.R.O. mixed with the chaotic action of Metal Slug.
Your tone is brief, professional, and slightly retro-futuristic (think Aliens or Metal Gear).

Game Lore/Mechanics to reference:
- The Protagonist: Roderick "Rusty" Blast.
- Equipment: The R-500 Laser Eye, Backpack Copter, and Dynamite Sticks.
- Enemies: Mutated Snakes, Bats, Spiders, and the Magma Core Guardian.
- Goal: Rescue trapped miners deep in the planet crust before O2 runs out.

Answer user questions about the game, lore, or tactics. Keep responses under 300 characters to fit the retro terminal screen.
`;

export const sendMessageToMissionControl = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "ERROR: UPLINK_OFFLINE. API_KEY missing.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });
    
    return response.text || "Transmission interrupted...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "ERROR: SIGNAL_LOST. RE-ATTEMPT LATER.";
  }
};