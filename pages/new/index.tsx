import React from "react";
import Head from "next/head";
import Image from "next/image";

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
      <div className="relative text-center">
        <div className="absolute top-0 flex justify-center w-full mt-4">
          <div className="text-xl font-semibold text-gray-600 lg:text-2xl dark:text-gray-700 font-Poppins">
            New
          </div>
        </div>
        <Image
          src="/images/architectureNewsWebsiteCover.jpg"
          width={1500}
          height={1500}
          alt="Architecture News Website Cover"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default index;
