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

export default function LmAccBox({ id, description }: LmBoxProps) {
  return (
    <div className="flex flex-col  w-full  ">
      {/* Image */}
      <div className=" flex items-center justify-center">
        <Image
          src={description.image}
          alt={description.label}
          width={120}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Label */}
      <div className=" flex items-center justify-center font-semibold text-gray-900 text-[16px] text-center">
        {description.label}
      </div>

      {/* Description */}
      <div className="flex flex-col justify-start overflow-hidden">
        <ul className="list-disc list-inside text-gray-900 text-[14px] leading-tight mb-1 whitespace-pre-line font-semibold">
          {description.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <h1 className="font-semibold">
          <span className="text-gray-900 text-[15px] ">PART:</span>{" "}
          <span className="text-red-900  font-bold text-[16px]">{id}</span>
        </h1>
      </div>
    </div>
  );
}
