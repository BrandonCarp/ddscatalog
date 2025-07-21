export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <footer className="p-5 flex gap-[24px] flex-wrap items-center justify-center w-full ">
        <div className="flex flex-col items-center text-center">
          <a className="hover:underline hover:underline-offset-4">
            7150 Westfield Ave. Pennsauken, NJ 08110
          </a>
          <a className="hover:underline hover:underline-offset-4">
            (856) 662-6666
          </a>
        </div>
      </footer>
    </>
  );
}