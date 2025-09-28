/* eslint-disable @typescript-eslint/no-unused-vars */
import { getSelf } from "./authService";
import { db } from "./db";

export const getRecommended = async () => {
  let userId;
  try {
    const self = await getSelf();
    userId = self.id;
  } catch (error) {
    userId = null;
  }
  let users = [];
  if (userId) {
    users = await db.user.findMany({
      where: {
        AND: [
          {
            NOT: {
              id: userId,
            },
          },
          {
            NOT: {
              followers: {
                some: {
                  followerId: userId,
                },
              },
            },
          },
          {
            NOT: {
              blockedUsers: {
                some: {
                  blockedId: userId,
                },
              },
            },
          },
        ],
      },
      include: {
        stream: {
          select: {
            isLive: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        stream: {
          select: {
            isLive: true,
          },
        },
      },
    });
  }

  return users;
};
