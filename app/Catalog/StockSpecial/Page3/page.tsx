"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";
import { Clo4050Colors } from "@/components/ColorBox/ColorBox";

export default function Clo4050() {
  return (
    <>
      <CatalogLayout pagenum="1" title="STOCK RESIDENTIAL">
        {/* Absolute Title */}
        <div className="absolute left-0 ml-5 mt-105 z-10">
          <div className="text-white">
            <h1 className="font-bold inline">Classic Steel Value Plus /</h1>{" "}
            <span>Model 4050, Short Traditional Panel</span>
          </div>
          <div>
            <h2 className="text-white">
              Shown in White with Colonial 509 Window Design
            </h2>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-120">
          <Image
            src="/images/StockDoors/4050.png"
            alt="Operator Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>

        {/* Detail Section */}
        <div className="relative mt-3">
          {/* Text takes ~60% */}
          <section className="w-3/5 flex flex-col ml-5">
            <div>
              <h1 className="font-bold text-4xl text-red-900">CLOPAY 4050</h1>
              <p className="font-semibold text-[16px]">
                Classic design with reliable performance. Two-layer steel,
                1-5/16" thick with polystyrene insulation (R-value 6.3),
                provides strength, security, quiet operation, and enhanced curb
                appeal.
              </p>
            </div>

            <div className="mt-3 space-y-3">
              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK COLORS
                </span>
                <Clo4050Colors />
              </div>

              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK HEIGHTS
                </span>
                <p className="font-semibold text-[16px]">
                  6'3" - 6'6" - 6'9" - 7'0" - 7'6" - 7'9" - 8'0" - *9'0" -
                  *10'0"
                </p>
              </div>

              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK WIDTHS
                </span>
                <p className="font-semibold text-[16px]">
                  *7'0" - 7'6" - 8'0" - 9'0" - *10'0" - *12'0" - *14'0" - *15'0"
                  - 16'0"
                </p>
              </div>

              <p className="font-semibold my-3">
                NOTE – * Sizes marked with an asterisk are only available in
                WHITE.
                <br />
                <span className="ml-15">
                  Call Doors Direct for further details. (856) 662-6666
                </span>
              </p>
            </div>
          </section>

          {/* Absolutely positioned image (40%) */}
          <div className="absolute top-0 right-0 w-2/5 flex justify-center">
            <Image
              src="/images/DoorDetails/4050trans1.png"
              alt="4050 Details"
              width={250}
              height={250}
              className="object-contain mt-5"
              quality={100}
            />
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
