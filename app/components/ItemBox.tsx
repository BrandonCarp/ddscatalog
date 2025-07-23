'use client';
import Image from "next/image";

type DrumInfo = {
  label: string;
  image: string;
  description: string[];
};

type ItemBoxProps = {
  id: string;
  description: DrumInfo;
};

export default function ItemBox({ id, description }: ItemBoxProps) {
  return (
    <div className="flex flex-col justify-center items-center  bg-white py-3 ">
      <Image
        src={description.image}
        alt={description.label}
        width={150}
        height={100}
        className="object-contain"
      />

      {/* Description */}
      <div className="flex flex-col items-center justify-center text-center  pt-1 px-1 text-sm">
        <h1 className="font-semibold">{id}</h1>
        <h2 className="text-gray-600">{description.label}</h2>
        <ul className="list-disc list-inside text-sm text-gray-600  whitespace-pre">
  {description.description.map((line, i) => (
    <li key={i}>{line}</li>
  ))}
</ul>
      </div>
    </div>
  );
}
