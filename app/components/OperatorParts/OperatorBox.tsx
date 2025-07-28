'use client';
import Image from "next/image";


type OperatorInfo = {
  label: string;
  image: string;
  details: string;
  description: string[];
  wifi: string;
  myQ: string;
  amazonKey: string;
};

type OperatorBoxProps = {
  id: string;
  description: OperatorInfo;
};


export default function OperatorBox({ id, description }: OperatorBoxProps) {

const midpoint = Math.ceil(description.description.length / 2);
const firstHalf = description.description.slice(0, midpoint);
const secondHalf = description.description.slice(midpoint);



  return (
    <div className="flex  items-center justify-center text-[12px] border-t first:border-none border-gray-300 p-5 ">
<div className="flex items-center justify-center mr-5">
<Image
        src={description.image}
        alt={description.label}
        width={220}
        height={100}
        
      />

</div>
      
      {/* Description */}
      <div className="">
        <h1 className="text-red-800 font-semibold text-4xl">{id}</h1>
        <h2 className="text-gray-800 font-semibold text-xl whitespace-pre">{description.details}</h2>
       <div className="grid grid-cols-2   ">
  <ul className="list-disc list-inside text-gray-700 whitespace-pre">
    {firstHalf.map((line, i) => (
      <li key={i} className="">{line}</li>
    ))}
  </ul>
  <ul className="list-disc list-inside text-gray-700 whitespace-pre">
    {secondHalf.map((line, i) => (
      <li key={i + midpoint}>{line}</li>
    ))}
    <ul className="flex  space-x-5 list-disc list-inside text-gray-700 whitespace-pre">
          {description.wifi ? <li>Wifi</li> : ""}
          {description.myQ ? <li>myQ</li> : ""}
          {description.amazonKey ? <li>Amazon Key</li> : ""}
        </ul>
  </ul>
</div>
      </div>
    </div>
  );
}


