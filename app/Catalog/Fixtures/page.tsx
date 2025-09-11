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
  {
    code: "RESQUICKT",
    label: "QUICK TURN TOP BRACKETS",
    image: "/images/Fixtures/QUICK.png",
    description: ["RQUICK TURN TOP BRACKET - RESQUICKT"],
  },
];

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
  // {
  //   code: "CLHBB6",
  //   label: "COMMERCIAL LHR BTM BB-6",
  //   image: "/images/Fixtures/combb6.png",
  //   description: ["COMMERCIAL LHR BOTTOM FIXTURE BB-6 - CLHBB6"],
  // },
];

export default function Fixtures() {
  return (
    <CatalogLayout title="FIXTURES" pagenum="25">
      <div className="flex   mx-auto p-3  ml-3">
        <section className="mx-3">
          {/* RESIDENTIAL FIXTURES */}
          <h1 className="text-3xl font-black text-red-900 mb-1">
            RESIDENTIAL FIXTURES
          </h1>
          <div className="grid grid-cols-3 gap-1  mb-2 ">
            {ResFixtureList.map((part) => (
              <FixtureBox key={part.code} part={part} />
            ))}
          </div>

          {/* COMMERCIAL FIXTURES */}
          <h1 className="text-3xl font-black text-red-900 mb-1 ml-2">
            COMMERCIAL FIXTURES
          </h1>
          <div className="grid grid-cols-3 gap-3  ">
            {ComFixtureList.map((part) => (
              <FixtureBox key={part.code} part={part} />
            ))}
          </div>
        </section>
      </div>
    </CatalogLayout>
  );
}
