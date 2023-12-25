import { IAsset } from "@/interfaces/asset.interface";
import { Row } from "@tanstack/react-table";
import ConfirmDialog from "../ui/ConfirmDialog/ConfirmDialog";

function ConfirmDeleteAssetDialog({
  show,
  handleSetOpen,
  data,
  handleCommit,
  handleCancel,
}: ConfirmDeleteAssetDialogProps) {
  const { city, address } = data.original;

  return (
    <ConfirmDialog
      title={`Are you sure you want to delete this item? `}
      description={`This action cannot be undone. Deleting this item will permanently remove it from the system.     
        <div style="margin-top:10px; color:red;display:flex;flex-direction:column">  
            <div>City: ${city}</div>
            <div>Address: ${address}</div>     
        </div>   
      `}
      show={show}
      setOpen={handleSetOpen}
      handleCommit={handleCommit}
      handleCancel={handleCancel}
    >
      Delete
    </ConfirmDialog>
  );
}

interface ConfirmDeleteAssetDialogProps {
  show: boolean;
  handleSetOpen: (show: boolean) => void;
  data: Row<IAsset>;
  handleCommit: () => void;
  handleCancel?: () => void;
}

export default ConfirmDeleteAssetDialog;
