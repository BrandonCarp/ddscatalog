
import CatalogLayout from "../../components/CatalogLayout"


const insertList: { [key: string]: string } = {
  "509 COLONIAL WHITE, 1PC": "509-WT-1",
  "508 CHARLESTON, WHITE, 1PC": "508-WT-1",
  "510 PRAIRIE, WHITE, 1PC": "510-WT-1",
  "501 SUNSET, WHITE, 2PCS": "501-WT-2",
  "502 SUNSET, WHITE, 3PCS": "502-WT-3",
  "503 SUNSET, WHITE, 4PCS": "503-WT-4",
  "504 SUNSET, WHITE, 7PCS": "504-WT-7",
  "505 SUNSET, WHITE, 8PCS": "505-WT-8",
  "506 SUNSET, WHITE, 5PCS": "506-WT-5",
  "612 STOCKTON, WHITE, 1PC": "612-WT-1",
  "608 CHARLESTON, WHITE, 1PC": "608-WT-1",
  "610 PRAIRIE, WHITE, 1PC": "610-WT-1",
  "611 MADISON, WHITE, 1PC": "611-WT-1",
  "613 MADISON ARCH, WHITE, 2PCS": "613-WT-2",
  "603 SUNSET, WHITE, 2PCS": "603-WT-2",
  "605 SUNSET, WHITE, 4PCS": "605-WT-4",
  "509 COLONIAL ALMOND, 1PC": "509-AL-1",
  "508 CHARLESTON, ALMOND, 1PC": "508-AL-1",
  "510 PRAIRIE, ALMOND, 1PC": "510-AL-1",
  "503 SUNSET, ALMOND, 4PCS": "503-AL-4",
  "505 SUNSET, ALMOND, 8PCS": "505-AL-8",
  "509 COLONIAL BROWN, 1PC": "509-BR-1",
  "508 CHARLESTON, BROWN, 1PC": "508-BR-1",
  "510 PRAIRIE, BROWN, 1PC": "510-BR-1",
  "503 SUNSET, BROWN, 4PCS": "503-BR-4",
  "505 SUNSET, BROWN, 8PCS": "505-BR-8",
  "509 COLONIAL SANDTONE, 1PC": "509-ST-1",
  "508 CHARLESTON, SANDTONE, 1PC": "508-ST-1",
  "510 PRAIRIE, SANDTONE, 1PC": "510-ST-1",
  "503 SUNSET, SANDTONE, 4PCS": "503-ST-4",
  "505 SUNSET, SANDTONE, 8PCS": "505-ST-8",
  "509 COLONIAL BLACK, 1PC": "509-BK-1",
  "505 SUNSET, BLACK, 8PCS": "505-BK-8",
  "SQ24, WHITE, 1PC": "SQ24-WT-1",
  "REC14, WHITE, 1PC": "REC14-WT-1",
  "GRILLE ON ARCH1, WHITE, 2PCS": "GA1-WT-2",
  "VERTICAL GRILLE ON ARCH1, WHITE, 2PCS": "VGA1-WT-2",
};



export default function InsertTable() {
  return (
    <CatalogLayout
      title={"INSERTS"}
      bgcolor={"bg-green-800"}
      textcolor={"text-green-800"}
    >
      <div className="overflow-x-auto mx-4 max-w-5xl text-xs">
        <h1 className="font-bold text-3xl text-green-800 p-4">
          CLOPAY INSERTS
        </h1>
        <table className=" table-auto border border-gray-300 text-[11px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1 text-left w-2/3">Insert Description</th>
              <th className="px-2 py-1 text-left w-1/3">Item Code</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(insertList).map(([desc, code], index) => (
              <tr
                key={desc}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="px-2 py-1 font-medium text-gray-800">
                  {desc}
                </td>
                <td className="px-2 py-1 text-blue-700">{code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CatalogLayout>
  );
}