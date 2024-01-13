import { InputContainer, InputLabel, TextField } from "@/components";

const SettingsSection = () => {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
    </div>
  );
};

export default SettingsSection;
