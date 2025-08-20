"use client";
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
    <div className="flex w-full first:border-t-0 border-t border-gray-300 p-2 ">
      <div className="flex items-start justify-center mr-6">
        <Image
          src={description.image}
          alt={description.label}
          width={220}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col justify-between w-full pr-3">
        <div>
          <h1 className="text-red-800 font-semibold text-3xl">{id}</h1>
          <h2 className="text-gray-800 font-semibold text-lg whitespace-pre ">
            {description.details}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 mt-2 text-gray-700">
          <ul className="list-disc list-inside whitespace-nowrap text-[13px]">
            {firstHalf.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <ul className="list-disc list-inside whitespace-pre-wrap text-[14px]">
            {secondHalf.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
            <li className="list-none mt-2 space-x-4 flex text-blue-700 text-[14px]">
              {description.wifi && <span>WiFi</span>}
              {description.myQ && <span>myQ</span>}
              {description.amazonKey && <span>Amazon Key</span>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
