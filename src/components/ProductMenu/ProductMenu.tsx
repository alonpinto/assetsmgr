import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type ProductMenuProps = {
  handleManageContents: () => void;
  handleAddGalleryContents: () => void;
};

const ProductMenu = ({
  handleManageContents,
  handleAddGalleryContents,
}: ProductMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost">
          <DotsVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleManageContents}>
          נהל תמונות
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleAddGalleryContents}>
          הוסף תמונות מגלריה
        </DropdownMenuItem>

        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductMenu;
