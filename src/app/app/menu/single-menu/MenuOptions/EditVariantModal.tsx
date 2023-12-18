import {
  InputContainer,
  InputLabel,
  SelectFreeSolo,
  StandardModal,
  TextField,
} from "@/components";
import { useState } from "react";
import { renderInputComp } from "@/components/SelectFreeSolo";

interface EditVariantModalProps {
  open: boolean;
  onAction: () => void;
  onClose: () => void;
}

const EditVariantModal = ({
  open,
  onAction,
  onClose,
}: EditVariantModalProps) => {
  return (
    <StandardModal
      open={open}
      headerTitle="Edit variant"
      onClose={onClose}
      primaryButtonProps={{
        label: "Update",
        onClick: onAction,
      }}
      secondaryButtonProps={{
        label: "Cancel",
        onClick: onClose,
      }}
    >
      <div className="grid grid-cols-1 gap-y-4">
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <TextField placeholder="Ex: Size" value="Sizes" />
        </InputContainer>

        <InputContainer>
          <InputLabel>Attributes</InputLabel>

          <SelectFreeSolo
            renderInput={renderInputComp}
            value={["Small", "Medium", "Large"]}
            options={[]}
            classes={{ root: "min-w-fit" }}
          />
        </InputContainer>
      </div>
    </StandardModal>
  );
};

export default EditVariantModal;
