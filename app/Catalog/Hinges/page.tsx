
import ItemBox from "@/components/Drums/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const hingeList: { [key: string]: string } = {
  "#1 HINGE, 18GA": "H-1-18",
  "#2 HINGE, 18GA": "H-2-18",
  "#3 HINGE, 18GA": "H-3-18",
  "#4 HINGE, 18GA": "H-4-18",
  "1/2 HINGE, 14GA": "H-H-14",
  "#1 HINGE, 14GA": "H-1-14",
  "#2 HINGE, 14GA": "H-2-14",
  "#3 HINGE, 14GA": "H-3-14",
  "#4 HINGE, 14GA": "H-4-14",
  "#5 HINGE, 14GA": "H-5-14",
  "#6 HINGE, 14GA": "H-6-14",
  "#7 HINGE, 14GA": "H-7-14",
  "#8 HINGE, 14GA": "H-8-14",
  "#9 HINGE, 14GA": "H-9-14",
  "#1 HINGE, 11GA": "H-1-11",
  "#2 HINGE, 11GA": "H-2-11",
  "#3 HINGE, 11GA": "H-3-11",
  "#4 HINGE, 11GA": "H-4-11",
  "#5 HINGE, 11GA": "H-5-11",
  "#6 HINGE, 11GA": "H-6-11",
  "#7 HINGE, 11GA": "H-7-11",
  "#8 HINGE, 11GA": "H-8-11",
  "#9 HINGE, 11GA": "H-9-11",
};

export default function Hinges(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Hinges" bgcolor="bg-green-700" textcolor="text-green-700">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(hingeList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    
  