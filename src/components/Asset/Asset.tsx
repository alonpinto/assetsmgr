import { IAsset } from "@/interfaces/asset.interface";
import { Button } from "../ui/button";

type AssetProps = {
  data: IAsset;
  handleDelete: (id: number) => void;
};

const Asset = ({ data, handleDelete }: AssetProps) => {
  return (
    <div className="flex border-2 border-b-2 gap-4">
      <div className=" ">{data.address}</div>
      <div>{data.city}</div>
      <div>{data.price}</div>
      <div>{data.rooms}</div>
      <div>{data.features}</div>
      <div>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => handleDelete(data.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Asset;
