"use client";
import Image from "next/image";
//  {
//     name: "REVERSE JAMB SEAL",
//     image: "",
//     description: [
//       "WHITE REVERSE JAMB SEAL",
//       "BROWN REVERSE JAMB SEAL",
//       "BLACK REVERSE JAMB SEAL",
//     ],
//   },
export default function JambSeal() {
  return (
    <>
      <div className="flex flex-col ">
        <h1 className="text-red-900 font-bold text-[20px] ">JAMB SEAL</h1>

        <ul className="grid grid-cols-3 gap-10 ">
          <li className="list-disc font-semi-bold">
            {/* <Image
              src="/images/Retainer/WTSeal.png"
              alt="Jamb Seal"
              height={180}
              width={180}
            /> */}
            WHITE JAMB SEAL{" "}
            <div className="text-gray-800 font-bold">
              PART: <span className="text-red-900 text-[18px]">JSWT</span>
            </div>
          </li>
          <li className="list-disc font-semi-bold">
            {/* <Image
              src="/images/Retainer/BrownSeal.png"
              alt="Jamb Seal"
              height={180}
              width={180}
            /> */}
            BROWN JAMB SEAL{" "}
            <div className="text-gray-800 font-bold">
              PART: <span className="text-red-900 text-[18px]">JSCB</span>
            </div>
          </li>
          <li className="list-disc font-semi-bold">
            {/* <Image
              src="/images/Retainer/BKSeal.png"
              alt="Jamb Seal"
              height={180}
              width={180}
            /> */}
            BLACK JAMB SEAL{" "}
            <div className="text-gray-700 text-[14px] font-semibold">
              PART:{" "}
              <span className="text-red-900 text-[18px] font-bold">JSBK</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
