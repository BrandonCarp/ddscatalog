"use client";
import Image from "next/image";

type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

export default function DecBox({ part }: { part: PartItem }) {
  return (
    <div className="flex flex-col w-full  items-center ">
      {/* Image */}
      {part.image ? (
        <div className="h-15  w-full flex justify-center items-center my-9 ">
          {" "}
          {part.image && (
            <Image
              src={part.image}
              alt={part.label}
              width={140}
              height={80}
              className="mr-8 "
            />
          )}
        </div>
      ) : (
        ""
      )}

      {/* Description */}
      <ul className="list-disc  ">
        {part.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <li key={i}>
              <div className="text-[14px] leading-tight mr-5">{label} </div>
              <div className="text-gray-800 font-semibold text-[14px] ">
                PART:{" "}
                <span className="text-red-900 text-[16px] font-bold">
                  {code}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
