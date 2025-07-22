
import ItemBox from "@/components/ItemBox"
import CatalogLayout from "../../components/layoutDynamic"


const vinylList: { [key: string]: string } = {
  "WHITE VINYL 7FT": "V-WT-7",
  "WHITE VINYL 8FT": "V-WT-8",
  "WHITE VINYL 9FT": "V-WT-9",
  "WHITE VINYL 10FT": "V-WT-10",
  "WHITE VINYL 12FT": "V-WT-12",
  "WHITE VINYL 16FT": "V-WT-16",
  "WHITE VINYL 18FT": "V-WT-18",
  "ALMOND VINYL 7FT": "V-AL-7",
  "ALMOND VINYL 8FT": "V-AL-8",
  "ALMOND VINYL 9FT": "V-AL-9",
  "ALMOND VINYL 16FT": "V-AL-16",
  "BROWN VINYL 7FT": "V-CB-7",
  "BROWN VINYL 8FT": "V-CB-8",
  "BROWN VINYL 9FT": "V-CB-9",
  "BROWN VINYL 16FT": "V-CB-16",
  "SANDTONE 7FT": "V-ST-7",
  "SANDTONE 8FT": "V-ST-8",
  "SANDTONE 9FT": "V-ST-9",
  "SANDTONE 16FT": "V-ST-16",
  "BLACK VINYL 7FT": "V-BK-7",
  "BLACK VINYL 8FT": "V-BK-8",
  "BLACK VINYL 9FT": "V-BK-9",
  "BLACK VINYL 16FT": "V-BK-16",
  "BLACK VINYL 18FT": "V-BK-18",
  "BRONZE VINYL 16FT": "V-BZ-16",
  "GRAY VINYL 16FT": "V-GY-16",
  "CHARCOAL VINYL 16FT": "V-CL-16",
  "MOCHA BROWN VINYL 16FT": "V-MB-16",
  "DESERT TAN VINYL 16FT": "V-DT-16",
  "HUNTER GREEN VINYL 16FT": "V-HG-16",
  "CHERRY VINYL 16FT": "V-CC-16",
  "WALNUT VINYL 16FT": "V-WO-16",
  "MEDIUM OAK VINYL 16FT": "V-MO-16",
  "DARK OAK VINYL 16FT": "V-DO-16",
  "SLATE VINYL 16FT": "V-SL-16",
};




export default function Vinyl(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Vinyl">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(vinylList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    