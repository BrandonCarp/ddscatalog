"use client";

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
    <CatalogLayout title="STOCK DOORS" pagenum="27">
      <div className="p-5">
        <h1 className="font-bold text-[28px] text-red-800 mb-5">
          {" "}
          STOCK DOORS
        </h1>

        <DoorTable doors={filterDoors(StockDoors3)} title="Stock Doors 3" />
      </div>
    </CatalogLayout>
  );
};

export default StockDoors;
