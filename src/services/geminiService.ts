import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export async function askAssistant(prompt: string, context: string) {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  const systemInstructions = `
    You are the ZED Express AI Assistant. ZED Express is a local marketplace discovery platform for Kabwe, Zambia.
    ZED Express helps people FIND products in local shops. It DOES NOT handle delivery yet.
    Users must visit the shop physically to buy products.
    
    Current Categories: Phones, Clothes, Shoes, Accessories, Home & More.
    Key shops include: Kabwe Digital Hub (Town Centre), Style Haven (Mine), Home Essentials (Bwacha).
    Areas in Kabwe: Town Centre, Mine, Makululu, Bwacha, Chowa, etc.
    
    Your goal is to help users find what they need. If they ask for something specific, guide them to the right categories or shops.
    Be helpful, professional, and friendly.
    
    Context about current shop listings: ${context}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: systemInstructions
      }
    });

    return response.text || "I couldn't find a response. Please try again!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or chat with us on WhatsApp!";
  }
}
