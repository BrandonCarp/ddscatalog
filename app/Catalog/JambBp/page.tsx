"use client";
import CatalogLayout from "@/components/CatalogLayout";
import Image from "next/image";
import JambBox from "@/components/JambEBP/JambBox";
import CableBox from "@/components/CableBox/CableBox";

interface JambItem {
  label: string;
  image: string;
  description: string[];
}

interface EbpList {
  code: string;
  label: string;
  image: string;
  description: string[];
}

const JambList: JambItem[] = [
  {
    label: "JAMB BRACKETS",
    image: "/images/jbeb/jb1.png",
    description: Array.from(
      { length: 12 },
      (_, i) => `#${i + 1} JAMB BRACKET - JAM${i + 1}` // <-- backticks here
    ),
  },
];

const EbpList: EbpList[] = [
  {
    code: "EP-*",
    label: "END BEARING PLATES",
    image: "/images/jbeb/ebp.png",
    description: [
      '3-3/8" RES, END BEARING PLATE - EBR338',
      '3-3/8" COMM, END BEARING PLATE - EBC338',
      '4-3/8" END BEARING PLATE - EBC438',
      '5" END BEARING PLATE - EBC500',
      '6" END BEARING PLATE - EBC600',
    ],
  },
];

const SpList: EbpList[] = [
  {
    code: "PDB-*",
    label: "PUSH DOWN DOOR BUMPERS",
    image: "/images/cables/pusher.png",
    description: [
      'PUSH DOWN DOOR BUMPERS, 15", 2PCS - PDB15',
      'PUSH DOWN DOOR BUMPERS, 27", 2PCS - PDB27',
    ],
  },
  {
    code: "USB-*",
    label: "U-STYLE DOOR BUMPERS",
    image: "/images/cables/ubumper.png",
    description: ["U-STYLE DOOR BUMPERS, 2PCS - LEAF2"],
  },
];

{
  /* Spring Pusher Items */
}
{
  /* {Object.entries(SpList).map(([key, value]) => (
              <CableBox key={key} part={value} />
            ))} */
}

export default function JambBp() {
  return (
    <CatalogLayout title={`JAMB BRACKETS \n END BEARING PLATES `} pagenum="27">
      <div className="m-5">
        <h1 className="font-black text-[28px] text-red-900 ">
          JAMB BRACKETS, END BEARING PLATES
        </h1>

        <div className="flex mx-6">
          {/* Jamb Brackets */}
          <div className="flex-1 max-w-sm">
            {JambList.map((item, index) => (
              <JambBox
                key={index}
                label={item.label}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>

          {/* End Bearing Plates */}
          <div className="flex-1 max-w-sm">
            {EbpList.map((item, index) => (
              <JambBox
                key={index}
                label={item.label}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>

          {/* ARB Bracket */}
          <div className="flex-1 max-w-sm text-center">
            {/* <h1 className="font-bold text-lg text-gray-700 mb-2">
              ARB BRACKET
            </h1> */}
            <Image
              src="/images/HingeArbOrb/ARB.png"
              alt="arb bracket"
              height={175}
              width={175}
              className="mx-auto"
            />
            <h1 className="pt-5">ARB BRACKET</h1>
            <h2>
              <span className="text-[14px]">PART: </span>{" "}
              <span className="text-[16px] font-semibold text-red-900">
                ARB
              </span>
            </h2>
          </div>
        </div>
        {/* Push Down Bumpers */}
        {/* <div className="flex ">
          {Object.entries(SpList).map(([key, value]) => (
            <CableBox key={key} part={value} />
          ))}
        </div> */}
      </div>
    </CatalogLayout>
  );
}
