import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
// Icons
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { GrNewWindow } from "@react-icons/all-files/gr/GrNewWindow";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { FiTrendingUp } from "@react-icons/all-files/fi/FiTrendingUp";
import { HiTemplate } from "@react-icons/all-files/hi/HiTemplate";

const MenuDropdown = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;


    if (currentTheme === "light") {
      return (
        <Button
          className="mr-1 text-neutral-800"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button
          className="mr-1 text:bg-white"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    }
  };

  return (
    // Mobile Visibility
    <div className="flex justify-between mt-4 text-right md:hidden top-16 w-96">
      {/* Image */}
      <Link rel="noopener noreferrer" href="/">
        <div className="flex">
          <Image
            src="/images/Alogo3.png"
            width={40}
            height={40}
            alt="jLogo"
            className="animate__animated animate__fadeIn"
          />
          <h1 className="font-semibold font-Poppins text-sm mt-2 ml-1 ">Architecture News</h1>
        </div>
      </Link>
      {/* Dark Mode and Toggle */}
      <div className="z-10">
        {renderThemeChanger()}
        <Menu as="div" className="relative inline-block text-left mr-7">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <GiHamburgerMenu
                className="w-5 h-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* Home and About Section */}
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/">
                      <button
                        className={`${active ? "bg-violet-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                      >
                        <FaHome size={17} />
                        <span className="ml-2">Home</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/new">
                      <button
                        className={`${active ? "bg-violet-500 text-white" : "text-gray-900"
                          } group flex w-72 items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                      >
                        <GrNewWindow size={17} />
                        <span className="ml-2">New</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>
              {/* Create a New Section */}
              <div className="px-1 py-1 pb-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/popular">
                      <button
                        className={`${active ? "bg-violet-500 text-white" : "text-gray-900"
                          } group flex w-72 items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                      >
                        <AiFillStar size={17} />
                        <span className="ml-2">Popular</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/trending">
                      <button
                        className={`${active ? "bg-violet-500 text-white" : "text-gray-900"
                          } group flex w-72 items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                      >
                        <FiTrendingUp size={17} />
                        <span className="ml-2">Trending</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>

              {/* Contact */}
              <div className="px-1 py-1 pb-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      // target="_blank"
                      rel="noopener noreferrer"
                      href="/categories"
                    >
                      <button
                        className={`${active ? "bg-violet-500 text-white" : "text-gray-900"
                          } group flex w-72 items-center rounded-md px-2 py-1 text-sm font-Poppins`}
                      >
                        <HiTemplate size={17} />
                        <span className="ml-2">Categories</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>

              {/* Bio Link */}
              {/* <div className="px-1 py-1 pb-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      // target="_blank"
                      rel="noopener noreferrer"
                      href="https://bio.link/johncanero"
                    >
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-72 items-center rounded-md px-2 py-1 text-sm font-Poppins`}
                      >
                        <span className="ml-2">@johncanero</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div> */}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default MenuDropdown;
