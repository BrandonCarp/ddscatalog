import RollerBox from "@/components/Rollers/RollerBox";
import CatalogLayout from "../../components/CatalogLayout";
import Image from "next/image";

type rollerInfo = {
  label: string;
  title: string;
  image: string;
  description: string[];
};

// 2" Nylon Rollers
const rollerList2Nylon: { [key: string]: rollerInfo } = {
  '2" SHORT STEM NYLON, 4"': {
    label: "SS2N4",
    title: `2" NYLON ROLLERS`,
    image: "/images/rollers/SN-4-2.jpg",
    description: ["Rating: 50 lbs per roller at 10,000 8' door cycles"],
  },
  '2" LONG STEM NYLON, 7"': {
    label: "SS2N7",
    title: ``,
    image: "/images/rollers/LN-7-2.jpg",
    description: ["Rating: 50 lbs per roller at 10,000 8' door cycles"],
  },
};

// 2" Steel Rollers
const rollerList2Steel: { [key: string]: rollerInfo } = {
  '2" SHORT STEM STEEL, 4"': {
    label: "SS2S4",
    title: `2" STEEL ROLLERS`,
    image: "/images/rollers/SS-4-2.jpg",
    description: ["Rating: 50 lbs per roller at 10,000 8' door cycles"],
  },
  '2" LONG STEM STEEL, 7"': {
    label: "SS2S7",
    title: ``,
    image: "/images/rollers/LS-7-2.jpg",
    description: ["Rating: 50 lbs per roller at 10,000 8' door cycles"],
  },
  '2" LONG STEM STEEL, 9"': {
    label: "SS2S9",
    title: ``,
    image: "/images/rollers/LS-7-2.jpg",
    description: ["Rating: 50 lbs per roller at 10,000 8' door cycles"],
  },
};

// 3" Nylon Rollers
const rollerList3Nylon: { [key: string]: rollerInfo } = {
  '3" SHORT STEM NYLON, 4"': {
    label: "SS3N4",
    title: `3" NYLON ROLLERS`,
    image: "/images/rollers/SN-4-2.jpg",
    description: ["Rating: 50 lbs per roller at 10,000 8' door cycles"],
  },
  '3" LONG STEM NYLON, 7"': {
    label: "SS3N7",
    title: ``,
    image: "/images/rollers/LN-7-2.jpg",
    description: ["Rating: 50 lbs per roller at 10,000 8' door cycles"],
  },
};

// 3" Steel Rollers
const rollerList3Steel: { [key: string]: rollerInfo } = {
  '3" SHORT STEM STEEL, 4"': {
    label: "SS3S4",
    title: `3" STEEL ROLLERS`,
    image: "/images/rollers/SS-4-2.jpg",
    description: ["Rating: 50 lbs per roller at 10,000 8' door cycles"],
  },
  '3" LONG STEM STEEL, 7"': {
    label: "SS3S7",
    title: ``,
    image: "/images/rollers/LS-7-2.jpg",
    description: ["Rating: 50 lbs per roller at 10,000 8' door cycles"],
  },
};

export default function Rollers() {
  return (
    <>
      <CatalogLayout title={"ROLLERS"} pagenum="7">
        <div className="flex flex-col mb-1">
          <h1 className="text-3xl text-red-900  font-black p-3 ml-20">
            ROLLERS
          </h1>
          {/* Parent Container */}
          <div className="flex flex-col justify-center items-center ">
            <div className="flex space-x-5">
              {/* 2" Nylon */}
              <div className="flex flex-col items-center ">
                {Object.entries(rollerList2Nylon).map(([key, value]) => (
                  <RollerBox key={key} id={key} description={value} />
                ))}
              </div>
              {/* 3" Nylon */}
              <div className="flex flex-col items-center ">
                {Object.entries(rollerList3Nylon).map(([key, value]) => (
                  <RollerBox key={key} id={key} description={value} />
                ))}
              </div>
            </div>
            {/* 3" Rollers */}
            <div className="flex space-x-5">
              {/* 2" Steel */}
              <div className="flex flex-col items-center ">
                {Object.entries(rollerList2Steel).map(([key, value]) => (
                  <RollerBox key={key} id={key} description={value} />
                ))}
              </div>
              {/* 3" Steel */}
              <div className="flex flex-col items-center ">
                {Object.entries(rollerList3Steel).map(([key, value]) => (
                  <RollerBox key={key} id={key} description={value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
