"use client";
import Image from "next/image";

type HingeBoxProps = {
  id: string;
  description: string;
};

export default function HingeBox({ id, description }: HingeBoxProps) {
  return (
    <div className=" leading-tight my-1">
      <h1 className="text-black">{id}</h1>
      <h1 className="font-semibold">
        <span className="text-gray-700 text-[14px]">PART: </span>

        <span className="text-red-800 text-[]">{description}</span>
      </h1>
    </div>
  );
}
