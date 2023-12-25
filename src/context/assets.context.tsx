import { FormDataInputType } from "@/components/Dialogs/validation";
import { IAsset } from "@/interfaces/asset.interface";
import { AssetsService } from "@/services/assets.service";
import { ReactNode, createContext, useState } from "react";

export interface AssetContextType {
  assets: IAsset[];
  addAsset: (data: IAsset) => void;
  removeAsset: (id: number) => void;
  editAsset: (data: FormDataInputType) => void;
}

export const AssetContext = createContext<AssetContextType | null>(null);

interface AssetContextProviderProps {
  children: ReactNode;
}

const AssetProvider = ({ children }: AssetContextProviderProps) => {
  const [assets, setAssets] = useState<IAsset[]>(AssetsService.fetch());

  const addAsset = (data: IAsset) => {
    const _assets = AssetsService.add(data);
    setAssets([..._assets]);
  };

  const removeAsset = (id: number) => {
    const _assets = AssetsService.remove(id);
    setAssets([..._assets]);
  };

  const editAsset = (data: FormDataInputType) => {
    const _assets = AssetsService.edit(data);
    setAssets([..._assets]);
  };

  return (
    <AssetContext.Provider value={{ assets, addAsset, removeAsset, editAsset }}>
      {children}
    </AssetContext.Provider>
  );
};

export default AssetProvider;
