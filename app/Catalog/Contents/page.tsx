"use client";
import CatalogLayout from "@/components/CatalogLayout";
import TableofContents from "@/components/Contents/TableOfContents";
import TermsCond from "@/components/Contents/TermsCond";

const sections: { [key: string]: number } = {
  // --- Stock Residential ---
  "Stock Residential": 1,
  "Stock Residential ": 2,
  "Stock Residential  ": 3,
  "Stock Residential   ": 4,
  "Stock Residential    ": 5,
  "Stock Residential     ": 6,
  "Stock Residential      ": 7,
  "Stock Residential       ": 8,
  "Stock Residential         ": 9,
  Inserts: 10,
  "Extension Springs": 11,
  "Torsion Springs": 12,
  "Locks & Decorative": 13,
  Vinyl: 14,

  // --- Stock Commercial ---
  "Stock Commercial 1": 15,
  "Stock Commercial 2": 16,
  "Ribbed Sections": 17,

  // --- Hardware ---
  Tracks: 18,
  Rollers: 19,
  Pulleys: 20,
  Cables: 21,
  Drums: 22,
  "Chain Hoist": 23,
  Hinges: 24,
  Fixtures: 25,
  Retainers: 26,
  "Jamb Brackets": 27,
  Fasterns: 28,
  "Shafts & Struts": 29,
  Tools: 30,

  // --- LiftMaster Operators ---
  "LiftMaster Operators": 31,
  "LiftMaster Operators ": 32,
  "LiftMaster Operators  ": 33,
  "LiftMaster Operators   ": 34,

  // --- LiftMaster Accessories ---
  "LiftMaster Accessories": 35,
  "LiftMaster Accessories ": 36,
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
