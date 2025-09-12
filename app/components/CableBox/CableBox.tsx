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
        <div className=" w-full flex justify-center items-center  ">
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
      <ul className="list-disc ">
        {part.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <li key={i} className="">
              <div className="text-[15px]  mr-5">{label} </div>
              <div className=" font-semibold text-[15px] ">
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
