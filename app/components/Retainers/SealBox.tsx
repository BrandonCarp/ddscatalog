"use client";
import Image from "next/image";

interface RubberBoxProps {
  name: string;
  image: string;
  description: string[];
}

export default function RubberBox({
  name,
  image,
  description,
}: RubberBoxProps) {
  const splitDesc = (desc: string) => {
    const match = desc.match(/^(.*?)-\s*(\w+)$/);
    // captures "everything before -" and then the item number
    if (match) {
      return { text: match[1].trim(), item: match[2] };
    }
    return { text: desc, item: null };
  };

  return (
    <div className="Rubber-box pt-5">
      <h3 className="text-red-900 font-bold text-[20px] mb-2">{name}</h3>
      <Image src={image} alt={name} height={150} width={150} />

      <ul>
        {description.map((desc, i) => {
          const { text, item } = splitDesc(desc);
          return (
            <li key={i} className="list-disc whitespace-nowrap">
              <div className="whitespace-nowrap">{text}</div>
              {item && (
                <div className="font-semibold text-gray-800 text-[14px]">
                  PART:{" "}
                  <span className="text-red-900 text-[16px] font-bold">
                    {item}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
