
import ItemBox from "@/components/Drums/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const shaftList: { [key: string]: string } = {
  'TUBE SHAFT, 1", 8\'9"': "TS-8-1",
  'TUBE SHAFT, 1", 9\'9"': "TS-9-1",
  'TUBE SHAFT, 1", 10\'9"': "TS-10-1",
  'TUBE SHAFT, 1", 12\'9"': "TS-12-1",
  'TUBE SHAFT, 1", 14\'9"': "TS-14-1",
  'TUBE SHAFT, 1", 15\'9"': "TS-15-1",
  'TUBE SHAFT, 1", 16\'9"': "TS-16-1",
  'TUBE SHAFT, 1", 16\'9" HEAVY': "TS-16H-1",
  'TUBE SHAFT, 1", 18\'9" HEAVY': "TS-18H-1",
  'SOLID SHAFT, 1", 12\'6"': "SS-12-1",
  'SOLID SHAFT, 1", 21\'0"': "SS-21-1",
  'SOLID SHAFT, 1.25", 12\'6"': "SS-12-125",
  'SOLID SHAFT, 1.25", 17\'6"': "SS-17-125",
};



export default function Shafts(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Shafts">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(shaftList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    