"use client";
import CatalogLayout from "@/components/CatalogLayout";
import Image from "next/image";

export default function Hormann3200() {
  return (
    <>
      <CatalogLayout pagenum="1" title="STOCK COMMERCIAL">
        {/* Absolute Title */}
        <div className="absolute right-0 mr-35 mt-112 z-10">
          <div className="text-white">
            <h1 className="font-bold inline">Energy Series /</h1>{" "}
            <span>Polystyrene Insulated Steel Door</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-120">
          <Image
            src="/images/StockCom/3200.png"
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
              <h1 className="font-bold text-4xl text-red-900">CLOPAY 3200</h1>
              <p className="font-semibold text-[18px]">
                The Clopay 3200 delivers durable, insulated performance with 2"
                steel-clad sections and a polystyrene core (R-9.1).
                Stucco-embossed panels, FingerGuard™ pinch-resistant joints,
                and factory weather seals ensure safety, energy savings, and
                long-lasting reliability.
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
                  STOCK HEIGHTS
                </span>
                <p className="font-semibold text-[18px]">
                  8'0" - 9'0" - 10'0" - 12'0" - 14'0"
                </p>
              </div>

              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK WIDTHS
                </span>
                <p className="font-semibold text-[18px]">
                  8'2" - 9'2" - 10'2" - 12'2"
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
