"use client";
import Image from "next/image";

interface ToolDetail {
  name: string;
  code: string;
}

interface ToolItem {
  label: string;
  image: string;
  description: ToolDetail[];
}

export default function ToolBox({ label, image, description }: ToolItem) {
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: 150, height: 150, position: "relative" }}>
        <Image src={image} alt={label} fill style={{ objectFit: "contain" }} />
      </div>
      {/* list-disc list-inside */}
      <ul className=" mt-3 list-disc list-inside flex flex-col items-center justify-center ">
        {description.map((desc, i) => (
          <li key={desc.code} className="mb-2 font-semibold whitespace-nowrap ">
            <span className="text-[14px] font-gray-500 ">{desc.name}</span>
            <h1 className="ml-6">
              <span className="text-[14px]">PART:</span>
              <span className="text-red-800 text-[16px]"> {desc.code}</span>
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
