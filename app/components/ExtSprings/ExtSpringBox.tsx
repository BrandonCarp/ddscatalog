interface SpringProps {
  id: string;       
  label: string;  
}

export default function ExtSpringBox({ id, label }: SpringProps) {
  return (
    <tr className="even:bg-gray-200 text-sm ">
      <td className="px-3 py-1 "><span className="text-[19px] font-semibold">PART:</span><span className="">  {id}</span> </td>
      <td className="pl-10 font-semibold">{label}</td>
    </tr>
  );
}
