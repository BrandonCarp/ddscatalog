// import Image, { type StaticImageData } from "next/image";

// interface BoxSpecs {
//   image: StaticImageData;
//   name: string;
//   details: string[];
// }

// export default function LMACCBOX({ image, name, details }: BoxSpecs) {
//   return (
//     <div className="border-2 rounded-2xl p-2 print:p-1 break-inside-avoid">
//       <div className="flex flex-col items-center gap-2 print:gap-1">
//         <h2 className="font-black border-b-2 text-[20px] print:text-[18px] w-full text-center pb-1">
//           {name}
//         </h2>

//         {/* fixed image slot keeps spacing tight + consistent */}
//         <div className="relative w-40 h-28 print:w-32 print:h-24">
//           <Image src={image} alt={name} fill className="object-contain" />
//         </div>

//         {/* one UL total (not one UL per line) */}
//         <ul className="list-disc list-inside w-full text-left px-2">
//           {details.map((d) => (
//             <li
//               key={d}
//               className="text-[15px] print:text-[14px] font-bold leading-tight border-b  py-1"
//             >
//               {d}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
import Image, { type StaticImageData } from "next/image";

interface BoxSpecs {
  image: StaticImageData;
  name: string;
  details: string[];
  driveTag?: "CHAIN DRIVE" | "BELT DRIVE"; // ✅ optional
}

export default function LMACCBOX({ image, name, details, driveTag }: BoxSpecs) {
  return (
    <div className="border-2 rounded-2xl p-2 print:p-1 break-inside-avoid">
      <div className="flex flex-col items-center gap-2 print:gap-1">
        {/* title wrapper is relative so we can pin the tag */}
        <div className="relative w-full">
          <h2 className="font-black border-b-2 text-[20px] print:text-[18px] w-full text-center pb-1">
            {name}
          </h2>

          {driveTag ? (
            <span className="absolute top-0 right-0 text-[11px] print:text-[10px] font-black px-2 py-1 rounded-md border bg-white">
              {driveTag}
            </span>
          ) : null}
        </div>

        <div className="relative w-40 h-28 print:w-32 print:h-24">
          <Image src={image} alt={name} fill className="object-contain" />
        </div>

        <ul className="list-disc list-inside w-full text-left px-2">
          {details.map((d) => (
            <li
              key={d}
              className="text-[15px] print:text-[14px] font-bold leading-tight border-b py-1"
            >
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
