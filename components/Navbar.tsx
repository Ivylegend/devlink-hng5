"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="bg-white hidden p-4 pl-6 md:flex items-center justify-between">
      <Image src="/icons/devlink-logo.svg" alt="logo" width={146} height={32} />
      <div className="flex">
        <Link
          href="/"
          className="rounded-lg py-[11px] px-[27px] gap-2 font-semibold hover:text-purple text-purple bg-lightpurple cursor-pointer flex items-center justify-center h-11"
        >
          <Image src="/icons/link.svg" alt="logo" width={20} height={20} />
          Links
        </Link>

        <Link
          href="/profile"
          className="rounded-lg py-[11px] px-[27px] gap-2 font-semibold hover:text-purple cursor-pointer flex items-center justify-center h-11"
        >
          <Image
            src="/icons/user-circle.svg"
            alt="logo"
            width={20}
            height={20}
          />
          Profile Details
        </Link>
      </div>

      <Link href="/preview">
        <Button
          variant={"outline"}
          className="border border-purple text-purple font-semibold hover:bg-lightpurple hover:text-purple py-[11px] h-[46px] px-[27px]"
        >
          Preview
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
