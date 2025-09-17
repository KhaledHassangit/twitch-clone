import { db } from "./db";
import { getSelf } from "./authService";



export const getRecommended = async () => {
    const users = await db.user.findMany({
        orderBy: {
            createAt: "desc"
        }
    })
     
    return users
}