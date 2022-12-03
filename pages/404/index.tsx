import Image from "next/image";
import Link from "next/link";
import { FaHome } from "@react-icons/all-files/fa/FaHome";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center mt-2">
        <Image
          src="/images/404IconPage5.png"
          width={850}
          height={850}
          alt="404 Icon"
          className="rounded-2xl"
          // className="transition duration-300 ease-in-out rounded-2xl hover:-translate-y-1 hover:scale-105"
        />
      </div>

      <div className="mt-3 text-lg font-semibold text-center text-gray-600 font-Poppins md:text-xl">
        Oops! 404 Error: Page not found!😢
      </div>

      {/* Home and Contact Us Buttons */}
      <div className="flex justify-center mt-8 font-Poppins">
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          <button className="px-4 py-2 mx-3 font-bold text-gray-100 rounded-lg bg-gradient-to-r bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-50 dark:hover:bg-neutral-300 dark:text-black">
            <div className="flex">
              <FaHome size={16} className="mt-1 mr-1" /> GO HOME
            </div>
          </button>
        </Link>

        {/* <button className="px-4 py-2 mx-3 font-bold text-gray-100 rounded-lg bg-gradient-to-r bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-50 dark:hover:bg-neutral-300 dark:text-black">
          CONTACT US
        </button> */}
      </div>
    </div>
  );
};

export default NotFound;
