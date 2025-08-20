type SectionProps = {
  title: string;
  description: string;
};

export default function TermsCond({ title, description }: SectionProps) {
  return (
    <div className="w-full text-lg ">
      <h1 className="font-bold text-gray-600">{title}</h1>
      <span>{description}</span>
    </div>
  );
}
