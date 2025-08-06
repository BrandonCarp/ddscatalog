'use client';
import Image from "next/image";

type LmInfo = {
  label: string;
  image: string;
  details: string;
  description: string[];
};

type LmBoxProps = {
  id: string;
  description: LmInfo;
};

export default function LmAccBox({ id, description }: LmBoxProps) {
  return (
    <div className="flex flex-col h-[300px] w-full p-3 border rounded text-xs">
      
      {/* Image */}
      <div className="h-[100px] flex items-center justify-center">
        <Image
          src={description.image}
          alt={description.label}
          width={150}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Label */}
      <div className="h-[40px] flex items-center justify-center font-semibold text-gray-600 text-sm text-center">
        {description.label}
      </div>

      {/* Description */}
      <div className="flex flex-col justify-start overflow-hidden">
        <ul className="list-disc list-inside text-gray-700 text-[11px] leading-tight mb-2 whitespace-pre-line">
          {description.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <h1 className="font-semibold mt-auto">
          <span className="text-gray-700 text-xs">PART</span>{' '}
          <span className="text-red-800 text-sm">{id}</span>
        </h1>
      </div>
    </div>
  );
}
