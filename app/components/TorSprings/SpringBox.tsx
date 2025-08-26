"use client";

type SpringInfo = {
  label: string;
  prefix: string;
  wireSize: string;
  wireLength: string;
};

interface SpringProps {
  id: string;
  description: SpringInfo;
}

export default function SpringBox({ id, description }: SpringProps) {
  return (
    <tr className="even:bg-gray-200  ">
      <td className="border px-2 font-mono text-xs leading-tight">{id}</td>
      <td className="border px-3  font-mono text-sm">{description.label}</td>
      <td className="border px-3  text-center">{description.prefix}</td>
      <td className="border px-3  text-center">{description.wireSize}</td>
      <td className="border px-3  text-center">{description.wireLength}"</td>
    </tr>
  );
}
