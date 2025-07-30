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
    <div className="flex flex-col text-[12px]">
      {/* Image */}
      <Image
        src={description.image}
        alt={description.label}
        width={120}
        height={100}
      />

      {/* Description */}
      <div className="mt-1 ">
        <ul className="list-disc list-inside text-gray-700 whitespace-pre-line">
          {description.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <h1 className="font-semibold">
          <span className="text-gray-700">Part</span>{' '}
          <span className="text-red-800">{id}</span>
        </h1>
        <h2 className="text-gray-600">{description.label}</h2>
      </div>
    </div>
  );
}
