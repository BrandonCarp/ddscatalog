
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/layoutDynamic"


const spList: { [key: string]: string } = {
  'PUSH DOWN DOOR BUMPERS, 15", 2PCS': "PDB-15-2",
  'PUSH DOWN DOOR BUMPERS, 27", 2PCS': "PDB-27-2",
  'U-STYLE DOOR BUMPERS, 2PCS': "USB-2",
};



export default function Springpusher(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Spring Pushers">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(spList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    