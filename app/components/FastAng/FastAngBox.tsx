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
      <div className="w-full flex justify-center items-center h-[120px] mr-10">
        {part.image && (
          <Image
            src={part.image}
            alt={part.label}
            width={100}
            height={100}
            className="object-contain"
          />
        )}
      </div>

      {/* Info Box  */}
      <div className="">
        {/* Label */}
        <div className=" flex items-center   w-full ">
          <span className="font-semibold text-[18px] text-slate-800">
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
                <div className="text-gray-800 font-semibold">
                  <span className="text-[14px]">PART:</span>{" "}
                  <span className="text-red-900 text-[16px] font-bold">
                    {code}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
