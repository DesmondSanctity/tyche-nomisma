import { html } from 'hono/html';

export const formHTML = html`
 <!DOCTYPE html>
 <html lang="en">
  <head>
   <meta charset="UTF-8" />
   <title>Select Pair - Currency Pair Analytics</title>
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta name="description" content="" />
  </head>
  <body>
   <div class="flex min-h-[80dvh] items-center justify-center bg-background">
    <div class="w-full max-w-md">
     <div class="mb-4 px-3">
      <a
       class="inline-flex items-center gap-2 text-muted-foreground"
       href="/"
       rel="ugc"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
       >
        <path d="m12 19-7-7 7-7"></path>
        <path d="M19 12H5"></path>
       </svg>
       Back
      </a>
     </div>
     <div
      class="rounded-lg border text-card-foreground shadow-sm bg-muted"
      data-v0-t="card"
     >
      <div class="flex flex-col space-y-1.5 p-6">
       <h3 class="whitespace-nowrap text-2xl font-semibold mb-3">
        Select Currency Pair
       </h3>
       <p class="text-sm text-muted-foreground">
        Fill in these details to start analyzing a currency pair.
       </p>
      </div>
      <form id="currency-form" class="p-6 grid gap-4">
       <div class="grid grid-cols-2 gap-4">
        <div>
         <label
          class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="market-type"
         >
          Market Type
         </label>
         <select
          id="market-type"
          name="market-type"
          class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
         >
          <option value="" disabled selected>Select market type</option>
          <option value="Forex">Forex</option>
          <option value="Cryptocurrencies">Cryptocurrencies</option>
         </select>
        </div>
        <div>
         <label
          class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="currency-pairs"
         >
          Pairs
         </label>
         <select
          id="currency-pairs"
          name="currency-pairs"
          class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
         >
          <option value="" disabled selected>Select pairs</option>
         </select>
        </div>
       </div>
       <div>
        <label
         class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
         for="timeframe"
        >
         Timeframe
        </label>
        <select
         id="timeframe"
         name="timeframe"
         class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
         <option value="" disabled selected>Select timeframe</option>
         <option value="1">1m</option>
         <option value="3">3m</option>
         <option value="5">5m</option>
         <option value="15">15m</option>
         <option value="30">30m</option>
         <option value="60">1h</option>
         <option value="120">2h</option>
         <option value="180">3h</option>
         <option value="240">4h</option>
         <option value="D">1d</option>
         <option value="W">1w</option>
        </select>
       </div>
       <div class="flex items-center p-6">
        <button
         class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
         type="submit"
        >
         Start Analyzing
        </button>
       </div>
      </form>
     </div>
    </div>
   </div>
   <footer
    class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
   >
    <p class="text-xs text-muted-foreground">
     © 2024 Currency Pair Analytics. All rights reserved.
    </p>
   </footer>

   <script>
    const forexPairs = [
     { value: 'FX:EURUSD', text: 'EUR/USD' },
     { value: 'FX:USDJPY', text: 'USD/JPY' },
     { value: 'FX:GBPUSD', text: 'GBP/USD' },
     { value: 'FX:AUDUSD', text: 'AUD/USD' },
     { value: 'FX:USDCAD', text: 'USD/CAD' },
     { value: 'FX:USDCHF', text: 'USD/CHF' },
     { value: 'FX:NZDUSD', text: 'NZD/USD' },
     { value: 'FX:EURGBP', text: 'EUR/GBP' },
     { value: 'FX:GBPJPY', text: 'GBP/JPY' },
     { value: 'FX:EURCHF', text: 'EUR/CHF' },
    ];

    const cryptoPairs = [
     { value: 'BINANCE:BTCUSDT', text: 'BTC/USDT' },
     { value: 'BINANCE:ETHUSDT', text: 'ETH/USDT' },
     { value: 'BINANCE:SOLUSDT', text: 'SOL/USDT' },
     { value: 'BINANCE:LTCUSDT', text: 'LTC/USDT' },
     { value: 'BINANCE:TRXUSDT', text: 'TRX/USDT' },
     { value: 'BINANCE:ADAUSDT', text: 'ADA/USDT' },
     { value: 'BINANCE:XRPUSDT', text: 'XRP/USDT' },
     { value: 'BINANCE:BCHUSDT', text: 'BCH/USDT' },
     { value: 'BINANCE:EOSUSDT', text: 'EOS/USDT' },
     { value: 'BINANCE:LINKUSDT', text: 'LINK/USDT' },
    ];

    const marketTypeSelect = document.getElementById('market-type');
    const currencyPairsSelect = document.getElementById('currency-pairs');
    const selectedTimeframe = document.getElementById('timeframe');

    function populatePairs(pairs) {
     // Clear the current options
     currencyPairsSelect.innerHTML =
      '<option value="" disabled selected>Select pairs</option>';

     // Populate the currency pairs dropdown
     pairs.forEach((pair) => {
      const option = document.createElement('option');
      option.value = pair.value;
      option.text = pair.text;
      currencyPairsSelect.add(option);
     });
    }

    marketTypeSelect.addEventListener('change', function () {
     const marketType = marketTypeSelect.value;
     if (marketType === 'Forex') {
      populatePairs(forexPairs);
     } else if (marketType === 'Cryptocurrencies') {
      populatePairs(cryptoPairs);
     }
    });

    document
     .getElementById('currency-form')
     .addEventListener('submit', function (event) {
      event.preventDefault();

      const selectedMarketType = document.getElementById('market-type').value;
      const selectedPair = document.getElementById('currency-pairs').value;
      const selectedTimeframe = document.getElementById('timeframe').value;

      // Construct URL with parameters using URLSearchParams
      const params = new URLSearchParams({
       marketType: selectedMarketType,
       pair: selectedPair,
       timeframe: selectedTimeframe,
      });

      const url = '/chart?' + params.toString();

      // Redirect to the chart page with the constructed URL
      window.location.href = url;
     });
   </script>
  </body>
 </html>
`;
