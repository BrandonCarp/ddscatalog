"use client";
import Image from "next/image";

export type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

export default function ChainBox({ part }: { part: PartItem }) {
  return (
    <div className="flex flex-col w-full p-5 rounded text-xs">
      {/* Image */}
      {part.image && (
        <div className="flex">
          <Image
            src={part.image}
            alt={part.label}
            width={150}
            height={100}
            className="object-contain"
          />
        </div>
      )}

      {/* Label */}
      <div className="flex text-center text-blue-800 font-bold text-2xl">
        {part.label}
      </div>

      {/* Description */}
      <ul className="list-disc list-inside text-gray-800 text-[15px] leading-tight mb-1">
        {part.description.map((line, i) => {
          // Split line at ": Part" so we can style separately
          const [itemText, partText] = line.split(": Part");
          return (
            <li key={i}>
              <span>{itemText}</span>
              {partText && (
                <>
                  <span className="text-[14px] font-semibold"> : Part: </span>
                  <span className="text-[16px] font-semibold">
                    {partText.trim()}
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
