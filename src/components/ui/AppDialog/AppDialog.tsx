import { ReactNode } from "react";
import { Button } from "../button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog";

type AppDialogProps = {
  title: string;
  description: string;
  children: ReactNode;
  show: boolean;
  setOpen: (show: boolean) => void;
  handleCommit: (data: unknown) => void;
  handleCancel?: () => void;
  enableCommit?: boolean;
  notifyChange?: (data: unknown) => void;
};

const AppDialog = ({
  show = false,
  setOpen,
  title,
  children,
  description,
  handleCommit,
  handleCancel,
  enableCommit = true,
}: AppDialogProps) => {
  return (
    <Dialog onOpenChange={setOpen} open={show}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}

        <DialogFooter className="sm:justify-ebd">
          <DialogClose asChild>
            <>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button disabled={!enableCommit} onClick={handleCommit}>
                Save changes
              </Button>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
