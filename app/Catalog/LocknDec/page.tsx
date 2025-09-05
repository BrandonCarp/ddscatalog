import Image from "next/image";
import DecBox from "@/components/DecHDWParts/DecBox";
import CatalogLayout from "../../components/CatalogLayout";

type DecInfo = {
  code: string;
  label: string;
  image?: string;
  description: string[];
};

const LockBarList: DecInfo[] = [
  {
    code: "L-1-8",
    label: "LOCK BAR",
    image: "",
    description: [
      "8FT LOCKBAR - LCKB08",
      "9FT LOCKBAR - LCKB09",
      "10FT LOCKBAR - LCKB10",
      "12FT LOCKBAR - LCKB12",
      "14FT LOCKBAR - LCKB14",
      "15FT LOCKBAR - LCKB15",
      "16FT LOCKBAR - LCKB16",
      "17FT LOCKBAR - LCKB17",
      "18FT LOCKBAR - LCKB18",
    ],
  },
];

const LockList: DecInfo[] = [
  {
    code: "LCKBAG",
    label: "LOCKBAG ASSEMBLY",
    image: "/images/Locks/lockbag.png",
    description: ["LOCKBAG ASSEMBLY - LCKBAG"],
  },
  {
    code: "SNAPLK",
    label: "SNAP LATCH LOCK",
    image: "/images/Locks/latchlock.png",
    description: ["SNAP LATCH LOCK ASSEMBLY - SNAPLK"],
  },
  {
    code: "INSLLK",
    label: "INSIDE SLIDE LOCK",
    image: "/images/Locks/slidelock.png",
    description: ["INSIDE SLIDE LOCK - INSLLK"],
  },
  {
    code: "QDIS",
    label: "QUICK DISCONNECT",
    image: "/images/Locks/quickdis.png",
    description: ["QUICK DISCONNECT - QDIS"],
  },
];

const DecList: DecInfo[] = [
  {
    code: "DSSH14",
    label: "SPADE HINGES & MAGNETIC SPADE HINGES",
    image: "/images/DecHDW/spadehinge.png",
    description: [
      "SPADE STRAP HINGES, 4PCS - DSSH14",
      "MAGNETIC SPADE STRAP HINGES, 4PCS - DMSH14",
    ],
  },
  {
    code: "DSSHD2",
    label: "SPADE HINGES & MAGNETIC SPADE HINGES",
    image: "/images/DecHDW/spadehandle.png",
    description: [
      "SPADE STRAP HANDLES, 2PCS - DSSHD2",
      "MAGNETIC SPADE STRAP HANDLES, 2PCS - DMSHD2",
    ],
  },
  {
    code: "DCSH14",
    label: "COLONIAL STRAP HINGES & HANDLES",
    image: "/images/DecHDW/colonial.png",
    description: [
      "COLONIAL STRAP HINGES, 4PCS - DCSH14",
      "COLONIAL STRAP HANDLES, 2PCS - DCSHD2",
    ],
  },
  {
    code: "DSPH14",
    label: "SPEAR STRAP HINGES & SPEAR STRAP HANDLES",
    image: "/images/DecHDW/spear.png",
    description: [
      "SPEAR STRAP HINGES, 4PCS - DSPH14",
      "SPEAR STRAP HANDLES, 2PCS - DSPHD2",
    ],
  },
  {
    code: "DTLOP",
    label: "TWISTED L LOCK (Operable & Dummy)",
    image: "/images/DecHDW/twistlock.png",
    description: [
      "TWISTED L LOCK, OPERABLE - DTLOP",
      "TWISTED L LOCK, DUMMY - DTLDL",
    ],
  },
  {
    code: "DTTOP",
    label: "TWISTED T LOCK (Operable & Dummy)",
    image: "/images/DecHDW/thandle.png",
    description: [
      "TWISTED T LOCK, OPERABLE - DTTOP",
      "TWISTED T LOCK, DUMMY - DTTDL",
    ],
  },
  {
    code: "DEPLT",
    label: "ESCUTCHEON PLATES",
    image: "/images/DecHDW/plate.png",
    description: ["ESCUTCHEON PLATES - DEPLT"],
  },
  {
    code: "DDHKH",
    label: "DUMMY HANDLES WITH KEYHOLE",
    image: "/images/DecHDW/dummy.png",

    description: ["DUMMY HANDLES WITH KEYHOLE - DDHKH"],
  },
];

export default function LocknDec() {
  return (
    <>
      <CatalogLayout
        title={"Decorative Hardware \n& Locks"}
        pagenum="24"
        reverseFooter
      >
        {/* Container */}
        <div className="mx-10 p-3">
          {/* Decorative Hardware Section */}
          <section className="mb-3">
            <h1 className="text-4xl font-black text-red-900 ">
              DECORATIVE HARDWARE
            </h1>
            <div className="grid grid-cols-4  ">
              {DecList.map((item) => (
                <DecBox key={item.code} part={item} />
              ))}
            </div>
          </section>
          {/* Lock Section */}
          <section className="flex p-1   border-t ">
            <div className="">
              <h1 className="text-4xl font-black text-red-900 ">LOCKS</h1>

              <div className="flex">
                {LockList.map((item) => (
                  <DecBox key={item.code} part={item} />
                ))}
              </div>
            </div>

            {/* LOCKBAR */}
            <div className="flex flex-col items-center ml-5 w-[400px]">
              <div className="h-15 w-full flex flex-col justify-center  items-center  mb-12 mt-3 pt-20">
                <h1 className="text-4xl font-black  text-red-900 ">LOCKBARS</h1>
                <Image
                  src="/images/Locks/lockbar.png"
                  alt="Lock Bar"
                  width={130}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div className="grid grid-cols-2 gap-x-4  w-full px-4 text-[14px]">
                {LockBarList[0].description.map((line, i) => {
                  const [label, code] = line.split(" - ");
                  return (
                    <ul key={i} className="">
                      <li className="list-disc text-[14px]">{label}</li>
                      <div className="text-gray-800 font-semibold">
                        Part: <span className="text-red-800">{code}</span>
                      </div>
                    </ul>
                  );
                })}
              </div>
            </div>
          </section>
          {/* Decorative Hardware Section
          <section className="">
            <h1 className="text-4xl font-bold text-red-700 mb-4">
              DECORATIVE HARDWARE
            </h1>
            <div className="grid grid-cols-4  ">
              {DecList.map((item) => (
                <DecBox key={item.code} part={item} />
              ))}
            </div>
          </section> */}
        </div>
      </CatalogLayout>
    </>
  );
}
