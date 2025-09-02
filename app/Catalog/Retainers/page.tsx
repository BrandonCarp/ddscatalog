" use client";
import CatalogLayout from "@/components/CatalogLayout";
import RetainerBox from "@/components/Retainers/RetainerBox";
import RubberBox from "@/components/Retainers/SealBox";
import JambSeal from "@/components/Retainers/JambSeal";
interface Retainer {
  name: string;
  image: string;
  description: string[];
}

const RetainerList: Retainer[] = [
  {
    name: "PLASTIC U-RETAINERS",
    image: "/images/Retainer/URetainer.png",
    description: [
      '1-3/8" PLASTIC U-RETAINER - URET38',
      '2" PLASTIC U-RETAINER - URET2',
    ],
  },
  {
    name: "PLASTIC L-RETAINERS",
    image: "/images/Retainer/LRetainer.png",
    description: [
      '1-3/8" PLASTIC L-RETAINER - LRET38',
      '1-3/4" PLASTIC L-RETAINER - LRET34',
      '2" PLASTIC L-RETAINER - LRET2',
    ],
  },
  {
    name: "FLAT PLASTIC RETAINERS",
    image: "/images/Retainer/FlatRetainer.png",
    description: [
      '1-3/8" FLAT PLASTIC RETAINER - FRET38',
      '2" FLAT PLASTIC RETAINER - FRET2',
    ],
  },
];

const RubberList: Retainer[] = [
  {
    name: "BOTTOM T RUBBER",
    image: "/images/Retainer/TRubber.png",
    description: [
      '4" BOTTOM T RUBBER - BTR4',
      '5" BOTTOM T RUBBER - BTR5',
      '6" BOTTOM T RUBBER - BTR6',
    ],
  },
  {
    name: "TOP HEADER SEAL",
    image: "/images/Retainer/HeaderSeal.png",
    description: [
      '1-3/8" TOP HEADER SEAL - THS38',
      '2" TOP HEADER SEAL - THS2',
    ],
  },
  {
    name: "ROLLING STEEL BOTTOM RUBBER",
    image: "/images/Retainer/RollingRubber.png",
    description: ["ROLLING STEEL BOTTOM RUBBER - RSBR"],
  },
];

export default function Retainers() {
  return (
    <>
      <CatalogLayout pagenum="25" title="RETAINERS">
        <div className="mx-10  flex flex-col justify-center  space-y-3">
          <h1 className="font-semibold text-[36px] text-red-800">RETAINERS</h1>

          {/* Retainer Section */}
          <section className="retainers-grid grid grid-cols-3 ">
            {RetainerList.map((retainer, index) => (
              <RetainerBox
                key={index}
                name={retainer.name}
                image={retainer.image}
                description={retainer.description}
              />
            ))}
          </section>
          {/* Seal Section */}
          <section className="retainers-grid grid grid-cols-3 ">
            {RubberList.map((rubber, index) => (
              <RubberBox
                key={index}
                name={rubber.name}
                image={rubber.image}
                description={rubber.description}
              />
            ))}
          </section>
          <JambSeal />
        </div>
      </CatalogLayout>
    </>
  );
}
