import Image from "next/image";
import HingeBox from "@/components/HingeBox/HingeBox";
import CatalogLayout from "../../components/CatalogLayout";

const hingeList: { [key: string]: string } = {
  "#1 HINGE, 18GA": "HG1801",
  "#2 HINGE, 18GA": "HG1802",
  "#3 HINGE, 18GA": "HG1803",
  "#4 HINGE, 18GA": "HG1804",
  "1/2 HINGE, 14GA": "HGHALF",
  "#1 HINGE, 14GA": "HG1401",
  "#2 HINGE, 14GA": "HG1402",
  "#3 HINGE, 14GA": "HG1403",
  "#4 HINGE, 14GA": "HG1404",
  "#5 HINGE, 14GA": "HG1405",
  "#6 HINGE, 14GA": "HG1406",
  "#7 HINGE, 14GA": "HG1407",
  "#8 HINGE, 14GA": "HG1408",
  "#9 HINGE, 14GA": "HG1409",
  "#1 HINGE, 11GA": "HG1101",
  "#2 HINGE, 11GA": "HG1102",
  "#3 HINGE, 11GA": "HG1103",
  "#4 HINGE, 11GA": "HG1104",
  "#5 HINGE, 11GA": "HG1105",
  "#6 HINGE, 11GA": "HG1106",
  "#7 HINGE, 11GA": "HG1107",
  "#8 HINGE, 11GA": "HG1108",
  "#9 HINGE, 11GA": "HG1109",
};

export default function Hinges() {
  return (
    <>
      <CatalogLayout title="Hinges" pagenum="15">
        {" "}
        <div className="relative w-full h-70 overflow-hidden">
          <Image
            src="/images/HingeArbOrb/door.png"
            alt="Operator Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Hinges */}
        <div className="flex flex-col p-4">
          <h1 className="font-bold text-[35px] text-red-800">HINGES</h1>
          <div className="grid grid-cols-4 ">
            {Object.entries(hingeList).map(([key, value]) => (
              <HingeBox key={key} id={key} description={value} />
            ))}
          </div>
          {/* Arb / Orb */}
          <section className="flex justify-center space-x-20 mt-3 ">
            <div>
              <h1 className="font-bold text-[30px] text-red-800">
                ARB BRACKET
              </h1>
              <Image
                src="/images/HingeArbOrb/ARB.png"
                alt="arb bracket"
                height={175}
                width={175}
              />
              <h1 className="pt-5">ARB BRACKET</h1>
              <h2>
                <span className="text-[14px]">PART: </span>{" "}
                <span className="text-[16px] font-semibold">ARB</span>
              </h2>
            </div>
            {/* ORB */}
            <div>
              <h1 className="font-bold text-[30px] text-red-800">
                ORB BRACKET
              </h1>
              <Image
                src="/images/HingeArbOrb/ORB.png"
                alt="arb bracket"
                height={175}
                width={175}
              />
              <h1 className="pt-5">ORB BRACKET</h1>
              <h2>
                <span className="text-[14px]">PART: </span>{" "}
                <span className="text-[16px] font-semibold">ORB</span>
              </h2>
            </div>
          </section>
        </div>
      </CatalogLayout>
    </>
  );
}
