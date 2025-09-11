import CatalogLayout from "@/components/CatalogLayout";
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
  "87802": {
    label: "D-87802",
    image: "/images/Operators/87802.png",
    details:
      "12V DC CHAIN DRIVE OPERATOR (7', 8' & 10') \n WI-FI & BLUETOOTH ENABLED",
    description: [
      "12V DC motor",
      "Security+2.0 myQ with rolling code\n       technology",
      `893LM remote control`,
      `882LMW multi-function control panel`,
      "Soft start/stop for smooth operation",
      "California complaint model available (81602)",
    ],
    wifi: "True",
    myQ: "True",
    amazonKey: "True",
  },
  ATSWT: {
    label: "D-ATSWT",
    image: "/images/Operators/atswt.png",
    details: "DC Battery Backup Chain Drive Wi-Fi",
    description: [
      "12V DC motor",
      "Security+2.0 myQ with rolling code\n       technology",
      `893LM remote control`,
      `882LMW multi-function control panel`,
      "Soft start/stop for smooth operation",
      "California complaint model available (81602)",
    ],
    wifi: "True",
    myQ: "True",
    amazonKey: "True",
  },
  "81550": {
    label: "D-81550",
    image: "/images/Operators/81550.png",
    details:
      "12V DC CHAIN DRIVE OPERATOR (7', 8' & 10') \n WI-FI & BLUETOOTH ENABLED",
    description: [
      "12V DC motor",
      "Security+2.0 myQ with rolling\n       technology",
      `893LM remote control`,
      `882LMW multi-function control panel`,
      "Soft start/stop for smooth operation",
      "California complaint model available (81602)",
    ],
    wifi: "True",
    myQ: "True",
    amazonKey: "True",
  },
  "84505R": {
    label: "D-84505R",
    image: "/images/Operators/84505R.png",
    details:
      "12V DC CHAIN DRIVE OPERATOR (7', 8' & 10') \n WI-FI & BLUETOOTH ENABLED",
    description: [
      "12V DC motor",
      "Security+2.0 myQ with rolling\n       technology",
      `893LM remote control`,
      `882LMW multi-function control panel`,
      "Soft start/stop for smooth operation",
      "California complaint model available (81602)",
    ],
    wifi: "True",
    myQ: "True",
    amazonKey: "True",
  },
};

export default function Operators() {
  return (
    <>
      <div className="">
        <CatalogLayout title={"RESIDENTIAL\nLIFTMASTER"} pagenum="32">
          <h1 className="text-3xl font-black text-red-900 p-3">
            LIFTMASTER OPERATORS
          </h1>
          <div className="flex flex-col justify-center items-center ">
            {" "}
            {Object.entries(operatorList).map(([key, value]) => (
              <OperatorBox key={key} id={key} description={value} />
            ))}
          </div>
        </CatalogLayout>
      </div>
    </>
  );
}
