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
    <div className="flex flex-col  text-[12px]">
<div className="h-[100px] flex items-center justify-center">
<Image
        src={description.image}
        alt={description.label}
        width={150}
        height={100}
      />

</div>
      
      {/* Description */}
      <div className="mt-[10px]">
        <ul className="list-disc list-inside text-gray-700 whitespace-pre">
          {description.description.map((line, i) => (
            <li className="" key={i}>
              {line}
            </li>
          ))}
        </ul>
        <h1 className="font-semibold ">
          <span className="text-gray-700">Part</span>{' '}
          <span className="text-red-800">{id}</span>
        </h1>
        <h2 className="text-gray-600">{description.label}</h2>
      </div>
    </div>
  );
}


