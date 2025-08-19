"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";

type VinylGroup = {
  color: string;
  codes: string[];
};

const vinylGroups: VinylGroup[] = [
  {
    color: "White Vinyl",
    codes: ["VWH07", "VWH08", "VWH09", "VWH10", "VWH12", "VWH16", "VWH18"],
  },
  { color: "Almond Vinyl", codes: ["VAL07", "VAL08", "VAL09", "VAL16"] },
  { color: "Brown Vinyl", codes: ["VCB07", "VCB08", "VCB09", "VCB16"] },
  { color: "Sandtone Vinyl", codes: ["VST07", "VST08", "VST09", "VST16"] },
  {
    color: "Black Vinyl",
    codes: ["VBK07", "VBK08", "VBK09", "VBK16", "VBK18"],
  },
  { color: "Bronze Vinyl", codes: ["VBZ16"] },
  { color: "Gray Vinyl", codes: ["VGY16"] },
  { color: "Charcoal Vinyl", codes: ["VCL16"] },
  { color: "Mocha Brown Vinyl", codes: ["VMB16"] },
  { color: "Desert Tan Vinyl", codes: ["VDT16"] },
  { color: "Hunter Green Vinyl", codes: ["VHG16"] },
  { color: "Cherry Vinyl", codes: ["VCC16"] },
  { color: "Walnut Vinyl", codes: ["VWO16"] },
  { color: "Medium Oak Vinyl", codes: ["VMO16"] },
  { color: "Dark Oak Vinyl", codes: ["VDO16"] },
  { color: "Slate Vinyl", codes: ["VSL16"] },
];

// Collect all sizes across groups:
const allSizes = Array.from(
  new Set(
    vinylGroups.flatMap((group) =>
      group.codes.map((code) => code.split("-")[1])
    )
  )
).sort((a, b) => parseInt(a) - parseInt(b));

export default function VinylTable() {
  return (
    <CatalogLayout title={"WEATHER\nSEAL"} pagenum="11">
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
        <h1 className="font-bold text-3xl text-green-800 p-4">
          Vinyl Weather Seal
        </h1>

        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2 text-left flex flex-col">
                <span>Length</span>
                <span className="text-[11px]">(15 pc/box)</span>
              </th>
              {allSizes.map((size) => (
                <th key={size} className="px-2 py-2 text-center">
                  {size}'
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vinylGroups.map(({ color, codes }, index) => {
              const rowColor = index % 2 === 0 ? "bg-white" : "bg-gray-200";

              return (
                <tr key={color} className={rowColor}>
                  <td className="px-2 py-2 font-semibold text-blue-800">
                    {color}
                  </td>

                  {allSizes.map((size) => {
                    // Find code that matches this size
                    const code = codes.find((c) => c.endsWith(`-${size}`));
                    const label = code ? `V-${code}` : "-";
                    return (
                      <td key={size} className="px-2 py-2 text-center">
                        {label}
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
