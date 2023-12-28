import { AcceptFileType } from "@/types/accept-file.type";
import { useCallback, useEffect, useState } from "react";
import { Dropzone } from "../DropZone/DropZone";

import { Badge, Carousel } from "@material-tailwind/react";

import { StarIcon } from "@radix-ui/react-icons";

import { v4 as uuidv4 } from "uuid";
import { AssetType } from "../AssetsGallery/AssetsGallery";
import AssetsGalleryDialog from "../Dialogs/AssetsGalleryDialog";
import ManageContentsDialog from "../Dialogs/ManageContentsDialog";
import ProductMenu from "../ProductMenu/ProductMenu";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type ProductCarouselProps = {
  options: object;
};

const ProductCarousel = ({ options }: ProductCarouselProps) => {
  const [files, setFiles] = useState<AcceptFileType[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => {
      return { ...file, preview: URL.createObjectURL(file), id: uuidv4() };
    });

    setFiles([...files, ...newFiles]);
    // Do something with the files
  }, []);

  return (
    <>
      {/* <Dropzone handleDropCallback={onDrop} />
      <FilesUploadPreview files={files} /> */}
      <CarouselDemo files={files} handleDropCallback={onDrop} />
    </>
  );
};

export default ProductCarousel;

type CarouselDemoProps = {
  files: AcceptFileType[];
  handleDropCallback: (acceptedFiles: File[]) => void;
};

export function CarouselDemo({ files, handleDropCallback }: CarouselDemoProps) {
  const [assets, setAssets] = useState<AssetType[]>([]);

  useEffect(() => {
    setAssets(
      files.map(({ id, preview }) => {
        return {
          id,
          imageLink: preview,
        };
      })
    );
  }, [files]);

  const [showManageContentDialog, setShowManageContentDialog] =
    useState<boolean>(false);

  const [showAssetsGalleryDialog, setShowAssetsGalleryDialog] =
    useState<boolean>(false);

  const getCarousel = () => {
    return (
      <Carousel
        className="rounded-xl text-black h-[400px] w-auto bg-brown-100 overflow-y-hidden"
        placeholder={"Please drag images"}
      >
        {assets.map(({ imageLink, id }) => {
          return (
            <div
              key={id}
              className=" h-full bg-cover bg-no-repeat bg-center "
              style={{ backgroundImage: `url(${imageLink})` }}
            ></div>
          );
        })}
        <Dropzone handleDropCallback={handleDropCallback}></Dropzone>
      </Carousel>
    );
  };

  const handleManageContents = () => {
    setShowManageContentDialog(true);
  };
  const handleAddGalleryContents = () => {
    setShowAssetsGalleryDialog(true);
  };

  const handleAssetFromGalleryChange = (changes: AssetType[]) => {
    setAssets(changes);
    setShowAssetsGalleryDialog(false);
  };

  return (
    <>
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            <div className="flex justify-between ">
              <div>Product Name</div>
              <ProductMenu
                handleManageContents={handleManageContents}
                handleAddGalleryContents={handleAddGalleryContents}
              />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {getCarousel()}
          <p className="mt-4">
            This is a detailed description of the product. It highlights its
            features and benefits to the potential buyer.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <Badge className="text-sm">4.0 (120 reviews)</Badge>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">$99</span>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-between items-center">
            <Button>Buy Now</Button>
          </div>
        </CardFooter>
      </Card>

      <ManageContentsDialog
        contents={files}
        show={showManageContentDialog}
        handleOpenChange={setShowManageContentDialog}
      />

      <AssetsGalleryDialog
        show={showAssetsGalleryDialog}
        handleSetOpen={setShowAssetsGalleryDialog}
        handleCommit={handleAssetFromGalleryChange}
        handleCancel={() => setShowAssetsGalleryDialog(false)}
      />
    </>
  );
}
