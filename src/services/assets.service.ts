import { FormDataInputType } from "@/components/Dialogs/validation";
import { IAsset } from "@/interfaces/asset.interface";
import { getMockAssets } from "@/mock/data";

const AssetsService = () => {
  const assets = getMockAssets(100);

  const fetch = (): IAsset[] => {
    return assets;
  };

  const add = (asset: IAsset): IAsset[] => {
    assets.push(asset);
    return assets;
  };

  const remove = (id: number): IAsset[] => {
    if (!id) {
      throw `AssetsService -> remove id is required`;
    }
    assets.splice(
      assets.findIndex((a) => a.id === id),
      1
    );

    return assets;
  };

  const edit = ({
    id,
    rooms,
    city,
    address,
    features,
    price,
  }: FormDataInputType): IAsset[] => {
    if (!id) {
      throw `AssetsService -> edit id is required`;
    }

    assets.splice(
      assets.findIndex((a) => a.id === id),
      1,
      {
        id: id!,
        rooms,
        city,
        features,
        address,
        price,
      }
    );

    return assets;
  };

  return {
    fetch,
    add,
    remove,
    edit,
  };
};

const instance = AssetsService();

export { instance as AssetsService };
