import { HintProps } from "@/types/types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const Hint = ({
  label,
  children,
  asChild ,
  side ,
  align ,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>
          {children}
        </TooltipTrigger>
        <TooltipContent
          className="text-black bg-white"
          side={side}
          align={align}>

          <p className="font-semibold">{label}</p>

        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
