// 'use client';
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
//       {/* Fixed Header */}
//       <header className="flex flex-col w-full bg-white p-3 items-center pt-10">
//         <Image
//           src="/images/logo.jpg"
//           width={200}
//           height={150}
//           alt="Logo"
//         />
//         <div className="pt-5 flex flex-col gap-2 text-center justify-center">
//           <h1 className="text-6xl">Product</h1>
//           <h1 className="text-7xl">Catalog</h1>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="w-full pt-20">
//         <div className="relative w-full h-[300px] sm:h-[500px]">
//           <Image
//             src="/images/dds.jpg"
//             alt="Cover image"
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </main>

//       {/* Footer pinned at bottom */}
//       <footer className="p-5 flex gap-[24px] flex-wrap items-center justify-center w-full ">
//         <div className="flex flex-col items-center text-center">
//           <a className="hover:underline hover:underline-offset-4">
//             7150 Westfield Ave. Pennsauken, NJ 08110
//           </a>
//           <a className="hover:underline hover:underline-offset-4">
//             (856) 662-6666
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }
'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-white">
      {/* Header with border effect */}
      <header className="relative flex flex-col items-center pt-5 mt-10 pb-5 w-full bg-white">
        {/* Outer top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] border-t border-black" />

        {/* Left vertical + inward line */}
        <div className="absolute top-0 left-[calc(50%-160px)] h-[calc(100%-40px)] border-l border-black" />
        <div className="absolute bottom-[40px] left-[calc(50%-160px)] w-[50px] border-t border-black" />

        {/* Right vertical + inward line */}
        <div className="absolute top-0 right-[calc(50%-160px)] h-[calc(100%-40px)] border-r border-black" />
        <div className="absolute bottom-[40px] right-[calc(50%-160px)] w-[50px] border-t border-black" />

        {/* Content inside */}
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/images/logo.jpg"
            width={200}
            height={150}
            alt="Logo"
            className="mb-4"
          />

          <h1 className="text-5xl">Product</h1>
          <h1 className="text-6xl">Catalog</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="w-full pt-20">
        <div className="relative w-full h-[300px] sm:h-[500px]">
          <Image
            src="/images/dds.jpg"
            alt="Cover image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-5 flex gap-[24px] flex-wrap items-center justify-center w-full">
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
  );
}
