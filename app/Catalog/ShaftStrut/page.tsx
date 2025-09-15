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
    <CatalogLayout title={`STRUTS & MISC `} pagenum="29">
      <div className="p-5 mx-5">
        <h1 className="font-black text-3xl text-red-900">STRUTS & MISC</h1>
        <div className="grid grid-cols-2  gap-3   ">
          {/* ARB */}
          <section className="">
            <Image
              src="/images/Struts/ARB.png"
              alt=""
              width={200}
              height={200}
              className=""
            />
            <ul>
              <li className="list-dict font-semibold text-[15px]">
                ARB BRACKET PART:{" "}
                <span className="text-[16px] text-red-900 font-bold"> ARB</span>
              </li>
            </ul>
          </section>
          {/* Angle */}
          <section className="flex flex-col items-center ">
            <Image
              src="/images/Struts/galvangle.png"
              alt=""
              width={150}
              height={150}
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

          {/* Adder */}

          {/* fLAG BRACKET */}
          <section className="absolute  right-0 mt-65 mr-35 flex flex-col justify-center items-center">
            <Image
              src="/images/Struts/flagbracket.png"
              alt=""
              width={150}
              height={150}
              className=""
            />
            <ul>
              <li className="list-dict font-semibold text-[15px]">
                FLAG BRACKET PART:{" "}
                <span className="text-[16px] text-red-900 font-bold">
                  {" "}
                  FLAGB
                </span>
              </li>
            </ul>
          </section>
          <section className="absolute mt-40 ml-  space-y-[-100px] flex flex-col items-center">
            <Image
              src="/images/Struts/adder.png"
              alt=""
              width={80}
              height={80}
              className="rotate-90 ml-20"
            />
            <ul>
              <li className="list-dict font-semibold text-[15px]">
                ADDER PIECE 36" PART:{" "}
                <span className="text-[16px] text-red-900 font-bold">
                  {" "}
                  ADD36
                </span>
              </li>
              <li className="list-dict font-semibold text-[15px]">
                ADDER PIECE 54" PART:{" "}
                <span className="text-[16px] text-red-900 font-bold">
                  {" "}
                  ADD54
                </span>
              </li>
            </ul>
          </section>
        </div>

        <div className="absolute flex bottom-0 mb-28  space-x-10 ml-5 ">
          <StrutBox />
          <JambBox />
        </div>
      </div>
    </CatalogLayout>
  );
}
