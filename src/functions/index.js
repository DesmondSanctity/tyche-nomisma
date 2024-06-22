import { genAI } from './genai';
import { sendWhatsAppMessage } from './send';

export const fundamentalAnalysis = async (c) => {
 const { pair, name, phone, insight } = await c.req.json();
 const twilioPhoneNumber = c.env.TWILIO_PHONE_NUMBER;

 let aiRes;

 if (insight) {
  aiRes = await genAI(
   pair,
   name,
   c.env.CLOUDFLARE_API_KEY,
   c.env.CLOUDFLARE_ACCOUNT_ID
  );
 }

 const send = await sendWhatsAppMessage(phone, twilioPhoneNumber, aiRes);
 return send;
};
