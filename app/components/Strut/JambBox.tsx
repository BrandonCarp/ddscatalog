// JambBox.tsx
import Image from "next/image";

export default function JambBox() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <h2 className="font-bold text-lg text-gray-700">{label}</h2> */}
      <Image
        src="/images/JBEB/JB1.png"
        alt=""
        width={150}
        height={150}
        className="my-2"
      />
      {/* <h1 className="font-bold text-[24px] text-red-900">JAMB BRACKETS</h1> */}
      <ul className="list-disc font-semibold ">
        <li>
          #1 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM1</span>
        </li>
        <li>
          #2 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM2</span>
        </li>
        <li>
          #3 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM3</span>
        </li>
        <li>
          #4 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM4</span>
        </li>
        <li>
          #5 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM5</span>
        </li>
        <li>
          #6 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM6</span>
        </li>
        <li>
          #7 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM7</span>
        </li>
        <li>
          #8 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM8</span>
        </li>
        <li>
          #9 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM9</span>
        </li>
        <li>
          #10 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM10</span>
        </li>
        <li>
          #11 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM11</span>
        </li>
        <li>
          #12 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM12</span>
        </li>
      </ul>
    </div>
  );
}
