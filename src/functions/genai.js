import OpenAI from 'openai';

export const genAI = async (pair, name, cloudflareKey, cloudflareId) => {
 const openai = new OpenAI({
  apiKey: cloudflareKey,
  baseURL: `https://api.cloudflare.com/client/v4/accounts/${cloudflareId}/ai/v1`,
 });

 const prompt = `${name} is a currency trader and needs accurate market information. You are a financial expert in technical analysis, fiundamental analysis and trend analysis. Provide accurate up-to-date technical analysis, fundamental analysis, trend analysis and insight for this currency pair. This must not exceed 1500 character limit and also add a note for users to do their own resaerch. Add a brief salutation only at start of the response eg: Hello ${name}. Do not use palceholders for anything eg: [Assitant] or [Name], keep it real!`;

 const response = await openai.chat.completions.create({
  model: '@cf/meta/llama-3-8b-instruct',
  messages: [
   {
    role: 'system',
    content: prompt,
   },
   {
    role: 'user',
    content: `Currency pair: ${pair}`,
   },
  ],
 });

 const result = response.choices[0].message.content;

 return result;
};
