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
      `Cable length: Floor to shaft \n+63" minus amount of hi-lift`,
    ],
  },
  D40012: {
    label: "400-12",
    image: "/images/drums/400-12.jpg",
    description: [
      "Maxiumum door height: 12'",
      "Capacity: 375 lbs per drum",
      'Cable length: Floor to shaft \ncenter +8"',
    ],
  },
  D525018: {
    label: "5250-18",
    image: "/images/drums/5250-18.jpg",
    description: [
      `Maximum door height: 19'3"`,
      "Capacity: 1,100 lbs per drum",
      'Maximum cable size: 1/4"',
      'Cable length: Floor to \nshaft center +14"',
    ],
  },
  D40054: {
    label: "400-54",
    image: "/images/drums/400-54.jpg",
    description: [
      "Maximum door height: 32'",
      "Capacity: 1,100 lbs per drum",
      'Maximum cable size: 1/4"',
      'Cable length: Floor to \nshaft +14"',
    ],
  },
};

const highList: { [key: string]: DrumInfo } = {
  D525054: {
    label: "5250-54",
    image: "/images/drums/5250-54.jpg",
    description: [
      "Maximum door height: 8'",
      "Capacity: 265 lbs per drum",
      `Maximum cable size: 1/8"`,
      `Cable length: Floor to shaft \n+63" minus amount of hi-lift`,
    ],
  },
  D5750120: {
    label: "5750-120",
    image: "/images/drums/5750-120.jpg",
    description: [
      "Maximum door height: 8'",
      "Capacity: 265 lbs per drum",
      `Maximum cable size: 1/8"`,
      `Cable length: Floor to shaft \n+63" minus amount of hi-lift`,
    ],
  },
};

const vertList: { [key: string]: DrumInfo } = {
  D110018: {
    label: "1100-18",
    image: "/images/drums/1100-18.jpg",
    description: [
      "Maximum door height: 28'",
      "Capacity: 800lbs per drum",
      'Maximum cable size: 1/4"',
      'Cable length: Floor to shaft  \ncenter +181"',
    ],
  },
  D85011: {
    label: "850-11",
    image: "/images/drums/850-11.jpg",
    description: [
      "Maximum door height: 8'",
      "Capacity: 265 lbs per drum",
      `Maximum cable size: 1/8"`,
      `Cable length: Floor to shaft \n+63" minus amount of hi-lift`,
    ],
  },
};

export default function Drums() {
  return (
    <CatalogLayout title={"Drums"} pagenum="7">
      <div className="px-5 mt-10">
        {/* STANDARD LIFT */}
        <div className="mt-2 py-1">
          <div>
            <h1 className="font-bold text-[26px] text-red-800">
              STANDARD LIFT
            </h1>
            <h5 className="font-semibold text-xs text-slate-600">
              SOLD IN PAIRS
            </h5>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-1">
            {Object.entries(drumList).map(([key, value]) => (
              <ItemBox key={key} id={key} description={value} />
            ))}
          </div>
        </div>

        {/* HI-LIFT + VERTICAL LIFT */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* HI-LIFT */}
          <div>
            <h1 className="font-bold text-[26px] text-red-800">HI-LIFT</h1>
            <h5 className="font-semibold text-xs text-slate-600">
              SOLD IN PAIRS
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-1">
              {Object.entries(highList).map(([key, value]) => (
                <ItemBox key={key} id={key} description={value} />
              ))}
            </div>
          </div>

          {/* VERTICAL LIFT */}
          <div>
            <h1 className="font-bold text-[26px] text-red-800">
              VERTICAL LIFT
            </h1>
            <h5 className="font-semibold text-xs text-slate-600">
              SOLD IN PAIRS
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-1">
              {Object.entries(vertList).map(([key, value]) => (
                <ItemBox key={key} id={key} description={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CatalogLayout>
  );
}
