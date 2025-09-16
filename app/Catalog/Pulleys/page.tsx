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
  FRK_GROUP: {
    label: '3" & 4" Forks',
    image: "/images/pulleys/3Fork.png",
    title: "FORKS",
    description: ['3" Fork  - FRK300', '4" Fork  - FRK400'],
  },
};

const hdwList: { [key: string]: PulleyInfo } = {
  "3HC": {
    label: "3-Hole Clips",
    image: "/images/pulleyhdw/3holeclip.png",
    title: "3-Hole Clip",
    description: ["Durable 3-Hole Clip", "Bag of 100"],
  },
  SHK: {
    label: "S Hooks",
    image: "/images/pulleyhdw/shook.png",
    title: "S Hook",
    description: ["Durable S Hook", "Bag of 25"],
  },
  EB35: {
    label: "5/16 x 3-1/2 Eyebolts with Nuts",
    image: "/images/pulleyhdw/eyebolt.png",
    title: "Eyebolt with Nut",
    description: ["5/16 x 3-1/2 Eyebolt", "Includes Nuts", "Bag of 25"],
  },
};

export default function Pulleys() {
  return (
    <CatalogLayout
      title={"HARDWARE\n PULLEYS & FORKS"}
      pagenum="22"
      reverseFooter
    >
      <div className="mx-5 ">
        {/* Pulleys */}
        <section className="py-3">
          <h1 className="font-bold text-[28px] text-red-900 ">PULLEYS</h1>
          <div className="grid grid-cols-4 gap-5 p-3 ">
            {Object.entries(pulleyList).map(([key, value]) => (
              <PulleyBox key={key} id={key} description={value} />
            ))}
          </div>
        </section>
        {/* HDW */}
        <section className="border-t p-2">
          <h1 className="font-bold text-[28px] text-red-900 ">HARDWARE</h1>
          <div className="grid grid-cols-3 ">
            {Object.entries(hdwList).map(([key, value]) => (
              <PulleyBox key={key} id={key} description={value} />
            ))}
          </div>
        </section>
        {/* Forks */}
        <section className="flex flex-col justify-center items-center border-t py-1">
          <div className="">
            <h1 className="font-bold text-[28px] text-red-900">FORKS</h1>
            <h2 className="font-bold text-[15px] text-gray-600">
              FASTENERS SOLD SEPARATELY
            </h2>
          </div>
          <div className="grid grid-cols-2">
            {Object.entries(forkList).map(([key, value]) => (
              <PulleyBox key={key} id={key} description={value} />
            ))}
          </div>
        </section>
      </div>
    </CatalogLayout>
  );
}
