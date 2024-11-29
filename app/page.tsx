"use client";
import { Card } from "@/components/ui/card";
import Navbar from "./Components/Navbar";
import StatCards from "./Components/StatsCard";
import TableArea from "./Components/TableArea/TableArea";
import { useState } from "react";
import { DeleteDialog } from "./Components/DeleteDialog";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-5 poppins">
      <DeleteDialog />
      <Card>
        <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <StatCards />
        <TableArea searchQuery={searchQuery} />
      </Card>
    </div>
  );
}
