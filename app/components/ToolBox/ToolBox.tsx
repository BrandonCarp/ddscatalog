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
    <div className="">
      <div style={{ width: 140, height: 140, position: "relative" }}>
        <Image src={image} alt={label} fill style={{ objectFit: "contain" }} />
      </div>

      <ul className="list-disc list-inside mt-3 font-semibold">
        {description.map((desc, i) => (
          <>
            <li key={i}>
              <span>{desc.name}</span>
            </li>
            <h1 className="ml-6 ">
              <span className="text-[14px]">PART:</span>
              <span className="text-red-800 text-[16px]"> {desc.code}</span>
            </h1>
          </>
        ))}
      </ul>
    </div>
  );
}
