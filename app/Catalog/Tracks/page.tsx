"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";
import JambBox from "@/components/Strut/JambBox";

export default function Tracks() {
  return (
    <>
      <CatalogLayout pagenum="19" title="TRACK MISC">
        <div className="p-3">
          <h1 className="font-black text-4xl text-red-900">TRACKS</h1>
          <div className="">
            <div className="flex justify-between mx-10 mt-2">
              <section className="flex flex-col mt-20 space-y-10">
                <ul>
                  <Image
                    src="/images/cables/pusher.png"
                    alt="Push Down Bumpers"
                    width={150}
                    height={150}
                  />
                  <li className="list-disc font-semibold">
                    PUSH DOWN DOOR BUMPERS, 15", 2PCS
                  </li>
                  <li className="font-semibold text-[17px]">
                    PART:{" "}
                    <span className="text-[18px] text-red-900 font-bold">
                      PDB15
                    </span>
                  </li>
                  <li className="list-disc font-semibold">
                    PUSH DOWN DOOR BUMPERS, 27", 2PCS
                  </li>
                  <li className="font-semibold text-[17px]">
                    PART:
                    <span className="text-[18px] text-red-900 font-bold">
                      PDB27
                    </span>
                  </li>
                </ul>

                <ul>
                  <Image
                    src="/images/cables/ubumper.png"
                    alt="Push Down Bumpers"
                    width={150}
                    height={150}
                  />
                  <li className="list-disc font-semibold">
                    U-STYLE DOOR BUMPERS, 2PCS
                  </li>
                  <li className="font-semibold text-[15px]">
                    PART:{" "}
                    <span className="text-[18px] text-red-900 font-bold">
                      UDB
                    </span>
                  </li>
                </ul>
              </section>
              <JambBox />
            </div>
            <div className="">
              <section className="absolute ml-10 mb-5 flex flex-col justify-center items-center">
                <Image
                  src="/images/Struts/flagbracket.png"
                  alt=""
                  width={150}
                  height={150}
                  className=""
                />
                <ul className="list-disc">
                  <li className="list-dict font-semibold text-[17px] whitespace-nowrap ">
                    FLAG BRACKET PART:{" "}
                    <span className="text-[18px] text-red-900 font-bold">
                      {" "}
                      FLAGB
                    </span>
                  </li>
                </ul>
              </section>
              <section className="absolute right-0 top-0 mr-25 mt-175 space-y-[-100px]">
                <Image
                  src="/images/Struts/adder.png"
                  alt=""
                  width={60}
                  height={60}
                  className="rotate-90 ml-20 "
                />
                <ul className="list-disc ">
                  <li className="list-dict font-semibold text-[17px]">
                    ADDER PIECE 36" PART:{" "}
                    <span className="text-[18px] text-red-900 font-bold">
                      {" "}
                      ADD36
                    </span>
                  </li>
                  <li className="list-dict font-semibold text-[17px]">
                    ADDER PIECE 54" PART:{" "}
                    <span className="text-[18px] text-red-900 font-bold">
                      {" "}
                      ADD54
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
