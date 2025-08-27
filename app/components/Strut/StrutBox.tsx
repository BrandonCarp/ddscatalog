"use client";
import Image from "next/image";

export type PartItem = {
  code: string;
  label: string;
  feature?: string;
  image?: string;
  description: string[];
};

export default function StrutBox({ part }: { part: PartItem }) {
  return (
    <div className="flex flex-col w-full  aaa items-center ">
      {/* Image */}
      {part.image ? (
        <div className=" w-full flex justify-center items-center my-2 ">
          {" "}
          {part.image && (
            <Image
              src={part.image}
              alt={part.label}
              width={120}
              height={80}
              className="object-contain"
            />
          )}
        </div>
      ) : (
        ""
      )}

      {/* Description */}
      <ul className="mt-2 list-disc text-[15px] pl-4 w-full">
        {part.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <li key={i}>
              <div className="text-[15px] leading-tight whitespace-nowrap">
                {label}{" "}
              </div>
              <div className="text-gray-500 font-semibold">
                <span className="text-[14px]">PART: </span>
                <span className="text-red-800 text-[16px]">{code}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
