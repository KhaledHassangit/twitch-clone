export interface Props {
    children: React.ReactNode
}



export interface SideBarStore {
    collapsed:boolean;
    onExpand:() => void
    onCollapse:() => void
}


export interface HintProps {
    label:string;
    children:React.ReactNode;
    asChild?:boolean;
    side?:"top" | "bottom" | "left" | "right";
    align?:"start" | "center" | "end"
}