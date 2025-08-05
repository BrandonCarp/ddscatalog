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
    <div className="flex flex-col items-center w-full min-h-[280px] px-2 py-4 ">
      {part.image && (
        <div className="flex flex-col justify-center items-center text-center mb-2">
          <Image
            src={part.image}
            alt={part.label}
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
            className="pt-2"
          />
          <div className="font-semibold text-xl mt-4 text-teal-800">{part.label}</div>
        </div>
      )}

      <ul className="list-disc list-outside text-xs w-full pl-5 space-y-2">
        {part.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <li key={i}>
              <div className="text-[12px]">{label}</div>
              <div className="text-gray-500 font-semibold ml-2">
                Part: <span className="text-gray-800 text-[13px]">{code}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
