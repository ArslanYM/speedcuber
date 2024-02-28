import { Appbar } from "@/components/custom/Appbar";
import { Footer } from "@/components/custom/Footer";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ChatBot from "@/components/chatbot/chatbot";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <Appbar />
        <Component {...pageProps} />
        <ChatBot/>
        <Footer />
      </SessionProvider>
    </>
  );
}
