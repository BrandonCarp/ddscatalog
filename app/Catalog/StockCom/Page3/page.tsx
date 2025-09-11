"use client";
import CatalogLayout from "@/components/CatalogLayout";
import Image from "next/image";

export default function Hormann3200() {
  return (
    <>
      <CatalogLayout pagenum="15" title="STOCK COMMERCIAL">
        {/* Absolute Title */}
        <div className="absolute left-0 ml-5 mt-112 z-10">
          <div className="text-white">
            <h1 className="font-bold inline">Industrial Series /</h1>{" "}
            <span>2" Ribbed Steel Door</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-120">
          <Image
            src="/images/StockCom/524.png"
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
              <h1 className="font-bold text-4xl text-red-900">CLOPAY 524</h1>
              <p className="font-semibold text-[18px]">
                The Clopay 524 Industrial Series doors combine durability and
                performance for commercial and industrial use. With optional
                polystyrene insulation, vinyl or steel backing, and multiple
                panel, color, and window options, they’re ideal for warehouses,
                loading docks, and industrial facilities.
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
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-10 rounded border border-gray-400 bg-[#381819]"></div>
                    <span className=" font-semibold">Chocolate</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK WIDTHS
                </span>
                <p className="font-semibold text-[18px] whitespace-nowrap">
                  8'2" - 9'2" - 10'2" - 12'2" - Chocolate : Any desired up to
                  28'0
                </p>
              </div>
              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK HEIGHTS
                </span>
                <p className="font-semibold text-[18px]">
                  8'0" - 9'0" - 10'0" - 12'0" - 14'0" - Chocolate : 21" - 24"
                </p>
              </div>
            </div>
          </section>

          {/* Absolutely positioned image (40%) */}
          <div className="absolute top-0 right-0 w-2/5 flex justify-center">
            <Image
              src="/images/DoorDetails/3200.png"
              alt="4051 Details"
              width={350}
              height={350}
              className="object-contain mt-5 scale-x-[-1]"
              quality={100}
            />
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
