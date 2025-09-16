"use client";
import CatalogLayout from "@/components/CatalogLayout";
import Image from "next/image";
import StockCom from "@/components/StockDoors/StockCom";

export default function StcokCom() {
  return (
    <>
      <CatalogLayout pagenum="19" title="STOCK COMMERCIAL SECTIONS">
        {/* Detail Section */}
        <div className="flex flex-col relative mt-3">
          {/* Text takes ~60% */}
          <section className="w-3/5 flex flex-col ml-5">
            <div className="mb-5">
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
