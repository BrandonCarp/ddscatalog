import Image from "next/image";
import CableBox from "@/components/CableBox/CableBox";
import CatalogLayout from "../../components/CatalogLayout";

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
      'PUSH DOWN DOOR BUMPERS, 15", 2PCS - PDB15',
      'PUSH DOWN DOOR BUMPERS, 27", 2PCS - PDB27',
    ],
  },
  {
    code: "USB-*",
    label: "U-STYLE DOOR BUMPERS",
    image: "/images/cables/ubumper.png",
    description: ["U-STYLE DOOR BUMPERS, 2PCS - LEAF2"],
  },
];

const CableList: PartItem[] = [
  {
    code: "EXT-*",
    label: "EXTENSION CABLES",
    image: "/images/cables/ext.png",
    description: [
      "7FT EXTENSION CABLES - EC7FT",
      "8FT EXTENSION CABLES - EC8FT",
      "9FT EXTENSION CABLES - EC9FT",
    ],
  },
  {
    code: "EXTCC-*",
    label: "EXTENSION CC CLIP CABLES",
    image: "/images/cables/extcc.png",
    description: ["8FT EXTENSION CC CLIP CABLES - ECC8FT"],
  },
  {
    code: "TOR-*",
    label: "TORSION CABLES",
    image: "/images/cables/tor.png",
    description: ["7FT TORSION CABLES - TC7FT", "8FT TORSION CABLES - TC8FT"],
  },
  {
    code: "CAB-*",
    label: "BULK CABLE",
    image: "/images/cables/cable.png",
    description: [
      '1/8" CABLE, 500FT - ROLL18',
      '5/32" CABLE, 500FT - ROLL32',
      '3/16" CABLE, 500FT - ROLL16',
    ],
  },
];

const cableHdwList: PartItem[] = [
  {
    code: "FELCO",
    label: "FELCO C-7 CABLE CUTTER",
    image: "/images/cables/felco.png",
    description: ["FELCO C-7  CABLE CUTTER - FELCC"],
  },
  {
    code: "THIMBLES",
    label: "THIMBLES",
    image: "/images/cables/thimble.png",
    description: ["CABLE THIMBLES - CTHIMB"],
  },
  {
    code: "1/8 CABLE CLAMPS",
    label: "1/8 CABLE CLAMPS",
    image: "/images/cables/cableclamp.png",
    description: ["1/8 CABLE CLAMPS - CABLECLAMP"],
  },
  {
    code: "SLV-*",
    label: "SLEEVES",
    image: "/images/cables/sleeves.png",
    description: [
      '1/8" SLEEVES - SLEV18',
      '5/32" SLEEVES - SLEV32',
      '3/16" SLEEVES - SLEV16',
    ],
  },
  {
    code: "STP-*",
    label: "STOPS",
    image: "/images/cables/stops.png",
    description: [
      '1/8" STOPS - STOP18',
      '5/32" STOPS - STOP32',
      '3/16" STOPS - STOP16',
    ],
  },
];

export default function SpnCable() {
  return (
    <>
      <CatalogLayout title={"CABLES &\n HARDWARE"} pagenum="21">
        <div className="p-2 mx-5 relative">
          <section className=" mx-5 leading-tight ">
            <div className="grid grid-cols-4 gap-3 ">
              {/* Cables Header */}
              <div className="col-span-4">
                <h1 className="text-3xl font-black text-red-900 my-1">
                  CABLES
                </h1>
              </div>

              {/* Cable Items */}
              {Object.entries(CableList).map(([key, value]) => (
                <CableBox key={key} part={value} />
              ))}
              {/* Ext Kits */}
              <ul className="absolute mt-60 ml-45">
                <Image
                  src="/images/cables/extkit.png"
                  alt="Push Down Bumpers"
                  width={150}
                  height={150}
                />
                <li className="list-disc font-semibold">7' EXTENSION KIT</li>
                <li className="font-semibold text-[15px] pb-2">
                  PART:{" "}
                  <span className="text-[16px] text-red-900 font-bold">
                    EXTK7
                  </span>
                </li>
                <li className="list-disc font-semibold">8' EXTENSION KIT</li>
                <li className="font-semibold text-[15px]">
                  PART:
                  <span className="text-[16px] text-red-900 font-bold">
                    EXTK8
                  </span>
                </li>
              </ul>
              {/* Torsion Kits */}
              <ul className="absolute right-0 mt-63 mr-58">
                <Image
                  src="/images/cables/torkit.png"
                  alt="Push Down Bumpers"
                  width={150}
                  height={150}
                />
                <li className="list-disc font-semibold">7' EXTENSION KIT</li>
                <li className="font-semibold text-[15px] pb-2">
                  PART:{" "}
                  <span className="text-[16px] text-red-900 font-bold">
                    TORK7
                  </span>
                </li>
                <li className="list-disc font-semibold">8' EXTENSION KIT</li>
                <li className="font-semibold text-[15px]">
                  PART:
                  <span className="text-[16px] text-red-900 font-bold">
                    TORK8
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-45">
            <h1 className="text-3xl font-black text-red-900 ">
              CABLE HARDWARE
            </h1>
            <div className="grid grid-cols-3">
              {Object.entries(cableHdwList).map(([key, value]) => (
                <CableBox key={key} part={value} />
              ))}
            </div>
          </section>
        </div>
      </CatalogLayout>
    </>
  );
}
