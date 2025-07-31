'use client';
import Image from "next/image";


type LmInfo
 = {
  label: string;
  image: string;
  details: string;
  description: string[];
 
};

type LmBoxProps = {
  id: string;
  description: LmInfo
  ;
};


export default function LMBox({ id, description }: LmBoxProps) {

const midpoint = Math.ceil(description.description.length / 2);
const firstHalf = description.description.slice(0, midpoint);
const secondHalf = description.description.slice(midpoint);



  return (
 <div className="flex  p-1   text-[12px]">
      {/* Image */}
      <Image
        src={description.image}
        alt={description.label}
        width={110}
        height={120}
      />

      {/* Description */}
      <div className="mt-1 ml-1">
        <ul className="list-disc list-inside text-gray-700 whitespace-pre-line">
          {description.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <h1 className="font-semibold">
          <span className="text-gray-700">PART</span>{' '}
          <span className="text-red-800 ">{id}</span>
        </h1>
        <h2 className="text-gray-600">{description.label}</h2>
      </div>
    </div>
  );
}


