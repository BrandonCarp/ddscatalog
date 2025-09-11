type SectionProps = {
  title: string;
  description: string;
};

export default function TermsCond({ title, description }: SectionProps) {
  return (
    <div className="w-full mt-2 ">
      <h1 className="font-bold text-gray-800 text-[24px]">{title}</h1>
      <span className="text-[18px]  font-semibold">{description}</span>
    </div>
  );
}
