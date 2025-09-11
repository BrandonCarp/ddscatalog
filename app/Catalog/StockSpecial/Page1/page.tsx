"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";

export default function T50S() {
  return (
    <>
      <CatalogLayout pagenum="1" title="STOCK RESIDENTIAL">
        {/* Absolute Title */}
        <div className="absolute left-0 ml-25 mt-100 z-10">
          <div>
            <h1 className="font-bold inline">Classic Steel /</h1>{" "}
            <span>Model T50S, Short Traditional Panel</span>
          </div>
          <div>
            <h2>with Optional Colonial 509 Window Design</h2>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-120">
          <Image
            src="/images/StockDoors/CloT501.png"
            alt="Operator Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>

        {/* Detail Section */}
        <div className="relative mt-10">
          {/* Text takes ~60% */}
          <section className="w-3/5 flex flex-col ml-5">
            <div>
              <h1 className="font-bold text-4xl text-red-900">CLOPAY T50S</h1>
              <p className="font-semibold text-[18px]">
                Timeless style at an affordable price. Single-layer 25-gauge
                steel, 2" thick, hollow (non-insulated), provides durable
                performance and lasting curb appeal.
              </p>
            </div>

            <div className="space-y-3 mt-2">
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
                  STOCK WIDTHS
                </span>
                <p className="font-semibold text-[18px]">
                  7'6" - 8'0" - 9'0" - 10'0" - 12'0" - 15'0" - 16'0"
                </p>
              </div>
              <div>
                <span className="font-semibold text-3xl text-red-900">
                  STOCK HEIGHTS
                </span>
                <p className="font-semibold text-[18px]">
                  6'3" - 6'6" - 6'9" - 7'0" - 7'6" - 7'9" - 8'0" - 9'0" - 10'0"
                </p>
              </div>
            </div>
          </section>

          {/* Absolutely positioned image (40%) */}
          <div className="absolute top-0 right-0 w-2/5 flex justify-center">
            <Image
              src="/images/DoorDetails/T50s3.png"
              alt="T50S Details"
              width={400}
              height={400}
              className="object-contain mt-5 ml-25"
              quality={100}
            />
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
