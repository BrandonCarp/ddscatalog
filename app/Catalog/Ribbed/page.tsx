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
      <CatalogLayout
        title={`COMMERICAL STEEL RIBBED`}
        pagenum="24"
        reverseFooter
      >
        <div className="flex flex-col justify-center p-3 ">
          <h1 className="font-semibold text-red-800 text-[26px]">
            MEASURING COMMERICAL STEEL RIBBED SECTIONS
          </h1>
          <div className="grid grid-cols-2 mt-5">
            {/* Measure Height of Section */}
            <Section2 />
            {/* Measure Overall Length */}
            <Section1 />
          </div>
          <div className="flex flex-col items-center space-y-5 mt-3 mr-98">
            {/* Identify Location of Section */}
            <Section3 />
            {/* Measure Stile Locations */}
            <Section4 />
          </div>

          {/* Identify The Joint Connection */}
          <section className="flex flex-col items-center mt-25">
            <h1 className="text-red-800 font-semibold text-[20px]">
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
