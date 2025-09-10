"use client";
import Image from "next/image";

type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

export default function CableBox({ part }: { part: PartItem }) {
  return (
    <div className="flex flex-col w-full  items-center ">
      {/* Image */}
      {part.image ? (
        <div className=" w-full flex justify-center items-center  mt-1 ">
          {" "}
          {part.image && (
            <Image
              src={part.image}
              alt={part.label}
              width={100}
              height={80}
              className="object-contain"
            />
          )}
        </div>
      ) : (
        ""
      )}

      {/* Description */}
      <ul className="list-disc mt-1 ">
        {part.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <li key={i}>
              <div className="text-[14px] leading-tight mr-6">{label} </div>
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
