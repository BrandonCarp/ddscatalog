'use client';
import Image from "next/image";

export type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

export default function FastAngBox({ part }: { part: PartItem }) {
  return (
    <div className="flex flex-col w-full h-[300px] px-3 py-4  items-center">
      
      {/* Image */}
      <div className="h-[100px] w-full flex justify-center items-center">
        {part.image && (
          <Image
            src={part.image}
            alt={part.label}
            width={140}
            height={80}
            className="object-contain"
          />
        )}
      </div>

      {/* Label */}
      <div className="h-[40px] flex items-center justify-center text-center w-full mt-2">
        <span className="font-semibold text-[16px] text-teal-800">{part.label}</span>
      </div>

      {/* Description */}
      <ul className="h-[120px] list-disc list-outside  pl-5  w-full">
        {part.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <li key={i}>
              <div className="text-[16px] leading-tight">{label}</div>
              <div className="text-gray-500 font-semibold">
                <span className="text-[14px]">Part:</span> <span className="text-gray-800 text-[16px]">{code}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
