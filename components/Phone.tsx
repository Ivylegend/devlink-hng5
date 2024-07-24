import Image from "next/image";
import React from "react";

interface PhoneProps {
  user: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
  } | null;
}

const Phone: React.FC<PhoneProps> = ({ user }) => {
  const displayName =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : null;
  const displayEmail = user?.email || null;

  return (
    <div className="border border-gray w-[307px] h-[640px] rounded-[56px] relative overflow-y-hidden">
      <div className="w-[285px] h-[600px] flex items-start justify-center p-5 mx-auto">
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
              {/* USER NAME */}
              {displayName ? (
                <p className="text-darkgray font-bold text-[32px] text-center">
                  {displayName}
                </p>
              ) : (
                <div className="bg-[#EEEEEE] h-4 rounded-[104px] w-[160px]"></div>
              )}

              {/* USER EMAIL */}
              {displayEmail ? (
                <p className="text-gray text-center font-normal text-base">
                  {displayEmail}
                </p>
              ) : (
                <div className="bg-[#EEEEEE] h-2 w-[72px] rounded-[104px]"></div>
              )}
            </div>
          </div>

          <div className="w-full h-[240px] overflow-y-scroll">
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
        </div>
      </div>
    </div>
  );
};

export default Phone;
