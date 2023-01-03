import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>New / Architecture News</title>
        <meta
          name="description"
          content="New: Architecture News"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="New: Architecture News" />
        <meta property="og:description" content="New: Architecture News" />
        <link rel="shortcut icon" href="/images/Alogo3.png" />
        {/* Sitemap */}
      </Head>
      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-amber-400 font-Poppins">
        New
      </div>
    </div>
  );
};

export default index;
