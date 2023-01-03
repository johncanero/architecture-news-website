import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Categories / Architecture News</title>
        <meta
          name="description"
          content="Categories: Architecture News"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Categories: Architecture News" />
        <meta property="og:description" content="Categories: Architecture News" />
        <link rel="shortcut icon" href="/images/Alogo3.png" />
        {/* Sitemap */}
      </Head>
      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-amber-400 font-Poppins">
        Categories
      </div>
    </div>
  );
};

export default index;
