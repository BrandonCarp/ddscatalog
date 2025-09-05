"use client";
import CatalogLayout from "@/components/CatalogLayout";
import TableofContents from "@/components/Contents/TableOfContents";
import TermsCond from "@/components/Contents/TermsCond";

const sections: { [key: string]: number } = {
  Drums: 2,
  "Jamb Bracket & End Bearing Plates": 3,
  "Fasterns & Angles": 4,
  Fixtures: 5,
  "Chain Hoist": 6,
  Rollers: 7,
  Hinges: 8,
  "LiftMaster Operators": 9,
  "LiftMaster Operators ": 10,
  "LiftMaster Operators  ": 11,
  "LiftMaster Operators   ": 12,
  "LiftMaster Accessories": 13,
  "LiftMaster Accessories ": 14,
  "Shafts & Struts": 15,
  "Extension Springs": 16,
  "Torsion Springs": 17,
  "Stock Doors": 18,
  "Stock Doors ": 19,
  "Stock Doors  ": 20,
  "Stock Doors   ": 21,
  "Ribbed Sections": 22,
  Inserts: 23,
  "Locks & Decorative HDW": 24,
  Vinyl: 25,
  Pulleys: 26,
  Retainers: 27,
  "Cables & Spring Pushers": 28,
  Tools: 29,
};

const termsLeft: { [key: string]: string } = {
  "SHOP HOURS": "Monday–Friday: 7am–5pm; Saturday: 7am–12pm; Sunday: Closed.",
  FREIGHT:
    "Customers are responsible for order pickup. Shipping or delivery is not provided.",
  INSPECTION:
    "All products must be inspected at the time of pickup. Claims for damage or shortages must be reported immediately. Once removed from the premises, Doors Direct South is not responsible for damages.",
  "DISPOSAL FEES":
    "Wood door disposal is available at an additional cost: $35 for a single door, $70 for a double door.",
};

const termsRight: { [key: string]: string } = {
  "RETURNS & CANCELLATIONS":
    "Please confirm all information when placing an order. Once entered, it may not be possible to cancel or modify. Made-to-order and special-order products are nonreturnable. Standard stock items may be returned by contacting Doors Direct South (856) 662-6666.",
  "RESTOCKING FEE":
    "A 25% restocking fee applies to in-stock items. No returns on special orders.",
  "PAYMENT TERMS":
    "All payments must be made in full prior to pickup unless pre-approved for net terms. Late payments may incur additional fees.",
  DEPOSITS:
    "Special orders require a deposit of 50% before the order can be placed.",
};

export default function Page() {
  return (
    <CatalogLayout title={"TABLE OF\nCONTENTS"} pagenum="1">
      <div className="flex flex-col items-center  ">
        {/* Table of Contents */}
        <section className="w-full bg-gray-300 pb-2">
          <div className="px-10 py-2">
            <h1 className="text-3xl font-black mb-2 mt-2 text-gray-700">
              TABLE OF CONTENTS
            </h1>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(sections).map(([name, page]) => (
                <TableofContents key={name} name={name} page={page} />
              ))}
            </div>
          </div>
        </section>
        {/* Terms * Conditions */}
        <section className=" px-10 py-3">
          <h1 className="font-bold text-3xl text-red-900">
            TERMS & CONDITIONS
          </h1>
          <div className="flex">
            <div className="">
              {Object.entries(termsLeft).map(([title, description]) => (
                <TermsCond
                  key={title}
                  title={title}
                  description={description}
                />
              ))}
            </div>
            <div className="">
              {Object.entries(termsRight).map(([title, description]) => (
                <TermsCond
                  key={title}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </CatalogLayout>
  );
}
