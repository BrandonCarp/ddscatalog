"use client";
import Image from "next/image";
import FixtureBox from "@/components/FixtureBox/FixtureBox";
import CatalogLayout from "../../components/CatalogLayout";

type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

// === RESIDENTIAL FIXTURES ===
const ResFixtureList: PartItem[] = [
  {
    code: "RESTPFX",
    label: "RESIDENTIAL TOP FIXTURES",
    image: "/images/Fixtures/topfix.png",
    description: ["RESIDENTIAL TOP FIXTURES - RESTPFX"],
  },
  {
    code: "BB100",
    label: "RESIDENTIAL BTM BB-100",
    image: "/images/Fixtures/bb100.png",
    description: ["RESIDENTIAL BOTTOM FIXTURE BB-100 - BB100"],
  },
  {
    code: "BB090",
    label: "RESIDENTIAL BTM BB-90",
    image: "/images/Fixtures/bb90.png",
    description: ["RESIDENTIAL BOTTOM FIXTURE BB-90 - BB090"],
  },
  {
    code: "RESLHFX",
    label: "RESIDENTIAL LHR BTM FIXTURES",
    image: "/images/Fixtures/reslhrbtm.png",
    description: ["RESIDENTIAL LHR BOTTOM FIXTURES - RESLHFX"],
  },
  {
    code: "RESLHRTF",
    label: "RESIDENTIAL LHR TOP FIXTURES",
    image: "/images/Fixtures/reslhrtop.png",
    description: ["RESIDENTIAL LHR TOP FIXTURES - RESLHRTF"],
  },
];

// === COMMERCIAL FIXTURES ===
const ComFixtureList: PartItem[] = [
  {
    code: "COMTF",
    label: "COMMERCIAL TOP FIXTURES",
    image: "/images/Fixtures/comtop.png",
    description: ["COMMERCIAL TOP FIXTURES - COMTF"],
  },
  {
    code: "COM120",
    label: "COMMERCIAL BTM BB-120",
    image: "/images/Fixtures/combtmbb120.png",
    description: ["COMMERCIAL BOTTOM FIXTURE BB-120 - COM120"],
  },
  {
    code: "COMBB6",
    label: "COMMERCIAL BTM BB-6",
    image: "/images/Fixtures/combb6.png",
    description: [
      "COMMERCIAL BOTTOM FIXTURE BB-6 - COMBB6",
      "COMMERCIAL BOTTOM FIXTURE BB-6 NOTCHED - COMBBN",
    ],
  },
  {
    code: "COMLHFX",
    label: "COMMERCIAL LHR TOP FIXTURES",
    image: "/images/Fixtures/comlhrtop.png",
    description: ["COMMERCIAL LHR TOP FIXTURES - COMLHFX"],
  },
  {
    code: "CLHBB5",
    label: "COMMERCIAL LHR BTM BB-5",
    image: "/images/Fixtures/combb5.png",
    description: ["COMMERCIAL LHR BOTTOM FIXTURE BB-5 - CLHBB5"],
  },
  {
    code: "CLHBB6",
    label: "COMMERCIAL LHR BTM BB-6",
    image: "/images/Fixtures/combb6.png",
    description: ["COMMERCIAL LHR BOTTOM FIXTURE BB-6 - CLHBB6"],
  },
];

// === JAMB BRACKETS ===
const JambList: PartItem[] = [
  {
    code: "",
    label: "JAMB BRACKETS",
    image: "/images/jbeb/jb1.png",
    description: Array.from(
      { length: 12 },
      (_, i) => `#${i + 1} JAMB BRACKET - JAM${i + 1}`
    ),
  },
];

// === END BEARING PLATES ===
const EbpList: PartItem[] = [
  {
    code: "EP-*",
    label: "END BEARING PLATES",
    image: "/images/jbeb/ebp.png",
    description: [
      '3-3/8" RES, END BEARING PLATE - EBR338',
      '3-3/8" COMM, END BEARING PLATE - EBC338',
      '4-3/8" END BEARING PLATE - EBC438',
      '5" END BEARING PLATE - EBC500',
      '6" END BEARING PLATE - EBC600',
    ],
  },
];

export default function FixJambEndb() {
  return (
    <CatalogLayout
      title="FIXTURES"
      pagenum="8"
      bgcolor="bg-red-800"
      textcolor="text-red-800"
    >
      <div className="flex   mx-auto p-5 bg-white ml-3">
        <section className="mx-3">
          {/* RESIDENTIAL FIXTURES */}
          <h1 className="text-3xl font-bold text-red-800 mb-1">
            RESIDENTIAL FIXTURES
          </h1>
          <div className="grid grid-cols-3 gap-1  mb-2 ">
            {ResFixtureList.map((part) => (
              <FixtureBox key={part.code} part={part} />
            ))}
          </div>

          {/* COMMERCIAL FIXTURES */}
          <h1 className="text-3xl font-bold text-red-800 mb-1 ml-2">
            COMMERCIAL FIXTURES
          </h1>
          <div className="grid grid-cols-3 gap-1  ">
            {ComFixtureList.map((part) => (
              <FixtureBox key={part.code} part={part} />
            ))}
          </div>
        </section>

        {/* JB / EB */}
        <section className="flex flex-col items-center justify-center ">
          <div className="">
            <h1 className="text-2xl font-bold text-red-800 ">JAMB BRACKETS</h1>
            <div className=" flex justify-center mr-10">
              <Image
                src="/images/jbeb/jb1.png"
                alt="Jamb Bracket"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-2 mx-5 leading-tight gap-1">
              {Array.from({ length: 12 }, (_, i) => (
                <FixtureBox
                  key={`JAM${i + 1}`}
                  part={{
                    code: `JAM${i + 1}`,
                    label: `#${i + 1} JAMB BRACKET`,
                    description: [`#${i + 1} JAMB BRACKET  - JAM${i + 1}`],
                  }}
                />
              ))}
            </div>
          </div>

          {/* End Bearing Plates */}
          <div className="">
            <h1 className="text-2xl font-bold text-red-800 mt-2  ">
              END BEARING PLATES
            </h1>
            <div className=" flex justify-center mr-10">
              <Image
                src="/images/jbeb/ebp.png"
                alt="End Bearing Plate"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 leading-tight">
              {EbpList.map((part) => (
                <FixtureBox
                  key={part.code}
                  part={{ ...part, image: undefined }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </CatalogLayout>
  );
}
