import { AcceptFileType } from "@/types/accept-file.type";
import FileUploadPreview from "./FileUploadPreview";

type DropFilePreviewProps = {
  files: AcceptFileType[];
};

const FilesUploadPreview = ({ files }: DropFilePreviewProps) => {
  return (
    <div className="flex gap-2">
      {files.map((file) => (
        <FileUploadPreview file={file} />
      ))}
    </div>
  );
};

export default FilesUploadPreview;
