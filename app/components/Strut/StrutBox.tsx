"use client";
import Image from "next/image";

export type PartItem = {
  code: string;
  label: string;
  feature?: string;
  image?: string;
  description: string[];
};

export default function StrutBox() {
  return (
    <>
      {/* Struts */}
      <section className="flex flex-col items-center">
        <Image
          src="/images/Struts/struts.png"
          alt="Strut"
          height={200}
          width={200}
        />
        {/* <h1 className="font-bold text-[24px] text-red-900">STRUTS 2" - 3" </h1> */}
        <div className="flex font-semibold text-[15px]">
          {/* 2" Struts */}
          <ul className="list-disc ">
            <li className="">
              2-1/4" STRUT 8' PART:
              <span className="text-red-900 font-bold text-[16px]">
                {" "}
                STRT08
              </span>
            </li>
            <li>
              2-1/4" STRUT 9' PART:
              <span className="text-red-900 font-bold text-[16px]">
                {" "}
                STRT09
              </span>
            </li>
            <li>
              2-1/4" STRUT 10' PART:
              <span className="text-red-900 font-bold text-[16px]">
                {" "}
                STRT10
              </span>
            </li>
            <li>
              2-1/4" STRUT 12' PART:
              <span className="text-red-900 font-bold text-[16px]">
                {" "}
                STRT12
              </span>
            </li>
            <li>
              2-1/4" STRUT 14' PART:
              <span className="text-red-900 font-bold text-[16px]">
                {" "}
                STRT14
              </span>
            </li>
            <li>
              2-1/4" STRUT 15' PART:
              <span className="text-red-900 font-bold text-[16px]">
                {" "}
                STRT15
              </span>
            </li>
            <li>
              2-1/4" STRUT 16' PART:
              <span className="text-red-900 font-bold text-[16px]">
                {" "}
                STRT16
              </span>
            </li>
            <li>
              2-1/4" STRUT 18' PART:
              <span className="text-red-900 font-bold text-[16px]">
                {" "}
                STRT18
              </span>
            </li>
          </ul>
          {/* 3" STRUTs */}
          <ul className="list-disc ml-10">
            <li>
              3" STRUT 16' PART:
              <span className="text-red-900 font-bold text-[16px]"> ST316</span>
            </li>
            <li>
              3" STRUT 18' PART:
              <span className="text-red-900 font-bold text-[16px]"> ST318</span>
            </li>
            <li>
              3" STRUT 20' PART:
              <span className="text-red-900 font-bold text-[16px]"> ST320</span>
            </li>
            <li>
              3" STRUT 24' PART:
              <span className="text-red-900 font-bold text-[16px]"> ST324</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
