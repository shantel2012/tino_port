import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PORTFOLIO_DATA, EXPERIENCE, SKILLS, PROJECTS } from '../constants';

// Initialize the client. API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const contextData = JSON.stringify({
  profile: PORTFOLIO_DATA,
  experience: EXPERIENCE,
  skills: SKILLS,
  projects: PROJECTS
}, null, 2);

const SYSTEM_INSTRUCTION = `
You are the AI portfolio assistant for ${PORTFOLIO_DATA.name}.
Your role is to answer questions about ${PORTFOLIO_DATA.name}'s professional background, skills, and projects based strictly on the provided data.

Here is the context data:
${contextData}

Guidelines:
1. Be professional, concise, and friendly.
2. If asked about contact info, refer to the email in the profile (${PORTFOLIO_DATA.email}).
3. If asked about something not in the data, state that you don't have that information.
4. Keep answers relatively short (under 3-4 sentences) unless asked for details.
5. You can use markdown for formatting.
6. If asked about the tech stack of this website, mention it uses React, Tailwind CSS, and the Google Gemini API.
`;

export const sendMessageToGemini = async (history: {role: 'user' | 'model', text: string}[], message: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
