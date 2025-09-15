"use client";
import Image from "next/image";

// End Bearing Plates
// const endBearingPlates: PartList[] = [
//   {
//     label: "END BEARING PLATES",
//     image: "/images/jbeb/ebp.png",
//     description: [
//       '3-3/8" RES, END BEARING PLATE - EBR338',
//       '3-3/8" COMM, END BEARING PLATE - EBC338',
//       '4-3/8" END BEARING PLATE - EBC438',
//       '5" END BEARING PLATE - EBC500',
//       '6" END BEARING PLATE - EBC600',
//     ],
//   },
// ];

// // Center Anchor Plate
// const centerAnchorPlate: PartList[] = [
//   {
//     label: "CENTER ANCHOR PLATE",
//     image: "/images/jbeb/ebp.png", // update if you have a specific image
//     description: ["CENTER ANCHOR PLATE - CAP100"],
//   },
// ];

// // Collars
// const collarList: PartList[] = [
//   {
//     label: "COLLARS",
//     image: "/images/ShaftStrut/collar.png",
//     description: ['1" COLLAR - COL100', '1-1/4" COLLAR - COL125'],
//   },
// ];

// // Couplings
// const couplingList: PartList[] = [
//   {
//     label: "COUPLINGS",
//     image: "/images/ShaftStrut/coupling.png",
//     description: ['1" COUPLING - CUP100', '1-1/4" COUPLING - CUP125'],
//   },
// ];

// // Plastic Bearings
// const plasticBearings: PartList[] = [
//   {
//     label: "PLASTIC BEARINGS",
//     image: "/images/bearings/plastic.png", // update if needed
//     description: [
//       'PLASTIC BEARING 1" - PBR100',
//       'PLASTIC BEARING 1-1/4" - PBR125',
//     ],
//   },
// ];

// // Steel Bearings
// const steelBearings: PartList[] = [
//   {
//     label: "STEEL BEARINGS",
//     image: "/images/bearings/steel.png", // update if needed
//     description: ['STEEL BEARING 1" - SBR100', 'STEEL BEARING 1-1/4" - SBR125'],
//   },
// ];

// // Collars
// const collarList: PartList[] = [
//   {
//     label: "COLLARS",
//     image: "/images/ShaftStrut/collar.png",
//     description: ['1" COLLAR - COL100', '1-1/4" COLLAR - COL125'],
//   },
// ];

// // Couplings
// const couplingList: PartList[] = [
//   {
//     label: "COUPLINGS",
//     image: "/images/ShaftStrut/coupling.png",
//     description: ['1" COUPLING - CUP100', '1-1/4" COUPLING - CUP125'],
//   },
// ];

export function CollarCoupling() {
  return (
    <>
      <section className="flex">
        <div>
          <Image
            width={150}
            height={150}
            src="/images/jbeb/collar.png"
            alt="Collar"
            className=""
          />
          <h1 className="font-bold text-xl text-red-900 ">COLLARS</h1>
          <ul className="list-disc font-semibold text-[15px] pl-6">
            <li>
              1" COLLOR PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">COL100</span>
            </li>
            <li>
              1-1/4" COLLOR PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">COL125</span>
            </li>
          </ul>
        </div>

        <div>
          <Image
            width={150}
            height={150}
            src="/images/jbeb/coupling.png"
            alt="Coupling"
            className=""
          />
          <h1 className="font-bold text-xl text-red-900 ">COUPLINGS</h1>
          <ul className="list-disc font-semibold text-[15px] pl-6">
            <li>
              1" COUPLING PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">CUP100</span>
            </li>
            <li>
              1-1/4" COUPLING PART:{" "}
              <span className="font-bold text-red-900 text-[16px]">CUP125</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export function Bearings() {
  return (
    <>
      <div>
        <Image
          width={150}
          height={150}
          src="/images/jbeb/bearing.png"
          alt="Center Plate"
          className=""
        />
        <h1 className="font-bold text-xl text-red-900 ">
          STEEL & PLASTIC BEARINGS
        </h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li>
            1" STEEL BEARINGS PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">SBR</span>
          </li>
          <li>
            1" PLASTIC BEARINGS PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">PBR</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export function CenterPlates() {
  return (
    <>
      <div>
        <Image
          width={150}
          height={150}
          src="/images/jbeb/centerplate.png"
          alt="Center Plate"
          className=""
        />
        <h1 className="font-bold text-xl text-red-900 ">CENTER ANCHOR PLATE</h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li>
            6" MINI CENTER ANCHOR PLATE PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">CAP6</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export function EndBearingPlates() {
  return (
    <>
      <div>
        <Image
          width={150}
          height={150}
          src="/images/jbeb/ebp.png"
          alt="End Bearing Plates"
          className=""
        />
        <h1 className="font-bold text-xl text-red-900 ">END BEARING PLATES</h1>
        <ul className="list-disc font-semibold text-[15px] pl-6">
          <li>
            3-3/8" RES, END BEARING PLATE PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">EBR338</span>
          </li>
          <li>
            3-3/8" COMM, END BEARING PLATE PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">EBC338</span>
          </li>
          <li>
            4-3/8" END BEARING PLATE PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">EBC438</span>
          </li>
          <li>
            5" END BEARING PLATE PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">EBC500</span>
          </li>
          <li>
            6" END BEARING PLATE PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">EBC600</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export function SolidTubeBox() {
  return (
    <>
      <div>
        <Image
          src="/images/JBEB/solidshaft.png"
          alt=""
          width={150}
          height={150}
        />
        <h1 className="font-bold text-red-900 text-[18px]">SOLID SHAFTS</h1>
        <ul className="list-disc font-semibold text-[15px]">
          <li>
            1" SOLID SHAFT, 12'6" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">
              SLTB10012
            </span>
          </li>
          <li>
            1" SOLID SHAFT 21'0" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">
              SLTB100219
            </span>
          </li>
          <li>
            1.25" SOLID SHAFT 12'6" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">
              SLTB12512
            </span>
          </li>
          <li>
            1.25" SOLID SHAFT 17'6" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">
              SLTB12517
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export function TubeBox() {
  return (
    <>
      <div>
        <Image
          src="/images/JBEB/tubeshaft.png"
          alt=""
          width={150}
          height={150}
        />
        <h1 className="font-bold text-red-900 text-[18px]">TUBE SHAFTS</h1>
        <ul className="list-disc font-semibold text-[15px]">
          <li>
            1" TUBE SHAFT 8'9" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">TBSH08</span>
          </li>
          <li>
            1" TUBE SHAFT 9'9" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">TBSH09</span>
          </li>
          <li>
            1" TUBE SHAFT 10'9" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">TBSH10</span>
          </li>
          <li>
            1" TUBE SHAFT 12'9" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">TBSH12</span>
          </li>
          <li>
            1" TUBE SHAFT 14'9" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">TBSH14</span>
          </li>
          <li>
            1" TUBE SHAFT 15'9" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">TBSH15</span>
          </li>
          <li>
            1" TUBE SHAFT 16'9" PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">TBSH16</span>
          </li>
          <li>
            1" TUBE SHAFT 16'9" HEAVY PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">TBSH16H</span>
          </li>
          <li>
            1" TUBE SHAFT 18'9" HEAVY PART:{" "}
            <span className="font-bold text-red-900 text-[16px]">TBSH18H</span>
          </li>
        </ul>
      </div>
    </>
  );
}
