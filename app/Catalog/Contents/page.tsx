"use client";
import CatalogLayout from "@/components/CatalogLayout";
import TableofContents from "@/components/Contents/TableOfContents";
import TermsCond from "@/components/Contents/TermsCond";

const sections: { [key: string]: React.ReactNode } = {
  // --- Stock Residential ---
  "Clopay T50S": 1,
  "Clopay T52S ": 2,
  "Clopay 4050": 3,
  "Clopay 4051": 4,
  "Clopay 4053": 5,
  "Clopay 4300": 6,
  "Clopay GD1SP": 7,
  "Clopay GD1LP": 8,
  "Wayne Dalton 8700": 9,
  Inserts: 10,
  "Residential Tracks": 11,
  "Extension Springs": 12,
  "Torsion Springs": 13,
  "Locks & Decorative": 14,
  Vinyl: 15,

  // --- Stock Commercial ---
  "Clopay 3200": 16,
  "Clopay 524": 17,
  "Commercial Tracks": 18,
  "Track Addons": 19,
  "Commercial Sections": 20,
  "Ribbed Sections": 21,

  // --- Hardware ---
  Rollers: 22,
  Pulleys: 23,
  Cables: 24,
  Drums: 25,
  EndBearings: 26,
  "Chain Hoist": 27,
  Hinges: 28,
  Fixtures: 29,
  Retainer: 30,
  Struts: 31,
  Fasterns: 32,
  Tools: 33,

  "LiftMaster Operators": 34,
  "LiftMaster Operators ": 35,
  "LiftMaster Operators  ": 36,
  "LiftMaster Operators   ": 37,

  // --- LiftMaster Accessories ---
  "LiftMaster Accessories": 38,
  "LiftMaster Accessories ": 39,
};

const termsLeft: { [key: string]: React.ReactNode } = {
  "PICKUP & INSPECTION": (
    <>
      Customers are responsible for pickup. All products must be inspected at
      pickup—claims for damage or shortages must be made immediately. Once
      removed from the premises, Doors Direct South is not responsible.
    </>
  ),
  "DISPOSAL FEES": (
    <>
      Wood door disposal available <br /> Single Door or Equivalent : $35 <br />{" "}
      Double Door or Equivalent : $70.
      <br />
      Steel Disposal - No cost
    </>
  ),
};

const termsRight: { [key: string]: string } = {
  "RETURNS & CANCELLATIONS":
    "Confirm all details before ordering. Made-to-order and special-order products are nonreturnable. Standard stock items may be returned with approval and are subject to a 25% restocking fee.",
  "PAYMENT & DEPOSITS":
    "All payments must be made in full upon pickup. Special orders require a 50% deposit. No Checks",
};

//  "SHOP HOURS": "Mon–Fri: 7am–5pm; Sat: 7am–12pm;  Sun: Closed.",
export default function Page() {
  return (
    <div className="flex flex-col items-center  ">
      {/* Table of Contents */}
      <section className="w-full bg-gray-300 pb-2">
        <div className="px-10 p-3">
          <h1 className="text-3xl font-black mb-2 mt-2 text-gray-700">
            TABLE OF CONTENTS
          </h1>
          <div className="grid grid-cols-3 gap-2 ">
            {Object.entries(sections).map(([name, page]) => (
              <TableofContents key={name} name={name} page={page} />
            ))}
          </div>
        </div>
      </section>
      {/* Terms * Conditions */}
      <section className=" px-10 pt-4">
        <h1 className="font-black text-3xl text-red-900">TERMS & CONDITIONS</h1>
        <div className="flex">
          <div className="">
            {/* Hours */}
            <div className="w-full mt-2 ">
              <h1 className="font-bold text-gray-800 text-[24px]">
                SHOP HOURS
              </h1>
              <div className="flex flex-col">
                <span className="text-[18px]  font-semibold">
                  Mon-Fri : 7AM - 5PM
                </span>
                <span className="text-[18px]  font-semibold">
                  Saturday : 7AM - 12PM
                </span>
                <span className="text-[18px]  font-semibold">
                  Sunday : Closed
                </span>
              </div>
            </div>
            {Object.entries(termsLeft).map(([title, description]) => (
              <TermsCond key={title} title={title} description={description} />
            ))}
          </div>
          <div className="mx-5">
            {Object.entries(termsRight).map(([title, description]) => (
              <TermsCond key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
