
import { GoogleGenAI } from "@google/genai";

export const getDatabaseAdvice = async (userQuery: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Te egy adatbázis szakértő vagy. Válaszolj a következő kérdésre magyarul, szakmai szempontból: ${userQuery}. Emeld ki a MariaDB és a MySQL közötti különbségeket, ha releváns.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text || "Sajnos nem sikerült választ generálni.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Hiba történt a tanácsadás során. Kérjük, próbálja meg később.";
  }
};
