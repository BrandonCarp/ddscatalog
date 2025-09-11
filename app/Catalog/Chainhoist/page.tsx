import Image from "next/image";
import ChainBox, { PartItem } from "@/components/Chains/ChainBox";
import CatalogLayout from "@/components/CatalogLayout";

const chainHoists: PartItem[] = [
  {
    code: "CH100BW",
    label: "CHAIN HOIST",
    image: "/images/chainhoist/ch41-1.png",
    description: [
      "CHAIN HOIST : Part CH100BW",
      "4:1 Ratio",
      '1" Bore',
      "Bolt-On Wall Mount",
    ],
  },
  {
    code: "CH125BW",
    label: "CHAIN HOIST",
    image: "/images/chainhoist/ch41-1-4.png",
    description: [
      "CHAIN HOIST : Part CH125BW",
      "4:1 Ratio",
      '1-1/4" Bore',
      "Bolt-On Wall Mount",
    ],
  },
  {
    code: "CH100SS",
    label: "CHAIN HOIST",
    image: "/images/chainhoist/ch31.png",
    description: [
      "CHAIN HOIST : Part CH100SS",
      "3:1 Ratio",
      '1" Bore',
      "Slide-On Shaft",
    ],
  },
  {
    code: "SPARM",
    label: "SPREADER ARM",
    image: "/images/chainhoist/spreadarm.png",
    description: ["SPREADER ARM : Part SPARM", "Includes Bearings", "2 Pieces"],
  },
];

const chains: PartItem = {
  code: "C40-10",
  label: "CHAINS",
  image: "/images/chains/40-10.png",
  description: [
    "#40 CHAIN, 10FT : Part CH40",
    "#41 CHAIN, 10FT : Part CH41",
    "#50 CHAIN, 10FT : Part CH50",
    "#65 CHAIN : Part CH65",
  ],
};

const masterLinks: PartItem = {
  code: "ML40",
  label: "MASTER LINKS",
  image: "/images/chains/40ml.png",
  description: [
    "#40 MASTER LINK : Part ML40",
    "#41 MASTER LINK : Part ML41",
    "#50 MASTER LINK : Part ML50",
    "#65 MASTER LINK : Part ML65",
  ],
};

const halfLinks: PartItem = {
  code: "HL40",
  label: "HALF LINKS",
  image: "/images/chains/40hl.png",
  description: [
    "#40 HALF LINK : Part HL40",
    "#41 HALF LINK : Part HL41",
    "#50 HALF LINK : Part HL50",
    "#65 HALF LINK : Part HL65",
  ],
};

export default function Chainhoist() {
  return (
    <>
      <CatalogLayout title={`CHAIN HOISTS \n & ACCESSORIES`} pagenum="23">
        <div className="">
          <h1 className="text-3xl font-black text-red-900 ml-5 mt-5 ">
            CHAIN HOISTS & ACCESSORIES
          </h1>

          {/* Chain Hoists Section */}

          <div className="mx-3 mt-3">
            <div className="grid grid-cols-3 gap-5 space-y-3">
              {chainHoists.map((part) => (
                <ChainBox key={part.code} part={part} />
              ))}
              {[chains, masterLinks, halfLinks].map((part) => (
                <ChainBox key={part.code} part={part} />
              ))}
            </div>
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
