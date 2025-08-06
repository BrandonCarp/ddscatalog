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
    <div className="flex flex-col h-[300px] w-full p-3 border rounded text-xs">
      
      {/* Image area */}
      <div className="h-[100px] flex items-center justify-center">
        {part.image && (
          <Image
            src={part.image}
            alt={part.label}
            width={150}
            height={100}
            className="object-contain"
          />
        )}
      </div>

      {/* Label */}
      <div className="h-[40px] flex items-center justify-center text-center text-blue-800 font-bold text-lg">
        {part.label}
      </div>

      {/* Description + Part code */}
      <div className="flex flex-col justify-start overflow-hidden">
        <ul className="list-disc list-inside text-gray-800 text-[11px] leading-tight mb-2">
          {part.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <div className="font-semibold text-gray-700 mt-auto">
          <span className="text-gray-500 text-xs">Part:</span>{' '}
          <span className="text-sm">{part.code}</span>
        </div>
      </div>
    </div>
  );
}
