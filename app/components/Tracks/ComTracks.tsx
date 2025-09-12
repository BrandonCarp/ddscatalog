"use client";
import Image from "next/image";

interface EbpList {
  code: string;
  label: string;
  image: string;
  description: string[];
}

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
// Push Down Bumpers

export default function ComTrack() {
  return (
    <>
      <section className="flex  flex-col space-y-3  ">
        <h1 className=" text-5xl text-gray-800 font-black flex flex-col">
          COMMERCIAL TRACK{" "}
          <span className="text-[24px] font-bold mt-2 mb-1">
            {" "}
            - 2", ANGLE MOUNT TO WOOD OR STEEL
          </span>
        </h1>
        <div className="flex flex-col space-y-5 font-bold text-[22px] text-gray-700">
          <dl className="[&>dd]:border-b [&>dd]:pb-2 [&>dd]:mb-2">
            <dd>8FT - 15R, FULL VERTICAL LIFT, LOW HEADROOM</dd>
            <dd>10FT - 12R, 15R, FULL VERTICAL LIFT, LOW HEADROOM</dd>
            <dd>12FT - 15R, FULL VERTICAL LIFT</dd>
            <dd>14FT - 15R, FULL VERTICAL LIFT</dd>
            <dd>16FT - 15R, FULL VERTICAL LIFT</dd>
          </dl>
        </div>
      </section>
    </>
  );
}
{
  /* <div className="flex ">
  {Object.entries(SpList).map(([key, value]) => (
    <CableBox key={key} part={value} />
  ))}
</div>; */
}
