'use client'
import { Inter } from "next/font/google";
import 'remixicon/fonts/remixicon.css'
import "./globals.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Provider } from 'react-redux'
import store from '../Store/index';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import Perloader from "@/components/organisms/Perloader";
import icon from "@assets/favicon.png"
import Head from "next/head";
import AOS from 'aos';
import { useEffect } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  let persistor = persistStore(store)
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);
  return (
    <html lang="en">
      <Head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer></script>
        <link rel="shortcut icon" href={icon} />
      </Head>
      <body className={`overflow-x-hidden ${inter.className}`}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<Perloader />}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {children}
            </LocalizationProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
