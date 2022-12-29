import Image from "next/image";
import Link from "next/link";
import { FaHome } from "@react-icons/all-files/fa/FaHome";

const NotFound = () => {
  return (
    <div>
      <div className="mx-12 mt-6 text-lg font-semibold text-center text-gray-600 font-Poppins md:text-xl">
        Oops! 404 Error: Page not found!😢
      </div>
    </div>
  );
};

export default NotFound;
