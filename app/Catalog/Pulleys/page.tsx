import Image from "next/image";
import PulleyBox from "@/components/Pulleys/PulleyBox";
import CatalogLayout from "../../components/CatalogLayout";

type PulleyInfo = {
  label: string;
  image: string;
  title: string;
  description: string[];
};

const pulleyList: { [key: string]: PulleyInfo } = {
  "3-cast-iron": {
    label: "3\" Cast Iron Pulley",
    image: "/images/pulleys/3CastIronPulley.png",
    title: "PULLEYS",
    description: [
      "Durable 3-inch cast iron body",
    
      
    ],
  },
  "3-gold": {
    label: "3\" Gold Pulley",
    image: "/images/pulleys/3GoldPulley.png",
    title: "PULLEYS",
    description: [
      "3-inch anodized gold finish",


    ],
  },
  "3-steel": {
    label: "3\" Steel Pulley",
    image: "/images/pulleys/3SteelPulley.png",
    title: "PULLEYS",
    description: [
      "Zinc-coated steel construction",
   
     
    ],
  },
  "4-cast-iron": {
    label: "4\" Cast Iron Pulley",
    image: "/images/pulleys/4CastIronPulley.png",
    title: "PULLEYS",
    description: [
      "Heavy-duty 4-inch cast iron body",

    ],
  },
  "4-steel": {
    label: "4\" Steel Pulley",
    image: "/images/pulleys/4Steelpulley.png",
    title: "PULLEYS",
    description: [
      "Sturdy steel 4-inch pulley",
    
    ],
  },
  "4-steel-stud": {
    label: "4\" Steel Stud Pulley",
    image: "/images/pulleys/4steelstudpulley.png",
    title: "PULLEYS",
    description: [
      "4-inch pulley with welded steel stud",
  
    ],
  },
  "5-steel-stud": {
    label: "5\" Steel Stud Pulley",
    image: "/images/pulleys/5steelstudpulley.png",
    title: "PULLEYS",
    description: [
      "Oversized 5-inch steel stud pulley",
  
    ],
  },
};

const forkList: { [key: string]: PulleyInfo } = {
  "3-fork": {
    label: "3\" Fork",
    image: "/images/pulleys/3Fork.png",
    title: "FORKS",
    description: [
      "3-inch fork bracket",
      "Fits standard pulley shafts",
      
    ],
  },
  "3-safety-fork": {
    label: "3\" Safety Fork",
    image: "/images/pulleys/3SafetyFork.png",
    title: "FORKS",
    description: [
      "Safety locking mechanism included",
      "Fits 3-inch pulleys securely",
    
    ],
  },
  "4-fork": {
    label: "4\" Fork",
    image: "/images/pulleys/4Fork.png",
    title: "FORKS",
    description: [
      "Robust 4-inch fork bracket",
      "Designed for heavy-duty pulley mounting",
   
    ],
  },
};



export default function Pulleys() {
  return (
    <>
      <CatalogLayout title={"HARDWARE\n PULLEYS & FORKS"}  bgcolor={"bg-red-800"} textcolor={"text-red-800"}>
        <div className="contain flex flex-col justify-center items-center ">
<div className=" border-b  p-3 mx-2 px-10 ">
        
              <h1 className="font-bold text-[30px] text-red-800">HARDWARE</h1>
        
           
            <div className="gap-20 mt-1 flex h-[200px]">

              {Object.entries(forkList).map(([key, value]) => (
                <PulleyBox key={key} id={key} description={value} />
              ))}
            </div>
          </div>
        <div className="px-5 pb-5 flex h-[700]"> 
        
  
          <div className="">
        
              <h1 className="font-bold text-[28px] text-red-800">PULLEY</h1>
          
           
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-1">

              {Object.entries(pulleyList).map(([key, value]) => (
                <PulleyBox key={key} id={key} description={value} />
              ))}
            </div>
          </div>
<div className="  flex flex-col    border-l  py-5 px-10  mt-2">
        
              <h1 className="font-bold text-[28px] text-red-800">FORK</h1>
          <h1 className="font-bold text-[16px]  text-gray-600">FASTERNERS SOLD SEPARETELY</h1>
           
            <div className="">

              {Object.entries(forkList).map(([key, value]) => (
                <PulleyBox key={key} id={key} description={value} />
              ))}
            </div>
          </div>
        </div>
        </div>
        
      </CatalogLayout>
    </>
  );
}
