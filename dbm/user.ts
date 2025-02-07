import { Prisma, PrivilegeLevel } from "@prisma/client";
import { DeepPartial, UpsertUtils } from "./base";
import { JTDSchemaType } from "ajv/dist/core";
import { Request } from "express";
import { IdParams, BlankObject } from "./interfaces";



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

export interface UserUpsert {
    username: string;
    email: string;
    password: string;
    privilege: PrivilegeLevel;
}
export class UserUpsertUtils extends UpsertUtils<
    UserUpsert, Prisma.UserCreateInput, Prisma.UserUpdateInput,
    IdParams
> {
    public static inst = new UserUpsertUtils();

    public constructor() {
        const createJTD: JTDSchemaType<UserUpsert> = {
            properties: {
                "username": { type: "string" },
                "email": { type: "string" },
                "password": { type: "string" },
                "privilege": { enum: ["ADMIN", "BASIC"] }
            }
        };

        const updateJTD: JTDSchemaType<DeepPartial<UserUpsert>> = {
            optionalProperties: {
                "username": { type: "string" },
                "email": { type: "string" },
                "password": { type: "string" },
                "privilege": { enum: ["ADMIN", "BASIC"] }
            }
        };

        super(createJTD, updateJTD);
    }



    public override getCreateQuery(req: Request<BlankObject, BlankObject, BlankObject, BlankObject>, data: UserUpsert): Prisma.UserCreateInput {
        return {
            username: data.username,
            email: data.email,
            passwordHash: data.password,
            privilege: data.privilege
        };
    }


    public override getUpdateQuery(req: Request<IdParams, BlankObject, BlankObject, BlankObject>, data: DeepPartial<UserUpsert>): Prisma.UserUpdateInput {
        return {
            username: data.username,
            email: data.email,
            passwordHash: data.password,
            privilege: data.privilege
        };
    }
}