
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const cableList: { [key: string]: string } = {
  '1-1/4" X 1-1/4" X 8FT, GALV ANGLE': "GA-1-1/4-8",
  '1-1/4" X 1-1/4" X 8FT, WHITE ANGLE': "WA-1-1/4-8",
  '2" X 2" X 10FT GALV ANGLE': "GA-2-2-10",
};





export default function Cables(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Cables">
  <div className="grid grid-cols-3 space-y-3 space-x-3">
   {Object.entries(cableList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    