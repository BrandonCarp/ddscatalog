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
      <div className="flex flex-col mt-5">
        <h1 className="text-red-800 font-semibold text-[18px]">JAMB SEAL</h1>

        <ul className="grid grid-cols-3 gap-10 ">
          <li className="list-disc font-semi-bold">
            <Image
              src="/images/Retainer/WTSeal.png"
              alt="Jamb Seal"
              height={180}
              width={180}
            />
            WHITE JAMB SEAL{" "}
            <div className="text-gray-800 font-semibold">
              PART: <span className="text-red-800 text-[16px]">JSWT</span>
            </div>
          </li>
          <li className="list-disc font-semi-bold">
            <Image
              src="/images/Retainer/BrownSeal.png"
              alt="Jamb Seal"
              height={180}
              width={180}
            />
            BROWN JAMB SEAL{" "}
            <div className="text-gray-800 font-semibold">
              PART: <span className="text-red-800 text-[16px]">JSCB</span>
            </div>
          </li>
          <li className="list-disc font-semi-bold">
            <Image
              src="/images/Retainer/BKSeal.png"
              alt="Jamb Seal"
              height={180}
              width={180}
            />
            BLACK JAMB SEAL{" "}
            <div className="text-gray-800 text-[15px] font-semibold">
              PART:{" "}
              <span className="text-red-800 text-[16px] font-semibold">
                JSBK
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
