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

          {/* Angle */}
          <section className=" mt-5 flex flex-col items-center">
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

          <section className="absolute right-0 bottom-0 mr-70 mb-10">
            <Image
              src="/images/Struts/ARB.png"
              alt=""
              width={180}
              height={180}
              className=""
            />
            <ul>
              <li className="list-dict font-semibold text-[15px] whitespace-nowrap">
                ARB BRACKET PART:{" "}
                <span className="text-[16px] text-red-900 font-bold"> ARB</span>
              </li>
            </ul>
          </section>
          <section className="absolute right-0 bottom-0 mr-15 mb-10">
            <Image
              src="/images/Struts/orb.png"
              alt=""
              width={180}
              height={180}
              className=""
            />
            <ul>
              <li className="list-dict font-semibold text-[15px] whitespace-nowrap">
                ORB BRACKET PART:{" "}
                <span className="text-[16px] text-red-900 font-bold"> ORB</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </CatalogLayout>
  );
}
