import CatalogLayout from "@/components/CatalogLayout";
import ItemBox from "@/components/Drums/DrumBox";

type DrumInfo = {
  label: string;
  image: string;
  description: string[];
};

const drumList: { [key: string]: DrumInfo } = {
  D4008: {
    label: "400-8",
    image: "/images/drums/400-8.jpg",
    description: [
      "Maximum door height: 8'",
      "Capacity: 265 lbs per drum",
      `Maximum cable size: 1/8"`,
    ],
  },
  D40012: {
    label: "400-12",
    image: "/images/drums/400-12.jpg",
    description: ["Maxiumum door height: 12'", "Capacity: 375 lbs per drum"],
  },
  D525018: {
    label: "5250-18",
    image: "/images/drums/5250-18.jpg",
    description: [
      `Maximum door height: 19'3"`,
      "Capacity: 750 lbs per drum",
      'Maximum cable size: 3/16"',
    ],
  },
};

const highList: { [key: string]: DrumInfo } = {
  D40054: {
    label: "400-54",
    image: "/images/drums/400-54.jpg",
    description: [
      `Maximum High Lift 54"`,
      "Capacity: 275 lbs per drum",
      'Maximum cable size: 5/32"',
    ],
  },
  D525054: {
    label: "5250-54",
    image: "/images/drums/5250-54.jpg",
    description: [
      `Maximum Hight Lift 54"`,
      "Capacity: 500 lbs per drum",
      `Maximum cable size: 3/16"`,
    ],
  },
  D5750120: {
    label: "5750-120",
    image: "/images/drums/5750-120.jpg",
    description: [
      `Maximum High Lift 120"`,
      "Capacity: 500 lbs per drum",
      `Maximum cable size: 3/16"`,
    ],
  },
};

const vertList: { [key: string]: DrumInfo } = {
  D85011: {
    label: "850-11",
    image: "/images/drums/850-11.jpg",
    description: [
      "Maximum door height: 11'",
      "Capacity: 425 lbs per drum",
      `Maximum cable size: 3/16"`,
    ],
  },
  D110018: {
    label: "1100-18",
    image: "/images/drums/1100-18.jpg",
    description: [
      "18' Vertical High Lift",
      "Capacity: 600lbs per drum",
      'Maximum cable size: 3/16"',
    ],
  },
};

export default function Drums() {
  return (
    <CatalogLayout title={"DRUMS"} pagenum="22" reverseFooter>
      <div className="px-5 mt-4 space-y-2">
        {/* STANDARD LIFT */}
        <div className="mt-2 py-1">
          <div>
            <h1 className="font-black text-[26px] text-red-900">
              STANDARD LIFT
            </h1>
            <h5 className="font-semibold  text-slate-600">SOLD IN PAIRS</h5>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-1">
            {Object.entries(drumList).map(([key, value]) => (
              <ItemBox key={key} id={key} description={value} />
            ))}
          </div>
        </div>

        {/* HI-LIFT + VERTICAL LIFT */}
        {/* <div className="border-t w-[70%]" /> */}
        {/* HI-LIFT */}
        <div className="">
          <div>
            <h1 className="font-black text-[26px] text-red-900">HI-LIFT</h1>
            <h5 className="font-semibold  text-slate-600">SOLD IN PAIRS</h5>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-1">
            {Object.entries(highList).map(([key, value]) => (
              <ItemBox key={key} id={key} description={value} />
            ))}
          </div>
        </div>

        {/* VERTICAL LIFT */}
        <div className="flex  flex-col  ">
          <h1 className="font-black text-[26px] text-red-800">VERTICAL LIFT</h1>
          <h5 className="font-semibold  text-slate-600 ">SOLD IN PAIRS</h5>
          <div className="grid grid-cols-3 gap-2 mt-1">
            {Object.entries(vertList).map(([key, value]) => (
              <ItemBox key={key} id={key} description={value} />
            ))}
          </div>
        </div>
      </div>
    </CatalogLayout>
  );
}
