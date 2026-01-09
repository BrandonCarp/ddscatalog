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
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between gap-4">
            <Image
              src={logo}
              alt="Company logo"
              width={220}
              height={220}
              priority
              className="h-auto w-[180px] sm:w-[220px]"
            />
            <Image
              src={LMlogo}
              alt="LiftMaster logo"
              width={220}
              height={220}
              priority
              className="h-auto w-[180px] sm:w-[220px]"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-10">
        {/* BASIC / PLUS in a 2-col grid (stacks on mobile) */}
        {/* Basic / Plus Series */}
        <section className="flex items-center justify-center  mb-5">
          <div className="flex flex-col items-center mr-10">
            <h1 className="font-black border-b mb-5 text-2xl ">BASIC SERIES</h1>
            <div className="flex space-x-5">
              <LMbox
                name="MODEL 2220L"
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
            <h1 className="font-black border-b mb-5 text-2xl ">PLUS SERIES</h1>
            <div className="flex space-x-5">
              <LMbox
                name="MODEL 2220L"
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
        {/* PREMIUM */}
        <section className="mt-10">
          <h1 className="mb-4 border-b text-center text-2xl font-black">
            PREMIUM SERIES
          </h1>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <LMbox
              name="MODEL 6580L"
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
              name="MODEL 6690L"
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

            <LMbox
              name="MODEL 98022"
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
              name="MODEL 98032"
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
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 font-bold text-lg sm:flex-row sm:items-center sm:justify-between">
          <p>(856)-666-6662</p>
          <p>7150 Westfield Ave, Pennsauken, NJ 08110</p>
        </div>
      </footer>
    </div>
  );
}
