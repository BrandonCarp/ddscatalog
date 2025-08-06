
import ItemBox from "@/components/Drums/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const lockList: { [key: string]: string } = {
  "8FT LOCKBAR": "L-1-8",
  "9FT LOCKBAR": "L-1-9",
  "10FT LOCKBAR": "L-1-10",
  "12FT LOCKBAR": "L-1-12",
  "14FT LOCKBAR": "L-1-14",
  "15FT LOCKBAR": "L-1-15",
  "16FT LOCKBAR": "L-1-16",
  "17FT LOCKBAR": "L-1-17",
  "18FT LOCKBAR": "L-1-18",
  "LOCKBAG ASSEMBLY": "L-1-B",
  "SNAP LATCH LOCK ASSEMBLY": "L-1-SL",
  "INSIDE SLIDE LOCK": "L-1-IS",
};

const dechdwList: { [key: string]: string } = {
  "SPADE STRAP HINGES, 4PCS": "SSH4",
  "SPADE STRAP HANDLES, 2 PCS": "SSH2",
  "MAGNETIC SPADE STRAP HINGES, 4PCS": "MSSH4",
  "MAGNETIC SPADE STRAP HANDLES, 2PCS": "MSSH2",
  "COLONIAL STRAP HINGES, 4PCS": "CSH4",
  "COLONIAL STRAP HANDLES, 2PCS": "CSH2",
  "SPEAR STRAP HINGES, 4PCS": "SSH4",
  "SPEAR STRAP HANDLES, 2PCS": "SSH2",
  "TWISTED L LOCK, OPERABLE": "TLL-O",
  "TWISTED L LOCK, DUMMY": "TLL-D",
  "TWISTED T LOCK, OPERABLE": "TTL-O",
  "TWISTED T LOCK, DUMMY": "TTL-D",
  "ESCUTCHEON PLATES": "EP",
  "DUMMY HANDLES WITH KEYHOLE": "DHWK",
};



export default function Locks(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Locks">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(lockList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    