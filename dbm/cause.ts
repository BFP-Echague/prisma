import { Prisma } from "@prisma/client";
import { type PrismaInternalArgs } from "./base";


export const causeInclude = {} satisfies Prisma.CauseInclude<PrismaInternalArgs>;
export const causeOrderBy = [
    {
        id: "asc"
    }
] satisfies Prisma.CauseOrderByWithRelationInput[];

export interface CauseUpsert {
    name: string;
}