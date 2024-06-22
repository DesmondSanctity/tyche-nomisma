import { html } from 'hono/html';

export const homeHTML = html`
 <!DOCTYPE html>
 <html lang="en">
  <head>
   <meta charset="UTF-8" />
   <title>Nomisma - Currency Pair Analytics</title>
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta name="description" content="" />
  </head>
  <body>
   <div class="flex flex-col min-h-[100dvh] px:20 sm:px-20">
    <header class="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
     <a class="flex items-center justify-center" href="#" rel="ugc">
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
       class="h-6 w-6"
      >
       <circle cx="12" cy="12" r="8"></circle>
       <line x1="3" x2="6" y1="3" y2="6"></line>
       <line x1="21" x2="18" y1="3" y2="6"></line>
       <line x1="3" x2="6" y1="21" y2="18"></line>
       <line x1="21" x2="18" y1="21" y2="18"></line>
      </svg>
      <span class="text-sm font-medium ml-1">Nomisma</span>
     </a>
     <nav class="ml-auto flex gap-4 sm:gap-6">
      <a
       class="text-sm font-medium hover:underline underline-offset-4 text-primary"
       href="#features"
       rel="ugc"
      >
       Features
      </a>
      <a
       class="text-sm font-medium hover:underline underline-offset-4 text-primary"
       href="/start"
       rel="ugc"
      >
       Start
      </a>
      <a
       class="text-sm font-medium hover:underline underline-offset-4 text-primary"
       href="#"
       rel="ugc"
      >
       About
      </a>
      <a
       class="text-sm font-medium hover:underline underline-offset-4 text-primary"
       href="#"
       rel="ugc"
      >
       Contact
      </a>
     </nav>
    </header>
    <main class="flex-1">
     <section
      class="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-foreground"
     >
      <div
       class="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6 text-primary-foreground"
      >
       <div class="space-y-2 max-w-[600px]  text-center">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
         Stay on Top of Currency Pairs
        </h1>
        <p class="text-lg md:text-xl">
         Get real-time updates and set notifications for your favorite currency
         pairs. No more constant checking, let Nomisma do the work for you!
        </p>
       </div>
       <div class="space-y-2">
        <button
         id="schedule-button"
         class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-white font-medium bg-black ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
         onclick="goToSchedule()"
        >
         Try Nomisma Today
        </button>
       </div>
      </div>
     </section>
     <section class="w-full py-8 md:py-10 lg:py-10" id="features">
      <div class="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
       <div class="space-y-4">
        <div class="inline-block rounded-lg bg-muted px-0 py-1 text-sm">
         Real-Time Data
        </div>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
         Stay Informed, Stay Ahead
        </h2>
        <p class="leading-8 max-w-full text-lg md:text-xl">
         Discover the world of currency trading with our cutting-edge API that
         provides real-time data on currency pairs, complete with trend analysis
         and actionable insights. Our platform leverages the power of Cloudflare
         Workers AI to deliver accurate and comprehensive financial information,
         helping you make informed trading decisions. Whether you're a seasoned
         trader or just starting, our API offers an easy-to-use solution to stay
         ahead in the fast-paced forex market. Access detailed price
         information, historical data, and insightful trend analysis all in one
         place. With seamless integration and robust performance, our service
         ensures you have the latest market data at your fingertips. Join us and
         experience the future of currency trading today. Empower your trading
         strategies with reliable data and intelligent insights.
        </p>
        <a
         class="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
         href="/start"
         rel="ugc"
        >
         Get Started
        </a>
       </div>
       <div class="flex flex-col items-center justify-center">
        <img
         src="/images/image.jpg"
         width="550"
         height="400"
         alt="Currency Pairs"
         class="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full"
        />
       </div>
      </div>
     </section>
    </main>
    <footer
     class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
    >
     <p class="text-xs text-muted-foreground">
      © 2024 Currency Pair Analytics. All rights reserved.
     </p>
    </footer>
   </div>
   <script>
    document
     .getElementById('schedule-button')
     .addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default form submission
      window.location.href = '/start'; // Redirect to schedule page
     });
   </script>
  </body>
 </html>
`;
