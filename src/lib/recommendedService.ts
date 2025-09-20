import { db } from "./db";
import { getSelf } from "./authService";



export const getRecommended = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const users = await db.user.findMany({
        orderBy: {
            createAt: "desc"
        }
    })

    return users
}