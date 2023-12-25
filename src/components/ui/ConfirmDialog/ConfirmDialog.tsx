import { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../alert-dialog";

type ConfirmDialogProps = {
  title: string;
  description: string;
  children: ReactNode;
  show: boolean;
  setOpen: (show: boolean) => void;
  handleCommit: () => void;
  handleCancel?: () => void;
};

const ConfirmDialog = ({
  show = false,
  setOpen,
  title,
  description,
  handleCommit,
  handleCancel,
}: ConfirmDialogProps) => {
  return (
    <AlertDialog open={show} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel && handleCancel}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleCommit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;
