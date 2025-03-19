import type { Prisma } from "@prisma/client";
import { type PrismaInternalArgs } from "./base";


export const barangayInclude = {} satisfies Prisma.BarangayInclude<PrismaInternalArgs>;
export const barangayOrderBy = [
    {
        id: "asc"
    }
] satisfies Prisma.BarangayOrderByWithRelationInput[];

export type BarangayGet = Prisma.BarangayGetPayload<{ include: typeof barangayInclude }>;

export interface BarangayUpsert {
    name: string;
}