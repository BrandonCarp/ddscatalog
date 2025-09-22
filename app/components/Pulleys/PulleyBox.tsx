"use client";
import Image from "next/image";

type PulleyInfo = {
  label: string;
  image: string;
  title: string;
  description: string[];
};

type PulleyBoxProps = {
  id: string;
  description: PulleyInfo;
};

export default function PulleyBox({ id, description }: PulleyBoxProps) {
  const groupIds = ["FRK_GROUP", "SFRK_GROUP"];
  const hideGroupId = groupIds.includes(id);

  return (
    <div className="flex flex-col justify-center items-center ">
      {/* Image */}

      <Image
        src={description.image}
        alt={description.label}
        width={110}
        height={100}
        className=""
      />

      {/* Description bullets */}
      <ul className="list-disc list-inside text-gray-700 text-[16px] ">
        {description.description.map((line, i) => {
          const [label, code] = line.split(" - ");
          return (
            <div key={i}>
              <li className="leading-tight text-[16px] font-semibold text-gray-900">
                {label}
              </li>
              {code && (
                <span className="text-gray-900 font-semibold text-[15px] ">
                  PART:{" "}
                  <span className="text-red-900 text-[16px] bold">{code}</span>
                </span>
              )}
            </div>
          );
        })}
      </ul>

      {/* PART code (only for non-grouped items) */}
      {!hideGroupId && (
        <div className="font-semibold text-[15px] ">
          PART:{" "}
          <span className="font-semibold text-red-900 text-[16px]">{id}</span>
        </div>
      )}
    </div>
  );
}
