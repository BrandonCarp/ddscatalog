import Image from "next/image";
import logo from "public/liftmaster/logo.jpg";
import LMlogo from "public/liftmaster/LMlogo.png";
import LM81650 from "public/liftmaster/81650.png";
import LM2220L from "public/liftmaster/2220L.png";
import LM81550 from "public/liftmaster/81550.png";
import LM84504R from "public/liftmaster/84504R.png";
import LM6580L from "public/liftmaster/6580L.png";
import LM6690L from "public/liftmaster/6690L.png";
import LM98022 from "public/liftmaster/98022.png";
import LM98032 from "public/liftmaster/98032.png";
import LM87802 from "public/liftmaster/87802.png";
import LMbox from "@/components/LMbox/LMbox";

export default function Liftmaster() {
  return (
    <div>
      <header className="m-10">
        <div className="flex justify-between mx-10  ">
          <Image src={logo} alt="logo" width={250} height={250} />
          <Image
            src={LMlogo}
            alt="logo"
            width={250}
            height={250}
            className="ml-3"
          />
        </div>
      </header>
      {/* Basic / Plus Series */}
      <section className="flex items-center justify-center  mb-5">
        <div className="flex flex-col items-center mr-10">
          <h1 className="font-black border-b mb-5 text-2xl ">Basic Series</h1>
          <div className="flex space-x-5">
            <LMbox
              name="Model 2220L"
              image={LM2220L}
              details={[
                "DC CHAIN DRIVE",
                "T-RAIL SYSTEM",
                "WiFi / myQ / CAMERA",
                "1 LED BULB",
                "L995W - MULTI-FUNCTION CONTROL PANEL",
                "L993S - 3 BUTTON REMOTE",
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="font-black border-b mb-5 text-2xl ">Plus Series</h1>
          <div className="flex space-x-5">
            <LMbox
              name="Model 2220L"
              image={LM2220L}
              details={[
                "DC CHAIN DRIVE",
                "T-RAIL SYSTEM",
                "WiFi / myQ / CAMERA",
                "1 LED BULB",
                "L995W - MULTI-FUNCTION CONTROL PANEL",
                "L993S - 3 BUTTON REMOTE",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Premium Series*/}
      <section className="flex flex-col items-center space-y-5">
        <div className="flex flex-col items-center">
          <h1 className="font-black border-b mb-5 text-2xl">Premium Series</h1>
          <div className="flex space-x-5">
            <LMbox
              name="Model 6580L"
              image={LM6580L}
              details={[
                "1HP DC BELT DRIVE",
                "T-RAIL SYSTEM",
                "WiFi / myQ / CAMERA W/ 360 SWIVEL",
                "DUAL LED LIGHTING",
                "L957W - MOTION DETECTING CONTROL PANEL",
                "L993M - 3 BUTTON REMOTE",
              ]}
            />
            <LMbox
              name="Model 6690L"
              image={LM6690L}
              details={[
                "1-1/4 HP DC BELT DRIVE",
                "T-RAIL SYSTEM",
                "WiFi / myQ / CAMERA W/ 360 SWIVEL",
                "LED LIGHT RING",
                "L958W - SMART CONTROL PANEL",
                "L979M - WIRELESS KEYPAD",
                "(2) L993M - 3 BUTTON REMOTE",
              ]}
            />
          </div>
        </div>
        <h1 className="font-black border-b mb-5 text-2xl">Premium Series</h1>
        <div className="flex space-x-5">
          <LMbox
            name="Model 98022"
            image={LM98022}
            details={[
              "MEDIUM DUTY SIDE MOUNT OPERATOR",
              "WiFi / myQ",
              "REMOTE LED LIGHT",
              "893MAX - 3 BUTTON REMOTE",
              "880LMW - CONTROL PANEL",
              "841LM - AUTOMATIC GARAGE DOOR LOCK",
              "485LM - BATTERY BACK UP",
            ]}
          />
          <LMbox
            name="Model 98032"
            image={LM98032}
            details={[
              "ELITE SERIES HEAVY DUTY DC SIDE MOUNT OPERATOR",
              "400LBS TO 1100LBS",
              "WiFi / myQ",
              "myQ SMART GARAGE VIDEO KEYPAD",
            ]}
          />
        </div>
      </section>
      <footer className="  mt-21">
        <div className="flex justify-between mx-5 p-3 font-bold text-lg">
          <p className="">(856)-666-6662</p>
          <div className="flex space-x-5">
            <p>7150 Westfield Ave, Pennsauken, NJ 08110</p>
            {/* <p>Pennsauken, NJ, 08110</p> */}
          </div>
        </div>
      </footer>
      {/* Lift master accessories section below */}
    </div>
  );
}
