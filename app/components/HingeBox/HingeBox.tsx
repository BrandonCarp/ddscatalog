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

export default function HingeBox({ id, description }: LmBoxProps) {
  return (
    <div className="flex flex-col items-center justify-between text-xs w-[240px] h-[320px] p-3 border">
      <div className="h-[110px] flex items-center justify-center">
        <Image
          src={description.image}
          alt={description.label}
          width={120}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>

      <ul className="list-disc list-inside text-gray-700 text-[11px] h-[120px] overflow-hidden">
        {description.description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <div className="flex flex-col items-center text-center mt-2">
        <h1 className="font-semibold">
          <span className="text-gray-700">PART</span>{' '}
          <span className="text-red-800">{id}</span>
        </h1>
        <h2 className="text-gray-600 text-xs">{description.label}</h2>
      </div>
    </div>
  );
}
