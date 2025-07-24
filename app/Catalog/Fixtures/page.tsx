
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/layoutDynamic"


const fixtureList: { [key: string]: string } = {
  "RESIDENTIAL TOP FIXTURES": "F-R-TA",
  "RESIDENTIAL BTM BB-100": "F-R-B100",
  "RESIDENTIAL BTM BB-90": "F-R-B90",
  "RESIDENTIAL LHR BTM FIXTURES": "F-R-LB",
  "RESIDENTIAL LHR TOP FIXTURES": "F-R-LT",
  "COMMERICAL TOP FIXTURES": "F-C-TA",
  "COMMERICAL BTM BB-120": "F-C-B120",
  "COMMERICAL BTM BB-6": "F-C-B6",
  "COMMERICAL BTM BB-6 NOTCHED": "F-C-B6N",
  "COMMERICAL LHR TOP FIXTURES": "F-C-LT",
  "COMMERICAL LHR BTM BB-5": "F-C-LB5",
  "COMMERICAL LHR BTM BB-6": "F-C-LB6",
};


export default function Fixtures(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Fixtures">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(fixtureList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    
  