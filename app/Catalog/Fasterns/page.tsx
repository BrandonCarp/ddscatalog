
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const fasternList: { [key: string]: string } = {
  '1/4" X 1" WOOD LAGS': "F-1-L",
  '1/4" TRACK BOLTS': "F-1-TB",
  '1/4" TRACK NUTS': "F-1-TN",
  '1/4" X 1" TEK': "F-1-T",
  '1/4" X 3/4" TEK': "F-3-T",
  '3/8" X 3/4" CARRIGE BOLT': "F-3-CB",
  '3/8" X 1-1/2" BOLTS': "F-3-B",
  '3/8" NUTS': "F-3-N",
  '3/8" FLAT WASHERS': "F-3-FW",
  '5/16" X 1" TEK': "F-5-T",
  '5/16" X 1" BOLTS': "F-5-B",
  '5/16" NUTS': "F-5-N",
  '5/16" FLAT WASHERS': "F-5-FW",
  '5/16" X 1-5/8" LAGS': "F-5-L",
  '5/16" X 3" LAGS': "F-5-3L",
};





export default function Fasterns(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Fasterns">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(fasternList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    