"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";

export default function T52S() {
  return (
    <>
      <CatalogLayout pagenum="1" title="STOCK RESIDENTIAL">
        {/* Absolute Title */}
        <div className="absolute left-0 ml-5 mt-110 z-10">
          <div>
            <h1 className="font-bold inline">Classic Steel /</h1>{" "}
            <span>Model T52S, Short Traditional Panel</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-120">
          <Image
            src="/images/StockDoors/T52S.png"
            alt="Operator Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>

        {/* Detail Section */}
        <div className="relative">
          {/* Text takes ~60% */}
          <section className="w-3/5 flex flex-col ml-5 mt-3">
            <div>
              <h1 className="font-bold text-4xl text-red-900">CLOPAY T52S</h1>
              <p className="font-semibold text-[17px]">
                With a 2-layer construction of steel plus 1-5/16" of plystyrene
                insulation, T52S are built to be energy efficient and durable.
                Combining five color options, beautiful Traditional long or
                short panel designs and multiple window options, you are certain
                to find a door to meet your lifestyle and home style.
              </p>
            </div>

            <div className="space-y-3 mt-3">
              <div>
                <span className="font-semibold text-3xl text-red-900">
                  STOCK COLORS
                </span>
                <div className="flex flex-col ">
                  <div className="w-20 h-10 rounded border border-gray-400 bg-white"></div>
                  <span className="ml-4 font-semibold">White</span>
                </div>
              </div>

              <div>
                <span className="font-semibold text-3xl text-red-900">
                  STOCK HEIGHTS
                </span>
                <p className="font-semibold text-[17px]">
                  6'3" - 6'6" - 6'9" - 7'0" - 7'6" - 7'9" - 8'0" - 9'0" - 10'0"
                </p>
              </div>

              <div>
                <span className="font-semibold text-3xl text-red-900">
                  STOCK WIDTHS
                </span>
                <p className="font-semibold text-[17px]">
                  8'0", 9'0", 10'0", 16'0"
                </p>
              </div>
            </div>
          </section>

          {/* Absolutely positioned image (40%) */}
          <div className="absolute top-0 right-0 w-2/5 flex justify-center">
            <Image
              src="/images/DoorDetails/T52strans.png"
              alt="T52S Details"
              width={275}
              height={275}
              className="object-contain mt-2"
              quality={100}
            />
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
