import React from "react";
import Script from "next/script";

const Gtag = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6JKN93G7ET" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6JKN93G7ET');
        `}
      </Script>
    </>
  );
};

export default Gtag;