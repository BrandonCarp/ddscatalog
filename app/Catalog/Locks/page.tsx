
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
    