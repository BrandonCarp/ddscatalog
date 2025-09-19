"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";
import {
  Section1,
  Section2,
  Section3,
  Section4,
} from "@/components/RibbedSections/RibbedSection";

export default function Ribbed() {
  return (
    <>
      <CatalogLayout title={`COMMERICAL STEEL RIBBED`} pagenum="21">
        <div className="flex flex-col justify-center p-3 ">
          <h1 className="font-black text-red-900 text-[26px]">
            MEASURING COMMERICAL STEEL RIBBED SECTIONS
          </h1>
          <div className="grid grid-cols-2 gap-5 mt-20 mx-5">
            {/* Measure Height of Section */}
            <Section2 />
            {/* Measure Overall Length */}
            <Section1 />

            {/* Measure Stile Locations */}
            <Section4 />
          </div>

          {/* Identify The Joint Connection */}
          <section className="flex flex-col items-center my-3 mt-50 mr-20">
            {/* <div className=" mt-25 flex flex-col justify-center font-medium text-gray-800 text-[13px] whitespace-nowrap space-y-1">
              <span>-- PULL ALL MEASUREMENTS LEFT TO RIGHT</span>
              <span>-- FROM LEFT END MEASURE TO CENTER OF EACH STILE</span>
            </div> */}
            <h1 className="text-red-800 font-bold text-[20px]">
              IDENTIFY THE JOINT CONNECTION
            </h1>
            <Image
              src="/images/Retainer/shiptongue.png"
              alt="Shiplap & Tongue and Groove"
              height={700}
              width={700}
            />
          </section>
        </div>
      </CatalogLayout>
    </>
  );
}
