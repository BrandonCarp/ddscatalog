
import ItemBox from "@/components/ItemBox"
import CatalogLayout from "../../components/layoutDynamic"


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




export default function JambBracket(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Jamb Bracket">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(jambList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    