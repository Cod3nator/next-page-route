import { Html, Head, Main, NextScript } from "next/document";
import { NotificationProvider } from "../component/NotificationContext";
import Headers from "../component/Headers";
import Footer from "../component/Footer";

export default function Document() {
  return (
   <NotificationProvider>
     <Html lang="en">
      <Head />
      <body>
        <Headers/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
   </NotificationProvider>
  );
}
