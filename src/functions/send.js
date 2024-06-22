export const sendWhatsAppMessage = async (
 phoneNumber,
 twilioPhoneNumber,
 message
) => {
 const twilioFunctionUrl = 'https://nomisma-8280.twil.io/analysis';
 try {
  const response = await fetch(twilioFunctionUrl, {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({
    To: `whatsapp:${phoneNumber}`,
    From: `whatsapp:${twilioPhoneNumber}`,
    message: message,
   }),
  });

  if (response.ok) {
   console.log(
    'Twilio notification request successful:',
    await response.text()
   );
  } else {
   console.error(
    'Error sending Twilio notification request:',
    await response.text()
   );
  }
 } catch (error) {
  console.error('Error calling Twilio serverless function:', error);
 }
};
