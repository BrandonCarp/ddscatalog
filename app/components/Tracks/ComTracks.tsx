"use client";

export default function ComTracks() {
  return (
    <>
      <section className="space-y-3 mt-10 ">
        <h1 className=" text-4xl text-gray-800 font-black flex flex-col">
          COMMERCIAL TRACK{" "}
          <span className="text-[24px] font-bold mt-2 mb-1">
            {" "}
            - 2", ANGLE MOUNT TO WOOD OR STEEL
          </span>
        </h1>
        <div className="flex flex-col space-y-5 font-bold text-[20px] text-gray-700">
          <dl className="[&>dd]:border-b [&>dd]:pb-2 [&>dd]:mb-2">
            <dd>8FT - 15R, FULL VERTICAL LIFT, LOW HEADROOM</dd>
            <dd>10FT - 12R, 15R, FULL VERTICAL LIFT, LOW HEADROOM</dd>
            <dd>12FT - 15R, FULL VERTICAL LIFT</dd>
            <dd>14FT - 15R, FULL VERTICAL LIFT</dd>
            <dd>16FT - 15R, FULL VERTICAL LIFT</dd>
          </dl>
        </div>
      </section>
    </>
  );
}
