"use client";
import CatalogLayout from "@/components/CatalogLayout";
import ResTracks from "@/components/Tracks/ResTracks";
import ComTracks from "@/components/Tracks/ComTracks";
import RawTrack from "@/components/Tracks/RawTrack";
import Image from "next/image";

export default function TracksCom() {
  return (
    <>
      <CatalogLayout pagenum="18" title="COMMERICAL TRACKS" reverseFooter>
        <div className="relative w-full h-50">
          <Image
            src="/images/Track/track2.png"
            alt="Operator Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <div className="p-5 ">
          <h1 className="font-black text-5xl text-red-900">TRACKS</h1>
          {/* Track Sections Res/Comm */}
          <section className="flex flex-col items-center mt-5">
            {/* Commercial */}
            <ComTracks />
            {/* Raw Track */}
            <RawTrack />

            <div className="flex space-x-20 mt-5">
              <ul>
                <Image
                  src="/images/cables/pusher.png"
                  alt="Push Down Bumpers"
                  width={150}
                  height={150}
                />
                <li className="list-disc font-semibold">
                  PUSH DOWN DOOR BUMPERS, 15", 2PCS
                </li>
                <li className="font-semibold text-[15px]">
                  PART:{" "}
                  <span className="text-[16px] text-red-900 font-bold">
                    PDB15
                  </span>
                </li>
                <li className="list-disc font-semibold">
                  PUSH DOWN DOOR BUMPERS, 27", 2PCS
                </li>
                <li className="font-semibold text-[15px]">
                  PART:
                  <span className="text-[16px] text-red-900 font-bold">
                    PDB27
                  </span>
                </li>
              </ul>

              <ul>
                <Image
                  src="/images/cables/ubumper.png"
                  alt="Push Down Bumpers"
                  width={150}
                  height={150}
                />
                <li className="list-disc font-semibold">
                  U-STYLE DOOR BUMPERS, 2PCS
                </li>
                <li className="font-semibold text-[15px]">
                  PART:{" "}
                  <span className="text-[16px] text-red-900 font-bold">
                    UDB
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </CatalogLayout>
    </>
  );
}
