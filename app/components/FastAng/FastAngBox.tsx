"use client";
import Image from "next/image";

export type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

export default function FastAngBox({ part }: { part: PartItem }) {
  return (
    <div className=" flex flex-col w-full  px-3   items-center">
      {/* Image */}
      <div className="w-full flex justify-center items-center">
        {part.image && (
          <Image
            src={part.image}
            alt={part.label}
            width={120}
            height={80}
            className="object-contain py-2 mr-15"
          />
        )}
      </div>

      {/* Label */}
      <div className=" flex items-center   w-full ">
        <span className="font-semibold text-[16px] text-red-700">
          {part.label}
        </span>
      </div>

      {/* Description */}
      <ul className=" list-disc list-outside    w-full">
        {part.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <li key={i}>
              <div className="text-[16px] leading-tight">{label}</div>
              <div className="text-gray-500 font-semibold">
                <span className="text-[14px]">Part:</span>{" "}
                <span className="text-gray-800 text-[16px]">{code}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
