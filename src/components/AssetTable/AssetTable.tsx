import { AssetContext, AssetContextType } from "@/context/assets.context";
import { useContext, useState } from "react";
import AssetFormDialog from "../Dialogs/AssetFormDialog";
import { FormDataInputType } from "../Dialogs/validation";
import { GenericTable } from "../GenericTable/GenericTable";
import { ASSET_COLUMNS } from "./AssetTableConfig";

export const AssetTable = () => {
  const [show, setShowDialog] = useState<boolean>(false);

  const { assets, addAsset } = useContext(AssetContext) as AssetContextType;

  const handleNewFormSubmit = (asset: FormDataInputType) => {
    addAsset({ ...asset, id: Math.random() * 1000 + 1 });
  };

  return (
    <div>
      {/* <AssetFormDialog notifySubmit={handleNewFormSubmit} /> */}
      <GenericTable
        columns={ASSET_COLUMNS}
        data={assets}
        handleOpenNewItemDialog={setShowDialog}
      />{" "}
      <AssetFormDialog
        notifySubmit={handleNewFormSubmit}
        show={show}
        handleSetOpen={setShowDialog}
        title={"Add Asset"}
        description={"description ....."}
      />
    </div>
  );
};
