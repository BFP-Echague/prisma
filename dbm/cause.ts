import { Prisma } from "@prisma/client";
import { JTDSchemaType } from "ajv/dist/core";
import { Request } from "express";
import { IdParams, BlankObject } from "./interfaces";
import { DeepPartial, PrismaInternalArgs, UpsertUtils } from "./base";


export const causeInclude = {} satisfies Prisma.CauseInclude<PrismaInternalArgs>;
export const causeOrderBy = [
    {
        id: "asc"
    }
] satisfies Prisma.CauseOrderByWithRelationInput[];

export interface CauseUpsert {
    name: string;
}
export class CauseUpsertUtils extends UpsertUtils<
    CauseUpsert, Prisma.CauseCreateInput, Prisma.CauseUpdateInput,
    IdParams
> {
    public static inst = new CauseUpsertUtils();

    public constructor() {
        const createJTD: JTDSchemaType<CauseUpsert> = {
            properties: {
                "name": { type: "string" }
            }
        };

        const updateJTD: JTDSchemaType<DeepPartial<CauseUpsert>> = {
            optionalProperties: {
                "name": { type: "string" }
            }
        };

        super(createJTD, updateJTD);
    }


    public override getCreateQuery(req: Request<BlankObject, BlankObject, BlankObject, BlankObject>, data: CauseUpsert): Prisma.CauseCreateInput {
        return { name: data.name };
    }

    public override getUpdateQuery(req: Request<IdParams, BlankObject, BlankObject, BlankObject>, data: DeepPartial<CauseUpsert>): Prisma.CauseUpdateInput {
        return { name: data.name };
    }
}