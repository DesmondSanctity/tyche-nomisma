import { html } from 'hono/html';

export const chartHTML = html`
 <!DOCTYPE html>
 <html lang="en">
  <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Chart n Schedule - Currency Pair Analytics</title>
   <style>
    .popup {
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     background: white;
     padding: 20px;
     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
     display: none;
     z-index: 1000;
    }
    .popup.success {
     border-left: 5px solid green;
    }
    .popup.error {
     border-left: 5px solid red;
    }
    .overlay {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: rgba(0, 0, 0, 0.5);
     display: none;
     z-index: 999;
    }
   </style>
  </head>
  <body>
   <div class="flex flex-col md:flex-row h-auto w-full">
    <div class="flex-[0.7] bg-muted p-6 flex items-center justify-center">
     <div
      class="relative h-full w-full overflow-hidden rounded-lg bg-background shadow-lg"
     >
      <div class="tradingview-widget-container mt-10 m-0">
       <div id="tradingview_abc"></div>
       <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com" rel="noopener" target="_blank"
         ><span class="blue-text">TradingView</span></a
        >
       </div>
       <script
        type="text/javascript"
        src="https://s3.tradingview.com/tv.js"
       ></script>
       <script type="text/javascript">
        const urlParams = new URLSearchParams(window.location.search);
        const marketType = urlParams.get('marketType');
        const pair = urlParams.get('pair');
        const timeframe = urlParams.get('timeframe');

        new TradingView.widget({
         width: 1000,
         height: 700,
         symbol: pair,
         interval: timeframe,
         timezone: 'Etc/UTC',
         theme: 'dark',
         style: '1',
         locale: 'en',
         toolbar_bg: '#f1f3f6',
         enable_publishing: false,
         allow_symbol_change: false,
         container_id: 'tradingview_abc',
         support_host: 'https://www.tradingview.com',
        });
       </script>
       <!-- </div> -->
      </div>
     </div>
    </div>
    <div
     class="flex-[0.3] border-l bg-muted/40 p-4 flex items-center justify-center"
    >
     <div class="space-y-4 max-w-md w-full">
      <div class="space-y-2">
       <div class="flex items-center justify-between">
        <label
         class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-bold"
         for="email"
        >
         Set Notification
        </label>
        <div
         class="inline-flex w-fit items-center whitespace-nowrap rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-xs"
         data-v0-t="badge"
        >
         Coming Soon
        </div>
       </div>
       <p class="text-sm text-muted-foreground">
        In the next update you will be able to configure alert at specific
        intervals to your WhatsApp for this pair.
       </p>
      </div>
      <form id="notification-form">
       <div class="flex items-center justify-between">
        <label
         class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-bold"
         for="email"
        >
         Get Insights
        </label>
        <div
         class="inline-flex w-fit items-center whitespace-nowrap rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-xs"
         data-v0-t="badge"
        >
         Powered by WorkersAI
        </div>
       </div>
       <div class="flex justify-start gap-2">
        <a
         class="inline-flex h-10 items-center justify-center rounded-md bg-white border border-black mt-5 mb-5 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
         href="https://wa.me/+14155238886?text=join%20merely-wooden"
         target="_blank"
         rel="ugc"
        >
         Connect to Bot
        </a>
       </div>
       <p class="text-sm text-muted-foreground mb-2">
        Note that you have to connect to the bot before this feature will work.
        Click the button below and send the default message to the bot to
        connect. Next update will not require you to do this!
       </p>
       <div class="space-y-2">
        <label
         class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
         for="name"
        >
         Name
        </label>
        <input
         required
         class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
         id="name"
         placeholder="John Doe"
         type="text"
        />
       </div>
       <div class="space-y-2 mt-3">
        <label
         class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
         for="phone"
        >
         Phone (WhatsApp)
        </label>
        <input
         required
         class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
         id="phone"
         placeholder="(+1) 123 456 7890"
         type="tel"
        />
       </div>
       <div class="space-y-2 mt-3 hidden">
        <label
         class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
         for="interval"
        >
         Interval
        </label>
        <select
         id="interval"
         name="interval"
         data-placeholder="Select interval"
         class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
         <option value="" disabled selected>Select interval</option>
         <option value="5m">5m</option>
         <option value="10m">10m</option>
         <option value="30m">30m</option>
         <option value="1h">1h</option>
         <option value="1d">1d</option>
         <option value="1w">1w</option>
        </select>
       </div>
       <div class="flex items-center gap-2 mt-3">
        <input
         required
         type="checkbox"
         value="insight-acknowledge"
         class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground mt-3"
         id="insight-acknowledge"
        />
        <label
         class="text-sm font-medium leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-3"
         for="insight-acknowledge"
        >
         I acknowledge that this app will send me a one time detailed insight
         and fundamental analysis about this pair! Your data will not be saved.
        </label>
       </div>
       <div class="flex items-center gap-2 mt-3 hidden">
        <input
         type="checkbox"
         value="whatsapp-acknowledge"
         class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground mt-3"
         id="whatsapp-acknowledge"
        />
        <label
         class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-3"
         for="whatsapp-acknowledge"
        >
         I acknowledge that this app will send me reminder according to the
         interval I selected. No data is saved!
        </label>
       </div>
       <div class="flex justify-start gap-2 mt-3">
        <button
         type="submit"
         class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-black hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-3"
        >
         Generate
        </button>
       </div>
      </form>
     </div>
    </div>
   </div>
   <footer
    class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-5"
   >
    <p class="text-xs text-muted-foreground">
     © 2024 Currency Pair Analytics. All rights reserved.
    </p>
   </footer>
   <div class="overlay" id="overlay"></div>
   <div class="popup success" id="success-popup">
    <p>
     Success! Your currency pair analysis request has been sent successfully. If
     you did not get it, try connecting to the bot again!
    </p>
    <button class="mt-2 border border-green" onclick="closePopup(true)">
     Close
    </button>
   </div>
   <div class="popup error" id="error-popup">
    <p>Error! There was an issue submitting your request. Please try again!</p>
    <button class="mt-2 border border-red" onclick="closePopup(false)">
     Close
    </button>
   </div>
   <script>
    const convertPair = (inputString) => {
     const [exchange, pair] = inputString.split(':');
     const baseCurrency = pair.substring(0, 3);
     const quoteCurrency = pair.substring(3);
     return baseCurrency + '' + quoteCurrency;
    };
    document
     .getElementById('notification-form')
     .addEventListener('submit', async function (event) {
      event.preventDefault();

      const nameValue = document.getElementById('name').value;
      const phoneValue = document.getElementById('phone').value;
      const intervalValue = document.getElementById('interval').value;
      const insightValue = document.getElementById(
       'insight-acknowledge'
      ).checked;
      const scheduleValue = document.getElementById(
       'whatsapp-acknowledge'
      ).checked;

      const formattedPair = convertPair(pair);
      const url = location.origin + '/schedule';
      console.log(url);

      const overlay = document.getElementById('overlay');
      const successPopup = document.getElementById('success-popup');
      const errorPopup = document.getElementById('error-popup');

      overlay.style.display = 'block';

      try {
       const response = await fetch(url, {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         pair: formattedPair,
         name: nameValue,
         phone: phoneValue,
         interval: intervalValue,
         insight: insightValue,
         schedule: scheduleValue,
        }),
       });
       const data = await response.json();
       successPopup.style.display = 'block';
      } catch (error) {
       errorPopup.style.display = 'block';
      }
     });

    function closePopup(isSuccess) {
     const overlay = document.getElementById('overlay');
     const successPopup = document.getElementById('success-popup');
     const errorPopup = document.getElementById('error-popup');
     overlay.style.display = 'none';
     successPopup.style.display = 'none';
     errorPopup.style.display = 'none';
     if (isSuccess) {
      window.location.href = '/start'; // Redirect to home page on success
     }
    }
   </script>
  </body>
 </html>
`;
