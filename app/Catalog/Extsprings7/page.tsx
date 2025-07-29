
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const extList: { [key: string]: string } = {
  "25-42-60": "E-25-60",
  "25-42-70": "E-25-70",
  "25-42-80": "E-25-80",
  "25-42-90": "E-25-90",
  "25-42-100": "E-25-100",
  "25-42-110": "E-25-110",
  "25-42-120": "E-25-120",
  "25-42-130": "E-25-130",
  "25-42-140": "E-25-140",
  "25-42-150": "E-25-150",
  "25-42-160": "E-25-160",
  "25-42-170": "E-25-170",
  "25-42-180": "E-25-180",
  "25-42-190": "E-25-190",
  "25-42-200": "E-25-200",
  "25-42-210": "E-25-210",
  "25-42-220": "E-25-220",
  "25-42-230": "E-25-230",
  "25-42-240": "E-25-240",
  "25-42-260": "E-25-260",
  "25-42-280": "E-25-280",
  "25-42-300": "E-25-300",
};



export default function Extspring7(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Extension Springs 7'">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(extList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    
  