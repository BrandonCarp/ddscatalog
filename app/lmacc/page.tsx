// app/liftmaster/accessories/page.tsx
import Image from "next/image";
import logo from "public/liftmaster/logo.jpg";
import LMlogo from "public/liftmaster/LMlogo.png";
import LMACCBOX from "@/components/LMbox/LMACCBOX";

// REMOTES
import LML993M from "public/liftmaster/L993M.png";
import LMLL993S from "public/liftmaster/L993S.png";
import LML991S from "public/liftmaster/L991S.png";
import LML992U from "public/liftmaster/L992U.png";

// KEYPADS
import LML979M from "public/liftmaster/L979M.png";
import LML979S from "public/liftmaster/L979S.png";
import LML979U from "public/liftmaster/L979U.png";

// CONTROL PANELS
import LML956W from "public/liftmaster/L956W.png";
import LML958W from "public/liftmaster/L958W.png";
import LML957W from "public/liftmaster/L957W.png";
import LML955W from "public/liftmaster/L955W.png";

const remotes = [
  {
    name: "L993M",
    image: LML993M,
    details: ["3 - BUTTON MAX REMOTE", "WORKS ALL MAJOR BRANDS AFTER 1997"],
  },
  {
    name: "L993S",
    image: LMLL993S,
    details: ["3 - BUTTON REMOTE", "LIFTMASTER 3.0 ONLY"],
  },
  {
    name: "L991S",
    image: LML991S,
    details: ["1 - BUTTON REMOTE", "LIFTMASTER 3.0 ONLY"],
  },
  {
    name: "L992U",
    image: LML992U,
    details: [
      "2 - BUTTON UNIVERSAL REMOTE",
      "WORKS ALL MAJOR BRANDS AFTER 1993",
    ],
  },
];

const keypads = [
  {
    name: "L979M",
    image: LML979M,
    details: ["WIRLESS MAX KEYPAD", "WORKS ALL MAJOR BRANDS AFTER 1997"],
  },
  {
    name: "L979S",
    image: LML979S,
    details: ["WIRLESS KEYPAD", "LIFTMASTER 3.0 ONLY"],
  },
  {
    name: "L979U",
    image: LML979U,
    details: ["WIRLESS UNIVERSAL KEYPAD", "WORKS ALL MAJOR BRANDS AFTER 1993"],
  },
];

const controlPanels = [
  {
    name: "L956W",
    image: LML956W,
    details: ["WIRELESS CONTROL PANEL", "LIFTMASTER 3.0 ONLY"],
  },
  {
    name: "L957W",
    image: LML957W,
    details: [
      "SMART CONTROL PANEL",
      "LCD DISPLAY",
      "MOTION DETECTOR",
      "TIMER TO CLOSE",
      "LIFTMASTER 3.0 ONLY",
    ],
  },
  {
    name: "L958W",
    image: LML958W,
    details: ["CONTROL PANEL", "MOTION DETECTOR", "LIFTMASTER 3.0 ONLY"],
  },
  {
    name: "L955W",
    image: LML955W,
    details: ["STANDARD CONTROL PANEL", "LIFTMASTER 3.0 ONLY"],
  },
];

function Section({
  title,
  items,
}: {
  title: string;
  items: {
    name: string;
    image: any;
    details: string[];
    driveTag?: "CHAIN DRIVE" | "BELT DRIVE";
  }[];
}) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 border-b-2 text-center text-2xl font-black">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 print:grid-cols-4 print:gap-2">
        {items.map((item) => (
          <LMACCBOX
            key={item.name}
            name={item.name}
            image={item.image}
            details={item.details}
            driveTag={item.driveTag} // ✅ pass through (undefined for accessories)
          />
        ))}
      </div>
    </section>
  );
}

// function Section({
//   title,
//   items,
// }: {
//   title: string;
//   items: { name: string; image: any; details: string[] }[];
// }) {
//   return (
//     <section className="mt-8">
//       <h2 className="mb-4 border-b-2 text-center text-2xl font-black">
//         {title}
//       </h2>

//       <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 print:grid-cols-4 print:gap-2">
//         {items.map((item) => (
//           <LMACCBOX
//             key={item.name}
//             name={item.name}
//             image={item.image}
//             details={item.details}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

export default function LiftmasterAccessories() {
  return (
    <div className="min-h-screen">
      {/* Header (matches operator page) */}
      <header className="py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between gap-4">
            <Image
              src={logo}
              alt="Company logo"
              width={350}
              height={350}
              priority
            />
            <Image
              src={LMlogo}
              alt="LiftMaster logo"
              width={350}
              height={350}
              priority
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-10">
        <Section title="LIFTMASTER 3.0 REMOTES" items={remotes} />
        <Section title="LIFTMASTER 3.0 KEYPADS" items={keypads} />
        <Section title="LIFTMASTER 3.0 CONTROL PANELS" items={controlPanels} />

        <Section
          title="LIFTMASTER OPERATORS (WHILE SUPPLIES LAST)"
          items={operatorsWhileSuppliesLast}
        />
      </main>

      {/* Footer (matches operator page exactly) */}
      <footer className="border-t-2 flex justify-between p-5  text-center items-center  font-semibold text-2xl">
        <p className="">(856)-666-6662</p>{" "}
        <p>7150 Westfield Ave, Pennsauken, NJ 08110</p>{" "}
      </footer>
    </div>
  );
}
