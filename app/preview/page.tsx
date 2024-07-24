"use client";

import { Button } from "@/components/ui/button";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Preview = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const loggedInUser = await getLoggedInUser();
      if (!loggedInUser) {
        router.push("/sign-in");
      } else {
        setUser(loggedInUser);
      }
    };

    fetchUser();
  }, [router]);

  return (
    <section className="relative md:p-6 w-full">
      {/* BLUE BACKGROUND */}
      <div className="hidden md:flex bg-purple absolute w-full h-[357px] top-0 left-0 -z-10 rounded-b-[32px]"></div>

      {/* NAVBAR */}
      <div className="bg-white p-4 pl-6 flex items-center justify-between md:rounded-[12px]">
        <Link href="/">
          <Button
            className="py-[11px] px-[27px] rounded-lg h-[46px] text-purple font-semibold border-purple hover:bg-lightpurple hover:text-purple"
            variant="outline"
          >
            Back to Editor
          </Button>
        </Link>
        <Link href="/">
          <Button className="py-[11px] px-[27px] rounded-lg h-[46px] bg-purple font-semibold hover:bg-lightpurple hover:text-purple">
            Share Link
          </Button>
        </Link>
      </div>

      {/* USER CARD */}
      <div className="max-w-[348px] rounded-[24px] py-12 px-14 mx-auto md:my-32 md:shadow-lg flex items-start flex-col justify-center gap-[56px] z-20 bg-white">
        <div className="flex flex-col gap-[25px] w-full items-center justify-center">
          {/* PROFILE CIRCLE*/}
          <div className="bg-[#EEEEEE] w-[96px] h-[96px] rounded-full"></div>

          <div className="w-full flex flex-col items-center justify-center gap-3">
            {/* USER NAME */}
            {user && user.firstName && user.lastName ? (
              <p className="text-darkgray font-bold text-[32px] text-center">{`${user.firstName} ${user.lastName}`}</p>
            ) : (
              <div className="bg-[#EEEEEE] h-4 rounded-[104px] w-[160px]"></div>
            )}

            {/* EMAIL */}
            {user && user.email ? (
              <p className="text-gray text-center font-normal text-base">
                {user.email}
              </p>
            ) : (
              <div className="bg-[#EEEEEE] h-2 w-[72px] rounded-[104px]"></div>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-5">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-[#EEEEEE] w-full h-11 rounded-lg"
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Preview;
