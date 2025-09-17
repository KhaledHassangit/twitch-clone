import { SideBarStore } from "@/types/types";
import { create } from "zustand";


export const UseSideBar = create<SideBarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })),
}))