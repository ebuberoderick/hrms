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



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  let persistor = persistStore(store)
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href={icon} />
      </Head>
      <body className={inter.className}>
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
