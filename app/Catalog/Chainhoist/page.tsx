import Image from "next/image";
import ChainBox, { PartItem } from "@/components/Chains/ChainBox";
import CatalogLayout from "@/components/CatalogLayout";

const chainHoists: PartItem[] = [
  {
    code: "CH4-1-BW",
    label: 'CHAIN HOIST',
    image: "/images/chainhoist/ch41-1.png",
    description: ["4:1 Ratio", '1\" Bore', "Bolt-On Wall Mount"],
  },
  {
    code: "CH4-1.25-BW",
    label: '',
    image: "/images/chainhoist/ch41-1-4.png",
    description: ["4:1 Ratio", '1-1/4\" Bore', "Bolt-On Wall Mount"],
  },
  {
    code: "CH3-1-SS",
    label: '',
    image: "/images/chainhoist/ch31.png",
    description: ["3:1 Ratio", '1\" Bore', "Slide-On Shaft"],
  },
  {
    code: "SA-B2",
    label: "SPREADER ARM",
    image: "/images/chainhoist/spreadarm.png",
    description: ["Spreader Arm", "Includes Bearings", "2 Pieces"],
  },
];

const chains: PartItem = {
  code: "C40-10",
  label: "CHAINS",
  image: "/images/chains/40-10.png",
  description: ["#40 CHAIN, 10FT", "#41 CHAIN, 10FT", "#50 CHAIN, 10FT", "#65 CHAIN"],
};

const masterLinks: PartItem = {
  code: "ML40",
  label: "MASTER LINKS",
  image: "/images/chains/40ml.png",
  description: ["#40 MASTER LINK", "#41 MASTER LINK", "#50 MASTER LINK", "#65 MASTER LINK"],
};

const halfLinks: PartItem = {
  code: "HL40",
  label: "HALF LINKS",
  image: "/images/chains/40hl.png",
  description: ["#40 HALF LINK", "#41 HALF LINK", "#50 HALF LINK", "#65 HALF LINK"],
};

export default function Chainhoist() {
  return (
    <>
      <CatalogLayout title={`CHAIN HOISTS \n & ACCESSORIES`} bgcolor="bg-blue-800" textcolor="text-blue-800">
        <h1 className="text-3xl font-bold text-blue-800 ml-5 mt-3">CHAIN HOISTS & ACCESSORIES</h1>
      
        {/* Chain Hoists Section */}
      <div className="">

      
            <div className="grid grid-cols-3 gap-3 ">
          {chainHoists.map((part) => (
            <ChainBox key={part.code} part={part} />
          ))}
     <Image
    src='/images/chainhoist/chaincombo.png'
    alt='live chain hoist'
    width={350}
    height={100}
   
    className="absolute right-0 mt-[42%] mr-[15%] "
  />
        </div>
     
  </div>
<div className="border-t mx-10 ">

</div>
        {/* Chain Sets Section */}
        <div className="grid grid-cols-3 gap-3   ">
          {[chains, masterLinks, halfLinks].map((part) => (
            <ChainBox key={part.code} part={part} />
          ))}
        </div>
         
      </CatalogLayout>
   </>
  );
}
