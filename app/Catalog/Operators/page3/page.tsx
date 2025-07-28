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
  "84504R": { label: "D-84504R", image: "/Operators/84504R.png", details: "12V DC CHAIN DRIVE OPERATOR (7', 8' & 10') \n WI-FI & BLUETOOTH ENABLED", description: [ "12V DC motor","Security+2.0 myQ with rolling code\n       technology", `893LM remote control`, `882LMW multi-function control panel`, "Soft start/stop for smooth operation", "California complaint model available (81602)"
   ], wifi: "True", myQ: "True", amazonKey: "True"},
    "87504-267": { label: "D-87504-267", image: "/Operators/87504-267.png", details: "DC Battery Backup Chain Drive Wi-Fi", description: [ "12V DC motor","Security+2.0 myQ with rolling code\n       technology", `893LM remote control`, `882LMW multi-function control panel`, "Soft start/stop for smooth operation", "California complaint model available (81602)"
   ], wifi: "True", myQ: "True", amazonKey: "True"},
    "98022": { label: "D-98022", image: "/Operators/98022.png", details: "12V DC CHAIN DRIVE OPERATOR (7', 8' & 10') \n WI-FI & BLUETOOTH ENABLED", description: [ "12V DC motor","Security+2.0 myQ with rolling\n       technology", `893LM remote control`, `882LMW multi-function control panel`, "Soft start/stop for smooth operation", "California complaint model available (81602)"
   ], wifi: "True", myQ: "True", amazonKey: "True"},
    "98032": { label: "D-98032", image: "/Operators/98032.png", details: "12V DC CHAIN DRIVE OPERATOR (7', 8' & 10') \n WI-FI & BLUETOOTH ENABLED", description: [ "12V DC motor","Security+2.0 myQ with rolling\n       technology", `893LM remote control`, `882LMW multi-function control panel`, "Soft start/stop for smooth operation", "California complaint model available (81602)"
   ], wifi: "True", myQ: "True", amazonKey: "True"},
};

export default function Operators(){
    return (
        <>
        <div className="">
  <CatalogLayout title={"RESIDENTIAL\nLIFTMASTER"}>

<div className="flex flex-col justify-center items-center "> {Object.entries(operatorList).map(([key, value]) => (
                <OperatorBox key={key} id={key} description={value} />
              ))}</div>
        </CatalogLayout>
        </div>
 
        </>
    )
}