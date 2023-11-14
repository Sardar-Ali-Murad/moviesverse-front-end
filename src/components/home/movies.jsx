import React from "react";
import Image from "next/image";
import Link from "next/link";
const movies = ({ array }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] py-[50px]">
      {array.map((item) => {
        return (
          <Link href={`/movie/${item?.id}`}>
            <div className="flex flex-col gap-[20px]">
              <Image
                src={item?.img}
                height={100}
                width={100}
                className="w-[100%] h-[100%] rounded-[10px] cursor-pointer"
                unoptimized
                alt={item?.id}
              />
              <p className="text-[#fff] hover:underline hover:opacity-[.75] cursor-pointer">
                {item?.text}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default movies;
