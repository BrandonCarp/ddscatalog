import Image from "next/image";
import HingeBox from "@/components/HingeBox/HingeBox";
import CatalogLayout from "../../components/CatalogLayout";

const hingeList18ga: { [key: string]: string } = {
  "#1 HINGE, 18GA": "HG1801",
  "#2 HINGE, 18GA": "HG1802",
  "#3 HINGE, 18GA": "HG1803",
  "#4 HINGE, 18GA": "HG1804",
};

const hingeList14ga: { [key: string]: string } = {
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
};

const hingeList11ga: { [key: string]: string } = {
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
      <CatalogLayout title="HINGES" pagenum="24" reverseFooter>
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
        <div className="p-3 flex flex-col ml-15">
          <h1 className="font-black text-[30px] text-red-900">HINGES</h1>

          <div className="grid grid-cols-3  ">
            {/* 11 GA Hinges */}
            <section className="flex flex-col ">
              {/* <h1 className="font-bold text-[30px] text-red-800">HINGES</h1> */}
              <Image
                src="/images/Hinge/11ga.png"
                alt="11 GA Hinge"
                height={170}
                width={170}
                className=""
              />
              <h1 className="font-bold text-[20px] text-gray-800">
                11GA HINGES
              </h1>
              <div className=" ">
                {Object.entries(hingeList11ga).map(([key, value]) => (
                  <HingeBox key={key} id={key} description={value} />
                ))}
              </div>
            </section>
            {/* 14 GA Hinges */}
            <section className="flex flex-col ">
              <Image
                src="/images/Hinge/14ga.png"
                alt="14 GA Hinge"
                height={170}
                width={170}
                className=""
              />
              <h1 className="font-bold text-[20px] text-gray-800">
                14GA HINGES
              </h1>
              <div className=" ">
                {Object.entries(hingeList14ga).map(([key, value]) => (
                  <HingeBox key={key} id={key} description={value} />
                ))}
              </div>
            </section>
            {/* 18 GA Hinges */}
            <section className="flex flex-col ">
              <Image
                src="/images/Hinge/18ga.png"
                alt="18 GA Hinge"
                height={170}
                width={170}
                className=""
              />
              <h1 className="font-bold text-[20px] text-gray-800">
                18GA HINGES
              </h1>
              <div className=" ">
                {Object.entries(hingeList18ga).map(([key, value]) => (
                  <HingeBox key={key} id={key} description={value} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
