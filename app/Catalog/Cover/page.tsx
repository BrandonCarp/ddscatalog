// app/cover/Cover.tsx (or wherever you keep it)
"use client";
import Image from "next/image";

export default function Cover() {
  return (
    <>
      <div className="cover-viewport">
        {/* Letter-proportioned canvas that scales to fit viewport */}
        <div id="catalog-cover" className="letter-canvas">
          <Image
            src="/images/ChatGpt/cover.png"
            alt="Doors Direct Product Catalog Cover"
            fill
            style={{}}
            priority
          />
        </div>
      </div>

      <style jsx global>{``}</style>
    </>
  );
}
