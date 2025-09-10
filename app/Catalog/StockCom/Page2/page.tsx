"use client";
import CatalogLayout from "@/components/CatalogLayout";
import Image from "next/image";
import StockCom from "@/components/StockDoors/StockCom";

export default function Hormann3200() {
  return (
    <>
      <CatalogLayout pagenum="1" title="STOCK COMMERCIAL">
        {/* Absolute Title */}
        <div className="absolute left-0 ml-5 mt-72 z-10">
          <div className="text-white">
            <h1 className="font-bold inline">Amarr 2742 /</h1>{" "}
            <span>Polyurethane High R-Value 2” Door </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-80">
          <Image
            src="/images/StockCom/2742.png"
            alt="Operator Hero"
            fill
            className=""
            priority
            quality={100}
          />
        </div>

        {/* Detail Section */}
        <div className="relative mt-3">
          {/* Text takes ~60% */}
          <section className="w-3/5 flex flex-col ml-5">
            <div className="">
              <h1 className="font-bold text-4xl text-red-900 whitespace-nowrap ">
                COMMERCIAL SECTIONS IN STOCK
              </h1>
              <h2 className="font-semibold text-2xl text-red-900 mb-2">
                CUT TO DESIRED LENGTH
              </h2>
            </div>
            <StockCom />
          </section>
        </div>
      </CatalogLayout>
    </>
  );
}
