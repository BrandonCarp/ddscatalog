import Image from "next/image";
import CableBox from "@/components/CableBox/CableBox";
import CatalogLayout from "../../components/CatalogLayout"


type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

const SpList: PartItem[] = [
  {
    code: "PDB-*",
    label: "PUSH DOWN DOOR BUMPERS",
    image: "/images/cables/pusher.png",
    description: [
      'PUSH DOWN DOOR BUMPERS, 15", 2PCS - PDB-15-2',
      'PUSH DOWN DOOR BUMPERS, 27", 2PCS - PDB-27-2',
    ],
  },
  {
    code: "USB-*",
    label: "U-STYLE DOOR BUMPERS",
    image: "/images/cables/ubumper.png",
    description: [
      'U-STYLE DOOR BUMPERS, 2PCS - USB-2',
    ],
  },
];

const CableList: PartItem[] = [
  {
    code: "EXT-*",
    label: "EXTENSION CABLES",
    image: "/images/cables/ext.png",
    description: [
      "7FT EXTENSION CABLES",
       "8FT EXTENSION CABLES",
        "9FT EXTENSION CABLES",
    ],
  },
  {
    code: "EXTCC-*",
    label: "EXTENSION CC CLIP CABLES",
    image: "/images/cables/extcc.png",
    description: [
      "8FT EXTENSION CC CLIP CABLES",
    ],
  },
  {
    code: "TOR-*",
    label: "TORSION CABLES",
    image: "/images/cables/tor.png",
    description: [
      "7FT TORSION CABLES",
      "8FT TORSION CABLES",
    ],
  },
  {
    code: "CAB-*",
    label: "BULK CABLE",
    image: "/images/cables/cable.png",
    description: [
      '1/8" CABLE, 500FT',
      '5/32" CABLE, 500FT',
      '3/16" CABLE, 500FT',
    ],
  },
  {
    code: "SLV-*",
    label: "SLEEVES",
    image: "/images/cables/sleeves.png",
    description: [
      '1/8" SLEEVES',
      '5/32" SLEEVES',
      '3/16" SLEEVES',
    ],
  },
  {
    code: "STP-*",
    label: "STOPS",
    image: "/images/cables/stops.png",
    description: [
      '1/8" STOPS',
      '5/32" STOPS',
      '3/16" STOPS',
    ],
  },
];




export default function SpnCable(){
    return (
  <>

  <CatalogLayout title={"SPRING PUSHERS \n& CABLES"} bgcolor="bg-blue-800" textcolor="text-blue-800">
    <section className="p-5">
<h1 className="text-3xl font-bold text-blue-800 mb-2">CABLES</h1>
  <div className="grid grid-cols-4  space-x-3">
   {Object.entries(CableList).map(([key, value]) => (
    <CableBox key={key} part={value} />
  ))}
  </div>
    </section>
<div className="border-t mx-10">

</div>
  <section className="p-5">
<h1 className="text-3xl font-bold text-blue-800 mb-2">SPRING PUSHERS</h1>
  <div className="grid grid-cols-2">
    {Object.entries(SpList).map(([key, value]) => (
    <CableBox key={key} part={value} />
  ))}
  </div>
  </section>
    </CatalogLayout>
    
    </>
    )
}
    