"use client"

import { UseCreatorSideBar } from "@/store/UseCreatorSideBar"
import { Button } from "../ui/button"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react"
import Hint from "../SideBar/Hint"

const Toggle = () => {

    const { collapsed, onExpand, onCollapse } = UseCreatorSideBar((state) => state)
    const label = collapsed ? "Expand" : "Collapse"

    return (
        <>
            {
                collapsed && (
                    <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                        <Hint label={label} side="right" asChild>
                            <Button onClick={onExpand} variant={"ghost"} className="h-auto p-2">
                                <ArrowRightFromLine className="h-5 w-5" />
                            </Button>
                        </Hint>
                    </div>
                )
            }
            {
                !collapsed && (
                    <div className="p-3 pl-6 mb-2  items-center hidden lg:flex">
                        <p>
                            Dashboard
                        </p>
                        <Hint label={label} side="left" asChild>
                            <Button onClick={onCollapse} className="h-auto p-2 ml-auto" variant="ghost">
                                <ArrowLeftFromLine className="h-5 w-5" />
                            </Button>
                        </Hint>
                    </div>
                )
            }
        </>
    )
}

export default Toggle