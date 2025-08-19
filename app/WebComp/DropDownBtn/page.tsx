"use client";
import { useState, useRef, useEffect } from "react";

export default function DropDownBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className=" font-semibold inline-block relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-400 py-1 px-4 hover:bg-blue-600"
        >
          Click
        </button>

        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-max-height duration-300 ease-in-out bg-blue-400 w-full absolute left-0 top-full"
        >
          <ul className="  flex flex-col items-center">
            <li className=" px-3 hover:bg-blue-500 cursor-pointer border-t py-1">
              Home
            </li>
            <li className="px-3 hover:bg-blue-500 cursor-pointer border-t py-1">
              Settings
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
