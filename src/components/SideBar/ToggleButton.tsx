"use client"
import { UseSideBar } from "@/store/UseSideBar"
import { Button } from "../ui/button"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react"
import Hint from "./Hint"
import { Skeleton } from "../ui/skeleton"

const ToggleButton = () => {
    const { collapsed ,onCollapse , onExpand} = UseSideBar((state) => state)
    const label = collapsed ? "Expand" : "Collapse"
  return (
    <>
    {
      collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} variant={"ghost"} className="h-auto p-2">
              <ArrowRightFromLine className="h-5 w-5"/>
            </Button>
          </Hint>
        </div>
      )
    }
      {
        !collapsed && (
          <div className="p-3 pl-6 mb-2  items-center hidden lg:flex">
            <p>
              For you
            </p>
            <Hint label={label} side="left" asChild>
            <Button onClick={onCollapse} className="h-auto p-2 ml-auto" variant="ghost">
              <ArrowLeftFromLine className="h-5 w-5"/>
            </Button>
            </Hint>
          </div>
        )
      }
    </>
  )
}

export default ToggleButton


export const TooggleButtonSkeleton = () => {
  return (
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
      <Skeleton className="h-6 w-[100px]"/>
      <Skeleton className="h-6 w-6"/>
    </div>
  )
}