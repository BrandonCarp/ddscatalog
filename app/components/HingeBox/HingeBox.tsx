"use client";
import Image from "next/image";

type HingeBoxProps = {
  id: string;
  description: string;
};

export default function HingeBox({ id, description }: HingeBoxProps) {
  return (
    <div className=" leading-tight mt-2">
      <h1>{id}</h1>
      <h1 className="font-semibold">
        <span className="text-gray-700 text-[14px]">PART: </span>

        <span className="text-red-800">{description}</span>
      </h1>
      {/* <h2 className="text-gray-600 text-xs">{descriptio}</h2> */}
    </div>
  );
}
