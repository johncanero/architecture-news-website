/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardItem from "../components/CardItem";

const Hero = () => {
  return (
    <div>
      <div className="flex-col mx-auto mt-7 md:flex-none lg:grid-cols-3 lg:grid-rows-4 md:grid md:gap-7 md:gap-y-5 font-Poppins">
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
        <div className="row-span-4 pb-3 bg-neutral-50 text-neutral-900 rounded-xl dark:text-white dark:bg-neutral-800">
          <h1 className="pt-6 mx-6 text-3xl font-bold text-center text-neutral-900 md:text-left md:mt-7 m-7 md:pt-0 dark:text-amber-400">
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
              className="h-56 mt-1 rounded-lg md:h-48"
            />
            <p className="justify-end mt-1 text-xs text-left">
              PHOTO from Gaia Discovery: Pearl Farm Beach Resort - Aquaculture
              Tourism on Samal Island
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 hidden lg:block">
              <span className="font-semibold">Pearl Farm Beach Resort</span> is a luxurious resort located on Samal Island in the Davao Gulf, Philippines. It offers a unique blend of nature and sophistication, with facilities that range from white sand beaches, swimming pools, restaurants, to spa and wellness centers. Pearl Farm is a perfect destination for those seeking to escape the hustle and bustle of city life and immerse themselves in serene surroundings.
            </p>

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
              className="h-56 mt-1 rounded-lg md:h-48"
            />
            <p className="justify-end mt-1 text-xs text-left">
              PHOTO from Gwen Dela Cruz of Rappler: UST Main Building
            </p>
            <p className="mt-2 text-sm text-gray-500  hidden lg:block">
              The <span className="font-semibold">UST Main Building</span>, located in the University of Santo Tomas campus in Manila, Philippines, is one of the most iconic and historic structures in the country. It has served as the main academic building of the university. The building is a testament to the rich cultural heritage of the Philippines and is considered one of the oldest stone structures in Asia.
            </p>

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
              className="h-56 mt-1 rounded-lg md:h-48"
            />
            <p className="justify-end mt-1 text-xs text-left">
              PHOTO from BluPrint: Buensalido’s Polygon House is the Result of
              Out-of-the-Box Thinking
            </p>
            <p className="mt-2 text-sm text-gray-500 hidden lg:block">
              The <span className="font-semibold">Buensalido's Polygon House</span> in the Philippines is a modern, polygonal-shaped building that prioritizes natural light, ventilation, privacy and openness. Its exterior is a clean, geometric design and its interior is finished with high-end materials and furnishings, creating a warm and inviting space. This innovative and unique design showcases Philippine architecture and construction.
            </p>

          </div>
          <div className="text-3xl font-bold m-7">
            <h3>Stay tuned for more projects...</h3>
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
            The <span className="font-semibold">New Clark City's Master Plan</span> is a large-scale development project located in the Philippines. It aims to create a sustainable and modern metropolis that will serve as an alternative to the congested and overcrowded capital, Manila.
          </p>

          <p className="mt-2">
            The master plan encompasses a wide range of facilities and amenities, including residential areas, commercial districts, parks and green spaces, cultural and recreational facilities, and modern transportation infrastructure.
          </p>

        </div>
        <div>
          <h3 className="text-3xl font-bold text-right ">
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


        </div>

        <div className="hidden md:hidden lg:block">
          <h2 className="font-bold text-2xl">Why Architecture?</h2>
          <div className="mt-2">
            <p className="">
              Architecture provides a framework for the design of buildings and other structures, determining their form, function, and aesthetic. It helps ensure that buildings are safe, efficient, and accessible, and meets the needs and expectations of their users.
            </p>

            <p className="mt-2">
              Furthermore, architecture has a significant impact on the quality of life in communities and can shape the character of a city or region, making it an important aspect of urban planning and design.
            </p>
          </div>


        </div>

        <div className="hidden md:hidden lg:block">
          <h2 className="font-bold text-2xl">Designing Spaces for People</h2>
          <div className="mt-2">
            <p className="">
              Designing spaces for people is essential in architecture because the built environment has a significant impact on the well-being, comfort, and behavior of those who occupy it. Architects must consider factors such as natural light, ventilation, acoustics, and accessibility when creating spaces to ensure that they are functional, safe, and conducive to the activities that will take place within them.
            </p>

            <p className="mt-2">
              By putting people first in the design process, architects can create spaces that not only meet their physical needs, but also enhance their emotional and psychological well-being, improving the quality of life for all who use them.
            </p>
          </div>
        </div>
      </div>

      {/* Card Items */}
      <div className="gap-12 lg:gap-16 mt-6 mb-6 md:flex">
        <CardItem
          src="/images/coconutPalace2.jpg"
          path=""
          number="01"
          title="Coconut Palace"
          description="Coconut Palace is a government building located in the Cultural Center of the Philippines Complex. It is the main working place & residence of the Vice President of the Philippines."
        />

        <div className="mt-7 md:mt-0">
          <CardItem
            src="/images/aquaCenterClark.jpg"
            path=""
            number="02"
            title="New Clark Aquatics Center"
            description="New Clark City Aquatic Center is a swimming and diving venue at the New Clark City in Capas, Tarlac, Philippines. It is one of the venues of the New Clark City Sports Hub."
          />
        </div>
      </div>

      <div className="gap-12 lg:gap-16 mt-6 mb-6 md:flex">
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
