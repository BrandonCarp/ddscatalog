'use client';
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
      {part.image ? <div className="h-15  w-full flex justify-center items-center my-10 "> {part.image && (
          <Image
            src={part.image}
            alt={part.label}
            width={150}
            height={80}
            className="object-contain"
          />
        )}
      </div> : ""}
        

      {/* Description */}
      <ul className="list-disc  ">
        {part.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <li key={i}>
             
              <div className="text-[13px] leading-tight mr-6">{label} </div>
              <div className="text-gray-500 font-semibold text-[13px] ">
                Part: <span className="text-gray-800 text-[14px]">{code}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}