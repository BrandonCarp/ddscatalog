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
    vinylGroups.flatMap((group) => group.codes.map((code) => code.slice(-2)))
  )
).sort((a, b) => parseInt(a) - parseInt(b));

// Helper function to map color names to hex
function getColorHex(color: string) {
  switch (color) {
    case "White Vinyl":
      return "#FFFFFF";
    case "Almond Vinyl":
      return "#EFDECD";
    case "Brown Vinyl":
      return "#8B4513";
    case "Sandtone Vinyl":
      return "#D2B48C";
    case "Black Vinyl":
      return "#000000";
    case "Bronze Vinyl":
      return "#CD7F32";
    case "Gray Vinyl":
      return "#808080";
    case "Charcoal Vinyl":
      return "#36454F";
    case "Mocha Brown Vinyl":
      return "#654321";
    case "Desert Tan Vinyl":
      return "#EDC9AF";
    case "Hunter Green Vinyl":
      return "#355E3B";
    case "Cherry Vinyl":
      return "#D2042D";
    case "Walnut Vinyl":
      return "#773F1A";
    case "Medium Oak Vinyl":
      return "#C68642";
    case "Dark Oak Vinyl":
      return "#8B4513";
    case "Slate Vinyl":
      return "#708090";
    default:
      return "#CCCCCC"; // fallback
  }
}

export default function VinylTable() {
  return (
    <CatalogLayout title={"WEATHER\nSEAL"} pagenum="21">
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
        <h1 className="font-bold text-3xl text-red-700 p-4">
          VINYL WEATHER SEAL IN STOCK
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
                  {/* Color cell with small block */}
                  <td className="px-2 py-2 font-semibold text-gray-700 flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded-sm border border-gray-400"
                      style={{ backgroundColor: getColorHex(color) }}
                    />
                    <span>{color}</span>
                  </td>

                  {/* Sizes */}
                  {allSizes.map((size) => {
                    const code = codes.find((c) => c.endsWith(size));
                    const label = code ? `${code}` : "-";
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
