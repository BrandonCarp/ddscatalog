'use client';
import Image from "next/image";

type RollerInfo = {
  label: string;
  title: string;
  image: string;
  description: string[];
};

type ItemBoxProps = {
  id: string;
  description: RollerInfo;
};


export default function RollerBox({ id, description }: ItemBoxProps) {
  return (
    <div className="flex flex-col mt-5 ">
<div className="h-[100px] flex items-center justify-center ">
<Image
        src={description.image}
        alt={description.label}
        width={150}
        height={100}
      />

</div>
      <h1 className=" text-2xl text-red-800 absolute mt-25 font-bold">{description.title}</h1>
      {/* Description */}
      <div className="mt-10 text-[12px]  ">
        <ul className="list-disc list-inside text-gray-700  whitespace-pre ">
          {description.description.map((line, i) => (
            <li className="" key={i}>
              {line}
            </li>
          ))}
        </ul>
        
        <h1 className="font-semibold flex flex-col">
          <span className="text-red-800">{id}</span>
          <span className="text-gray-700">Part: {description.label}</span>
          
        </h1>
       
      </div>
    </div>
  );
}


