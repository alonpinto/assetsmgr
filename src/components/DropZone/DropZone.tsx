import { useDropzone } from "react-dropzone";

interface DropzoneProps {
  handleDropCallback: (acceptedFiles: File[]) => void;
}

export const Dropzone = ({ handleDropCallback }: DropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDropCallback,
  });

  return (
    <div
      {...getRootProps({
        className:
          "h-full w-full flex  justify-center items-center  cursor-pointer",
      })}
    >
      <input {...getInputProps()} className=" " />
      {isDragActive ? (
        <img src="/drag-drop.svg" className=" object-cover" />
      ) : (
        <img src="/drag-drop.svg" className=" object-cover" />
      )}
    </div>
  );
};
