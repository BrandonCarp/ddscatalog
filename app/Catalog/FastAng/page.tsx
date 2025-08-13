import Image from "next/image";
import FastAngBox from "@/components/FastAng/FastAngBox";
import CatalogLayout from "../../components/CatalogLayout"

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
      '1/4" X 1" WOOD LAGS - F-1-L',
      '5/16" X 1-5/8" LAGS - F-5-L',
      '5/16" X 3" LAGS - F-5-3L',
    ],
  },
  {
    code: "F-TEK-SCREWS",
    label: "TEK SCREWS",
    image: "/images/AngleFastern/tekscrew.png",
    description: [
      '1/4" X 1" TEK - F-1-T',
      '1/4" X 3/4" TEK - F-3-T',
      '5/16" X 1" TEK - F-5-T',
    ],
  },
  {
    code: "F-BOLTS",
    label: "BOLTS",
    image: "/images/AngleFastern/bolt.png",
    description: [
      '1/4" TRACK BOLTS - F-1-TB',
      '3/8" X 1-1/2" BOLTS - F-3-B',
      '5/16" X 1" BOLTS - F-5-B',
    ],
  },
  {
    code: "F-CARRIAGE-BOLTS",
    label: "CARRIAGE BOLTS",
    image: "/images/AngleFastern/carriagebolt.png",
    description: [
      '3/8" X 3/4"  - F-3-CB',
    ],
  },
  {
    code: "F-NUTS",
    label: "NUTS",
    image: "/images/AngleFastern/nuts.png",
    description: [
      '1/4" TRACK NUTS - F-1-TN',
      '3/8" NUTS - F-3-N',
      '5/16" NUTS - F-5-N',
    ],
  },
  {
    code: "F-WASHERS",
    label: "FLAT WASHERS",
    image: "/images/AngleFastern/washer.png",
    description: [
      '3/8" FLAT WASHERS - F-3-FW',
      '5/16" FLAT WASHERS - F-5-FW',
    ],
  },
];

const angles: PartItem[] = [
  {
    code: "GA-1-1/4-8",
    label: "GALV ANGLE",
    image: "/images/AngleFastern/galvangle.png",
    description: [
      '1-1/4" X 1-1/4" X 8FT - GA-1-1/4-8',
      '2" X 2" X 10FT - GA-2-2-10',
    ],
  },
  {
    code: "WA-1-1/4-8",
    label: "WHITE ANGLE",
    image: "/images/AngleFastern/whiteangle.png",
    description: [
      '1-1/4" X 1-1/4" X 8FT - WA-1-1/4-8'
    ],
  },
];



export default function FastAng(){
  return (
   <>
      <CatalogLayout title={`FASTENERS \n& ANGLES`} bgcolor="bg-teal-800" textcolor="text-teal-800">
        <div className="relative w-full h-60">  <Image
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
 <h1 className="text-4xl font-bold text-teal-800 ml-5 mt-5 mb-5">FASTENERS</h1>

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
 