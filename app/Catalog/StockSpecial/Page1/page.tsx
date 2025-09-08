"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";

export default function T50S() {
  return (
    <>
      <CatalogLayout pagenum="1" title="STOCK RESIDENTIAL">
        {/* Absolute Description Div */}
        <div className="absolute left-0 ml-25 mt-100 z-1 ">
          <div>
            <h1 className="font-bold inline">Classic Steel /</h1>{" "}
            <span className="">Model T50S, Short Traditional Panel</span>
          </div>
          <div>
            <h2 className="">with Optional Colonial 509 Window Design</h2>
          </div>
        </div>

        <div className="relative w-full h-120">
          {" "}
          <Image
            src="/images/StockDoors/CloT501.png"
            alt="Operator Hero"
            fill
            className="object-cover "
            priority
            quality={100}
          />
        </div>
        <div className="flex">
          <Image
            src="/images/DoorDetails/T50s3.png"
            alt="T50S Details"
            height={250}
            width={250}
            className="mt-5"
            quality={100}
          />

          {/* Detail Section */}
          <section className="flex flex-col items-center justify-center  mx-20 mt-3">
            <div>
              <h1 className="font-bold text-4xl text-red-900">CLOPAY T50S</h1>
              <p className="font-semibold text-[18px]">
                Improve your home's appearance with a Clopay Classic Steel Value
                garage door. Available in 25 gauge steel with a durable 2" steel
                frame construction, Classic Steel Value models are designed for
                beautiful, long-lasting performance.
              </p>
            </div>
            <div className="space-y-5 mt-5  ">
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
                  7'6" - 8'0" - 9'0" - 10'0" - 12'0" - 15'0" - 16'0"
                </p>
              </div>
            </div>
          </section>
        </div>
      </CatalogLayout>
    </>
  );
}
