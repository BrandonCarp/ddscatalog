"use client";
import CatalogLayout from "@/components/CatalogLayout";
import ToolBox from "@/components/ToolBox/ToolBox";

interface ToolDetail {
  name: string;
  code: string;
}

interface ToolItem {
  label: string;
  image: string;
  description: ToolDetail[];
}

const toolList: ToolItem[] = [
  {
    label: "SPRING WIRE PACKET GAUGE",
    image: "/images/tools/wiregauge.jpg",
    description: [{ name: "SPRING WIRE PACKET GAUGE", code: "SWPG" }],
  },
  {
    label: "SPRING WIRE RULER",
    image: "/images/tools/wireruler.jpg",
    description: [{ name: "SPRING WIRE RULER", code: "SWR" }],
  },
  {
    label: "STANLEY STAPLES 9/16",
    image: "/images/tools/staples.png",
    description: [{ name: "STANLEY STAPLES 9/16", code: "SS916" }],
  },
  {
    label: "RONAN MULTICUT",
    image: "/images/tools/ronanmulti.jpg",
    description: [{ name: "RONAN MULTICUT", code: "RMULTI" }],
  },
  {
    label: "SPRAY LUBE",
    image: "/images/tools/spraylube.avif",
    description: [{ name: "SPRAY LUBE", code: "SLUBE" }],
  },
  {
    label: "WINDING BARS",
    image: "/images/tools/windingbar.jpg",
    description: [
      { name: '18" WINDING BAR', code: "WB18" },
      { name: '24" WINDING BAR', code: "WB24" },
      { name: '36" WINDING BAR', code: "WB36" },
    ],
  },
  {
    label: "RED SPRING BLOCK",
    image: "/images/tools/redblock.jpg",
    description: [{ name: "RED SPRING BLOCK", code: "REDSB" }],
  },
  {
    label: "BLUE SPRING BLOCK",
    image: "/images/tools/blueblock.jpg",
    description: [{ name: "BLUE SPRING BLOCK", code: "BLUSB" }],
  },
  {
    label: "YELLOW SPRING BLOCK",
    image: "/images/tools/yllwblock.jpg",
    description: [{ name: "YELLOW SPRING BLOCK", code: "YELSB" }],
  },
];

export default function Tools() {
  return (
    <>
      <CatalogLayout pagenum="30" title="TOOLS" reverseFooter>
        <div className=" p-3 mx-5">
          <h1 className="text-red-900 text-[38px] font-black">TOOLS</h1>
          <section className="grid grid-cols-3 gap-4">
            {toolList.map((tool, index) => (
              <ToolBox key={index} {...tool} />
            ))}
          </section>
        </div>
      </CatalogLayout>
    </>
  );
}
