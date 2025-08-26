"use client";
import Image from "next/image";

type LmInfo = {
  label: string;
  image: string;
  details: string;
  description: string[];
};

type LmBoxProps = {
  id: string;
  description: LmInfo;
};

export default function LMBox({ id, description }: LmBoxProps) {
  return (
    <div className="flex flex-col items-center text-xs ">
      {/* Image with spacing */}
      <div className="flex items-center justify-center   ">
        <Image
          src={description.image}
          alt={description.label}
          width={110}
          height={60}
          className=""
        />
      </div>

      {/* Description */}
      <ul className="list-disc list-inside text-gray-700 text-[13px]  leading-tight whitespace-nowrap ">
        {description.description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      {/* Details */}
      <p className="text-gray-500 text-[12px]  leading-tight  ">
        {description.details}
      </p>

      {/* Part Label */}
      <div className=" ">
        <h1 className="font-semibold  ">
          <span className="text-gray-700 text-[14px]">PART: </span>{" "}
          <span className="text-red-800 text-[16px]"> {id}</span>
        </h1>
        {/* <h2 className="text-gray-600 text-[11px]">{description.label}</h2> */}
      </div>
    </div>
  );
}
