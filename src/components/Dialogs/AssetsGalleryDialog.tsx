import { useCallback, useState } from "react";
import AssetsGallery, { AssetType } from "../AssetsGallery/AssetsGallery";
import AppDialog from "../ui/AppDialog/AppDialog";

interface AssetsGalleryDialogProps {
  show: boolean;
  handleSetOpen: (show: boolean) => void;
  handleCommit: (data: AssetType[]) => void;
  handleCancel?: () => void;
}

const assets = [
  {
    id: "asdasdadadasdasdasdasdas",
    imageLink: "/assets/photo-1.jpg",
    selected: false,
  },
  {
    id: "dfasda54qeqasdas",
    imageLink: "/assets/photo-2.jpg",
    selected: false,
  },
  {
    id: "asdsdaewqwasdz§xczxc",
    imageLink: "/assets/photo-3.jpg",
    selected: true,
  },
  {
    id: "asdfasdcxvxzasdf§w",
    imageLink: "/assets/photo-4.jpg",
    selected: true,
  },
];

const AssetsGalleryDialog = ({
  show,
  handleSetOpen,
  handleCommit,
  handleCancel,
}: AssetsGalleryDialogProps) => {
  const [changes, setChanges] = useState<AssetType[]>([]);

  const notifyChange = useCallback((value: AssetType[]) => {
    console.log(`notifyChange`, value);
    setChanges(value);
  }, []);

  const handleCommit2 = () => {
    handleCommit(changes);
  };

  function selectedFirst(a: AssetType, b: AssetType) {
    if (a.selected && !b.selected) return -1;
    else if (!a.selected && b.selected) return 1;
    else return 0;
  }

  return (
    <AppDialog
      title="Assets"
      description="Please select assets"
      setOpen={handleSetOpen}
      show={show}
      handleCommit={handleCommit2}
      handleCancel={handleCancel}
      enableCommit={!!changes}
    >
      <AssetsGallery
        assets={assets.sort(selectedFirst)}
        notifyChange={notifyChange}
      />
    </AppDialog>
  );
};

export default AssetsGalleryDialog;
