"use client";
import Image from "next/image";

export type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

export default function ChainBox({ part }: { part: PartItem }) {
  return (
    <div className="flex flex-col  w-full p-5  rounded text-xs">
      {/* Image area */}
      <div className="flex ">
        {part.image && (
          <Image
            src={part.image}
            alt={part.label}
            width={150}
            height={100}
            className="object-contain"
          />
        )}
      </div>

      {/* Label */}
      <div className=" flex  text-center text-blue-800 font-bold text-lg ">
        {part.label}
      </div>

      {/* Description + Part code */}
      <div className="flex flex-col justify-start overflow-hidden">
        <ul className="list-disc list-inside text-gray-800 text-[14px] leading-tight mb-1">
          {part.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <div className="font-semibold text-gray-700 ">
          <span className="text-gray-500 text-[16px]">Part:</span>{" "}
          <span className="text-sm">{part.code}</span>
        </div>
      </div>
    </div>
  );
}
