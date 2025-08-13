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

export default function LMBox({ id, description }: LmBoxProps) {
  return (
    <div className="flex flex-col items-center text-xs w-[180px] h-[220px]">
      
      {/* Image with spacing */}
      <div className="flex items-center justify-center h-[60px] mb-2">
        <Image
          src={description.image}
          alt={description.label}
          width={120}
          height={60}
          style={{ objectFit: "contain" }}
          className="my-10"
        />
      </div>

      {/* Description */}
      <ul className="list-disc list-inside text-gray-700 text-[12px] leading-tight mb-1 line-clamp-2 mt-5">
        {description.description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      {/* Details */}
      <p className="text-gray-500 text-[11px] text-center leading-tight  line-clamp-2">
        {description.details}
      </p>

      {/* Part Label */}
      <div className="text-center">
        <h1 className="font-semibold text-[12px] mb-0.5">
          <span className="text-gray-700">PART</span>{' '}
          <span className="text-red-800">{id}</span>
        </h1>
        <h2 className="text-gray-600 text-[11px]">{description.label}</h2>
      </div>
    </div>
  );
}
