" use client";
import CatalogLayout from "@/components/CatalogLayout";
import {
  Uretainers,
  Lretainers,
  FlatPlasticRetainers,
  BottomTRubber,
  TopHeaderSeal,
  RollingSteelBottomRubber,
} from "@/components/Retainers/RetainerList";
import JambSeal from "@/components/Retainers/JambSeal";

export default function Retainers() {
  return (
    <>
      <CatalogLayout pagenum="30" title={`RETAINERS`} reverseFooter>
        <div className="mx-10 mr-28  flex flex-col justify-center  space-y-5 mt-3">
          <h1 className="font-black text-[36px] text-red-900">RETAINERS</h1>
          <div className="flex justify-center ml-15 ">
            <Uretainers />
            <Lretainers />
            <FlatPlasticRetainers />
          </div>
          <div className="flex justify-center ml-18  ">
            <BottomTRubber />
            <TopHeaderSeal />
            <RollingSteelBottomRubber />
          </div>
          {/* <div className="absolute bottom-0 mb-30 ml-25">
            <JambSeal />
          </div> */}
        </div>
      </CatalogLayout>
    </>
  );
}
