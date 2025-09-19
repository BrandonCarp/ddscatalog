"use client";

import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";
import JambBox from "@/components/Strut/JambBox";
import StrutBox from "@/components/Strut/StrutBox";

type PartList = {
  label: string;
  image: string;
  description: string[];
};

// Flag Brackets
const flagBrackets: PartList[] = [
  {
    label: "FLAG BRACKETS",
    image: "/images/ShaftStrut/flagbracket.png", // update if needed
    description: [
      "FLAG BRACKET LEFT - FBL",
      "FLAG BRACKET RIGHT - FBR",
      "HEAVY FLAG BRACKET LEFT - FBLH",
      "HEAVY FLAG BRACKET RIGHT - FBRH",
    ],
  },
];

// Adder Piece
const adderPiece: PartList[] = [
  {
    label: "ADDER PIECE",
    image: "/images/ShaftStrut/adder.png", // update if needed
    description: ['ADDER PIECE 36" - ADD36', 'ADDER PIECE 54" - ADD54'],
  },
];

export default function ShaftStrut() {
  return (
    <CatalogLayout title={`STRUTS & ACCESSORIES `} pagenum="31">
      <div className="relative w-full h-85">
        <Image
          src="/images/Struts/strutdoor.png"
          alt="Operator Hero"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
      <div className="p-3  relative flex flex-col justify-center">
        <h1 className="font-black text-3xl text-red-900">
          STRUTS - ANGLES - BRACKETS
        </h1>

        <div className="flex justify-between mx-10">
          <StrutBox />
          {/* right side */}
          <div className="flex flex-col justify-center items-center">
            {/* Angle */}
            <section className="flex flex-col items-center mt-10 ">
              <Image
                src="/images/Struts/galvangle.png"
                alt=""
                width={200}
                height={200}
                className=""
              />
              <ul>
                <li className="list-dict font-semibold text-[15px] whitespace-nowrap">
                  GALVANIZED ANGLE 1-1/4" X 1-1/4" X 8FT PART:{" "}
                  <span className="text-[16px] text-red-900 font-bold">
                    {" "}
                    GALVA8
                  </span>
                </li>
                <li className="list-dict font-semibold text-[15px]">
                  GALVANIZED ANGLE 2" X 2" X 10FT PART:{" "}
                  <span className="text-[16px] text-red-900 font-bold">
                    {" "}
                    GALVA10
                  </span>
                </li>
                <li className="list-dict font-semibold text-[15px]">
                  WHITE ANGLE 1-1/4" X 1-1/4" X 8FT PART:{" "}
                  <span className="text-[16px] text-red-900 font-bold">
                    {" "}
                    WTANG8
                  </span>
                </li>
              </ul>
            </section>
            {/* arb / orb */}
            <div className="flex justify-center items-center space-x-5">
              <section className="ml-20">
                <Image
                  src="/images/Struts/ARB.png"
                  alt=""
                  width={225}
                  height={225}
                  className=""
                />
                <ul>
                  <li className="list-dict font-semibold text-[15px] whitespace-nowrap">
                    ARB BRACKET PART:{" "}
                    <span className="text-[16px] text-red-900 font-bold">
                      {" "}
                      ARB
                    </span>
                  </li>
                </ul>
              </section>
              <section className="mt-18">
                <Image
                  src="/images/Struts/orb.png"
                  alt=""
                  width={225}
                  height={225}
                  className=""
                />
                <ul>
                  <li className="list-dict font-semibold text-[15px] whitespace-nowrap">
                    ORB BRACKET PART:{" "}
                    <span className="text-[16px] text-red-900 font-bold">
                      {" "}
                      ORB
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </CatalogLayout>
  );
}
