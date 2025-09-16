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
    <CatalogLayout title={`STRUTS & MISC `} pagenum="30" reverseFooter>
      <div className="p-3 mx-7 relative">
        <h1 className="font-black text-3xl text-red-900">STRUTS & MISC</h1>
        <div
          className=" flex 
          space-x-8 mt-3 "
        >
          <StrutBox />
          <JambBox />

          <div className="space-y-10">
            <section className="">
              <Image
                src="/images/Struts/ARB.png"
                alt=""
                width={200}
                height={200}
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
            <section className=" flex flex-col justify-center items-center">
              <Image
                src="/images/Struts/flagbracket.png"
                alt=""
                width={150}
                height={150}
                className=""
              />
              <ul>
                <li className="list-dict font-semibold text-[15px] whitespace-nowrap ">
                  FLAG BRACKET PART:{" "}
                  <span className="text-[16px] text-red-900 font-bold">
                    {" "}
                    FLAGB
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="flex space-x-15 items-center  border-t mt-5   ">
          {/* ARB */}

          {/* Angle */}
          <section className="flex flex-col items-center mt-10 ">
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

          <section className="  space-y-[-100px]">
            <Image
              src="/images/Struts/adder.png"
              alt=""
              width={80}
              height={80}
              className="rotate-90 ml-20"
            />
            <ul className="">
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
      </div>
    </CatalogLayout>
  );
}
