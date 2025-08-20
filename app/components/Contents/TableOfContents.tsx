type SectionProps = {
  name: string;
  page: number;
};

export default function TableofContents({ name, page }: SectionProps) {
  return (
    <div className="w-full text-lg">
      <h3 className="flex justify-between whitespace-nowrap">
        {/* Left side */}
        <span className="overflow-hidden text-ellipsis">{name}</span>

        {/* Dots filler */}
        <span className="flex-grow border-b border-dotted border-gray-500 mx-2"></span>

        {/* Page number */}
        <span>{page}</span>
      </h3>
    </div>
  );
}
