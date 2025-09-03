"use client";
import Image from "next/image";

export default function DoorAd() {
  return (
    <>
      <div className="relative h-[50vh] w-full">
        {/* Image */}
        <Image
          src="/images/DoorAd/Door1.png"
          alt="Garage Door"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Text */}
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl z-20 font-black ml-60 mt-85">
          ELEVATE YOUR HOME
        </h1>
      </div>
      <div className="flex flex-col ml-10 mt-10">
        <h1 className="text-red-900 font-black text-[55px]">
          STYLE MEETS STRENGTH
        </h1>

        <h1 className="flex items-center text-[50px] font-semibold text-red-900">
          ONLY AT
          <Image
            src="/images/ad/tlogo.jpg"
            width={200}
            height={200}
            alt="LOGO"
            className="ml-5"
            priority
          />
        </h1>
        <div>
          <h2 className="text-red-900 font-semibold border-b w-[400px] text-[28px] mt-10">
            STOCK & SPECIAL ORDERS
          </h2>
          <p className="text-[20px] mr-20 font-semibold">
            At Doors Direct, our customers always come first. We carry one of
            the largest inventories in the industry, featuring trusted names
            like Clopay, HAAS, CHI, AMAAR, Wayne Dalton, and Overhead. And if
            you don't see exactly what you need, we'll get it for you{" "}
            <span className="font-bold">FAST.</span>
          </p>
        </div>
      </div>
    </>
  );
}
