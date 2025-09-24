"use server";
import { revalidatePath } from "next/cache";
import { Stream } from "@prisma/client";
import { db } from "@/lib/db";
import { getSelf } from "@/lib/authService";

export const updateStream = async (values: Partial<Stream>) => {
    try {
        const self = await getSelf();
        const selfStream = await db.stream.findUnique({
            where: { userId: self.id },
        });
        if (!selfStream) {
            throw new Error("Stream Not Found");
        }
        const validData = {
            name: values.name,
            isChatDelayed: values.isChatDelayed,
            isChatFollowersOnly: values.isChatFollowersOnly,
            isChatEnabled: values.isChatEnabled,
        };
        const stream = await db.stream.update({
            where: { id: selfStream.id },
            data: {
                ...validData,
            },
        });
        revalidatePath(`/u${self.username}/chat`)
        revalidatePath(`/u${self.username}/`)
        revalidatePath(`${self.username}/chat`)
        return stream
    } catch {
        throw new Error("Internal Error");
    }
};
