import { Prisma } from "@prisma/client";
import { type JTDSchemaType } from "ajv/dist/core";
import { type Request } from "express";
import type { IdParams, BlankObject } from "./interfaces";
import { type DeepPartial, type PrismaInternalArgs, UpsertUtils } from "./base";


export const barangayInclude = {} satisfies Prisma.BarangayInclude<PrismaInternalArgs>;
export const barangayOrderBy = [
    {
        id: "asc"
    }
] satisfies Prisma.BarangayOrderByWithRelationInput[];

export interface BarangayUpsert {
    name: string;
}
export class BarangayUpsertUtils extends UpsertUtils<
    BarangayUpsert, Prisma.BarangayCreateInput, Prisma.BarangayUpdateInput,
    IdParams
> {
    public static inst = new BarangayUpsertUtils();

    public constructor() {
        const createJTD: JTDSchemaType<BarangayUpsert> = {
            properties: {
                "name": { type: "string" }
            }
        };

        const updateJTD: JTDSchemaType<DeepPartial<BarangayUpsert>> = {
            optionalProperties: {
                "name": { type: "string" }
            }
        };

        super(createJTD, updateJTD);
    }


    public override getCreateQuery(req: Request<BlankObject, BlankObject, BlankObject, BlankObject>, data: BarangayUpsert): Prisma.BarangayCreateInput {
        return { name: data.name };
    }

    public override getUpdateQuery(req: Request<IdParams, BlankObject, BlankObject, BlankObject>, data: DeepPartial<BarangayUpsert>): Prisma.BarangayUpdateInput {
        return { name: data.name };
    }
}