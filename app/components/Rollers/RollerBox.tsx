"use client";
import Image from "next/image";

type RollerInfo = {
  label: string;
  title: string;
  image: string;
  description: string[];
};

type ItemBoxProps = {
  id: string;
  description: RollerInfo;
};

export default function RollerBox({ id, description }: ItemBoxProps) {
  return (
    <div className="flex flex-col  ">
      <div className=" flex items-center justify-center  ml-2">
        <Image
          src={description.image}
          alt={description.label}
          width={120}
          height={120}
        />
      </div>
      <h1 className=" text-2xl text-gray-800  font-bold">
        {description.title}
      </h1>
      {/* Description */}
      <div className=" text-[14px]  ">
        <ul className="list-disc list-inside text-gray-700  whitespace-pre ">
          {description.description.map((line, i) => (
            <li className="" key={i}>
              {line}
            </li>
          ))}
        </ul>

        <h1 className="font-semibold flex flex-col">
          <span className="text-gray-700">{id}</span>
          <span className="text-gray-700 text-[14px] font-semibold">
            PART:{" "}
            <span className="text-red-900 text-[16px] font-bold">
              {description.label}
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}
