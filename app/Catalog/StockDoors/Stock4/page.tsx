"use client";
import Image from "next/image";
import React, { useState } from "react";
import DoorTable from "@/components/StockDoors/DoorTable";
import {
  StockDoors1,
  StockDoors2,
  StockDoors3,
  StockDoors4,
} from "@/components/StockDoors/StockDoorList";
import CatalogLayout from "@/components/CatalogLayout";

// Door type definition
interface DoorDescription {
  color: string;
  width: string[];
  height: string[];
}

interface Door {
  label: string;
  brand?: string;
  description: DoorDescription[];
}

const StockDoors = () => {
  const [filter, setFilter] = useState("");

  // Filter function accepts any Door[]
  const filterDoors = (doors: Door[]) =>
    doors.filter((door) =>
      door.label.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <CatalogLayout title="STOCK DOORS" pagenum="21">
      <div className="p-5">
        <h1 className="font-black text-[28px] text-red-900 mb-5">
          STOCK DOORS
        </h1>

        <DoorTable doors={filterDoors(StockDoors4)} title="Stock Doors 4" />
      </div>

      {/* Image at the bottom */}
      <div className="relative w-full h-[40vh] mt-24">
        <Image
          src="/images/DoorAd/stockdoor.png"
          alt="Stock Door Ad"
          fill
          className="object-cover"
        />
      </div>
    </CatalogLayout>
  );
};

export default StockDoors;
