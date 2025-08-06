
import ItemBox from "@/components/Drums/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


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

const jambList: { [key: string]: string } = {
  "#1 JAMB BRACKET": "JB-1",
  "#2 JAMB BRACKET": "JB-2",
  "#3 JAMB BRACKET": "JB-3",
  "#4 JAMB BRACKET": "JB-4",
  "#5 JAMB BRACKET": "JB-5",
  "#6 JAMB BRACKET": "JB-6",
  "#7 JAMB BRACKET": "JB-7",
  "#8 JAMB BRACKET": "JB-8",
  "#9 JAMB BRACKET": "JB-9",
  "#10 JAMB BRACKET": "JB-10",
  "#11 JAMB BRACKET": "JB-11",
  "#12 JAMB BRACKET": "JB-12",
};

const ebpList: { [key: string]: string } = {
  '3-3/8"  RES, END BEARING PLATE': "EP-R-3",
  '3-3/8" COMM, END BEARING PLATE': "EP-C-3",
  '4-3/8" END BEARING PLATE': "EP-CR-4",
  '5" END BEARING PLATE': "EP-CR-5",
  '6" END BEARING PLATE': "EP-CR-6",
};


export default function FixJambEndb(){
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
    
  