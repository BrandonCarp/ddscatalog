
import ItemBox from "@/components/ItemBox"
import CatalogLayout from "../../components/layoutDynamic"


const chList: { [key: string]: string } = {
  'CHAIN HOIST 4:1, 1" B, BOLT ON WALL': "CH4-1-BW",
  'CHAIN HOIST 4:1, 1-1/4" B, BOLT ON WALL': "CH4-1.25-BW",
  'CHAIN HOIST 3:1, 1" B, SLIDE ON SHAFT': "CH3-1-SS",
  'SPREADER ARM WITH BEARING, 2PCS': "SA-B2",
};



export default function Chainhoist(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Chain Hoist">
  <div className="grid grid-cols-3  space-y-3 space-x-2 ">
   {Object.entries(chList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    