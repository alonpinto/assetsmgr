import { AcceptFileType } from "@/types/accept-file.type";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { TrashIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import SortableElement from "../ui/SortableElement/SortableElement";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type ManageContentsDialogProps = {
  contents: AcceptFileType[];
  show: boolean;
  handleOpenChange: (value: boolean) => void;
};

const ManageContentsDialog = ({
  contents,
  show,
  handleOpenChange,
}: ManageContentsDialogProps) => {
  const [assets, setAssets] = useState<AcceptFileType[]>([]);

  useEffect(() => {
    setAssets(contents);
    console.log(contents.length);
  }, [contents]);

  const handleDragEnd = (event) => {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setAssets((prev) => {
        const activeIndex = prev.findIndex((item) => item.id === active.id);
        const overIndex = prev.findIndex((item) => item.id === over.id);
        console.log(arrayMove(prev, activeIndex, overIndex));
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange} open={show}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Manage Product Contents</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={assets}
            strategy={horizontalListSortingStrategy}
          >
            <div className="flex flex-row gap-2">
              {assets.map((item) => {
                return (
                  <SortableElement
                    key={item.id}
                    id={item.id}
                    className=" border-2 m-auto bg-blue-gray-200 h-[100px] w-[100px]"
                  >
                    <div className=" relative ">
                      <Button variant="outline">
                        <TrashIcon className="w-6 h-6 absolute top-[-10px] right-1 z-10 text-red-600" />
                      </Button>
                      <img
                        src={item.preview}
                        className=" object-cover rounded-lg absolute top-0"
                      />
                    </div>
                  </SortableElement>
                );
              })}
            </div>
          </SortableContext>
        </DndContext>

        <DialogFooter className="sm:justify-ebd">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ManageContentsDialog;
