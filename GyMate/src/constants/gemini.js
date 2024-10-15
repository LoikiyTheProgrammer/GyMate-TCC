const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDEkE_hjebmAWxPW9OhpKwn0ME9M2MSPUI");

export async function run(question) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`${question} ...Responda sem formatação de texo alguma.`);
    const response = await result.response;
    const text = await response.text();
    return text;
}