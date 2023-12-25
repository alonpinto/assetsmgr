import { IAsset } from "@/interfaces/asset.interface";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { Button } from "../ui/button";

function GenericTableSortHeader({
  column,
  label,
}: GenericTableSortHeaderProps) {
  return (
    <div className="mx-[-15px]">
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {label}
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}

type GenericTableSortHeaderProps = {
  column: Column<IAsset, unknown>;
  label: string;
};

export default GenericTableSortHeader;
