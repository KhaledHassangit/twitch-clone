/* eslint-disable @typescript-eslint/no-empty-object-type */
import { avatarSizes } from "@/components/SideBar/UserAvatar";
import { Follow, User } from "@prisma/client";
import { type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

export interface Props {
  children: React.ReactNode;
}

export interface SideBarStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export interface HintProps {
  label: string;
  children: React.ReactNode;
  asChild?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

export interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive: boolean;
}

export interface UserAvatarProps
  extends UserItemProps,
    VariantProps<typeof avatarSizes> {
  showBadge?: boolean;
}
export interface UserAvatarSkeletonProps
  extends VariantProps<typeof avatarSizes> {}
export interface UserPageProps {
  params: {
    username: string;
  };
}

export interface UserActionsProps {
  isFollowing: boolean;
  userId: string;
  isBlocked: boolean;
}

export interface FollowProps {
  data: (Follow & { following: User })[];
}

export interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}
export interface NavItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
  isActive?: boolean;
}

type FieldType = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

export interface ToggleCardProps {
  field: FieldType;
  label: string;
  value: boolean;
}
