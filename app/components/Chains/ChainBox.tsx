'use client';
import Image from "next/image";

export type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

export default function ChainBox({ part }: { part: PartItem }) {
  return (
    <div className="flex flex-col justify-center items-center  break-inside-avoid  p-5">
      {part.image && (
        <div className="flex flex-col justify-center text-center items-center mb-2">
          <Image
            src={part.image}
            alt={part.label}
            width={185}
            height={100}
            style={{ objectFit: 'contain' }}
          />
          <div className="flex  font-bold text-2xl  mt-1 text-blue-800 ">{part.label}</div>
        </div>
      )}

      <ul className="list-disc list-inside text-gray-800 text-xs ">
        {part.description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <div className=" font-semibold text-gray-700 ">
        <span className="text-gray-500 text-xs">Part:</span>{' '}
        <span className="text-sm">{part.code}</span>
      </div>
      {}
    </div>
  );
}
