import Image from "next/image";
import CatalogLayout from "@/components/layoutDynamic";
import OperatorBox from "@/components/OperatorParts/OperatorBox";



type OperatorInfo = {
  label: string;
  image: string;
  details: string;
  description: string[];
  wifi: string;
  myQ: string;
  amazonKey: string;
};

const operatorList: { [key: string]: OperatorInfo } = {
  "LJ8900W": { label: "D-LJ8900W", image: "/Operators/LJ8900W.png", details: "12V DC CHAIN DRIVE OPERATOR (7', 8' & 10') \n WI-FI & BLUETOOTH ENABLED", description: [ "12V DC motor","Security+2.0 myQ with rolling code\n       technology", `893LM remote control`, `882LMW multi-function control panel`, "Soft start/stop for smooth operation", "California complaint model available (81602)"
   ], wifi: "True", myQ: "True", amazonKey: "True"},
    "LJ8950W": { label: "D-LJ8950W", image: "/Operators/LJ8950W.png", details: "DC Battery Backup Chain Drive Wi-Fi", description: [ "12V DC motor","Security+2.0 myQ with rolling code\n       technology", `893LM remote control`, `882LMW multi-function control panel`, "Soft start/stop for smooth operation", "California complaint model available (81602)"
   ], wifi: "True", myQ: "True", amazonKey: "True"},
    
};

export default function Operators(){
    return (
        <>
        <div className="">
          
  <CatalogLayout title={"RESIDENTIAL\nLIFTMASTER"}>
<div className="relative w-full h-65 overflow-hidden">  <Image
                      src="/Operators/hero.png"
                      alt="Operator Hero"
                      fill
                      className="object-cover "
                      priority
                    />
                  </div>
<div className="flex flex-col justify-center items-center "> {Object.entries(operatorList).map(([key, value]) => (
                <OperatorBox key={key} id={key} description={value} />
              ))}</div>
        </CatalogLayout>
        </div>
 
        </>
    )
}