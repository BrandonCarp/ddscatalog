"use client";

export default function ResTracks() {
  return (
    <>
      <section className="space-y-3">
        <h1 className=" text-4xl text-gray-800 font-black flex flex-col ">
          RESIDENTIAL TRACK{" "}
          <span className="text-[24px] font-bold mb-1 mt-2">
            {" "}
            - 2", BRACKET MOUNT, 1-3/8" / 2" THICK DOORS
          </span>
        </h1>
        <div className="flex space-x-5 font-bold text-[20px] text-gray-700">
          <dl className="[&>dd]:border-b [&>dd]:pb-2 [&>dd]:mb-2">
            <dt>7FT TRACK OPTIONS</dt>
            <dd>10R / 12R / 15R</dd>
            <dd>Low Headroom</dd>
            <dd>20R</dd>
            <dd>32R</dd>
          </dl>
          <dl className="[&>dd]:border-b [&>dd]:pb-2 [&>dd]:mb-2">
            <dt>8FT TRACK OPTIONS</dt>
            <dd>10R / 12R / 15R</dd>
            <dd>Low Headroom</dd>
            <dd>20R</dd>
            <dd>32R</dd>
          </dl>
          <dl className="[&>dd]:border-b [&>dd]:pb-2 [&>dd]:mb-2">
            <dt>9FT TRACK OPTIONS</dt>
            <dd>10R / 12R / 15R</dd>
            <dd>Low Headroom</dd>
          </dl>
        </div>
      </section>
    </>
  );
}
