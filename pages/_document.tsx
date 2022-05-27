import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <title>Portfolio || Ariful Islam</title>
      </Head>
      <body className="bg-gradient-to-r from-green to-blue-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
