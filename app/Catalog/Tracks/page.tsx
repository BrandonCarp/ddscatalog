"use client";
import CatalogLayout from "@/components/CatalogLayout";
import ResTracks from "@/components/Tracks/ResTracks";
import ComTracks from "@/components/Tracks/ComTracks";
import RawTrack from "@/components/Tracks/RawTrack";

export default function Tracks() {
  return (
    <>
      <CatalogLayout pagenum="1" title="TRACKS">
        <div className="p-5 ">
          <h1 className="font-black text-5xl text-red-900">TRACKS</h1>
          {/* Track Sections Res/Comm */}
          <section className="flex flex-col items-center mt-5">
            {/* Residential */}
            <ResTracks />
            {/* Commercial */}
            <ComTracks />
            {/* Raw Track */}
            <RawTrack />
          </section>
        </div>
      </CatalogLayout>
    </>
  );
}
