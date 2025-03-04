import { Prisma } from "@prisma/client";
import { type PrismaInternalArgs } from "./base";


export const categoryInclude = {} satisfies Prisma.CategoryInclude<PrismaInternalArgs>;
export const categoryOrderBy = [
    {
        id: "asc"
    }
] satisfies Prisma.CategoryOrderByWithRelationInput[];

export interface CategoryUpsert {
    name: string;
    severity: number;
}