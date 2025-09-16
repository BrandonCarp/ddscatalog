"use client";
import Image from "next/image";

// --- COUPLING ---
export function Coupling() {
  return (
    <>
      <div className="flex flex-col items-center mr-20">
        <Image
          width={100}
          height={100}
          src="/images/jbeb/coupling.png"
          alt="Coupling"
          className="flex justify-center items-center  mb-3"
        />
        <h1 className="font-bold text-xl text-red-900">COUPLINGS</h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li>
            1" COUPLING
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">CUP100</span>
            </span>
          </li>
          <li>
            1-1/4" COUPLING
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">CUP125</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

// --- COLLAR ---
export function Collar() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <Image
          width={150}
          height={150}
          src="/images/jbeb/collar.png"
          alt="Collar"
          className="mb-2"
        />
        <h1 className="font-bold text-xl text-red-900">COLLARS</h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li>
            1" COLLOR
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">COL100</span>
            </span>
          </li>
          <li>
            1-1/4" COLLOR
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">COL125</span>
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}

// --- BEARINGS ---
export function Bearings() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Image
          width={150}
          height={150}
          src="/images/jbeb/bearing.png"
          alt="Center Plate"
          className="flex justify-center items-center ml-5 mb-3"
        />
        <h1 className="font-bold text-xl text-red-900">
          STEEL & PLASTIC BEARINGS
        </h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li>
            1" STEEL BEARINGS
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">SBR</span>
            </span>
          </li>
          <li>
            1" PLASTIC BEARINGS
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">PBR</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

// --- CENTER PLATES (already had drop; left as-is but cleaned slightly) ---
export function CenterPlates() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          width={150}
          height={150}
          src="/images/jbeb/centerplate.png"
          alt="Center Plate"
          className="flex justify-center items-center ml-5 mb-3"
        />
        <h1 className="font-bold text-xl text-red-900">CENTER ANCHOR PLATE</h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li>
            6" MINI CENTER ANCHOR PLATE
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">CAP6</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

// --- END BEARING PLATES ---
export function EndBearingPlates() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          width={150}
          height={150}
          src="/images/jbeb/ebp.png"
          alt="End Bearing Plates"
          className=""
        />
        <h1 className="font-bold text-xl text-red-900">END BEARING PLATES</h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li className="whitespace-nowrap">
            3-3/8" RES, END BEARING PLATE
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">EBR338</span>
            </span>
          </li>
          <li className="whitespace-nowrap">
            3-3/8" COMM, END BEARING PLATE
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">EBC338</span>
            </span>
          </li>
          <li className="whitespace-nowrap">
            4-3/8" END BEARING PLATE
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">EBC438</span>
            </span>
          </li>
          <li className="whitespace-nowrap">
            5" END BEARING PLATE
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">EBC500</span>
            </span>
          </li>
          <li className="whitespace-nowrap">
            6" END BEARING PLATE
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">EBC600</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

// --- SOLID SHAFTS ---
export function SolidTubeBox() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src="/images/JBEB/solidshaft.png"
          alt=""
          width={150}
          height={150}
        />
        <h1 className="font-bold text-red-900 text-[18px]">SOLID SHAFTS</h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li>
            1" SOLID SHAFT, 12'6"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">
                SLTB10012
              </span>
            </span>
          </li>
          <li>
            1" SOLID SHAFT 21'0"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">
                SLTB100219
              </span>
            </span>
          </li>
          <li>
            1.25" SOLID SHAFT 12'6"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">
                SLTB12512
              </span>
            </span>
          </li>
          <li>
            1.25" SOLID SHAFT 17'6"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">
                SLTB12517
              </span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

// --- TUBE SHAFTS ---
export function TubeBox() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src="/images/JBEB/tubeshaft.png"
          alt=""
          width={150}
          height={150}
        />
        <h1 className="font-bold text-red-900 text-[18px]">TUBE SHAFTS</h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li>
            1" TUBE SHAFT 8'9"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">TBSH08</span>
            </span>
          </li>
          <li>
            1" TUBE SHAFT 9'9"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">TBSH09</span>
            </span>
          </li>
          <li>
            1" TUBE SHAFT 10'9"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">TBSH10</span>
            </span>
          </li>
          <li>
            1" TUBE SHAFT 12'9"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">TBSH12</span>
            </span>
          </li>
          <li>
            1" TUBE SHAFT 14'9"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">TBSH14</span>
            </span>
          </li>
          <li>
            1" TUBE SHAFT 15'9"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">TBSH15</span>
            </span>
          </li>
          <li>
            1" TUBE SHAFT 16'9"
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">TBSH16</span>
            </span>
          </li>
          <li>
            1" TUBE SHAFT 16'9" HEAVY
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">
                TBSH16H
              </span>
            </span>
          </li>
          <li>
            1" TUBE SHAFT 18'9" HEAVY
            <span className="block">
              PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">
                TBSH18H
              </span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
