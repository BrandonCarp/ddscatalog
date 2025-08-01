'use client';
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";



type VinylInfo = {
  label: string;
  details: string;
};

const VinylList: {
  [color: string]: { [code: string]: VinylInfo };
} = {
  "White Vinyl": {
    "WT-7": { label: "V-WT-7", details: "7' White Vinyl Molding" },
    "WT-8": { label: "V-WT-8", details: "8' White Vinyl Molding" },
    "WT-9": { label: "V-WT-9", details: "9' White Vinyl Molding" },
    "WT-10": { label: "V-WT-10", details: "10' White Vinyl Molding" },
    "WT-12": { label: "V-WT-12", details: "12' White Vinyl Molding" },
    "WT-16": { label: "V-WT-16", details: "16' White Vinyl Molding" },
    "WT-18": { label: "V-WT-18", details: "18' White Vinyl Molding" },
  },
  "Almond Vinyl": {
    "AL-7": { label: "V-AL-7", details: "7' Almond Vinyl Molding" },
    "AL-8": { label: "V-AL-8", details: "8' Almond Vinyl Molding" },
    "AL-9": { label: "V-AL-9", details: "9' Almond Vinyl Molding" },
    "AL-16": { label: "V-AL-16", details: "16' Almond Vinyl Molding" },
  },
  "Brown Vinyl": {
    "CB-7": { label: "V-CB-7", details: "7' Brown Vinyl Molding" },
    "CB-8": { label: "V-CB-8", details: "8' Brown Vinyl Molding" },
    "CB-9": { label: "V-CB-9", details: "9' Brown Vinyl Molding" },
    "CB-16": { label: "V-CB-16", details: "16' Brown Vinyl Molding" },
  },
  "Sandtone Vinyl": {
    "ST-7": { label: "V-ST-7", details: "7' Sandtone Vinyl Molding" },
    "ST-8": { label: "V-ST-8", details: "8' Sandtone Vinyl Molding" },
    "ST-9": { label: "V-ST-9", details: "9' Sandtone Vinyl Molding" },
    "ST-16": { label: "V-ST-16", details: "16' Sandtone Vinyl Molding" },
  },
  "Black Vinyl": {
    "BK-7": { label: "V-BK-7", details: "7' Black Vinyl Molding" },
    "BK-8": { label: "V-BK-8", details: "8' Black Vinyl Molding" },
    "BK-9": { label: "V-BK-9", details: "9' Black Vinyl Molding" },
    "BK-16": { label: "V-BK-16", details: "16' Black Vinyl Molding" },
    "BK-18": { label: "V-BK-18", details: "18' Black Vinyl Molding" },
  },
  "Bronze Vinyl": {
    "BZ-16": { label: "V-BZ-16", details: "16' Bronze Vinyl Molding" },
  },  "Gray Vinyl": {
    "GY-16": { label: "V-GY-16", details: "16' Gray Vinyl Molding" },
  },
  "Charcoal Vinyl": {
    "CL-16": { label: "V-CL-16", details: "16' Charcoal Vinyl Molding" },
  },
  "Mocha Brown Vinyl": {
    "MB-16": { label: "V-MB-16", details: "16' Mocha Brown Vinyl Molding" },
  },
  "Desert Tan Vinyl": {
    "DT-16": { label: "V-DT-16", details: "16' Desert Tan Vinyl Molding" },
  },
  "Hunter Green Vinyl": {
    "HG-16": { label: "V-HG-16", details: "16' Hunter Green Vinyl Molding" },
  },
  "Cherry Vinyl": {
    "CC-16": { label: "V-CC-16", details: "16' Cherry Vinyl Molding" },
  },
  "Walnut Vinyl": {
    "WO-16": { label: "V-WO-16", details: "16' Walnut Vinyl Molding" },
  },
  "Medium Oak Vinyl": {
    "MO-16": { label: "V-MO-16", details: "16' Medium Oak Vinyl Molding" },
  },
  "Dark Oak Vinyl": {
    "DO-16": { label: "V-DO-16", details: "16' Dark Oak Vinyl Molding" },
  },
  "Slate Vinyl": {
    "SL-16": { label: "V-SL-16", details: "16' Slate Vinyl Molding" },
  },}

const allSizes = Array.from(
  new Set(
    Object.values(VinylList).flatMap(group =>
      Object.keys(group).map(code => code.split('-')[1])
    )
  )
).sort((a, b) => parseInt(a) - parseInt(b));

export default function VinylTable() {
  return (
    <CatalogLayout title={"WEATHER\nSEAL"} bgcolor={"bg-green-800"} textcolor={"text-green-800"}>
          <div className="relative w-full h-55 overflow-hidden">
            <Image
              src="/images/Vinyl/house.png"
              alt="Vinyl Hero"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>
          
      <div className="overflow-x-auto mx-10">
        
        <div className="">
<h1 className="font-bold text-3xl text-green-800 p-4">Vinyl Weather Seal</h1>

        </div>
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
   
              <th className="px-2 py-2 text-left flex flex-col"><span>Length</span> <span className="text-[11px]">(15 pc/box)</span></th>
              {allSizes.map(size => (
                <th key={size} className="px-2 py-2 text-center">
                  {size}'
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(VinylList).map(([color, items], index) => {
             
              const rowColor = index % 2 === 0 ? "bg-white" : "bg-gray-200";
              const imageName = color.replace(/\s/g, '').replace("Vinyl", "Vinyl") + ".png";
          

              return (
                <tr key={color} className={rowColor}>
             
                  <td className="px-2 py-2 font-semibold text-blue-800">{color}</td>
                  {allSizes.map(size => {
                    const matchingCode = Object.keys(items).find(code => code.endsWith(`-${size}`));
                    const value = matchingCode ? items[matchingCode].label : "-";
                    return (
                      <td key={size} className="px-2 py-2 text-center">
                        {value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </CatalogLayout>
  );
}
