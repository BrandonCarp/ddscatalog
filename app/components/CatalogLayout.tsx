import Image from "next/image";

export default function CatalogLayout({
  title,
  pagenum,
  children,
}: {
  title: string;
  pagenum: string;
  children: React.ReactNode;
}) {
  return (
    <div className="en flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 h-[100px] flex w-full w-[100%]">
        <div
          className={`bg-red-800 w-[40px] h-full text-sm pl-5 pt-1 text-white `}
        >
          {pagenum}
        </div>
        <div className="flex w-full justify-between px-3 pt-2">
          <div className=" flex flex-col justify-between ">
            <h1
              className={`font-bold text-2xl text-red-800  whitespace-pre-line`}
            >
              {title}
            </h1>
            <span className="pb-3 font-semibold text-gray-600">
              (856) 662-6666
            </span>
          </div>
          <Image
            src="/images/tlogo.jpg"
            width={170}
            height={100}
            alt="Logo"
            className="p-1 object-contain"
          />
        </div>
      </footer>
    </div>
  );
}
