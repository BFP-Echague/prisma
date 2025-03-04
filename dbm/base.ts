import { Prisma } from "@prisma/client";
import { type BlankObject } from "./interfaces";
import { type PartialObjectDeep } from "type-fest/source/partial-deep";
import { type InternalArgs } from "@prisma/client/runtime/library";



export function searchAlg<T>(name: string): Prisma.StringFilter<T> {
    return {
        contains: name,
        mode: "insensitive"
    };
}


export type PrismaInternalArgs = InternalArgs & {
    result: BlankObject;
    model: BlankObject;
    query: BlankObject;
    client: BlankObject;
}



export type DeepPartial<T extends object> = PartialObjectDeep<T, BlankObject>