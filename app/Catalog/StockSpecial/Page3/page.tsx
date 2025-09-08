"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";
import { Clo4050Colors } from "@/components/ColorBox/ColorBox";

export default function Clo4050() {
  return (
    <>
      <CatalogLayout pagenum="1" title="STOCK RESIDENTIAL">
        {/* Absolute Description Div */}
        <div className="absolute left-0 ml-5 mt-105 z-1 ">
          <div className="text-white">
            <h1 className="font-bold inline">Classic Steel Value Plus /</h1>{" "}
            <span className="">Model 4050, Short Traditional Panel</span>
          </div>
          <div>
            <h2 className="text-white">
              Shown in White with Colonial 509 Window Design
            </h2>
          </div>
        </div>

        <div className="relative w-full h-120">
          {" "}
          <Image
            src="/images/StockDoors/4050.png"
            alt="Operator Hero"
            fill
            className="object-cover "
            priority
            quality={100}
          />
        </div>
        {/* Detail Section */}
        <section className="flex flex-col items-center justify-center mx-20 mt-2">
          <div>
            <h1 className="font-bold text-4xl text-red-900">CLOPAY 4050</h1>
            <p className="font-semibold text-[18px]">
              Available with 1-5/16" polystyrene insulation, the 4050 model
              offers moderate insulating R-values, strength, and security, as
              well as quiet operation and a beautiful appearance. With several
              colors and window options to enhance your home's curb appeal.
            </p>
          </div>
          <div className="mt-3 space-y-3  ">
            {/* <h1 className="font-semibold text-2xl">STOCK OPTIONS</h1> */}
            {/* Color Options */}
            <div>
              <span className="font-semibold text-2xl text-red-900">
                STOCK COLORS
              </span>
              <Clo4050Colors />
              {/* <p className="font-semibold text-[18px]">
                WHITE - ALMOND - CHOCOLATE - SANDTONE - BLACK
              </p> */}
            </div>
            {/* Height Options */}
            <div>
              <span className="font-semibold text-2xl text-red-900 ">
                STOCK HEIGHTS
              </span>
              <p className="font-semibold text-[18px]">
                6'3" - 6'6" - 6'9" - 7'0" - 7'6" - 7'9" - 8'0" - *9'0" - *10'0"
              </p>
            </div>

            {/* Width Options */}
            <div>
              <span className="font-semibold text-2xl text-red-900">
                STOCK WIDTHS
              </span>
              <p className="font-semibold text-[18px]">
                *7'0" - 7'6" - 8'0" - 9'0" - *10'0" - *12'0" - *14'0" - *15'0" -
                16'0"
              </p>
            </div>
            <p className="font-semibold mt-3 mx-20">
              NOTE - * Sizes marked with an asterisk are only available in
              WHITE.
              <br />{" "}
              <span className="ml-15 ">
                Call Doors Direct for further details. (856) 662-6666
              </span>
            </p>
          </div>
        </section>
      </CatalogLayout>
    </>
  );
}
