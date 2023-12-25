import { AssetContext, AssetContextType } from "@/context/assets.context";
import { IAsset } from "@/interfaces/asset.interface";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { useContext, useState } from "react";
import AssetFormDialog from "../Dialogs/AssetFormDialog";
import ConfirmDeleteAssetDialog from "../Dialogs/ConfirmDeleteAssetDialog";
import { FormDataInputType } from "../Dialogs/validation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type AssetTableActionsProps = {
  row: Row<IAsset>;
};

const AssetTableActions = ({ row }: AssetTableActionsProps) => {
  const [showConfirmAssetDeleteDialog, setShowConfirmAssetDeleteDialog] =
    useState(false);

  const [showEditAssetDialog, setShowEditAssetDialog] = useState(false);
  const { removeAsset, editAsset } = useContext(
    AssetContext
  ) as AssetContextType;
  //const [open, setOpen] = useState<boolean>(false);

  const handleDeleteAsset = () => {
    removeAsset(row.original.id);
  };
  const handleCancel = () => {};

  const handleAssetEdit = (data: FormDataInputType) => {
    editAsset(data);
    setShowEditAssetDialog(false);
  };

  const getRowAssetData = (row: Row<IAsset>): IAsset => {
    const asset = mapRowToAssetData(row);

    return asset;
  };

  const mapRowToAssetData = (row: Row<IAsset>): IAsset => {
    return {
      id: row.original.id,
      city: row.getValue("city"),
      address: row.getValue("address"),
      price: row.getValue("price"),
      rooms: row.getValue("rooms"),
      features: row.getValue("features"),
    };
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem onSelect={() => setShowEditAssetDialog(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem
            onSelect={() => setShowConfirmAssetDeleteDialog(true)}
          >
            Clone
          </DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setShowConfirmAssetDeleteDialog(true)}
            className="text-red-600"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AssetFormDialog
        title="Edit Asset"
        description=" asset description "
        defaultValues={getRowAssetData(row)}
        notifySubmit={handleAssetEdit}
        show={showEditAssetDialog}
        handleSetOpen={setShowEditAssetDialog}
      />
      <ConfirmDeleteAssetDialog
        show={showConfirmAssetDeleteDialog}
        handleSetOpen={setShowConfirmAssetDeleteDialog}
        data={row}
        handleCommit={handleDeleteAsset}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default AssetTableActions;
