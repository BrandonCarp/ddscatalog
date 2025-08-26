"use client";
import CatalogLayout from "@/components/CatalogLayout";
import TableofContents from "@/components/Contents/TableOfContents";
import TermsCond from "@/components/Contents/TermsCond";
const sections: { [key: string]: number } = {
  Drums: 2,
  Extension: 3,
  Torsion: 4,
  "Chain Hoist & Accessories": 5,
  Fasterns: 6,
  "LiftMaster Accessories ": 8,
  "LiftMaster Accessories": 9,
  "LiftMaster Operators": 10,
  "LiftMaster Operators ": 11,
  "LiftMaster Operators   ": 12,
  "LiftMaster Operators  ": 13,
  "Fixtures, Jamb Brackets & EBP": 14,
  Hinges: 15,
  Inserts: 16,
  Pulleys: 17,
  Rollers: 18,
  "Shafts & Struts": 19,
  "Spring Pushers & Cables": 20,
  Vinyl: 21,
  "Locks & Decorative Hardware": 22,
};
const terms: { [key: string]: string } = {
  FREIGHT:
    "Please note: Customers are responsible for order pickup. Shipping or delivery is not provided.",
  "WOOD DUMPSTER":
    "There is a charge for disposing of wood doors: $35 Single Door, $70 Double Door.",

  "SHOP HOURS": "Monday-Friday: 7am-5pm; Saturday: 7am-12pm; Sunday: Closed.",

  INSPECTION:
    "Please inspect all products at the time of pickup. Claims for damage or shortages must be reported immediately. Once removed from premises, Doors Direct South is not responsible for damages.",
};
const terms2: { [key: string]: string } = {
  "RESTOCKING FEE":
    "A 25% restocking fee applies to in-stock items. No returns on special orders.",
  "PAYMENT TERMS":
    "All payments must be made in full prior to pickup unless pre-approved for net terms. Late payments may incur additional fees.",
  "RETURNS & CANCELLATIONS":
    "Please be certain all information is correct when placing an order, it may not be possible to cancel or modify an order after it has been entered. Made to order and special order products are nonreturnable. Standard stock items may be returned by contact Doors Direct South (856) 662-6666",
  DEPOSITS:
    "Special orders require a deposit of 50% before the order can be placed",
};
export default function Page() {
  return (
    <CatalogLayout title={"TABLE OF\nCONTENTS"} pagenum="1">
      <div className="flex flex-col items-center min-h-full ">
        {/* Table of Contents */}
        <section className="w-full bg-gray-300">
          <div className="px-10 py-3">
            <h1 className="text-3xl font-bold mb-2 mt-2 text-gray-600">
              TABLE OF CONTENTS
            </h1>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(sections).map(([name, page]) => (
                <TableofContents key={name} name={name} page={page} />
              ))}
            </div>
          </div>
        </section>
        {/* Terms * Conditions */}
        <section className=" px-10 py-3">
          <h1 className="font-bold text-3xl text-red-700">
            TERMS & CONDITIONS
          </h1>
          <div className="flex">
            <div className="">
              {Object.entries(terms).map(([title, description]) => (
                <TermsCond
                  key={title}
                  title={title}
                  description={description}
                />
              ))}
            </div>
            <div className="">
              {Object.entries(terms2).map(([title, description]) => (
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
