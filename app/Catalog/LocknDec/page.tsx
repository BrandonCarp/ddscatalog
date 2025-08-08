import Image from "next/image";
import DecBox from "@/components/DecHDWParts/DecBox";
import CatalogLayout from "../../components/CatalogLayout"


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
      "8FT LOCKBAR - L-1-8",
      "9FT LOCKBAR - L-1-9",
      "10FT LOCKBAR - L-1-10",
      "12FT LOCKBAR - L-1-12",
      "14FT LOCKBAR - L-1-14",
      "15FT LOCKBAR - L-1-15",
      "16FT LOCKBAR - L-1-16",
      "17FT LOCKBAR - L-1-17",
      "18FT LOCKBAR - L-1-18",
    ],
  },]

const LockList: DecInfo[] = [
  {
    code: "L-1-B",
    label: "LOCKBAG ASSEMBLY",
    image: "/images/Locks/lockbag.png",
    description: [
      "LOCKBAG ASSEMBLY - L-1-B"
    ],
  },
  {
    code: "L-1-SL",
    label: "SNAP LATCH LOCK",
    image: "/images/Locks/latchlock.png",
    description: [
      "SNAP LATCH LOCK ASSEMBLY - L-1-SL"
    ],
  },
  {
    code: "L-1-IS",
    label: "INSIDE SLIDE LOCK",
    image: "/images/Locks/slidelock.png",
    description: [
      "INSIDE SLIDE LOCK - L-1-IS"
    ],
  },
];



const DecList: DecInfo[] = [
  {
    code: "SSH4",
    label: "SPADE HINGES & MAGNETIC SPADE HINGES",
    image: "/images/DecHDW/spadehinge.png",
    description: [
      "SPADE STRAP HINGES, 4PCS - SSH4",
      "MAGNETIC SPADE STRAP HINGES, 4PCS - MSSH4",
    ],
  },
    {
    code: "SSH2",
    label: "SPADE HINGES & MAGNETIC SPADE HINGES",
    image: "/images/DecHDW/spadehandle.png",
    description: [
      "SPADE STRAP HANDLES, 2PCS - SSH2",
      "MAGNETIC SPADE STRAP HANDLES, 2PCS - MSSH2",
    ],
  },
  {
    code: "TLL-O",
    label: "TWISTED L LOCK (Operable & Dummy)",
    image: "/images/DecHDW/twistlock.png", 
    description: [
      "TWISTED L LOCK, OPERABLE - TLL-O",
      "TWISTED L LOCK, DUMMY - TLL-D",
    ],
  },
  {
    code: "TTL-O",
    label: "TWISTED T LOCK (Operable & Dummy)",
    image: "/images/DecHDW/thandle.png", 
    description: [
      "TWISTED T LOCK, OPERABLE - TTL-O",
      "TWISTED T LOCK, DUMMY - TTL-D",
    ],
  },
  {
    code: "EP",
    label: "ESCUTCHEON PLATES",
    image: "/images/DecHDW/plate.png", 
    description: [
      "ESCUTCHEON PLATES - EP"
    ],
  },
  {
    code: "DHWK",
    label: "DUMMY HANDLES WITH KEYHOLE",
    image: "/images/DecHDW/dummy.png", 
    description: [
      "DUMMY HANDLES WITH KEYHOLE - DHWK"
    ],
  },
];






export default function LocknDec(){
    return (
  <>
  <CatalogLayout title={"Decorative Hardware \n& Locks"} bgcolor="bg-green-800" textcolor="text-green-800">
    {/* Container */}
    <div className="mx-5 mt-5">
       {/* Lock Section */}
   <section className="flex p-2   w-[95vw]">
   <div className="">
<h1 className="text-4xl font-bold text-teal-800 mb-6">LOCKS</h1>

  <div className="flex">
    {LockList.map((item) => (
      <DecBox key={item.code} part={item} />
    ))}

    </div>
   </div>

  
        {/* LOCKBAR */}
    <div className="flex flex-col items-center ml-10 w-[40%]">
      
      <div className="h-15 w-full flex flex-col justify-center  items-center  mb-20 mt-3 pt-20">
      <h1 className="text-4xl font-bold  text-green-800 ">LOCKBARS</h1>
        <Image
          src="/images/Locks/lockbar.png"
          alt="Lock Bar"
          width={130}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="grid grid-cols-2 gap-x-4  w-full px-4 text-[12px]">
        {LockBarList[0].description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <ul key={i} className="">
              <li className="list-disc text-[13px]">{label}</li>
              <div className="text-gray-500 font-semibold">
                Part: <span className="text-gray-800">{code}</span>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  
</section>
             {/* Decorative Hardware Section */}
      <section className="">
    <h1 className="text-4xl font-bold text-teal-800 mb-6">DECORATIVE HARDWARE</h1>
    <div className="grid grid-cols-4  gap-5 mx-5">
 {DecList.map((item) => (
    <DecBox  key={item.code} part={item} />
  ))}
    </div>
    </section>
     
  
    </div>
  
    </CatalogLayout>
    </>
    )
}
    