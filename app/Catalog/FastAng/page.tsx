import Image from "next/image";
import FastAngBox from "@/components/FastAng/FastAngBox";
import CatalogLayout from "../../components/CatalogLayout";

type PartItem = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

const fasteners: PartItem[] = [
  {
    code: "F-WOOD-LAGS",
    label: "WOOD LAGS",
    image: "/images/AngleFastern/woodlag.png",
    description: [
      '1/4" X 1" WOOD LAGS - WLAG1',
      '5/16" X 1-5/8" LAGS - WLAG5',
      '5/16" X 3" LAGS - WLAG3',
    ],
  },
  {
    code: "F-TEK-SCREWS",
    label: "TEK SCREWS",
    image: "/images/AngleFastern/tekscrew.png",
    description: [
      '1/4" X 1" TEK - TEK01',
      '1/4" X 3/4" TEK - TEK34',
      '5/16" X 1" TEK - TEK05',
    ],
  },
  {
    code: "F-BOLTS",
    label: "BOLTS",
    image: "/images/AngleFastern/bolt.png",
    description: [
      '1/4" TRACK BOLTS - TRKBT',
      '3/8" X 1-1/2" BOLTS - BT38',
      '5/16" X 1" BOLTS - BT05',
    ],
  },
  {
    code: "F-CARRIAGE-BOLTS",
    label: "CARRIAGE BOLTS",
    image: "/images/AngleFastern/carriagebolt.png",
    description: ['3/8" X 3/4"  - CB338'],
  },
  {
    code: "F-NUTS",
    label: "NUTS",
    image: "/images/AngleFastern/nuts.png",
    description: [
      '1/4" TRACK NUTS - TRKNT',
      '3/8" NUTS - NUT38',
      '5/16" NUTS - NUT05',
    ],
  },
  {
    code: "F-WASHERS",
    label: "FLAT WASHERS",
    image: "/images/AngleFastern/washer.png",
    description: ['3/8" FLAT WASHERS - WASH38', '5/16" FLAT WASHERS - WASH05'],
  },
];

const angles: PartItem[] = [
  {
    code: "GA-1-1/4-8",
    label: "GALV ANGLE",
    image: "/images/AngleFastern/galvangle.png",
    description: ['1-1/4" X 1-1/4" X 8FT - GALVA', '2" X 2" X 10FT - COMMA'],
  },
  {
    code: "WA-1-1/4-8",
    label: "WHITE ANGLE",
    image: "/images/AngleFastern/whiteangle.png",
    description: ['1-1/4" X 1-1/4" X 8FT - WHITA'],
  },
];

export default function FastAng() {
  return (
    <>
      <CatalogLayout title={`FASTENERS \n& ANGLES`} pagenum="10">
        <div className="relative w-full h-60">
          {" "}
          <Image
            src="/images/anglefastern/gdangle.png"
            alt="Operator Hero"
            fill
            className="object-cover "
            priority
          />
        </div>
        <div className="flex items-center">
          {/* Fasterns */}
          <div className="p-1 w-[100%]  border-r  my-3">
            <h1 className="text-4xl font-bold text-teal-800 ml-5 mt-5 mb-5">
              FASTENERS
            </h1>

            <div className="grid grid-cols-3 gap-10 px-4">
              {fasteners.map((part) => (
                <FastAngBox key={part.code} part={part} />
              ))}
            </div>
          </div>
          {/* Angle */}

          <div className="flex flex-col  justify-center items-center  p-3      w-[35%]">
            <h1 className="text-4xl font-bold text-teal-800   ">ANGLE</h1>

            <div className="flex flex-col  mt-5">
              {angles.map((part) => (
                <FastAngBox key={part.code} part={part} />
              ))}
            </div>
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
