import { getSelf } from "./authService";
import { db } from "./db";


// export const getallBlockedUsers = async () => {
//     const self = await getSelf();
//     const blocks = await db.block.findMany({})


// }


export const isBlockedUser = async (id: string) => {
    try {
        const self = await getSelf();

        const otherUser = await db.user.findUnique({
            where: { id },
        });
        if (!otherUser) {
            throw new Error("User not found");
        }

        if (otherUser.id === self.id) {
            return false;
        }

        const exisitingBlock = await db.block.findUnique({
            where: {
                blockerId_blockedId: {
                    blockedId: otherUser.id,
                    blockerId: self.id,
                },
            },
        });
        return !!exisitingBlock;
    } catch {
        return false;
    }
};

export const blockUser = async (id: string) => {
    const self = await getSelf();

    if (self.id === id) {
        throw new Error("You cannot block yourself");
    }
    const otherUser = await db.user.findUnique({
        where: { id },
    });
    if (!otherUser) {
        throw new Error("User not found");
    }
    const existingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockedId: otherUser.id,
                blockerId: self.id,
            },
        },
    });

    if (existingBlock) {
        throw new Error("User is already blocked");
    }

    const block = await db.block.create({
        data: {
            blockedId: otherUser.id,
            blockerId: self.id,
        },
        include: {
            blocked: true,
        },
    });
    return block;
};

export const unBlockUser = async (id: string) => {
    const self = await getSelf();

    if (self.id === id) {
        throw new Error("You cannot unblock yourself");
    }
    const otherUser = await db.user.findUnique({
        where: { id },
    });
    if (!otherUser) {
        throw new Error("User not found");
    }
    const existingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockedId: otherUser.id,
                blockerId: self.id,
            },
        },
    });

    if (!existingBlock) {
        throw new Error("User is not blocked");
    }

    const unBlock = await db.block.delete({
        where: { id: existingBlock.id },
        include: {
            blocked: true
        }
    });
    return unBlock
};
