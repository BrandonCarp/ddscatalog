'use client';
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
      {part.image ? <div className="h-[100px] w-full flex justify-center items-center my-5 mb-10"> {part.image && (
          <Image
            src={part.image}
            alt={part.label}
            width={150}
            height={80}
            className="object-contain"
          />
        )}
      </div> : ""}
     

      {/* Label */}
      {/* <div className="mt-5 text-center font-semibold text-[16px] text-teal-800">
        {part.label}
      </div>

      {/* Description */}
      <ul className="mt-2 list-disc text-xs pl-5 w-full">
        {part.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <li key={i}>
             
              <div className="text-[13px] leading-tight">{label} </div>
              <div className="text-gray-500 font-semibold">
                Part: <span className="text-gray-800 text-[14px]">{code}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

