'use client';
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
    code: "F-R-TA",
    label: "RESIDENTIAL TOP FIXTURES",
    image: "/images/Fixtures/topfix.png",
    description: ["RESIDENTIAL TOP FIXTURES - F-R-TA"],
  },
  {
    code: "F-R-B100",
    label: "RESIDENTIAL BTM BB-100",
    image: "/images/Fixtures/bb100.png",
    description: ["RESIDENTIAL BOTTOM FIXTURE BB-100 - F-R-B100"],
  },
  {
    code: "F-R-B90",
    label: "RESIDENTIAL BTM BB-90",
    image: "/images/Fixtures/bb90.png",
    description: ["RESIDENTIAL BOTTOM FIXTURE BB-90 - F-R-B90"],
  },
  {
    code: "F-R-LB",
    label: "RESIDENTIAL LHR BTM FIXTURES",
    image: "/images/Fixtures/reslhrbtm.png",
    description: ["RESIDENTIAL LHR BOTTOM FIXTURES - F-R-LB"],
  },
  {
    code: "F-R-LT",
    label: "RESIDENTIAL LHR TOP FIXTURES",
    image: "/images/Fixtures/reslhrtop.png",
    description: ["RESIDENTIAL LHR TOP FIXTURES - F-R-LT"],
  },
];

// === COMMERCIAL FIXTURES ===
const ComFixtureList: PartItem[] = [
  {
    code: "F-C-TA",
    label: "COMMERCIAL TOP FIXTURES",
    image: "/images/Fixtures/comtop.png",
    description: ["COMMERCIAL TOP FIXTURES - F-C-TA"],
  },
  {
    code: "F-C-B120",
    label: "COMMERCIAL BTM BB-120",
    image: "/images/Fixtures/combtmbb120.png",
    description: ["COMMERCIAL BOTTOM FIXTURE BB-120 - F-C-B120"],
  },
  {
    code: "F-C-B6",
    label: "COMMERCIAL BTM BB-6",
    image: "/images/Fixtures/combb6.png",
    description: [
      "COMMERCIAL BOTTOM FIXTURE BB-6 - F-C-B6",
      "COMMERCIAL BOTTOM FIXTURE BB-6 NOTCHED - F-C-B6N",
    ],
  },
  {
    code: "F-C-LT",
    label: "COMMERCIAL LHR TOP FIXTURES",
    image: "/images/Fixtures/comlhrtop.png",
    description: ["COMMERCIAL LHR TOP FIXTURES - F-C-LT"],
  },
  {
    code: "F-C-LB5",
    label: "COMMERCIAL LHR BTM BB-5",
    image: "/images/Fixtures/combb5.png",
    description: ["COMMERCIAL LHR BOTTOM FIXTURE BB-5 - F-C-LB5"],
  },
  {
    code: "F-C-LB6",
    label: "COMMERCIAL LHR BTM BB-6",
    image: "/images/Fixtures/combb6.png",
    description: ["COMMERCIAL LHR BOTTOM FIXTURE BB-6 - F-C-LB6"],
  },
];

// === JAMB BRACKETS ===
const JambList: PartItem[] = [
  {
    code: "JB-1 ~ JB-12",
    label: "JAMB BRACKETS",
    image: "/images/jbeb/jb1.png",
    description: Array.from({ length: 12 }, (_, i) => `#${i + 1} JAMB BRACKET - JB-${i + 1}`),
  },
];

// === END BEARING PLATES ===
const EbpList: PartItem[] = [
  {
    code: "EP-*",
    label: "END BEARING PLATES",
    image: "/images/jbeb/ebp.png",
    description: [
      '3-3/8" RES, END BEARING PLATE - EP-R-3',
      '3-3/8" COMM, END BEARING PLATE - EP-C-3',
      '4-3/8" END BEARING PLATE - EP-CR-4',
      '5" END BEARING PLATE - EP-CR-5',
      '6" END BEARING PLATE - EP-CR-6',
    ],
  },
];

export default function FixJambEndb() {
  return (
    <CatalogLayout title="FIXTURES" bgcolor="bg-red-800" textcolor="text-red-800">
      <div className="flex   mx-auto p-5 bg-white ml-3">
        <section className="mx-3">
{/* RESIDENTIAL FIXTURES */}
        <h1 className="text-3xl font-bold text-red-800 mb-1">RESIDENTIAL FIXTURES</h1>
        <div className="grid grid-cols-3 gap-1  mb-2 ">
          {ResFixtureList.map((part) => (
            <FixtureBox key={part.code} part={part} />
          ))}
        </div>

        {/* COMMERCIAL FIXTURES */}
        <h1 className="text-3xl font-bold text-red-800 mb-1 ml-2">COMMERCIAL FIXTURES</h1>
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
                  key={`JB-${i + 1}`}
                  part={{
                    code: `JB-${i + 1}`,
                    label: `#${i + 1} JAMB BRACKET`,
                    description: [`#${i + 1} JAMB BRACKET  - JB-${i + 1}`],
                  }}
                />
              ))}
            </div>
          </div>

          {/* End Bearing Plates */}
          <div className="">
            <h1 className="text-2xl font-bold text-red-800 mt-2  ">END BEARING PLATES</h1>
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
