import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardItem = (props) => {
  return (
    <div className="bg-neutral-50 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 font-Poppins">
      <Link
        href={props.path}
        className="flex-col items-center rounded-lg shadow-md lg:flex md:flex-row md:max-w-xl "
      >
        <Image
          src={props.src}
          path={props.path}
          alt=""
          width={180}
          height={180}
          className="w-full p-4 rounded-3xl"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="text-3xl font-semibold text-neutral-300">
            {props.number}
          </h1>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
