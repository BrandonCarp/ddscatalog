import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";
import LmAccBox from "@/components/LiftMasterAcc/LmAccBox";

type LmInfo = {
  label: string;
  image: string;
  details: string;
  description: string[];
};

const AccessoryList: { [key: string]: LmInfo } = {
  "485LM": {
    label: "485LM",
    image: "/images/accessories/485lm.png",
    details: "12V Opener Backup Battery",
    description: [
      "Quick replacement for backup systems",
      "Fits LiftMaster models 8360, 8500, 8550",
      "Keeps opener running during outages",
    ],
  },
  "828LM": {
    label: "828LM",
    image: "/images/accessories/828lm.png",
    details: "myQ® Internet Gateway",
    description: [
      "Adds smartphone control to myQ openers/lights",
      "Connect up to 16 myQ devices with alerts & schedules",
      "Supports Amazon Key in-garage delivery",
    ],
  },
  "850LM": {
    label: "850LM",
    image: "/images/accessories/850lm.png",
    details: "3-Channel Universal Receiver",
    description: [
      "Commercial-grade Security+ 2.0 receiver",
      "Handles multiple access points",
      "Works with MAX, 811LM, and 813LM remotes",
    ],
  },
};

const KeypadList: { [key: string]: LmInfo } = {
  "387LM": {
    label: "387LM",
    image: "/images/keypads/387lm.png",
    details: "Universal Keyless Entry Keypad",
    description: [
      "Wireless universal keypad for garage/gate openers across many brands",
      "Weatherproof with backlit keypad and slide-up protective cover",
      "Battery-powered (9 V), secure keyless access via PIN code",
    ],
  },
  "877LM": {
    label: "877LM",
    image: "/images/keypads/877lm.png",
    details: "Wireless Keyless Entry Keypad (Security+ 2.0)",
    description: [
      "Works with LiftMaster & Chamberlain openers featuring yellow Learn button",
      "Wireless 9 V battery design, weatherproof, backlit keypad",
      "Supports rolling-code Security+ 2.0, temporary PINs, one-button close",
    ],
  },
  "878MAX": {
    label: "878MAX",
    image: "/images/keypads/878max.png",
    details: "Wireless Keyless Entry System",
    description: [
      "Compatible with all LiftMaster openers since 1993 using Security+ 2.0",
      "Permanently holds rolling-code security, temporary guest PINs, one-button close",
      "Weatherproof, backlit with flip-cover, simple programming",
    ],
  },
};

export default function Operators() {
  return (
    <>
      <CatalogLayout title={"RESIDENTIAL\nLIFTMASTER"} pagenum="9">
        {/* Wall Console */}
        <div className="relative w-full h-55 overflow-hidden">
          <Image
            src="/images/accessories/gd.png"
            alt="Operator Hero"
            fill
            className="object-cover "
            priority
          />
        </div>
        <div className="mt-1 mx-2">
          <div className="p-4">
            <div className="leading-tight ">
              <h1 className="font-bold text-[28px] text-red-800 ">KEYPAD</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-1">
              {Object.entries(KeypadList).map(([key, value]) => (
                <LmAccBox key={key} id={key} description={value} />
              ))}
            </div>
          </div>
          <div className="border-t mx-5"></div>
          {/* Remotes */}
          <div className="p-4 ">
            <div>
              <h1 className="font-bold text-[28px] text-red-800 ">
                ACCESSORIES
              </h1>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-3 mt-1">
              {Object.entries(AccessoryList).map(([key, value]) => (
                <LmAccBox key={key} id={key} description={value} />
              ))}
            </div>
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
