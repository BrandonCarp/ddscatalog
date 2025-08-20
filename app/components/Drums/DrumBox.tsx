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
    <div className="flex flex-col w-full p-3  ">
      {" "}
      {/* was text-xs */}
      {/* Image */}
      <div className="flex items-center justify-center">
        <Image
          src={description.image}
          alt={description.label}
          width={150}
          height={100}
          className="object-contain"
        />
      </div>
      {/* Label */}
      <div className=" flex items-center justify-center font-semibold text-gray-600 text-lg text-center">
        {description.label}
      </div>
      {/* Description & Part */}
      <div className="flex flex-col justify-start overflow-hidden">
        <ul className="list-disc list-inside text-gray-700 text-base leading-snug ">
          {description.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <h1 className="font-semibold ">
          <span className="text-gray-700 text-[14px]">Part</span>{" "}
          <span className="text-red-800 text-[16px]">{id}</span>
        </h1>
      </div>
    </div>
  );
}
