import SpringBox from "./SpringBox";

const torList9: { [key: string]: string } = {
  "2ID-207-27": "220727",
  "2ID-207-24": "220724",
  "2ID-218-28.25": "221828",
  "2ID-225-29.75": "222529",
  "2ID-234-32.75": "223432",
  "2ID-234-30.25": "223430",
  "2ID-243-34": "224334",
  "2ID-250-36": "225036",
  "2ID-262-42.75": "226242",
};

// --- Helpers ---
function formatID(prefix: string) {
  return prefix.replace("ID", '"'); // "2ID" -> 2"
}

function formatLength(length: string) {
  const num = parseFloat(length);
  const whole = Math.floor(num);
  const frac = num - whole;

  let fracStr = "";
  if (Math.abs(frac - 0.25) < 0.001) fracStr = "-1/4";
  else if (Math.abs(frac - 0.5) < 0.001) fracStr = "-1/2";
  else if (Math.abs(frac - 0.75) < 0.001) fracStr = "-3/4";

  return `${whole}${fracStr}`;
}

export default function Tor9() {
  return (
    <>
      <section className="flex-none">
        <h1 className="text-2xl font-black text-red-900 pb-1">
          9' TORSION SPRINGS
        </h1>

        <table className="min-w-full border-collapse border">
          <thead>
            <tr className="text-red-900">
              <th className="border border-gray-600 px-4 text-left">PART</th>
              <th className="border border-gray-600 px-4 text-left">
                ITEM NUMBER
              </th>
              <th className="border border-gray-600 px-4 text-center">ID</th>
              <th className="border border-gray-600 px-4 text-center">WIRE</th>
              <th className="border border-gray-600 px-4 text-center">LGTH</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(torList9).map(([part, itemNumber]) => {
              const [prefix, wireSize, wireLength] = part.split("-");

              return (
                <SpringBox
                  key={part}
                  id={part}
                  description={{
                    label: itemNumber,
                    prefix: formatID(prefix), // 👉 2"
                    wireSize, // 👉 207
                    wireLength: formatLength(wireLength), // 👉 27, 28-1/4, etc.
                  }}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
