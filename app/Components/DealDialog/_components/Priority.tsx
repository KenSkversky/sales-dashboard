"use client";

import { Dispatch, SetStateAction } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SalePriority, SaleType } from "@/app/types";

type selectedPriorityProps = {
  selectedPriority: SalePriority;
  setSelectedPriority: Dispatch<SetStateAction<SalePriority>>;
};

export function Priority({
  selectedPriority,
  setSelectedPriority,
}: selectedPriorityProps) {
  const priority: Array<SaleType["priority"]> = ["Low", "Medium", "High"];

  function renderBoxColor(priority: SaleType["priority"]) {
    switch (priority) {
      case "Low":
        return "bg-green-500";
      case "Medium":
        return "bg-orange-500";
      case "High":
        return "bg-red-500";

      default:
        return "bg-green-600";
    }
  }

  return (
    <div className="flex flex-col gap-2 poppins">
      <Label className="text-slate-600">{`Priority`}</Label>

      <Select
        value={selectedPriority}
        onValueChange={(value) =>
          setSelectedPriority(value as SaleType["priority"])
        }
      >
        <SelectTrigger className="h-[45px] shadow-none">
          <SelectValue placeholder="Select a priority" />
        </SelectTrigger>
        <SelectContent className="poppins">
          {priority.map((priority) => (
            <SelectItem className="flex" key={priority} value={priority}>
              <div className="flex gap-2 items-center">
                <div
                  className={`size-4 ${renderBoxColor(priority)} rounded-md`}
                ></div>
                <span>{priority}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
