### tyche-nomisma
An AI tool that you can use to get currency pair update via Whatsapp. Built with [Hono.js](https://hono.dev/), Twilio(serverless functions & whatsapp) and Cloudflare Workers AI.

### prerequisite to run project
- Cloudflare account(with your terminal authenticated with wrangler CLI) [Read more here](https://developers.cloudflare.com/workers/wrangler/commands/#login)
- Cloudflare API KEY and ACCOUNT ID
- Twilio account(with Twilio WhatsApp sandbox and phone number)
- Tradermade API Key for live rates of currency pairs. [See more here](https://tradermade.com/docs/restful-api)

### step 1
- set up a file called `.dev.vars` where all your environment variables will be added.
- it will look like this:
```bash
TRADER_MADE_API = ""
CLOUDFLARE_API_KEY = ""
CLOUDFLARE_ACCOUNT_ID = ""
TWILIO_PHONE_NUMBER = ""
```

### step 2 (run locally)
- run the following commands to install dependencies and start the dev server respectively.
```bash
npm install
npm run dev
```

### step 3 (deploy to prod)
- you should store your secret to cloudflare workers for production use using the command below. where key is the secret name eg: CLOUDFLARE_API_KEY
```bash
npx wrangler secret put <KEY>
```
- deploy the project to cloudflare using the authenticated wrangler CLI.
```bash
npm run deploy
```
