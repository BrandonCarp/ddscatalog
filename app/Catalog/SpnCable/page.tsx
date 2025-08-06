
import ItemBox from "@/components/Drums/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const spList: { [key: string]: string } = {
  'PUSH DOWN DOOR BUMPERS, 15", 2PCS': "PDB-15-2",
  'PUSH DOWN DOOR BUMPERS, 27", 2PCS': "PDB-27-2",
  'U-STYLE DOOR BUMPERS, 2PCS': "USB-2",
};

const cableList: { [key: string]: string } = {
  '1-1/4" X 1-1/4" X 8FT, GALV ANGLE': "GA-1-1/4-8",
  '1-1/4" X 1-1/4" X 8FT, WHITE ANGLE': "WA-1-1/4-8",
  '2" X 2" X 10FT GALV ANGLE': "GA-2-2-10",
};



export default function SpnCable(){
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
    