// JambBox.tsx
import Image from "next/image";

interface JambBoxProps {
  label: string;
  image: string;
  description: string[];
}

export default function JambBox({ label, image, description }: JambBoxProps) {
  return (
    <div className="">
      {/* <h2 className="font-bold text-lg text-gray-700">{label}</h2> */}
      <Image
        src={image}
        alt={label}
        width={150}
        height={150}
        className="my-2"
      />

      <ul className="list-disc leading-tight">
        {description.map((desc, i) => {
          // Extract JAM code (assumes format "#1 JAMB BRACKET - JAM1")
          const [mainText, jamCode] = desc.split(" - "); // split on " - "
          return (
            <li key={i}>
              <div className="whitespace-nowrap">{mainText}</div>{" "}
              {/* only show "#1 JAMB BRACKET" */}
              <div className="text-[14px] font-semibold text-gray-800">
                PART:{" "}
                <span className="text-[16px] font-bold text-red-900">
                  {jamCode} {/* only show "JAM1" */}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
