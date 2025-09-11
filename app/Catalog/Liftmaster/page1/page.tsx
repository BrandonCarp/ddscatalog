import CatalogLayout from "@/components/CatalogLayout";
import LMBox from "@/components/LiftMasterAcc/LmBox";

type LmInfo = {
  label: string;
  image: string;
  details: string;
  description: string[];
};

const ConsoleList: { [key: string]: LmInfo } = {
  "378LM": {
    label: "378LM",
    image: "/images/ControlPanels/378lm.png",
    details: "Wireless Secondary Multi-Function Control Panel",
    description: [
      "Wireless wall-mounted control",
      "Easy programming of remote devices",
    ],
  },
  "880LM": {
    label: "880LM",
    image: "/images/ControlPanels/880lm.png",
    details: "Smart Control Panel®",
    description: [
      "Displays time, temperature, and diagnostics",
      "Locks out remote access for security",
    ],
  },
  "882LMW": {
    label: "882LMW",
    image: "/images/ControlPanels/882lmw.png",
    details: "Multi-Function Control Panel",
    description: [
      "Compatible with Security+ 2.0®",
      "Light control button",
      "Remote control programming support",
    ],
  },
  "885LM": {
    label: "885LM",
    image: "/images/ControlPanels/885lm.png",
    details: "Garage Door Control Button",
    description: ["Single push-button operation", "Surface mount design"],
  },
  "886LM": {
    label: "886LM",
    image: "/images/ControlPanels/886lm.png",
    details: "Motion Detecting Control Panel",
    description: [
      "Turns on garage lights automatically with motion",
      "Compatible with Security+ 2.0® systems",
    ],
  },
  "889LM": {
    label: "889LM",
    image: "/images/ControlPanels/889lm.png",
    details: "myQ® Control Panel",
    description: [
      "Enables myQ® smart technology",
      "Upgrade for compatible garage door openers",
    ],
  },
};

const RemList: { [key: string]: LmInfo } = {
  "380UT": {
    label: "380UT",
    image: "/images/Remotes/380ut.png",
    details: "2-Button Universal Remote",
    description: [
      "Controls 2 garage or gate openers",
      "Works with most brands/protocols",
    ],
  },
  "811LMX": {
    label: "811LMX",
    image: "/images/Remotes/811lmx.png",
    details: "Commercial Gate Remote",
    description: [
      "For LiftMaster commercial units",
      "Not for residential openers",
    ],
  },
  "890MAX": {
    label: "890MAX",
    image: "/images/Remotes/890max.png",
    details: "3-Button Remote - MAX",
    description: [
      "Runs 3 openers or myQ® lights",
      "Compatible with 1993+ models",
    ],
  },
  "893LM": {
    label: "893LM",
    image: "/images/Remotes/893lm.png",
    details: "3-Button Mini Remote",
    description: [
      "Compact visor clip, Security+ 2.0®",
      "Controls up to 3 devices",
    ],
  },
  "893MAX": {
    label: "893MAX",
    image: "/images/Remotes/893max.png",
    details: "3-Button Remote - MAX",
    description: [
      "Full-size, runs 3 openers/myQ®",
      "Works with 1993+ openers",
    ],
  },
  "894LT": {
    label: "894LT",
    image: "/images/Remotes/894lt.png",
    details: "4-Button Remote",
    description: ["Controls 4 operators"],
  },
};

export default function Operators() {
  return (
    <CatalogLayout title={"LIFTMASTER\nACCESSORIES"} pagenum="35" reverseFooter>
      <div className="mx-5">
        {/* Wall Console */}

        <div className="leading-tight p-3">
          <h1 className="font-black text-[30px] text-red-900 ">WALL CONSOLE</h1>
          <h4 className="font-semibold text-[16px] ">
            FOR LIFTMASTER RESIDENTIAL OPERATORS
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-1">
          {Object.entries(ConsoleList).map(([key, value]) => (
            <LMBox key={key} id={key} description={value} />
          ))}
        </div>

        <div className="border-t mx-5 mt-2"></div>

        {/* Remotes */}
        <div className="">
          <h1 className="font-bold text-[30px] text-red-900  p-1">REMOTES</h1>
          <div className="grid grid-cols-3  gap-3 mt-1 ">
            {Object.entries(RemList).map(([key, value]) => (
              <LMBox key={key} id={key} description={value} />
            ))}
          </div>
        </div>
      </div>
    </CatalogLayout>
  );
}
