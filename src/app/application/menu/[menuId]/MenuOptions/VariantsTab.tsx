import {
  Button,
  Menu,
  OptionsButton,
  RegularAlertModal,
  Typography,
} from "@/components";
import MenuItem from "@/components/MenuItem";
import { useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddVariantModal from "./AddVariantModal";
import { useMenuOptionsApi, useMenuOptionsState } from "./context";
import EditVariantModal from "./EditVariantModal";

const VariantsTab = () => {
  const {
    variants: { openAddVariantModal },
  } = useMenuOptionsApi();

  return (
    <div>
      <div className="text-left mb-4">
        <Button size="small" onClick={() => openAddVariantModal()}>
          Create new variant
        </Button>
      </div>

      <div className="mb-4">
        <Typography className="text-sm font-bold">Variants</Typography>
      </div>
      <div>
        <div className="grid grid-cols-1">
          <div className="">
            {variantsList.map((variant, i) => {
              return <Variant key={i} {...variant} />;
            })}
          </div>
        </div>
      </div>
      <AddVariantModal />
    </div>
  );
};

export default VariantsTab;

export interface VariantProps {
  name: string;
}

export const variantsList: VariantProps[] = [
  { name: "Size" },
  { name: "Color" },
  { name: "Procedence" },
];

const Variant = (props: VariantProps) => {
  const optionsButtonRef = useRef<HTMLDivElement>(null);
  const [optionsAreOpen, setOptionsAreOpen] = useState(false);
  const handleOptionsButton = () => setOptionsAreOpen(true);
  const handleOnCloseMenu = () => setOptionsAreOpen(false);

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const closeEditModal = () => setEditModalIsOpen(false);
  const onActionEditModal = () => {
    closeEditModal();
  };
  const onCloseEditModal = () => {
    closeEditModal();
  };

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };
  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const deleteVariant = () => {
    setDeleteModalIsOpen(false);
  };

  return (
    <div className="p-2 border border-black [&:not(:last-of-type)]:border-b-0">
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <Typography>{props.name}</Typography>

        <div className="pl-2" ref={optionsButtonRef}>
          <OptionsButton onClick={handleOptionsButton} className="" />
        </div>
      </div>

      <Menu
        open={optionsAreOpen}
        anchorEl={optionsButtonRef.current}
        onClose={handleOnCloseMenu}
      >
        {[
          {
            icon: EditIcon,
            label: "Update",
            onClick: () => {
              setEditModalIsOpen(true);
              handleOnCloseMenu();
            },
          },
          {
            icon: DeleteIcon,
            label: "Delete",
            onClick: () => {
              openDeleteModal();
            },
          },
        ].map((e) => {
          return (
            <MenuItem key={e.label} variant="option" onClick={e.onClick}>
              <e.icon className="text-sm mr-2" /> {e.label}
            </MenuItem>
          );
        })}
      </Menu>
      <EditVariantModal
        open={editModalIsOpen}
        onAction={onActionEditModal}
        onClose={onCloseEditModal}
      />
      <RegularAlertModal
        open={deleteModalIsOpen}
        variant="error-alt"
        onClose={closeDeleteModal}
        primaryButtonProps={{
          label: "Delete",
          onClick: () => {
            deleteVariant();
          },
        }}
        secondaryButtonProps={{
          label: "Cancel",
          onClick: () => {
            closeDeleteModal();
          },
        }}
      >
        <>
          You&lsquo;re about to delete this variant and there is no way back.
          Are you sure you want to delete it?
        </>
      </RegularAlertModal>
    </div>
  );
};
