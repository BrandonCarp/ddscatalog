"use client";

import CatalogLayout from "@/components/CatalogLayout";
import {
  TubeBox,
  SolidTubeBox,
  EndBearingPlates,
  CenterPlates,
  CollarCoupling,
  Bearings,
} from "@/components/EndBearingBox/TubeBox";

type PartList = {
  label: string;
  image: string;
  description: string[];
};

export default function EndBearingPage() {
  return (
    <CatalogLayout title={`END BEARING PLATES & MISC`} pagenum="27">
      <div className="p-3 mx-5">
        <h1 className="font-black text-3xl text-red-900">
          END BEARING PLATES & MISC
        </h1>
        <div className="grid grid-cols-3">
          <TubeBox />
          <SolidTubeBox />
          <EndBearingPlates />
          <CenterPlates />
          <Bearings />
          <CollarCoupling />
        </div>
      </div>
    </CatalogLayout>
  );
}
