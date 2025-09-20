import { cn } from "@/lib/utils"

const LiveBadge = ({className}: {className?: string}) => {
  return (
       <div className={cn(className,"bg-rose-500 text-center p-.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide")}>
            Live
        </div>
  )
}

export default LiveBadge
