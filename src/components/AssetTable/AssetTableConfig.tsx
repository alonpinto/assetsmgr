import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { FeatureType, IAsset } from "@/interfaces/asset.interface";

import GenericTableSortHeader from "../GenericTable/GenericTableSortHeader";
import { Badge } from "../ui/badge";
import AssetTableActions from "./AssetTableActions";

export const ASSET_COLUMNS: ColumnDef<IAsset>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <GenericTableSortHeader column={column} label="City" />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("city")}</div>,
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <GenericTableSortHeader column={column} label="Address" />
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <GenericTableSortHeader column={column} label="Price" />
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "rooms",
    header: ({ column }) => (
      <GenericTableSortHeader column={column} label="Rooms" />
    ),
    cell: ({ row }) => {
      const rooms = parseFloat(row.getValue("rooms"));

      return <div className="text-left font-medium">{rooms}</div>;
    },
  },
  {
    accessorKey: "features",
    header: ({ column }) => (
      <GenericTableSortHeader column={column} label="Featurs" />
    ),
    cell: ({ row }) => {
      const features = row.getValue("features") as FeatureType[];

      return (
        <div className="text-left font-small">
          {/* <Badge>{features}</Badge> */}
          {features.map((feature, index) => (
            <Badge key={`${feature}_${index}`} className=" m-0.5">
              {feature}
            </Badge>
          ))}
        </div>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return <AssetTableActions row={row} />;
    },
  },
];
