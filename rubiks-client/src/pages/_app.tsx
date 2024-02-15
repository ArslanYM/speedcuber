import { Appbar } from "@/components/custom/Appbar";
import { Footer } from "@/components/custom/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (<>
  <Appbar/>
  <Component {...pageProps} />
  <Footer/>
  </>);
}
