import Image from "next/image"


export default function CatalogLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
 <div className="">
      <header className="flex justify-between p-5">
        <h1 className="text-7xl font-semibold">{title}</h1>
<Image
            src="/images/logo.jpg"
            width={200}
            height={150}
            alt="Logo"
            className="mb-4"
          />
      </header>

      <main className="">{children}</main>

      <footer className="p-5 flex gap-[24px] flex-wrap items-center justify-center w-full bg-1 ">
        <div className="flex flex-col items-center text-center">
          <a className="hover:underline hover:underline-offset-4">
            7150 Westfield Ave. Pennsauken, NJ 08110
          </a>
          <a className="hover:underline hover:underline-offset-4">
            (856) 662-6666
          </a>
        </div>
      </footer>
   </div>
  )
}
