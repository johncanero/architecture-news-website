/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="flex-col mt-7 md:flex-none md:grid-cols-3 md:grid-rows-4 md:grid md:gap-7 md:gap-y-8 font-Poppins">
        <div className="col-span-2 ">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.archdaily.com/942874/mactan-cebu-international-airport-t2-integrated-design-associates?ad_source=search&ad_medium=projects_tab"
          >
            <Image
              src="/images/mactanAirport.jpg"
              width={1000}
              height={1000}
              alt="mactanAirport"
              className="rounded-lg h-60 md:h-96"
            />
          </Link>{" "}
          <p className="justify-end mt-1 text-xs text-left">
            Mactan Cebu International Airport T2 / Integrated Design Associates
            @ ArchDaily | Photograph: John Nye{" "}
          </p>
        </div>
        <div className="row-span-4 pb-3 text-white rounded-lg bg-neutral-900 dark:bg-neutral-800">
          <h1 className="pt-6 text-3xl font-semibold md:mt-7 m-7 md:pt-0 text-amber-400">
            Amazing Philippine Architecture...
          </h1>{" "}
          <div className="m-7">
            <h2 className="text-xl font-semibold">Pearl Farm Beach Resort</h2>
            {/* Add Link */}
            <Image
              src="/images/pearlFarmResort.jpg"
              width={1000}
              height={1000}
              alt="pearlFarmResort"
              className="mt-1 rounded-lg h-60 md:h-48"
            />
            <p className="justify-end mt-1 text-xs text-left">
              PHOTO from Gaia Discovery: Pearl Farm Beach Resort - Aquaculture
              Tourism on Samal Island
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eum, aliquid, omnis laboriosam nemo corrupti eos velit
              necessitatibus cum, placeat ad ex maxime error? Quidem veritatis
              maxime optio tempore perspiciatis?
            </p>
            <hr className="h-px my-6 bg-gray-700 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="m-7">
            <h2 className="text-xl font-semibold">
              University of Santo Tomas Main Building
            </h2>
            {/* Add Link */}
            <Image
              src="/images/ustMainBuilding.jpeg"
              width={1000}
              height={1000}
              alt="ustMainBuilding.jpeg"
              className="mt-1 rounded-lg h-60 md:h-48"
            />
            <p className="justify-end mt-1 text-xs text-left">
              PHOTO from Gwen Dela Cruz of Rappler: UST Main Building
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eum, aliquid, omnis laboriosam nemo corrupti eos velit
              necessitatibus cum, placeat ad ex maxime error? Quidem veritatis
              maxime optio tempore perspiciatis?
            </p>
            <hr className="h-px my-6 bg-gray-700 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="m-7">
            <h2 className="text-xl font-semibold">
              Buensalido's Polygon House
            </h2>
            {/* Add Link */}
            <Image
              src="/images/buensalidoPolygonHouse.jpg"
              width={1000}
              height={1000}
              alt="buensalidoPolygonHouse"
              className="mt-1 rounded-lg h-60 md:h-48"
            />
            <p className="justify-end mt-1 text-xs text-left">
              PHOTO from BluPrint: Buensalido’s Polygon House is the Result of
              Out-of-the-Box Thinking
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eum, aliquid, omnis laboriosam nemo corrupti eos velit
              necessitatibus cum, placeat ad ex maxime error? Quidem veritatis
              maxime optio tempore perspiciatis?
            </p>
            <hr className="h-px my-6 bg-gray-700 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
        <div>
          {" "}
          <h2 className="mt-6 text-4xl font-bold text-center md:mt-0 md:text-5xl md:text-left">
            The Bright Future of Philippine Architecture?
          </h2>
  
            <Image
              src="/images/newClarkCityMastersPlan.jpg"
              width={1000}
              height={1000}
              alt="ewcClarkCity"
              className="mt-5 rounded-lg md:h-44"
            />
            <p className="justify-end mt-1 text-xs text-left">
              PHOTO from BCDA: New Clark City's Master Plan
            </p>
   
        </div>
        <div>
          {" "}
          <p className="mx-1 mt-4 text-sm text-center md:mt-0 md:text-left">
            We dive into the next evolution of Architecture in the Philippines
            that claims to empower the next generation design of the Philippine
            landscape while maintaining its historic and rich culture of
            heritage. To make it beautiful and make our country more fun and
            friendly.
          </p>
          <button className="flex px-12 py-3 mx-auto mt-5 font-bold rounded-lg md:mx-0 text-neutral-900 bg-amber-400 hover:bg-amber-300">
            Button
          </button>
          <Image
              src="/images/newClarkCity.jpg"
              width={1000}
              height={1000}
              alt="ewcClarkCity"
              className="h-48 mt-5 rounded-lg md:h-44"
            />
            <p className="justify-end mt-1 mb-12 text-xs text-left md:m-0">
              PHOTO from BCDA: New Clark City Current Development
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
