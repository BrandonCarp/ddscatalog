import Image from "next/image";
import StrutBox from "@/components/Strut/StrutBox";
import CatalogLayout from "../../components/CatalogLayout";

type PartItem = {
  code: string;
  label: string;
  feature?: string;
  image?: string;
  description: string[];
};

const tubeShafts: PartItem[] = [
  {
    code: "TBSH08",
    label: "TUBE SHAFT",
    feature: "GALVANZIED",
    image: "/images/ShaftStrut/tubeshaft.png",
    description: [
      '1" TUBE SHAFT, 8\'9" - TBSH08',
      '1" TUBE SHAFT, 9\'9" - TBSH09',
      '1" TUBE SHAFT, 10\'9" - TBSH10',
      '1" TUBE SHAFT, 12\'9" - TBSH12',
      '1" TUBE SHAFT, 14\'9" - TBSH14',
      '1" TUBE SHAFT, 15\'9" - TBSH15',
      '1" TUBE SHAFT, 16\'9" - TBSH16',
      '1" TUBE SHAFT, 16\'9" HEAVY - TBSH16H',
      '1" TUBE SHAFT, 18\'9" HEAVY - TBSH18H',
    ],
  },
];

const solidShafts: PartItem[] = [
  {
    code: "SS-12-1",
    label: "SOLID SHAFT",
    image: "/images/ShaftStrut/solidshaft.png",
    description: [
      '1" SOLID SHAFT, 12\'6" - SLTB10012',
      '1" SOLID SHAFT, 21\'0" - SLTB10021',
      '1.25" SOLID SHAFT, 12\'6" - SLTB12512',
      '1.25" SOLID SHAFT, 17\'6" - SLTB12517',
    ],
  },
];

const struts2: PartItem[] = [
  {
    code: "STRT08",
    label: '2-1/4" STRUTS',
    image: "/images/ShaftStrut/struts.png",
    description: [
      "2-1/4\" STRUT 8' - STRT08",
      "2-1/4\" STRUT 9' - STRT09",
      "2-1/4\" STRUT 10' - STRT10",
      "2-1/4\" STRUT 12' - STRT12",
      "2-1/4\" STRUT 14' - STRT14",
      "2-1/4\" STRUT 15' - STRT15",
      "2-1/4\" STRUT 16' - STRT16",
      "2-1/4\" STRUT 18' - STRT18",
    ],
  },
];

const struts3: PartItem[] = [
  {
    code: "ST-16-3",
    label: '3" STRUTS',

    description: [
      "3\" STRUT 16' - ST316",
      "3\" STRUT 18' - ST318",
      "3\" STRUT 20' - ST320",
      "3\" STRUT 24' - ST324",
    ],
  },
];

const CollarList: PartItem[] = [
  {
    code: "COL100",
    label: '1" COLLAR',
    image: "/images/ShaftStrut/collar.png",
    description: ['1" COLLAR - COL100', '1-1/4" COLLAR - COL125'],
  },
];

const CouplingList: PartItem[] = [
  {
    code: "CUP100",
    label: '1" COUPLING',
    image: "/images/ShaftStrut/coupling.png",
    description: ['1" COUPLING - CUP100', '1-1/4" COUPLING - CUP125'],
  },
];

export default function ShaftnStrut() {
  return (
    <CatalogLayout title={`TUBE SHAFTS \n& STRUTS`} pagenum="2">
      <div className="grid grid-cols-2 gap-6 p-5 ">
        {/* Shafts */}
        <section className="flex  ">
          <div className="leading-tight ">
            <h1 className="text-2xl font-bold text-teal-800 ">TUBE SHAFTS</h1>
            <h3 className="font-bold text-gray-700 mb-6">GALVANIZED</h3>
            {tubeShafts.map((part) => (
              <StrutBox key={part.code} part={part} />
            ))}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-teal-800 mb-6">
              SOLID SHAFTS
            </h1>
            {solidShafts.map((part) => (
              <StrutBox key={part.code} part={part} />
            ))}
          </div>
        </section>

        {/* Struts */}
        <section className="flex space-x-10  pb-2">
          <div>
            <h1 className="text-2xl font-bold text-teal-800 mb-6 ">
              2" STRUTS
            </h1>
            {struts2.map((part) => (
              <StrutBox key={part.code} part={part} />
            ))}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-teal-800 mb-6 ">
              3" STRUTS
            </h1>
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
          <div></div>
          <Image
            src="/images/ShaftStrut/shafts.png"
            alt="shafts"
            width={400}
            height={200}
            className="object-contain  rotate-180 absolute bottom-0 right-0 mb-20"
          />
        </section>
      </div>
    </CatalogLayout>
  );
}
