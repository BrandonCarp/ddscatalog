"use client";

interface DoorDetail {
  name: string;
  code: string;
}

interface DoorItem {
  label: string;
  image: string;
  description: DoorDetail[];
}

export default function StockDoors() {
  return (
    <>
      <h1>DDS Stock List</h1>
    </>
  );
}
