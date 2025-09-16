"use client";
import Image from "next/image";

type HingeBoxProps = {
  id: string;
  description: string;
};

export default function HingeBox({ id, description }: HingeBoxProps) {
  return (
    <div className=" leading-tight my-1 font-semibold text-[15px]">
      <ul className="list-disc">
        <li>{id}</li>
      </ul>
      <h1 className="font-semibold">
        <span className="text-gray-900 text-[15px] font-semibold">PART: </span>

        <span className="text-red-900 text-[16px] font-bold">
          {description}
        </span>
      </h1>
    </div>
  );
}
