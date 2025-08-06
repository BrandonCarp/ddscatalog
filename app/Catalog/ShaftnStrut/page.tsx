import Image from "next/image";
import StrutBox from "@/components/Strut/StrutBox";
import CatalogLayout from "../../components/CatalogLayout"

type PartItem = {
  code: string;
  label: string;
  feature?: string;
  image?: string;
  description: string[];
}


const tubeShafts: PartItem[] = [
  {
    code: "TS-8-1",
    label: "TUBE SHAFT",
    feature: "GALVANZIED",
    image: "/images/ShaftStrut/tubeshaft.png",
    description: [
      '1" TUBE SHAFT, 8\'9" - TS-8-1',
      '1" TUBE SHAFT, 9\'9" - TS-9-1',
      '1" TUBE SHAFT, 10\'9" - TS-10-1',
      '1" TUBE SHAFT, 12\'9" - TS-12-1',
      '1" TUBE SHAFT, 14\'9" - TS-14-1',
      '1" TUBE SHAFT, 15\'9" - TS-15-1',
      '1" TUBE SHAFT, 16\'9" - TS-16-1',
      '1" TUBE SHAFT, 16\'9" HEAVY - TS-16H-1',
      '1" TUBE SHAFT, 18\'9" HEAVY - TS-18H-1',
    ],
  },
];

const solidShafts: PartItem[] = [
  {
    code: "SS-12-1",
    label: "SOLID SHAFT",
    image: "/images/ShaftStrut/solidshaft.png",
    description: [
      '1" SOLID SHAFT, 12\'6" - SS-12-1',
      '1" SOLID SHAFT, 21\'0" - SS-21-1',
      '1.25" SOLID SHAFT, 12\'6" - SS-12-125',
      '1.25" SOLID SHAFT, 17\'6" - SS-17-125',
    ],
  },
];

const struts2: PartItem[] = [
  {
    code: "ST-8-2",
    label: '2-1/4" STRUTS',
    image: "/images/ShaftStrut/struts.png",
    description: [
      '2-1/4" STRUT 8\' - ST-8-2',
      '2-1/4" STRUT 9\' - ST-9-2',
      '2-1/4" STRUT 10\' - ST-10-2',
      '2-1/4" STRUT 12\' - ST-12-2',
      '2-1/4" STRUT 14\' - ST-14-2',
      '2-1/4" STRUT 15\' - ST-15-2',
      '2-1/4" STRUT 16\' - ST-16-2',
      '2-1/4" STRUT 18\' - ST-18-2',
    ],}
];

const struts3: PartItem[] = [
  {
    code: "ST-16-3",
    label: '3" STRUTS',
    
    description: [
      '3" STRUT 16\' - ST-16-3',
      '3" STRUT 18\' - ST-18-3',
      '3" STRUT 20\' - ST-20-3',
      '3" STRUT 24\' - ST-24-3',
    ],
  },
];

const CollarList: PartItem[] = [
  {
    code: "COL-1-1",
    label: '1" COLLAR',
    image: "/images/ShaftStrut/collar.png",
    description: ['1" COLLAR - COL-1-1',
      '1-1/4" COLLAR - COL-1-125'
    ],
  },
];

const CouplingList: PartItem[] = [
  {
    code: "CL-1-1",
    label: '1" COUPLING',
    image: "/images/ShaftStrut/coupling.png",
    description: ['1" COUPLING - CL-1-1',
      '1-1/4" COUPLING - CL-1-125'
    ],
  },
];



export default function ShaftnStrut() {
  return (
    <CatalogLayout title={`TUBE SHAFTS \n& STRUTS`} bgcolor="bg-teal-800" textcolor="text-teal-800">
      <div className="grid grid-cols-2 gap-6 p-5 ">

     

        {/* Shafts */}
        <section className="flex border-r ">
          <div className="leading-tight ">
            <h1 className="text-2xl font-bold text-teal-800 ">TUBE SHAFTS</h1>
            <h3 className="font-bold text-gray-700 mb-6">GALVANIZED</h3>
            {tubeShafts.map((part) => (
              <StrutBox key={part.code} part={part} />
            ))}
           
          </div>
          <div>
            <h1 className="text-2xl font-bold text-teal-800 mb-6">SOLID SHAFTS</h1>
            {solidShafts.map((part) => (
              <StrutBox key={part.code} part={part} />
            ))}
           
          </div>
         
        </section>

        {/* Struts */}
        <section className="flex space-x-10 border-b pb-2">
          <div>
            <h1 className="text-2xl font-bold text-teal-800 mb-6 pt-20">2" STRUTS</h1>
            {struts2.map((part) => (
              <StrutBox key={part.code} part={part} />
            ))}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-teal-800 mb-6 pt-20">3" STRUTS</h1>
            {struts3.map((part) => (
              <StrutBox key={part.code} part={part} />
            ))}
          </div>
        </section>

               {/* Collars and Couplings */}
        <section className="flex justify-between">
          <div className="mr-20">
            <h1 className="text-2xl font-bold text-teal-800 mb-6">COLLARS</h1>
            {CollarList.map((part) => (
              <StrutBox key={part.code} part={part} />
            ))}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-teal-800 mb-6">COUPLINGS</h1>
            {CouplingList.map((part) => (
              <StrutBox key={part.code} part={part} />
            ))}
          </div>
          <Image
                      src="/images/ShaftStrut/shafts.png"
                      alt="shafts"
                      width={500}
                      height={200}
                      className="object-contain ml-20 rotate-180"
                    />
        </section>

      </div>
    </CatalogLayout>
  );
}


// Fuel gauges indicate, often with fractions, just how much fuel is in a tank. For instance 1/4 indicates that a tank is 25% full, 1/2 indicates that a tank is 50% full, and 3/4 indicates that a tank is 75% full.

// In a file called fuel.py, implement a program that prompts the user for a fraction, formatted as X/Y, wherein each of X and Y is a positive integer, and then outputs, as a percentage rounded to the nearest integer, how much fuel is in the tank. If, though, 1% or less remains, output E instead to indicate that the tank is essentially empty. And if 99% or more remains, output F instead to indicate that the tank is essentially full.

// If, though, X or Y is not an integer, X is greater than Y, or Y is 0, instead prompt the user again. (It is not necessary for Y to be 4.) Be sure to catch any exceptions like ValueError or ZeroDivisionError.