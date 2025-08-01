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


export default function LmAccBox({ id, description }: LmBoxProps) {

const midpoint = Math.ceil(description.description.length / 2);



  return (
 <div className="flex flex-col  text-xs ">
      {/* Image */}
      <div className="flex justify-center">
 <Image
        src={description.image}
        alt={description.label}
        width={150}
        height={100}
      />
      </div>
     

      {/* Description */}
      <div className="mt-1 ml-1">
        <ul className="list-disc list-inside text-gray-700 whitespace-pre-line text-[11px]">
          {description.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <h1 className="font-semibold">
          <span className="text-gray-700">PART</span>{' '}
          <span className="text-red-800 ">{id}</span>
        </h1>
        <h2 className="text-gray-600 text-xs">{description.label}</h2>
      </div>
    </div>
  );
}