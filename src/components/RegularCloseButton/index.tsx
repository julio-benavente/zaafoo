import cn from "@/helpers/cn";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const RegularCloseButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <CloseOutlinedIcon
      className={cn("cursor-pointer hover:bg-black/10 rounded-sm", className)}
      onClick={onClick}
    />
  );
};

export default RegularCloseButton;
