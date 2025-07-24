
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/layoutDynamic"


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




export default function Dechdw(){
    return (
  <>
  <div className="flex items-center justify-center ">
  <CatalogLayout title="Decorative Hardware">
  <div className="grid grid-cols-4  space-y-3 mx-10">
   {Object.entries(dechdwList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    