import AssetProvider from "@/context/assets.context";
import { AssetTable } from "../AssetTable/AssetTable";

const AssetList = () => {
  return (
    <AssetProvider>
      <AssetTable />
    </AssetProvider>
  );
};

export default AssetList;
