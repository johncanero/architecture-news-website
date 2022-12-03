/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardItem from "../components/CardItem";

const Hero = () => {
  return (
    <div>
      <div className="flex-col mt-7 md:flex-none lg:grid-cols-3 lg:grid-rows-4 md:grid md:gap-7 md:gap-y-5 font-Poppins">
        <div className="col-span-2">
          {/* <h1 className="text-3xl font-bold">Architecture News</h1> */}
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
              className="h-56 rounded-lg md:h-72 lg:h-96"
            />
          </Link>{" "}
          <p className="justify-end mt-1 text-xs text-left">
            Mactan Cebu International Airport T2 / Integrated Design Associates
            @ ArchDaily | Photograph: John Nye{" "}
          </p>
        </div>
        <div className="row-span-4 pb-3 bg-gray-200 text-neutral-900 md:text-white md:bg-neutral-900 rounded-xl dark:text-white dark:bg-neutral-800">
          <h1 className="pt-6 mx-6 text-3xl font-bold text-center md:text-amber-400 md:text-left md:mt-7 m-7 md:pt-0 dark:text-amber-400">
            Amazing Philippine Architecture
          </h1>{" "}
          <div className="m-7">
            <h2 className="text-xl font-semibold">Pearl Farm Beach Resort</h2>
            {/* Add Link */}
            <Image
              src="/images/pearlFarmResort.jpg"
              width={1000}
              height={1000}
              alt="pearlFarmResort"
              className="h-56 mt-1 rounded-lg md:h-40"
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
            <hr className="h-px my-6 border-neutral-400 md:border-neutral-600"></hr>
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
              className="h-56 mt-1 rounded-lg md:h-40"
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
            <hr className="h-px my-6 border-neutral-400 md:border-neutral-600"></hr>
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
              className="h-56 mt-1 rounded-lg md:h-40"
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
            <hr className="h-px my-6 border-neutral-400 md:border-neutral-600"></hr>
          </div>
          <div className="text-xl font-bold m-7">
            <h3>Stay tuned for more projects!</h3>
          </div>
        </div>

        <div>
          {" "}
          <h2 className="mt-6 text-4xl font-bold text-center md:mt-0 md:text-4xl lg:text-5xl md:text-left">
            The Bright Future of Philippine Architecture?
          </h2>
          <Image
            src="/images/newClarkCityMastersPlan.jpg"
            width={1000}
            height={1000}
            alt="newcClarkCity"
            className="mt-6 rounded-lg md:h-44"
          />
          <p className="justify-end mt-2 text-xs text-left">
            PHOTO from BCDA: New Clark City's Master Plan
          </p>
          {/* <p className="mt-1 text-sm">Witness the future Clark's City Development and one-of-a-kind structures.</p> */}
        </div>
        <div>
          {" "}
          <p className="mx-2 mt-4 text-sm text-center md:mt-0 md:text-left">
            We dive into the next evolution of Architecture in the Philippines
            that claims to empower the next generation design of the Philippine
            landscape while maintaining its historic and rich culture of
            heritage. To make it beautiful and make our country more fun and
            friendly.
          </p>
          <Link
            // target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            <button className="flex px-32 py-3 mx-auto mt-5 font-bold tracking-widest rounded-lg md:px-12 md:mx-0 text-neutral-900 bg-amber-400 hover:bg-amber-300">
              READ ME
            </button>
          </Link>
          <Image
            src="/images/newClarkCity.jpg"
            width={1000}
            height={1000}
            alt="ewcClarkCity"
            className="rounded-lg mt-7 md:h-44"
          />
          <p className="justify-end mt-2 mb-12 text-xs text-left md:mb-0">
            PHOTO from BCDA: New Clark City Current Development
          </p>
        </div>

        {/* Card Item */}
        <div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            deleniti expedita quisquam numquam corrupti quae, repudiandae
            officiis eos voluptate architecto inventore sunt sequi qui iure
            facilis molestias, recusandae delectus nisi?
          </p>

          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            deleniti expedita quisquam numquam corrupti quae, repudiandae
            officiis eos voluptate architecto inventore sunt sequi qui iure
            facilis molestias, recusandae delectus nisi?
          </p>

          <hr className="h-px bg-gray-300 border-0 my-14 dark:bg-neutral-800"></hr>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-right ">
            Know the Experts
          </h3>
          <Image
            src="/images/manosaExpert.jpg"
            width={1000}
            height={1000}
            alt="newcClarkCity"
            className="mt-1 rounded-lg md:h-41 "
          />
          <p className="justify-end mt-2 mb-12 text-xs text-left md:mb-0">
            PHOTO from Real Living Philippines: Francisco Mañosa
          </p>
          <p className="mt-2">
            Find out advices and inspiring message from notable architects in
            the Philippines.
          </p>

          <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-neutral-800"></hr>
        </div>

        <div className="hidden md:hidden lg:block">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            deleniti expedita quisquam numquam corrupti quae, repudiandae
            officiis eos voluptate architecto inventore sunt sequi qui iure
            facilis molestias, recusandae delectus nisi?
          </p>

          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            deleniti expedita quisquam numquam corrupti quae, repudiandae
            officiis eos voluptate architecto inventore sunt sequi qui iure
            facilis molestias, recusandae delectus nisi?
          </p>

          <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-neutral-800"></hr>
        </div>

        <div className="hidden md:hidden lg:block">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            deleniti expedita quisquam numquam corrupti quae, repudiandae
            officiis eos voluptate architecto inventore sunt sequi qui iure
            facilis molestias, recusandae delectus nisi?
          </p>

          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            deleniti expedita quisquam numquam corrupti quae, repudiandae
            officiis eos voluptate architecto inventore sunt sequi qui iure
            facilis molestias, recusandae delectus nisi?
          </p>

          <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-neutral-800"></hr>
        </div>
      </div>

      {/* Card Items */}
      <div className="mt-6 mb-6 md:flex gap-7">
      <CardItem
          src="/images/coconutPalace2.jpg"
          path=""
          number="01"
          title="Coconut Palace"
          description="Coconut Palace is a government building located in the Cultural Center of the Philippines Complex. It is the main working place & residence of the Vice President of the Philippines."
        />

        <div className="mt-7 md:mt-0">
          <CardItem
            src="/images/acquaticCenterClark.jpg"
            path=""
            number="02"
            title="New Clark City Aquatics Center"
            description="New Clark City Aquatic Center is a swimming and diving venue at the New Clark City in Capas, Tarlac, Philippines. It is one of the venues of the New Clark City Sports Hub."
          />
        </div>
      </div>

      <div className="mt-6 mb-6 md:flex gap-7">
        <CardItem
          src="/images/philippineArena.jpg"
          path=""
          number="03"
          title="Philippine Arena"
          description="The Philippine Arena, multipurpose indoor arena with a maximum seating capacity of 55,000 is a 140-hectare tourism enterprise zone located in Bocacue, Bulacan."
        />

        <div className="mt-7 md:mt-0">
          <CardItem
            src="/images/fortSantiago.jpg"
            path=""
            number="04"
            title="Fort Santiago"
            description="Fort Santiago, built in 1571, is a citadel built by Spanish navigator and governor Miguel López de Legazpi for the newly established city of Manila in the Philippines"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
