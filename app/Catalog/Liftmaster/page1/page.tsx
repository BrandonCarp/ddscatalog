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
      "Easy programming of remote devices"
    ],

  },
  "880LM": {
    label: "880LM",
    image: "/images/ControlPanels/880lm.png",
    details: "Smart Control Panel®",
    description: [
      "Displays time, temperature, and diagnostics",
      "Locks out remote access for security"
    ],

  },
  "882LMW": {
    label: "882LMW",
    image: "/images/ControlPanels/882lmw.png",
    details: "Multi-Function Control Panel",
    description: [
      "Compatible with Security+ 2.0®",
      "Light control button",
      "Remote control programming support"
    ],

  },
  "885LM": {
    label: "885LM",
    image: "/images/ControlPanels/885lm.png",
    details: "Garage Door Control Button",
    description: [
      "Single push-button operation",
      "Surface mount design"
    ],

  },
  "886LM": {
    label: "886LM",
    image: "/images/ControlPanels/886lm.png",
    details: "Motion Detecting Control Panel",
    description: [
      "Turns on garage lights automatically with motion",
      "Compatible with Security+ 2.0® systems"
    ],
  
  },
  "889LM": {
    label: "889LM",
    image: "/images/ControlPanels/889lm.png",
    details: "myQ® Control Panel",
    description: [
      "Enables myQ® smart technology",
      "Upgrade for compatible garage door openers"
    ],

  }
};


const RemList: { [key: string]: LmInfo } = {
  "380UT": {
    label: "380UT",
    image: "/images/Remotes/380ut.png",
    details: "2-Button Universal Remote Control",
    description: [
      "Operates up to two garage or gate openers",
      "Universal compatibility across Security+, Security+ 2.0, Billion Code protocols",
      "Tri-band frequency reduces interference; compact and durable"
    ],
  },
  "811LMX": {
    label: "811LMX",
    image: "/images/Remotes/811lmx.png",
    details: "Commercial Gate Opener Remote (811LMX)",
    description: [
      "Designed exclusively for LiftMaster commercial garage and gate operators",
      "Not compatible with residential garage openers"
    ],
  },
  "890MAX": {
    label: "890MAX",
    image: "/images/Remotes/890max.png",
    details: "3-Button Remote Control - MAX Series",
    description: [
      "Controls up to 3 openers or myQ® light accessories",
      "Works with openers from 1993-present using 315 MHz or 390 MHz protocols",
      "Compatible with Basic, Security+, Security+ 2.0 and Billion Code systems"
    ],
  },
  "893LM": {
    label: "893LM",
    image: "/images/Remotes/893lm.png",
    details: "3-Button Mini Remote Control",
    description: [
      "Mini-visor remote; works with Security+ 2.0® (yellow Learn button)",
      "Controls up to 3 devices"
    ],
  },
  "893MAX": {
    label: "893MAX",
    image: "/images/Remotes/893max.png",
    details: "3-Button Remote Control - MAX",
    description: [
      "Full-sized visor remote; supports up to 3 openers or myQ® accessories",
      "Universal compatibility with openers since 1993 across multiple protocols"
    ],
  },
  "894LT": {
    label: "894LT",
    image: "/images/Remotes/894lt.png",
    details: "Unknown / Unlisted Remote Model",
    description: [
      "Limited publicly available data; contact LiftMaster or dealer for specs"
    ],
  },
};



export default function Operators(){
    return (
        <>
        
  <CatalogLayout title={"RESIDENTIAL\nLIFTMASTER"} bgcolor={"bg-yellow-600"} textcolor={"text-yellow-600"} >
{/* Wall Console */}
<div className=" mx-2">
  
<div className="p-3">
                     <div className="leading-tight space-y-1">
  <h1 className="font-bold text-[28px] text-red-800 mb-0">WALL CONSOLE</h1>
  <h4 className="font-semibold text-[15px] ">FOR LIFTMASTER RESIDENTIAL OPERATORS</h4>
</div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-1">
              
                            {Object.entries(ConsoleList).map(([key, value]) => (
                              <LMBox key={key} id={key} description={value} />
                            ))}
                          </div>
                        </div>
                        <div className="border-t mx-5"></div>
                        {/* Remotes */}
              <div className="p-3  ">
                
                      <div>
                            <h1 className="font-bold text-[28px] text-red-800 ">REMOTES</h1>
                    
                      </div>
                          
                          <div className="grid grid-cols-4 md:grid-cols-3 mt-1">
              
                            {Object.entries(RemList).map(([key, value]) => (
                              <LMBox key={key} id={key} description={value} />
                            ))}
                          </div>
                        </div>

              
                       
                          </div>
        </CatalogLayout>
      

        </>
    )
}