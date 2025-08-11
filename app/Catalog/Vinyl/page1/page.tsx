'use client';
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";

type VinylGroup = {
  color: string;
  codes: string[]; 
};

const vinylGroups: VinylGroup[] = [
  { color: "White Vinyl", codes: ["WT-7", "WT-8", "WT-9", "WT-10", "WT-12", "WT-16", "WT-18"] },
  { color: "Almond Vinyl", codes: ["AL-7", "AL-8", "AL-9", "AL-16"] },
  { color: "Brown Vinyl", codes: ["CB-7", "CB-8", "CB-9", "CB-16"] },
  { color: "Sandtone Vinyl", codes: ["ST-7", "ST-8", "ST-9", "ST-16"] },
  { color: "Black Vinyl", codes: ["BK-7", "BK-8", "BK-9", "BK-16", "BK-18"] },
  { color: "Bronze Vinyl", codes: ["BZ-16"] },
  { color: "Gray Vinyl", codes: ["GY-16"] },
  { color: "Charcoal Vinyl", codes: ["CL-16"] },
  { color: "Mocha Brown Vinyl", codes: ["MB-16"] },
  { color: "Desert Tan Vinyl", codes: ["DT-16"] },
  { color: "Hunter Green Vinyl", codes: ["HG-16"] },
  { color: "Cherry Vinyl", codes: ["CC-16"] },
  { color: "Walnut Vinyl", codes: ["WO-16"] },
  { color: "Medium Oak Vinyl", codes: ["MO-16"] },
  { color: "Dark Oak Vinyl", codes: ["DO-16"] },
  { color: "Slate Vinyl", codes: ["SL-16"] },
];

// Collect all sizes across groups:
const allSizes = Array.from(
  new Set(
    vinylGroups.flatMap(group =>
      group.codes.map(code => code.split('-')[1])
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
        <h1 className="font-bold text-3xl text-green-800 p-4">Vinyl Weather Seal</h1>

        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2 text-left flex flex-col">
                <span>Length</span>
                <span className="text-[11px]">(15 pc/box)</span>
              </th>
              {allSizes.map(size => (
                <th key={size} className="px-2 py-2 text-center">{size}'</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vinylGroups.map(({ color, codes }, index) => {
              const rowColor = index % 2 === 0 ? "bg-white" : "bg-gray-200";

              return (
                <tr key={color} className={rowColor}>
                  <td className="px-2 py-2 font-semibold text-blue-800">{color}</td>

                  {allSizes.map(size => {
                    // Find code that matches this size
                    const code = codes.find(c => c.endsWith(`-${size}`));
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
