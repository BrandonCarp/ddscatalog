
import ItemBox from "@/components/ItemBox"
import CatalogLayout from "../../components/layoutDynamic"


const chainList: { [key: string]: string } = {
  "#40 CHAIN, 10FT": "C40-10",
  "#40 MASTER LINK": "ML40",
  "#40 HALF LINK": "HL40",
  "#41 CHAIN, 10FT": "C41-10",
  "#41 MASTER LINK": "ML41",
  "#41 HALF LINK": "HL41",
  "#50 CHAIN, 10FT": "C50-10",
  "#50 MASTER LINK": "ML50",
  "#50 HALF LINK": "HL50",
  "#65 CHAIN": "C65",
  "#65 MASTER LINK": "ML65",
  "#65 HALF LINK": "HL65",
};



export default function Chains(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Chains">
  <div className="grid grid-cols-4 space-y-3 space-x-2 ">
   {Object.entries(chainList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    