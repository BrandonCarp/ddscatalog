import HingeBox from "@/components/HingeBox/HingeBox";
import CatalogLayout from "../../components/CatalogLayout";

const hingeList: { [key: string]: string } = {
  "#1 HINGE, 18GA": "HG1801",
  "#2 HINGE, 18GA": "HG1802",
  "#3 HINGE, 18GA": "HG1803",
  "#4 HINGE, 18GA": "HG1804",
  "1/2 HINGE, 14GA": "HGHALF",
  "#1 HINGE, 14GA": "HG1401",
  "#2 HINGE, 14GA": "HG1402",
  "#3 HINGE, 14GA": "HG1403",
  "#4 HINGE, 14GA": "HG1404",
  "#5 HINGE, 14GA": "HG1405",
  "#6 HINGE, 14GA": "HG1406",
  "#7 HINGE, 14GA": "HG1407",
  "#8 HINGE, 14GA": "HG1408",
  "#9 HINGE, 14GA": "HG1409",
  "#1 HINGE, 11GA": "HG1101",
  "#2 HINGE, 11GA": "HG1102",
  "#3 HINGE, 11GA": "HG1103",
  "#4 HINGE, 11GA": "HG1104",
  "#5 HINGE, 11GA": "HG1105",
  "#6 HINGE, 11GA": "HG1106",
  "#7 HINGE, 11GA": "HG1107",
  "#8 HINGE, 11GA": "HG1108",
  "#9 HINGE, 11GA": "HG1109",
};

export default function Hinges() {
  return (
    <>
      <div className="flex items-center justify-center">
        <CatalogLayout
          title="Hinges"
          pagenum="4"
          bgcolor="bg-green-700"
          textcolor="text-green-700"
        >
          <div className="grid grid-cols-4 space-y-3 space-x-3">
            {Object.entries(hingeList).map(([key, value]) => (
              <HingeBox key={key} id={key} description={value} />
            ))}
          </div>
        </CatalogLayout>
      </div>
    </>
  );
}
