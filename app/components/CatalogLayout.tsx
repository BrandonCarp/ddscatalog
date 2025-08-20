import Image from "next/image";

export default function CatalogLayout({
  title,
  pagenum,
  children,
  reverseFooter = false, // optional prop to flip footer
}: {
  title: string;
  pagenum: string;
  children: React.ReactNode;
  reverseFooter?: boolean;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>

      <footer
        className={`bg-gray-100 h-[100px] flex w-full ${
          reverseFooter ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Page number */}
        <div className="bg-red-800 w-[40px] h-full text-sm pl-5 pt-1 text-white flex items-start">
          {pagenum}
        </div>

        {/* Footer content */}
        <div
          className={`flex w-full justify-between px-3 pt-1 ${
            reverseFooter ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex flex-col justify-between">
            <h1 className="font-bold text-2xl text-red-700 whitespace-pre-line">
              {title}
            </h1>
            <span className="mb-1 font-semibold text-gray-600">
              (856) 662-6666
            </span>
          </div>

          <Image
            src="/images/tlogo.jpg"
            width={180}
            height={100}
            alt="Logo"
            className="p-1 object-contain"
          />
        </div>
      </footer>
    </div>
  );
}
