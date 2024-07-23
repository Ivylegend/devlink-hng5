"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const MobileNav = () => {
  const router = useRouter();

  return (
    <div className="bg-white p-4 pl-6 flex md:hidden items-center justify-between">
      <Image src="/icons/mobile-logo.svg" alt="logo" width={52} height={52} />
      <div className="flex">
        <Link
          href="/"
          className="w-[74px] rounded-lg bg-lightpurple cursor-pointer flex items-center justify-center h-11"
        >
          <Image src="/icons/link.svg" alt="logo" width={20} height={20} />
        </Link>

        <Link
          href="/profile"
          className="w-[74px] rounded-lg cursor-pointer flex items-center justify-center h-11"
        >
          <Image
            src="/icons/user-circle.svg"
            alt="logo"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <Link href="/preview">
        <Image src="/icons/eye.svg" alt="logo" width={52} height={52} />
      </Link>
    </div>
  );
};

export default MobileNav;
