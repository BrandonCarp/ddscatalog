import Image from "next/image"


export default function CatalogLayout({
  title,
  bgcolor,
  textcolor,
  children,
}: {
  title: string
  bgcolor: string
  textcolor: string
  children: React.ReactNode
}) {
  return (
 <div className="en flex flex-col min-h-screen">
      
        <main  className="flex-grow ">{children}</main>
<footer className="bg-gray-100 h-[80px] flex w-full w-[100%]">
        <div className={`${bgcolor} w-[30px] h-full text-sm pl-5 pt-1 text-white`}>1</div>
        <div className="flex w-full justify-between px-3 pt-2">
 <h1  className={`font-bold text-2xl ${textcolor}  whitespace-pre-line`}>{title}</h1>
         <Image
            src="/images/tlogo.jpg"
            width={150}
            height={80}
            alt="Logo"
            className="p-1 object-contain"
          />
        </div>
       
      </footer>
    
    </div>
  )
}