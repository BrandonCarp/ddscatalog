"use client";
import Image from "next/image";

type DrumInfo = {
  label: string;
  image: string;
  description: string[];
};

type ItemBoxProps = {
  id: string;
  description: DrumInfo;
};

export default function ItemBox({ id, description }: ItemBoxProps) {
  return (
    <div className="flex flex-col w-full p-2 max-h-[300px]">
      {/* Image */}
      <div className="flex ">
        <Image
          src={description.image}
          alt={description.label}
          width={125}
          height={85}
          className="object-contain ml-5"
        />
      </div>

      {/* Label */}
      <div className=" font-semibold text-gray-800 text-[16px] leading-tight">
        {description.label}
      </div>

      {/* Description */}
      <div className="flex flex-col justify-start overflow-hidden text-[14px] leading-snug">
        <ul className="list-disc list-inside text-gray-700 space-y-[1px]">
          {description.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <h1 className="font-semibold mt-1">
          <span className="font-semibold text-gray-800 text-[14px]">
            PART:{" "}
          </span>
          <span className="font-bold text-red-800 text-[16px]"> {id}</span>
        </h1>
      </div>
    </div>
  );
}
