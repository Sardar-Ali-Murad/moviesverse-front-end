import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" bg-primaryLight px-[20px] rounded-bl-lg rounded-br-lg h-[80px] flex justify-center items-center">
      <Link href="/">
        <div className="flex-1">
          <Image src="/assets/logo.png" height={200} width={200} alt="Logo" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
