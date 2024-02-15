import { Html, Head, Main, NextScript } from "next/document";
import { Appbar } from "./components/custom/Appbar";
import { Footer } from "./components/Footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Appbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
