import { FaShoppingBag } from "react-icons/fa";
import { Input } from "@/components/ui/input";

import { ModeToggle } from "../ModeToggle";
import { Dispatch, SetStateAction } from "react";
import SalesDialog from "./DealDialog/DealDialog";
export default function Navbar({
  setSearchQuery,
  searchQuery,
}: {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div
      className={`relative w-full h-20  overflow-hidden   
    flex justify-between items-center px-6 border-b `}
    >
      {/* Header with Title and Icon */}
      <header className="flex items-center gap-2 left-10 top-8">
        <div className="size-10 bg-primary rounded-md flex justify-center items-center">
          <FaShoppingBag className="text-white text-lg" aria-hidden="true" />
        </div>

        <h1 className="font-semibold text-2xl max-md:hidden">
          Sales <span className="font-normal text-primary">Flow</span>
        </h1>
      </header>
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-3 max-sm:w-[250px] w-[399px]   relative">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="search..."
            className="h-10 rounded-lg "
          />
          <div className="absolute right-[4px] h-[31px]">
            <SalesDialog />
          </div>
        </div>
        {/* dark mode toggle */}
        <ModeToggle />
      </div>
    </div>
  );
}
