import { genAI } from './genai';
import { sendWhatsAppMessage } from './send';

export const fundamentalAnalysis = async (c) => {
 const { pair, name, phone, insight } = await c.req.json();
 const twilioPhoneNumber = c.env.TWILIO_PHONE_NUMBER;
 const apiKey = c.env.TRADER_MADE_API;

 let aiRes;
 let liveRates;

 if (insight) {
  aiRes = await genAI(
   pair,
   name,
   c.env.CLOUDFLARE_API_KEY,
   c.env.CLOUDFLARE_ACCOUNT_ID
  );
 }
 liveRates = await fetchCurrencyData(pair, apiKey);
 const formattedResponse = await formatResponse(liveRates);

 // Concatenate the two responses
 const concat = `${aiRes}\n\n${formattedResponse}`;

 const send = await sendWhatsAppMessage(phone, twilioPhoneNumber, concat);
 return send;
};

async function fetchCurrencyData(pair, apiKey) {
 try {
  const response = await fetch(
   `https://marketdata.tradermade.com/api/v1/live?currency=${pair}&api_key=${apiKey}`,
   {
    method: 'GET',
    redirect: 'follow',
   }
  );
  const result = await response.json(); // Parse the response as JSON
  console.log(result); // Log the result
  return result; // Return the result to be used elsewhere
 } catch (error) {
  console.error('Error:', error); // Log any errors
  return 'There was an issue getting live data for this pair'; // Return null in case of error
 }
}

async function formatResponse(data) {
 const { quotes, requested_time } = data;
 const { ask, base_currency, bid, mid, quote_currency } = quotes[0];
 return `Currency Pair: ${base_currency}/${quote_currency}
Requested Time: ${requested_time}
Bid: ${bid}
Ask: ${ask}
Mid: ${mid}`;
}
