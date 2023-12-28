import { AcceptFileType } from "@/types/accept-file.type";

type DropFilePreviewProps = {
  file: AcceptFileType;
};

const FileUploadPreview = ({ file }: DropFilePreviewProps) => {
  //const url = file.preview;

  return (
    <div
      className=" w-[200px] h-[200px] border-2 border-red-950 border-dashed bg-cover bg-center"
      style={{ backgroundImage: `url(${file.preview})` }}
    >
      {/* <img
        src={file.preview}
        width={100}
        height={100}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      /> */}
    </div>
  );
};

export default FileUploadPreview;
