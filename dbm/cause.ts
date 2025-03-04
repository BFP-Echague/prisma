import { Prisma } from "@prisma/client";
import { type JTDSchemaType } from "ajv/dist/core";
import { type Request } from "express";
import { type IdParams, type BlankObject } from "./interfaces";
import { type DeepPartial, type PrismaInternalArgs, UpsertUtils } from "./base";


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