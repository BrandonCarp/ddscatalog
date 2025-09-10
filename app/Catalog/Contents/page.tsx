"use client";
import CatalogLayout from "@/components/CatalogLayout";
import TableofContents from "@/components/Contents/TableOfContents";
import TermsCond from "@/components/Contents/TermsCond";

const sections: { [key: string]: number } = {
  "LiftMaster Operators": 2,
  "LiftMaster Operators  ": 3,
  "LiftMaster Operators   ": 4,
  "LiftMaster Operators ": 5,
  "LiftMaster Accessories": 6,
  "LiftMaster Accessories ": 7,
  "Stock Residential ": 8,
  "Stock Residential  ": 9,
  "Stock Residential   ": 10,
  "Stock Residential": 11,
  "Stock Residential    ": 12,
  "Stock Residential     ": 13,
  "Stock Residential      ": 14,
  "Stock Residential       ": 15,
  "Stock Residential        ": 16,
  "Stock Commercial ": 17,
  "Stock Commercial": 18,
  "Ribbed Sections": 19,
  "Extension Springs": 20,
  "Torsion Springs": 21,
  Vinyl: 22,
  Inserts: 23,
  "Locks & Decorative HDW": 24,
  Tracks: 25,
  Rollers: 26,
  Pulleys: 27,
  Cables: 28,
  Drums: 29,
  "Chain Hoist": 30,
  Hinges: 31,
  Fixtures: 32,
  Retainers: 33,
  "Jamb Bracket & EBP's": 34,
  "Fasterns & Angles": 35,
  "Shafts & Struts": 36,
  Tools: 37,
};

const termsLeft: { [key: string]: string } = {
  "SHOP HOURS": "Mon–Fri: 7am–5pm; Sat: 7am–12pm;  Sun: Closed.",
  "PICKUP & INSPECTION":
    "Customers are responsible for pickup. All products must be inspected at pickup—claims for damage or shortages must be made immediately. Once removed from the premises, Doors Direct South is not responsible.",
  "DISPOSAL FEES": "Wood door disposal available: $35 single, $70 double.",
};

const termsRight: { [key: string]: string } = {
  "RETURNS & CANCELLATIONS":
    "Confirm all details before ordering. Made-to-order and special-order products are nonreturnable. Standard stock items may be returned with approval and are subject to a 25% restocking fee.",
  "PAYMENT & DEPOSITS":
    "All payments must be made in full prior to pickup unless approved for net terms. Special orders require a 50% deposit. Late payments may incur fees.",
};

export default function Page() {
  return (
    <CatalogLayout title={"TABLE OF\nCONTENTS"} pagenum="1">
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
            <div className="mx-5">
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
