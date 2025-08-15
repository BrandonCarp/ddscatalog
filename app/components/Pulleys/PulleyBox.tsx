"use client";
import Image from "next/image";

type PulleyInfo = {
  label: string;
  image: string;
  title: string;
  description: string[];
};

type PulleyBoxProps = {
  id: string;
  description: PulleyInfo;
};

export default function PulleyBox({ id, description }: PulleyBoxProps) {
  return (
    <div className="flex flex-col items-center justify-between  ">
      <div className=" flex items-center justify-center">
        <Image
          src={description.image}
          alt={description.label}
          width={120}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>

      <ul className="list-disc list-inside text-gray-700   overflow-hidden text-[14px]">
        {description.description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <div className="flex flex-col items-center text-center ">
        <h2 className="text-gray-800 font-semibold">{description.label}</h2>
        <h1 className="font-semibold">
          <span className="text-gray-700 text-[15px]">PART:</span>{" "}
          <span className="text-red-800 text-[17px]">{id}</span>
        </h1>
      </div>
    </div>
  );
}
