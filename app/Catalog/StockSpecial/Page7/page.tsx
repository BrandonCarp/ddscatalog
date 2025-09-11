"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";

export default function Clo4051() {
  return (
    <>
      <CatalogLayout pagenum="7" title="STOCK RESIDENTIAL">
        {/* Absolute Title */}
        <div className="absolute left-0 ml-5 mt-112 z-10">
          <div className="text-black">
            <h1 className="font-bold inline">Gallery Collection /</h1>{" "}
            <span>Model GD1SP, Gallery Collection Short Panel</span>
          </div>
          {/* <div>
            <h2 className="text-white">Shown in Sandtone</h2>
          </div> */}
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-120">
          <Image
            src="/images/StockDoors/gd1spwh1.jpg"
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
            <div>
              <h1 className="font-bold text-4xl text-red-900">CLOPAY GD1SP</h1>
              <p className="font-semibold text-[18px]">
                Classic carriage house style at an entry-level price.
                Single-layer steel, 2" thick with polystyrene insulation
                (R-value 6.3), delivers durable performance with customizable
                panels, windows, and decorative hardware for lasting curb
                appeal.
              </p>
            </div>

            <div className="mt-2 space-y-3">
              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK COLORS
                </span>
                <div className="flex space-x-5 mt-1">
                  <div className="flex flex-col ">
                    <div className="w-20 h-10 rounded border border-gray-400 bg-white"></div>
                    <span className="ml-4 font-semibold">White</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK WIDTHS
                </span>
                <p className="font-semibold text-[18px]">8'0" - 9'0" - 16'0"</p>
              </div>
              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK HEIGHTS
                </span>
                <p className="font-semibold text-[18px]">
                  6'3" - 6'6" - 6'9" - 7'0" - 7'6" - 7'9" - 8'0"
                </p>
              </div>
            </div>
          </section>

          {/* Absolutely positioned image (40%) */}
          <div className="absolute top-0 right-0 w-2/5 flex justify-center">
            <Image
              src="/images/DoorDetails/gd1sp.png"
              alt="4051 Details"
              width={250}
              height={250}
              className="object-contain mt-5 scale-x-[-1]"
              quality={100}
            />
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
