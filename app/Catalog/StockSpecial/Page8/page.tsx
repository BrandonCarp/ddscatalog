"use client";
import Image from "next/image";
import CatalogLayout from "@/components/CatalogLayout";

{
  /* 
  1. We are adults , fall night was not even remotely a big deal, it was almost rude to try to set me up with Sammy who rants with amber how they hate men like come on sammy called me a nazi why are you even upset it didnt work out
  2. No one should even be discussing fall night its been a year, no one was disrespected things happen, get over it
  3. Dan, Amber, Mark, it was absolutely baffling how poorly Jules was treated just because she was no longer with Alek. Its borderline disgusting behavior out of everyone involved
  3.3. Jules is the youngest sister/younger friend, and it was repeated to me how bad she was apparently to Alek just to defend someone who lived on your street
  3.3. Youre supposed to be the people closest to her and you treated her like absolute trash when she did nothing wrong
  4. It is one thing to be hesitant regarding being my friend thats fine we dont have to be, but to take it out on Jules and pressuring our relationship is so beyond disrespectful to me and her
  5. I have done nothing but be overly respectful and kind to everyone involved this entire time
  5.5. Just for the nastiest things to be said about me behind my back when none of it involves anyone besides me and Jules
  6. The slanderous claims on my character, how I treat others and my dog without even the smallest attempt to get to know me speaks me on others character than it does on mine
  7. Amber making up the bogus claim it was a girls trip but at the same time is on the phone with Dan because she woke him up at 2:30 PM apologizing
  8. Youre entitled to youre feelings , but acting on them as almost 40 year olds is absolutely bizarre and childish
  9. Im cool with it all being water under the bridge, but do not expect me to not defend my self or Jules anymore regardless of if youre her brother or friend
  
  */
}

export default function Clo4051() {
  return (
    <>
      <CatalogLayout pagenum="1" title="STOCK RESIDENTIAL">
        {/* Absolute Title */}
        <div className="absolute left-0 ml-5 mt-110 z-10">
          <div className="">
            <h1 className="font-bold inline">Gallery Collection /</h1>{" "}
            <span>Model GD1LP, Gallery Collection Long Panel</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-120">
          <Image
            src="/images/StockDoors/gd1lp.jpg"
            alt="Operator Hero"
            fill
            className=""
            priority
            quality={100}
          />
        </div>

        {/* Detail Section */}
        <div className="relative mt-3">
          {/* Text takes ~60% */}
          <section className="w-3/5 flex flex-col ml-5">
            <div>
              <h1 className="font-bold text-4xl text-red-900">CLOPAY GD1LP</h1>
              <p className="font-semibold text-[18px]">
                Carriage house style with added comfort. Two-layer steel, 2"
                thick with polystyrene insulation (R-value 6.3), improves energy
                efficiency and quiet operation, plus customizable panels,
                windows, and decorative hardware.
              </p>
            </div>

            <div className="mt-2 space-y-3">
              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK COLORS
                </span>
                <div className="flex space-x-5 mt-1">
                  <div className="flex flex-col ">
                    <div className="w-20 h-10 rounded border border-gray-400 bg-white"></div>
                    <span className="ml-4 font-semibold">White</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK HEIGHTS
                </span>
                <p className="font-semibold text-[18px]">
                  6'3" - 6'6" - 6'9" - 7'0" - 7'6" - 7'9" - 8'0"
                </p>
              </div>

              <div>
                <span className="font-semibold text-2xl text-red-900">
                  STOCK WIDTHS
                </span>
                <p className="font-semibold text-[18px]">8'0" - 9'0" - 16'0"</p>
              </div>
            </div>
          </section>

          {/* Absolutely positioned image (40%) */}
          <div className="absolute top-0 right-0 w-2/5 flex justify-center">
            <Image
              src="/images/DoorDetails/gd1sp.png"
              alt="4051 Details"
              width={250}
              height={250}
              className="object-contain mt-5 scale-x-[-1]"
              quality={100}
            />
          </div>
        </div>
      </CatalogLayout>
    </>
  );
}
