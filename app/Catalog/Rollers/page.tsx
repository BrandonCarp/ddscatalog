import RollerBox from "@/components/Rollers/RollerBox";
import CatalogLayout from "../../components/CatalogLayout";
import Image from "next/image";
// import rollers from "/images/Rollers/rollers.png"

type rollerInfo = {
  label: string;
  title: string;
  image: string;
  description: string[];
};

const rollerList: { [key: string]: rollerInfo } = {
  '2" SHORT STEM NYLON, 4"': {
    label: "SN-4-2",
    title: `2" NYLON ROLLERS`,
    image: "/images/rollers/SN-4-2.jpg",
    description: [
      "Rating: 50 lbs per \n      roller at 10,000 8'\n       door cycles",
    ],
  },
  '2" LONG STEM NYLON, 7"': {
    label: "LN-7-2",
    title: "",
    image: "/images/rollers/LN-7-2.jpg",
    description: [
      "Rating: 50 lbs per \n      roller at 10,000 8'\n       door cycles",
    ],
  },
};

const rollerList2: { [key: string]: rollerInfo } = {
  '2" SHORT STEM STEEL, 4"': {
    label: "SS-4-2",
    title: "",
    image: "/images/rollers/SS-4-2.jpg",
    description: [
      "Rating: 50 lbs per \n      roller at 10,000 8'\n       door cycles",
    ],
  },
  '2" LONG STEM STEEL, 7"': {
    label: "LS-7-2",
    title: ``,
    image: "/images/rollers/LS-7-2.jpg",
    description: [
      "Rating: 50 lbs per \n      roller at 10,000 8'\n       door cycles",
    ],
  },
  '2" LONG STEM STEEL, 9"': {
    label: "LS-9-2",
    title: ``,
    image: "/images/rollers/LS-7-2.jpg",
    description: [
      "Rating: 50 lbs per \n      roller at 10,000 8'\n       door cycles",
    ],
  },
};

const rollerList3: { [key: string]: rollerInfo } = {
  '3" SHORT STEM NYLON, 4"': {
    label: "SN-4-3",
    title: `3" NYLON ROLLERS`,
    image: "/images/rollers/SN-4-2.jpg",
    description: [
      "Rating: 50 lbs per \n      roller at 10,000 8'\n       door cycles",
    ],
  },
  '3" LONG STEM NYLON, 7"': {
    label: "LN-7-3",
    title: ``,
    image: "/images/rollers/LN-7-2.jpg",
    description: [
      "Rating: 50 lbs per \n      roller at 10,000 8'\n       door cycles",
    ],
  },
  '3" SHORT STEM STEEL, 4"': {
    label: "SS-4-3",
    title: ``,
    image: "/images/rollers/SS-4-2.jpg",
    description: [
      "Rating: 50 lbs per \n      roller at 10,000 8'\n       door cycles",
    ],
  },
  '3" LONG STEM STEEL, 7"': {
    label: "LS-7-3",
    title: ``,
    image: "/images/rollers/LS-7-2.jpg",
    description: [
      "Rating: 50 lbs per \n      roller at 10,000 8'\n       door cycles",
    ],
  },
};

export default function Rollers() {
  return (
    <>
      <CatalogLayout
        title={"Rollers"}
        bgcolor="bg-blue-800"
        textcolor="text-blue-800"
      >
        <div className="relative w-full h-56 overflow-hidden ">
          {" "}
          <Image
            src="/images/Rollers/house.png"
            alt="rollers"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
        <div className="px-10  text-sm">
          <div className="py-1">
            <div className="grid grid-cols-4  mt-1">
              {Object.entries(rollerList).map(([key, value]) => (
                <RollerBox key={key} id={key} description={value} />
              ))}
              {Object.entries(rollerList2).map(([key, value]) => (
                <RollerBox key={key} id={key} description={value} />
              ))}
            </div>
            {/* 3" Rollers */}
            <div className="grid grid-cols-4  mt-1">
              {Object.entries(rollerList3).map(([key, value]) => (
                <RollerBox key={key} id={key} description={value} />
              ))}
            </div>
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
