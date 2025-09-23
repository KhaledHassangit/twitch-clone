"use server"

import { blockUser, unBlockUser } from "@/lib/BlockService";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
    const blockedUser = await blockUser(id);

    revalidatePath("/");

    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }
    return blockedUser;
  
};

export const onUnBlock = async (id: string) => {
  const unBlockedUser = await unBlockUser(id);

  revalidatePath("/");

  if (unBlockedUser) {
    revalidatePath(`/${unBlockedUser.blocked.username}`);
  }

  return unBlockedUser;
};
