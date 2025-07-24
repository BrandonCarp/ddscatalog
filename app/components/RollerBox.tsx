'use client';
import Image from "next/image";

type RollerInfo = {
  label: string;
  image: string;
  description: string[];
};

type ItemBoxProps = {
  id: string;
  description: RollerInfo;
};


export default function RollerBox({ id, description }: ItemBoxProps) {
  return (
    <div className="flex flex-col mt-5">
<div className="h-[100px] flex items-center justify-center">
<Image
        src={description.image}
        alt={description.label}
        width={150}
        height={100}
      />

</div>
      
      {/* Description */}
      <div className="mt-5">
        <ul className="list-disc list-inside text-gray-700 whitespace-pre">
          {description.description.map((line, i) => (
            <li className="" key={i}>
              {line}
            </li>
          ))}
        </ul>
        <h1 className="font-semibold flex flex-col">
          <span className="text-red-800">{id}</span>
           <span className="text-gray-600">{description.label}</span>
          <span className="text-gray-700">Part</span>{}
          
        </h1>
       
      </div>
    </div>
  );
}


