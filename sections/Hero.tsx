import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-8 font-Poppins">
        <div className="col-span-2 ">
          {" "}
          <Image
            src="/images/mactanAirport.jpg"
            width={1000}
            height={1000}
            alt="aLogo"
            className=" rounded-3xl"
          />
        </div>
        <div className="row-span-2 text-white bg-neutral-900 rounded-xl">
          <h1 className="mt-12 text-4xl font-semibold m-7 text-amber-400">New</h1>{" "}
          <div className="m-7">
            <h2 className="text-xl font-semibold">Philippine Architecture</h2>
            <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum, aliquid, omnis laboriosam nemo corrupti eos velit necessitatibus cum, placeat ad ex maxime error? Quidem veritatis maxime optio tempore perspiciatis?</p>
            <hr className="h-px my-6 bg-gray-700 border-0 dark:bg-gray-700"></hr>
          </div>

          <div className="m-7">
            <h2 className="text-xl font-semibold">Philippine Architecture</h2>
            <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum, aliquid, omnis laboriosam nemo corrupti eos velit necessitatibus cum, placeat ad ex maxime error? Quidem veritatis maxime optio tempore perspiciatis?</p>
            <hr className="h-px my-6 bg-gray-700 border-0 dark:bg-gray-700"></hr>
          </div>

          <div className="m-7">
            <h2 className="text-xl font-semibold">Philippine Architecture</h2>
            <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum, aliquid, omnis laboriosam nemo corrupti eos velit necessitatibus cum, placeat ad ex maxime error? Quidem veritatis maxime optio tempore perspiciatis?</p>
            <hr className="h-px my-6 bg-gray-700 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
        <div>
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            possimus autem repudiandae reiciendis, esse corporis! Beatae nihil
            maxime ipsam! Eius autem quidem animi facilis deleniti pariatur
            ipsum explicabo beatae culpa.
          </p>
        </div>
        <div>
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            possimus autem repudiandae reiciendis, esse corporis! Beatae nihil
            maxime ipsam! Eius autem quidem animi facilis deleniti pariatur
            ipsum explicabo beatae culpa.
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-blue-500 ">Hello World</h1>
      <h1 className="text-4xl font-bold text-yellow-500 ">
        This is an Architecture Website
      </h1>
    </div>
  );
};

export default Hero;
