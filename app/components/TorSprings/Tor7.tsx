import SpringBox from "./SpringBox";

const torList7: { [key: string]: string } = {
  "2ID-207-22.25": "220722",
  "2ID-207-20": "220720",
  "2ID-218-23.25": "221823",
  "2ID-225-24.5": "222524",
  "2ID-234-27.25": "223427",
  "2ID-234-25.25": "223425",
  "2ID-243-28.25": "224328",
  "2ID-250-29.75": "225029",
  "2ID-262-35.25": "226235",
  "2ID-262-33.25": "226233",
  "2ID-262-31.5": "226231",
};

export default function Tor7() {
  return (
    <>
      <section className="flex-none  ">
        <h1 className="text-2xl font-bold text-red-800 pb-1">
          7' TORSION SPRINGS
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
          <tbody className="">
            {Object.entries(torList7).map(([part, itemNumber]) => {
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
