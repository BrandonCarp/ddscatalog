
import ItemBox from "@/components/ItemBox"
import CatalogLayout from "../../components/layoutDynamic"


const drumList: { [key: string]: string } = {
  "400-8": "D-400-8",
  "400-12": "D-400-12",
  "5250-18": "D-5250-18",
  "400-54": "D-400-54",
  "5250-54": "D-5250-54",
  "5750-120": "D-5750-120",
  "850-11": "D-850-11",
  "1100-18": "D-1100-18",
};


export default function Drums(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Drums">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(drumList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    
  