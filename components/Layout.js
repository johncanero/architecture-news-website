import React from "react";
import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import MenuDropdown from "../sections/MenuDropdown";
// import MobileFooterButtons from "../sections/MobileFooterButtons";

const Layout = ({ children }) => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Architecture News</title>
        <meta
          name="description"
          content="Architecture News Website"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Architecture News Website: A Frontend Mentor Challenge" />
        <meta property="og:description" content="Architecture, News, Design" />
        {/* Flaticon */}
        <link rel="shortcut icon" href="/images/Alogo3.png" />
      </Head>

      {/* Header, Main & Footer */}
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Mobile Visibility */}
        <MenuDropdown />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <MobileFooterButtons /> */}
      </div>
     
    </>
  );
};
export default Layout;