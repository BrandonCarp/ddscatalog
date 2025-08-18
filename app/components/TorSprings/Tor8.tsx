import SpringBox from "./SpringBox";

const torList8: { [key: string]: string } = {
  "2ID-207-24.75": "220724",
  "2ID-207-22.25": "220722",
  "2ID-218-26": "221826",
  "2ID-225-27.25": "222527",
  "2ID-234-30.25": "223430",
  "2ID-234-28": "223428",
  "2ID-243-31.5": "224331",
  "2ID-250-33.25": "225033",
  "2ID-262-39.25": "226239",
};

export default function Tor8() {
  return (
    <>
      <section className="flex-none h-[300px] mb-4 ">
        <h1 className="text-2xl font-bold text-red-800 pb-1  mt-4">
          8' TORSION SPRINGS
        </h1>

        <table className="min-w-full border-collapse border ">
          <thead>
            <tr className="text-red-800">
              <th className="border border-gray-600 px-4  text-left">PART</th>
              <th className="border border-gray-600 px-4  text-left">
                ITEM NUMBER
              </th>
              <th className="border border-gray-600 px-4  text-center">ID</th>
              <th className="border border-gray-600 px-4  text-center">WIRE</th>
              <th className="border border-gray-600 px-4  text-center">LGTH</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(torList8).map(([part, itemNumber]) => {
              const [prefix, wireSize, wireLength] = part.split("-");
              return (
                <SpringBox
                  key={part}
                  id={part}
                  description={{
                    label: itemNumber,
                    prefix,
                    wireSize,
                    wireLength,
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
