import Image from "next/image";
import PulleyBox from "@/components/Pulleys/PulleyBox";
import CatalogLayout from "../../components/CatalogLayout";

type PulleyInfo = {
  label: string;
  image: string;
  title: string;
  description: string[];
};

const pulleyList: { [key: string]: PulleyInfo } = {
  "3-cast-iron": {
    label: '3" Cast Iron Pulley',
    image: "/images/pulleys/3CastIronPulley.png",
    title: "PULLEYS",
    description: ["Durable 3-inch cast iron body"],
  },
  "3-gold": {
    label: '3" Gold Pulley',
    image: "/images/pulleys/3GoldPulley.png",
    title: "PULLEYS",
    description: ["3-inch anodized gold finish"],
  },
  "3-steel": {
    label: '3" Steel Pulley',
    image: "/images/pulleys/3SteelPulley.png",
    title: "PULLEYS",
    description: ["Zinc-coated steel construction"],
  },
  "4-cast-iron": {
    label: '4" Cast Iron Pulley',
    image: "/images/pulleys/4CastIronPulley.png",
    title: "PULLEYS",
    description: ["Heavy-duty 4-inch cast iron body"],
  },
  "4-steel": {
    label: '4" Steel Pulley',
    image: "/images/pulleys/4Steelpulley.png",
    title: "PULLEYS",
    description: ["Sturdy steel 4-inch pulley"],
  },
  "4-steel-stud": {
    label: '4" Steel Stud Pulley',
    image: "/images/pulleys/4steelstudpulley.png",
    title: "PULLEYS",
    description: ["4-inch pulley with welded steel stud"],
  },
  "5-steel-stud": {
    label: '5" Steel Stud Pulley',
    image: "/images/pulleys/5steelstudpulley.png",
    title: "PULLEYS",
    description: ["Oversized 5-inch steel stud pulley"],
  },
};

const forkList: { [key: string]: PulleyInfo } = {
  "3-fork": {
    label: '3" Fork',
    image: "/images/pulleys/3Fork.png",
    title: "FORKS",
    description: [],
  },
  "3-safety-fork": {
    label: '3" Safety Fork',
    image: "/images/pulleys/3SafetyFork.png",
    title: "FORKS",
    description: ["Nylon bushing for restraint cable"],
  },
  "4-fork": {
    label: '4" Fork',
    image: "/images/pulleys/4Fork.png",
    title: "FORKS",
    description: [],
  },
};

const collarCouplingList: { [key: string]: PulleyInfo } = {
  '1" COLLAR': {
    label: '3" Fork',
    image: "/images/pulleys/3Fork.png",
    title: "FORKS",
    description: ["3-inch fork bracket"],
  },
  '1-1/4" COLLAR': {
    label: '3" Safety Fork',
    image: "/images/pulleys/3SafetyFork.png",
    title: "FORKS",
    description: ["Safety locking mechanism included"],
  },
  '1" COUPLING': {
    label: '3" Fork',
    image: "/images/pulleys/3Fork.png",
    title: "FORKS",
    description: ["3-inch fork bracket"],
  },
  '1-1/4" COUPLING': {
    label: '3" Safety Fork',
    image: "/images/pulleys/3SafetyFork.png",
    title: "FORKS",
    description: ["Safety locking mechanism included"],
  },
};

export default function Pulleys() {
  return (
    <CatalogLayout
      title={"HARDWARE\n PULLEYS & FORKS"}
      bgcolor={"bg-red-800"}
      textcolor={"text-red-800"}
    >
      {/* MAIN FLEX ROW: LEFT = Collar+Pulley, RIGHT = Forks */}
      <div className="relative">
        {/* LEFT COLUMN */}
        <div className="flex flex-col  ">
          {/* Collar & Couplings */}
          <section className="w-[80%] p-5 ">
            <h1 className="font-bold text-[28px] text-red-800 ">
              COLLAR & COUPLING
            </h1>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(collarCouplingList).map(([key, value]) => (
                <PulleyBox key={key} id={key} description={value} />
              ))}
            </div>
          </section>

          {/* Pulleys */}
          <section className="mt-10 mx-5">
            <h1 className="font-bold text-[28px] text-red-800 ">PULLEYS</h1>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(pulleyList).map(([key, value]) => (
                <PulleyBox key={key} id={key} description={value} />
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: FORKS */}
        <aside className="flex flex-col justify-center items-center   w-[30%]   pt-5 absolute top-0 right-0 ">
          <div className="">
            <h1 className="font-bold text-[28px] text-red-800">FORK</h1>
            <h2 className="font-bold text-[14px] text-gray-600">
              FASTENERS SOLD SEPARATELY
            </h2>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            {Object.entries(forkList).map(([key, value]) => (
              <PulleyBox key={key} id={key} description={value} />
            ))}
          </div>
        </aside>
      </div>
    </CatalogLayout>
  );
}
