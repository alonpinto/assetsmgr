import { useEffect, useState } from "react";

export type AssetType = {
  id: string;
  imageLink: string;
  selected?: boolean;
};

type AssetsGalleryProps = {
  assets: AssetType[];
  render?: () => React.ReactNode;
  notifyChange: (value: AssetType[]) => void;
};

type GalleryItemType = {
  id: string;
  imageLink: string;
  handleGalleryAssetClick: (id: string) => void;
  className: string;
};

const GalleryItem = ({
  id,
  imageLink,
  handleGalleryAssetClick,
  className,
}: GalleryItemType) => {
  return (
    <div onClick={() => handleGalleryAssetClick(id)}>
      <img
        className={`h-40 w-full max-w-full rounded-lg object-cover object-center cursor-pointer ${className}`}
        src={imageLink}
        alt="gallery-photo"
      />
    </div>
  );
};

const AssetsGallery = ({ assets, notifyChange }: AssetsGalleryProps) => {
  const [selectedAssets, setSelectedAssets] = useState<AssetType[]>(
    assets.filter((a) => a.selected)
  );

  const handleGalleryAssetClick = (id: string) => {
    setSelectedAssets((prev) => {
      const asset = prev.find((a) => a.id === id);

      if (asset) {
        return prev.filter((i) => i.id !== id);
      } else {
        prev.push(assets.find((s) => s.id === id)!);
        return [...prev];
      }
    });
  };

  useEffect(() => {
    notifyChange(selectedAssets);
  }, [selectedAssets]);

  const isSelected = (id: string): boolean => {
    return selectedAssets.findIndex((a) => a.id === id) > -1;
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {assets.map(({ imageLink, id }) => (
          <GalleryItem
            key={id}
            id={id}
            imageLink={imageLink}
            handleGalleryAssetClick={handleGalleryAssetClick}
            className={isSelected(id) ? "" : "opacity-30"}
          />
        ))}
      </div>
    </div>
  );

  // <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
  //   <div className="grid gap-4">
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center"
  //         src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center "
  //         src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center"
  //         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //   </div>
  //   <div className="grid gap-4">
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center"
  //         src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center"
  //         src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center "
  //         src="https://docs.material-tailwind.com/img/team-3.jpg"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //   </div>
  //   <div className="grid gap-4">
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center"
  //         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center "
  //         src="https://docs.material-tailwind.com/img/team-3.jpg"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center"
  //         src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //   </div>
  //   <div className="grid gap-4">
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center"
  //         src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //     <div>
  //       <img
  //         className="h-auto max-w-full rounded-lg object-cover object-center"
  //         src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  //         alt="gallery-photo"
  //       />
  //     </div>
  //   </div>
  // </div>
  // );
};

export default AssetsGallery;
