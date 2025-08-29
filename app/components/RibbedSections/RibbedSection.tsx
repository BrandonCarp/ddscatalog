export function Section1() {
  return (
    <>
      <section className="leading-tight">
        <h1 className="text-red-800 font-semibold ml-8 text-[20px]">
          MEASURE OVERALL LENGTH
        </h1>
        <div className="flex flex-col items-center space-y-2">
          {/* garage door section */}
          <div
            className="w-[350px] h-28 rounded-md shadow-lg relative overflow-hidden
    bg-[repeating-linear-gradient(to_bottom,#cfd6dc_0,#cfd6dc_26px,#b8c0c6_26px,#b8c0c6_34px)]"
          >
            {/* vertical slits */}
            <div
              className="absolute inset-0 
      bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(33.333%-2px),#7d8790_calc(33.333%-2px),#7d8790_calc(33.333%+2px),transparent_calc(33.333%+2px),transparent_calc(66.666%-2px),#7d8790_calc(66.666%-2px),#7d8790_calc(66.666%+2px),transparent_calc(66.666%+2px))]"
            ></div>

            {/* top bead */}
            <div
              className="absolute top-0 left-0 right-0 h-[6px] 
      bg-gradient-to-b from-black/20 to-white/40"
            ></div>
            {/* bottom bead */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[6px] 
      bg-gradient-to-b from-black/20 to-white/40"
            ></div>
          </div>

          {/* dimension line with outward horizontal lines and upward arrows */}
          <div className="relative w-[350px] flex items-center justify-center">
            {/* main horizontal line behind the text */}
            <div className="absolute top-1/2 left-0 right-0 border-t border-black"></div>

            {/* left horizontal line from text to edge */}
            <div className="absolute top-1/2 left-0 right-1/2 border-t border-black"></div>
            {/* right horizontal line from text to edge */}
            <div className="absolute top-1/2 left-1/2 right-0 border-t border-black"></div>

            {/* left upward arrow at end */}
            <div className="absolute top-0 left-0 w-0 h-3 border-l border-black"></div>
            {/* right upward arrow at end */}
            <div className="absolute top-0 right-0 w-0 h-3 border-l border-black"></div>

            {/* centered measurement text */}
            <span className="bg-white px-2 text-xs font-medium text-gray-700 relative z-10">
              12'2"
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export function Section2() {
  return (
    <>
      <section className="flex flex-col   leading-tight">
        <h1 className="ml-8 text-red-800 font-semibold text-[20px]">
          MEASURE OVERALL HEIGHT
        </h1>
        <div className="relative flex items-center">
          {/* vertical dimension line */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
            {/* top arrow */}
            <div className="w-3 h-0 border-t border-black"></div>

            {/* main vertical line */}
            <div className="flex-1 border-l border-black relative">
              {/* centered measurement text */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs font-medium text-gray-700">
                24"
              </span>
            </div>

            {/* bottom arrow */}
            <div className="w-3 h-0 border-t border-black rotate-180"></div>
          </div>

          {/* garage door section */}
          <div
            className="w-[350px] h-28 rounded-md shadow-lg relative overflow-hidden ml-8
              bg-[repeating-linear-gradient(to_bottom,#cfd6dc_0,#cfd6dc_26px,#b8c0c6_26px,#b8c0c6_34px)]"
          >
            {/* vertical slits */}
            <div
              className="absolute inset-0 
        bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(33.333%-2px),#7d8790_calc(33.333%-2px),#7d8790_calc(33.333%+2px),transparent_calc(33.333%+2px),transparent_calc(66.666%-2px),#7d8790_calc(66.666%-2px),#7d8790_calc(66.666%+2px),transparent_calc(66.666%+2px))]"
            ></div>

            {/* top bead */}
            <div
              className="absolute top-0 left-0 right-0 h-[6px] 
        bg-gradient-to-b from-black/20 to-white/40"
            ></div>
            {/* bottom bead */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[6px] 
        bg-gradient-to-b from-black/20 to-white/40"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
// Section 3
export function Section3() {
  return (
    <section className="flex flex-col  ml-34 leading-tight">
      <h1 className="text-red-800 font-semibold text-[20px]">
        IDENTIFY LOCATION OF SECTION
      </h1>

      <div className="flex items-center justify-center space-x-4">
        {/* garage door section */}
        <div
          className="w-[400px] h-28 rounded-md shadow-lg relative overflow-hidden
            bg-[repeating-linear-gradient(to_bottom,#cfd6dc_0,#cfd6dc_26px,#b8c0c6_26px,#b8c0c6_34px)]"
        >
          {/* inner slits */}
          <div
            className="absolute inset-0
              bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(33.333%-2px),#7d8790_calc(33.333%-2px),#7d8790_calc(33.333%+2px),transparent_calc(33.333%+2px),transparent_calc(66.666%-2px),#7d8790_calc(66.666%-2px),#7d8790_calc(66.666%+2px),transparent_calc(66.666%+2px))]"
          ></div>

          {/* top bead */}
          <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-b from-black/20 to-white/40"></div>
          {/* bottom bead */}
          <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-b from-black/20 to-white/40"></div>
        </div>

        {/* label to the right */}
        <div className="font-medium text-gray-800 whitespace-nowrap text-[13px]">
          --- Bottom Section
        </div>
      </div>
    </section>
  );
}

// Section4.tsx

export function Section4() {
  return (
    <section className="flex flex-col leading-tight">
      <h1 className="text-red-800 font-semibold text-[20px]">
        MEASURE STILE LOCATIONS
      </h1>

      {/* Panel + Measurements wrapper */}
      <div className="relative flex items-center justify-center">
        {/* garage door section */}
        <div
          className="w-[400px] h-28 rounded-md shadow-lg relative overflow-hidden
            bg-[repeating-linear-gradient(to_bottom,#cfd6dc_0,#cfd6dc_26px,#b8c0c6_26px,#b8c0c6_34px)]"
        >
          {/* inner slits */}
          <div
            className="absolute inset-0
              bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(33.333%-2px),#7d8790_calc(33.333%-2px),#7d8790_calc(33.333%+2px),transparent_calc(33.333%+2px),transparent_calc(66.666%-2px),#7d8790_calc(66.666%-2px),#7d8790_calc(66.666%+2px),transparent_calc(66.666%+2px))]"
          ></div>

          {/* top bead */}
          <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-b from-black/20 to-white/40"></div>
          {/* bottom bead */}
          <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-b from-black/20 to-white/40"></div>
        </div>

        {/* label to the right */}
        <div className="absolute left-[420px] flex flex-col justify-center font-medium text-gray-800 text-[13px] whitespace-nowrap space-y-1">
          <span>--- PULL ALL MEASUREMENTS LEFT TO RIGHT</span>
          <span>--- FROM LEFT END MEASURE TO CENTER OF EACH STILE</span>
        </div>

        {/* Measurement area under panel */}
        <div className="absolute top-[120px] w-[400px] h-20">
          {/* Left baseline line */}
          <div className="absolute top-0 bottom-0 left-0 border-l border-black"></div>

          {/* 1/3 line */}
          <div className="absolute top-0 h-10 left-[33.333%] border-l border-black"></div>

          {/* 2/3 line */}
          <div className="absolute top-0 bottom-0 left-[66.666%] border-l border-black"></div>

          {/* 48" */}
          <div className="absolute top-4 left-0 w-[133px] flex items-center justify-center">
            <div className="absolute top-1/2 left-0 right-0 border-t border-black"></div>
            <div className="absolute top-1/2 left-0 -translate-x-2 -translate-y-1 text-[10px]">
              ‹
            </div>
            <div className="absolute top-1/2 right-0 translate-x-2 -translate-y-1 text-[10px]">
              ›
            </div>
            <span className="bg-white px-2 text-xs font-medium text-gray-700 relative z-10">
              48"
            </span>
          </div>

          {/* 96" */}
          <div className="absolute bottom-4 left-0 w-[266px] flex items-center justify-center">
            <div className="absolute top-1/2 left-0 right-0 border-t border-black"></div>
            <div className="absolute top-1/2 left-0 -translate-x-2 -translate-y-1 text-[10px]">
              ‹
            </div>
            <div className="absolute top-1/2 right-0 translate-x-2 -translate-y-1 text-[10px]">
              ›
            </div>
            <span className="bg-white px-2 text-xs font-medium text-gray-700 relative z-10">
              96"
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
