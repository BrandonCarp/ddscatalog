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
  PUL3CI: {
    label: '3" Cast Iron Pulley',
    image: "/images/pulleys/3CastIronPulley.png",
    title: "PULLEYS",
    description: ["Durable 3-inch cast iron body"],
  },
  PUL3GD: {
    label: '3" Gold Pulley',
    image: "/images/pulleys/3GoldPulley.png",
    title: "PULLEYS",
    description: ["3-inch anodized gold finish"],
  },
  PUL3ST: {
    label: '3" Steel Pulley',
    image: "/images/pulleys/3SteelPulley.png",
    title: "PULLEYS",
    description: ["Zinc-coated steel construction"],
  },
  PUL4CI: {
    label: '4" Cast Iron Pulley',
    image: "/images/pulleys/4CastIronPulley.png",
    title: "PULLEYS",
    description: ["Heavy-duty 4-inch cast iron body"],
  },
  PUL4ST: {
    label: '4" Steel Pulley',
    image: "/images/pulleys/4Steelpulley.png",
    title: "PULLEYS",
    description: ["Sturdy steel 4-inch pulley"],
  },
  PUL4SD: {
    label: '4" Steel Stud Pulley',
    image: "/images/pulleys/4steelstudpulley.png",
    title: "PULLEYS",
    description: ["4-inch pulley with welded steel stud"],
  },
  PUL5SD: {
    label: '5" Steel Stud Pulley',
    image: "/images/pulleys/5steelstudpulley.png",
    title: "PULLEYS",
    description: ["Oversized 5-inch steel stud pulley"],
  },
};

const forkList: { [key: string]: PulleyInfo } = {
  FRK300: {
    label: '3" Fork',
    image: "/images/pulleys/3Fork.png",
    title: "FORKS",
    description: [`Sheave Fork for 3" Extension Spring Pulley`],
  },
  SFRK03: {
    label: '3" Safety Fork',
    image: "/images/pulleys/3SafetyFork.png",
    title: "FORKS",
    description: ["Nylon bushing for restraint cable"],
  },
  FRK400: {
    label: '4" Fork',
    image: "/images/pulleys/4Fork.png",
    title: "FORKS",
    description: ['4" Fork For Pulley'],
  },
};

export default function Pulleys() {
  return (
    <CatalogLayout title={"HARDWARE\n PULLEYS & FORKS"} pagenum="6">
      <div className="flex flex-col items-center justify-center   ">
        {/* Forks */}
        <section className="p-3 ">
          <div className="">
            <h1 className="font-bold text-[28px] text-red-800">FORK</h1>
            <h2 className="font-bold text-[14px] text-gray-600">
              FASTENERS SOLD SEPARATELY
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-2">
            {Object.entries(forkList).map(([key, value]) => (
              <PulleyBox key={key} id={key} description={value} />
            ))}
          </div>
        </section>

        {/* Pulleys */}
        <section className=" mx-5">
          <h1 className="font-bold text-[28px] text-red-800 ">PULLEYS</h1>
          <div className="grid grid-cols-4 gap-4 mt-2">
            {Object.entries(pulleyList).map(([key, value]) => (
              <PulleyBox key={key} id={key} description={value} />
            ))}
          </div>
        </section>
      </div>
    </CatalogLayout>
  );
}
