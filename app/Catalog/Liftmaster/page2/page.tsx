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

const KeypadList: { [key: string]: LmInfo } = {
  "387LM": {
    label: "387LM",
    image: "/images/Keypads/387lm.png",
    details: "Universal Wireless Keyless Entry Keypad",
    description: [
      "Works with most major garage opener brands from 1993 onward",
      "Fully wireless — no wiring needed",
      "Weather-proof slide-up cover with backlit keypad"
    ],
  },
  "877LM": {
    label: "877LM",
    image: "/images/Keypads/877lm.png",
    details: "Security+ 2.0™ Wireless Keyless Entry System",
    description: [
      "Works with Security+ 2.0™ openers (yellow Learn button)",
      "Programmable 4-digit PIN for secure garage access",
      "Supports temporary PINs for visitors or service personnel"
    ],
  },
  "878MAX": {
    label: "878MAX",
    image: "/images/Keypads/878max.png",
    details: "Universal 878MAX Wireless Keyless Entry System",
    description: [
      "Compatible with all LiftMaster/Chamberlain/Craftsman openers since 1993",
      "Backlit keypad, no wiring required",
      "Programmable primary PIN and temporary PINs (time- or use-limited)"
    ],
  },
};







export default function Operators(){
    return (
        <>
        
  <CatalogLayout title={"RESIDENTIAL\nLIFTMASTER"} bgcolor={"bg-yellow-600"} textcolor={"text-yellow-600"} >
{/* Wall Console */}
<div className="">
  
<div className="p-4">
                      <div>
                            <h1 className="font-bold text-[28px] text-red-800">WALL CONSOLE</h1>
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
              <div className="p-5  ">
                
                      <div>
                            <h1 className="font-bold text-[28px] text-red-800">REMOTES</h1>
                    
                      </div>
                          
                          {/* <div className="grid grid-cols-4 md:grid-cols-2 gap-4 mt-1">
              
                            {Object.entries(RemList).map(([key, value]) => (
                              <LMBox key={key} id={key} description={value} />
                            ))}
                          </div> */}
                        </div>

              
                       
                          </div>
        </CatalogLayout>
      

        </>
    )
}