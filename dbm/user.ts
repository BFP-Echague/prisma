import type { Prisma, PrivilegeLevel } from "@prisma/client";



export const userOrderBy = [
    {
        id: "asc"
    }
] satisfies Prisma.UserOrderByWithRelationInput[];

export const userSelect = {
    id: true,
    username: true,
    email: true,
    passwordHash: false,
    privilege: true,
    createdAt: true,
    updatedAt: true
} satisfies Prisma.UserSelect;

export type UserGet = Prisma.UserGetPayload<{ select: typeof userSelect }>;

export interface UserUpsert {
    username: string;
    email: string;
    password: string;
    privilege: PrivilegeLevel;
}