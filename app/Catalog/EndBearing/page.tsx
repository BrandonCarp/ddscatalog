"use client";

import CatalogLayout from "@/components/CatalogLayout";
import {
  TubeBox,
  SolidTubeBox,
  EndBearingPlates,
  CenterPlates,
  Collar,
  Coupling,
  Bearings,
} from "@/components/EndBearingBox/TubeBox";

type PartList = {
  label: string;
  image: string;
  description: string[];
};

export default function EndBearingPage() {
  return (
    <CatalogLayout
      title={`END BEARING PLATES & MISC`}
      pagenum="26"
      reverseFooter
    >
      <div className="p-3 mx-5  ">
        <h1 className="font-black text-3xl text-red-900 mb-2">
          END BEARING PLATES & MISC
        </h1>
        <div className="grid grid-cols-3 gap-10 ml-5">
          <EndBearingPlates />
          <TubeBox />
          <SolidTubeBox />
        </div>
        <div className="flex items-center absolute mt-3 space-x-5 ml-5">
          <CenterPlates />
          <Bearings />
          <Collar />
        </div>
        <div className="absolute right-0 bottom-0 mb-105 mr-5">
          <Coupling />
        </div>
      </div>
    </CatalogLayout>
  );
}
