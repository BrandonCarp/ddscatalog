'use client';
import Image from "next/image";

type PulleyInfo = {
  label: string;
  image: string;
  title: string;
  description: string[];
};

type PulleyBoxProps = {
  id: string;
  description: PulleyInfo;
};

export default function PulleyBox({ id, description }: PulleyBoxProps) {
  return (
    <div className="flex flex-col items-center justify-between w-[240px] h-[320px] p-3 border text-[12px]">
      <div className="h-[110px] flex items-center justify-center">
        <Image
          src={description.image}
          alt={description.label}
          width={120}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>

      <ul className="list-disc list-inside text-gray-700 h-[120px] overflow-hidden">
        {description.description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <div className="flex flex-col items-center text-center mt-2">
        <h1 className="font-semibold">
          <span className="text-gray-700">PART</span>{' '}
          <span className="text-red-800">{id}</span>
        </h1>
        <h2 className="text-gray-600">{description.label}</h2>
      </div>
    </div>
  );
}
