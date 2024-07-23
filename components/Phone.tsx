import Image from "next/image";
import React from "react";

const Phone = () => {
  return (
    <div className="border border-gray w-[307px] h-[640px] rounded-[56px] relative">
      <div className="w-[285px] h-full flex items-start justify-center p-5 mx-auto">
        <Image
          src="/icons/phone-line.svg"
          width={285}
          height={620}
          alt="line"
          className="absolute top-3"
        />

        <div className="w-[237px] mt-16 flex items-start flex-col justify-center gap-[56px] z-20">
          <div className="flex flex-col gap-[25px] w-full items-center justify-center">
            {/* PROFILE CIRCLE*/}
            <div className="bg-[#EEEEEE] w-[96px] h-[96px] rounded-full"></div>

            <div className="w-full flex flex-col items-center justify-center gap-3">
              <div className="bg-[#EEEEEE] h-4 rounded-[104px] w-[160px]"></div>
              <div className="bg-[#EEEEEE] h-2 w-[72px] rounded-[104px]"></div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div className="bg-[#EEEEEE] w-full h-11 rounded-lg"></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
