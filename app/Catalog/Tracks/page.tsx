"use client";
import CatalogLayout from "@/components/CatalogLayout";
import ResTracks from "@/components/Tracks/ResTracks";
import ComTracks from "@/components/Tracks/ComTracks";
import RawTrack from "@/components/Tracks/RawTrack";
import Image from "next/image";

export default function Tracks() {
  return (
    <>
      <CatalogLayout pagenum="18" title="RESIDENTIAL TRACKS" reverseFooter>
        <div className="relative w-full h-120">
          <Image
            src="/images/Track/track1.png"
            alt="Operator Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <div className="p-5 ">
          <h1 className="font-black text-5xl text-red-900 ">TRACK</h1>
          {/* Track Sections Res/Comm */}
          <section className="flex flex-col items-center mt-10">
            {/* Residential */}
            <ResTracks />
            {/* Commercial */}
            {/* <ComTracks /> */}
            {/* Raw Track */}
            {/* <RawTrack /> */}
          </section>
        </div>
      </CatalogLayout>
    </>
  );
}
