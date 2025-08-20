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
        <div className="h-15  w-full flex justify-center items-center my-10 ">
          {" "}
          {part.image && (
            <Image
              src={part.image}
              alt={part.label}
              width={150}
              height={80}
              className="object-contain"
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
              <div className="text-[13px] leading-tight mr-6">{label} </div>
              <div className="text-gray-500 font-semibold text-[14px] ">
                Part: <span className="text-red-700 text-[15px]">{code}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
