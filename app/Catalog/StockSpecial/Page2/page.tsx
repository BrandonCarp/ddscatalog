"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";

export default function T52S() {
  return (
    <>
      <CatalogLayout pagenum="1" title="STOCK RESIDENTIAL">
        {/* Absolute Description Div */}
        <div className="absolute left-0 ml-5 mt-110 z-1 ">
          <div>
            <h1 className="font-bold inline">Classic Steel /</h1>{" "}
            <span className="">Model T52S, Short Traditional Panel</span>
          </div>
        </div>

        <div className="relative w-full h-120">
          {" "}
          <Image
            src="/images/StockDoors/T52S.png"
            alt="Operator Hero"
            fill
            className="object-cover "
            priority
            quality={100}
          />
        </div>
        {/* Detail Section */}
        <section className="flex flex-col items-center justify-center mx-20 mt-8">
          <div>
            <h1 className="font-bold text-4xl text-red-900">CLOPAY T52S</h1>
            <p className="font-semibold text-[18px]">
              With a 2-layer construction of steel plus 1-5/16" of plystyrene
              insulation, T52S are built to be energy efficient and durable.
              Combining five color options, beautiful Traditional long or short
              panel designs and multiple window options, you are certain to find
              a door to meet your lifestyle and home style.
            </p>
          </div>
          <div className="space-y-5 mt-10  ">
            {/* <h1 className="font-semibold text-3xl">STOCK OPTIONS</h1> */}
            {/* Color Options */}
            <div>
              <span className="font-semibold text-3xl text-red-900">
                STOCK COLORS
              </span>
              <p className="font-semibold text-[18px]">WHITE</p>
            </div>
            {/* Height Options */}
            <div>
              <span className="font-semibold text-3xl text-red-900">
                STOCK HEIGHTS
              </span>
              <p className="font-semibold text-[18px]">
                6'3" - 6'6" - 6'9" - 7'0" - 7'6" - 7'9" - 8'0" - 9'0" - 10'0"
              </p>
            </div>
            {/* Width Options */}
            <div>
              <span className="font-semibold text-3xl text-red-900">
                STOCK WIDTHS
              </span>
              <p className="font-semibold text-[18px]">
                8'0", 9'0", 10'0", 16'0"
              </p>
            </div>
          </div>
        </section>
      </CatalogLayout>
    </>
  );
}
