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
        <div className="row-span-4 text-white rounded-lg bg-neutral-900 dark:bg-neutral-800">
          <h1 className="text-3xl font-semibold md:mt-7 m-7 text-amber-400">
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
              PHOTO from BluPrint: Buensalido’s Polygon House is the Result of Out-of-the-Box Thinking
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eum, aliquid, omnis laboriosam nemo corrupti eos velit
              necessitatibus cum, placeat ad ex maxime error? Quidem veritatis
              maxime optio tempore perspiciatis?
            </p>
            <hr className="h-px my-6 bg-gray-700 border-0 dark:bg-gray-700"></hr>
            <h1 className="mt-12 text-3xl font-semibold m-7 text-amber-400">
            Stay tuned for more projects!
          </h1>{" "}
          </div>x
        </div>
        <div>
          {" "}
          <h2 className="text-5xl font-bold">
            The Bright Future of Philippine Architecture?
          </h2>
        </div>
        <div>
          {" "}
          <p className="mx-1 text-sm">
            We dive into the next evolution of Architecture in the Philippines
            that claims to empower the next generation design of the Philippine
            landscape while maintaining its historic and rich culture of
            heritage. To make it beautiful and make our country more fun and
            friendly.
          </p>
          <button className="px-12 py-3 mt-5 font-bold rounded-lg text-neutral-900 bg-amber-400 hover:bg-amber-300">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
