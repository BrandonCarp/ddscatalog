import React from "react";

// Types
interface DoorDescription {
  color: string;
  width: string[];
  height: string[];
}

interface Door {
  label: string;
  brand?: string;
  description: DoorDescription[];
}

interface DoorTableProps {
  doors: Door[];
  title?: string;
}

// Map color names to hex for swatches
const colorMap: Record<string, string> = {
  WHITE: "#FFFFFF",
  ALMOND: "#EFDECD",
  CHOCOLATE: "#8B4513",
  SANDTONE: "#D2B48C",
  BLACK: "#000000",
};

const DoorTable: React.FC<DoorTableProps> = ({ doors, title }) => {
  return (
    <div className="space-y-2 ">
      {/* {title && <h2 className="text-2xl font-bold text-red-700">{title}</h2>} */}

      {doors.map((door) => (
        <div key={door.label}>
          <h3 className="text-xl font-semibold mb-1 text-red-800">
            {door.label}
          </h3>

          <table className="min-w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-2 text-left">COLOR</th>
                <th className="px-2 py-2 text-center">HEIGHT</th>
                <th className="px-2 py-2 text-center">WIDTH</th>
              </tr>
            </thead>
            <tbody>
              {door.description.map((desc, idx) => (
                <tr
                  key={`${door.label}-${desc.color}`}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-200"}
                >
                  {/* Color cell with swatch */}
                  <td className="px-2 py-2 font-semibold text-gray-700 flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded-sm border border-gray-400"
                      style={{
                        backgroundColor: colorMap[desc.color] || "#ccc",
                      }}
                    />
                    <span>{desc.color}</span>
                  </td>

                  {/* Heights */}
                  <td className="px-2 py-2 text-center">
                    {desc.height.join(", ")}
                  </td>

                  {/* Widths */}
                  <td className="px-2 py-2 text-center">
                    {desc.width.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default DoorTable;
