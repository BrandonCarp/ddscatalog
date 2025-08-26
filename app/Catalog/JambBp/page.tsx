// === JAMB BRACKETS ===
const JambList: PartItem[] = [
  {
    code: "",
    label: "JAMB BRACKETS",
    image: "/images/jbeb/jb1.png",
    description: Array.from(
      { length: 12 },
      (_, i) => `#${i + 1} JAMB BRACKET - JAM${i + 1}`
    ),
  },
];

// === END BEARING PLATES ===
const EbpList: PartItem[] = [
  {
    code: "EP-*",
    label: "END BEARING PLATES",
    image: "/images/jbeb/ebp.png",
    description: [
      '3-3/8" RES, END BEARING PLATE - EBR338',
      '3-3/8" COMM, END BEARING PLATE - EBC338',
      '4-3/8" END BEARING PLATE - EBC438',
      '5" END BEARING PLATE - EBC500',
      '6" END BEARING PLATE - EBC600',
    ],
  },
];

{
  /* Arb /
          <section className="flex justify-center space-x-20 mt-3 ">
            <div>
              <h1 className="font-bold text-[30px] text-red-800">
                ARB BRACKET
              </h1>
              <Image
                src="/images/HingeArbOrb/ARB.png"
                alt="arb bracket"
                height={175}
                width={175}
              />
              <h1 className="pt-5">ARB BRACKET</h1>
              <h2>
                <span className="text-[14px]">PART: </span>{" "}
                <span className="text-[16px] font-semibold text-red-700">
                  ARB
                </span>
              </h2>
            </div>
          </section> */
}
{
  /* JB / EB */
}
// <section className="flex flex-col items-center justify-center ">
//   <div className="">
//     <h1 className="text-2xl font-bold text-red-800 ">JAMB BRACKETS</h1>
//     <div className=" flex justify-center mr-10">
//       <Image
//         src="/images/jbeb/jb1.png"
//         alt="Jamb Bracket"
//         width={120}
//         height={80}
//         className="object-contain"
//       />
//     </div>
//     <div className="grid grid-cols-2 mx-5 leading-tight gap-1">
//       {Array.from({ length: 12 }, (_, i) => (
//         <FixtureBox
//           key={`JAM${i + 1}`}
//           part={{
//             code: `JAM${i + 1}`,
//             label: `#${i + 1} JAMB BRACKET`,
//             description: [`#${i + 1} JAMB BRACKET  - JAM${i + 1}`],
//           }}
//         />
//       ))}
//     </div>
//   </div>

//   {/* End Bearing Plates */}
//   <div className="">
//     <h1 className="text-2xl font-bold text-red-800 mt-2  ">
//       END BEARING PLATES
//     </h1>
//     <div className=" flex justify-center mr-10">
//       <Image
//         src="/images/jbeb/ebp.png"
//         alt="End Bearing Plate"
//         width={120}
//         height={80}
//         className="object-contain"
//       />
//     </div>
//     <div className="grid grid-cols-1 gap-2 leading-tight">
//       {EbpList.map((part) => (
//         <FixtureBox
//           key={part.code}
//           part={{ ...part, image: undefined }}
//         />
//       ))}
//     </div>
//   </div>
// </section>
