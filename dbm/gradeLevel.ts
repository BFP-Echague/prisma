import { Prisma } from "@prisma/client";
import { DeepPartial, PrismaInternalArgs, UpsertUtils as UpsertUtils } from "./base";
import { JTDSchemaType } from "ajv/dist/core";
import { IdParams, SchoolYearIdParams, BlankObject } from "./interfaces";
import { Request } from "express";
import { schoolYearOrderBy } from "./schoolYear";



export const gradeLevelInclude = {} satisfies Prisma.GradeLevelInclude<PrismaInternalArgs>;
export const gradeLevelOrderBy = [
    {
        level: "asc"
    },
    {
        id: "asc"
    }
] satisfies Prisma.GradeLevelOrderByWithRelationInput[];

export interface GradeLevelUpsert {
    level: string;
}
export class GradeLevelUpsertUtils extends UpsertUtils<
    GradeLevelUpsert, Prisma.GradeLevelCreateInput, Prisma.GradeLevelUpdateInput,
    IdParams
> {
    public static inst = new GradeLevelUpsertUtils();

    public constructor() {
        const createJTD: JTDSchemaType<GradeLevelUpsert> = {
            properties: {
                "level": { type: "string" }
            }
        };

        const updateJTD: JTDSchemaType<DeepPartial<GradeLevelUpsert>> = {
            optionalProperties: {
                "level": { type: "string" }
            }
        };

        super(createJTD, updateJTD);
    }



    public override getCreateQuery(req: Request<BlankObject, BlankObject, BlankObject, BlankObject>, data: GradeLevelUpsert): Prisma.GradeLevelCreateInput {
        return {
            level: data.level
        };
    }

    public override getUpdateQuery(req: Request<IdParams, BlankObject, BlankObject, BlankObject>, data: DeepPartial<GradeLevelUpsert>): Prisma.GradeLevelUpdateInput {
        return {
            level: data.level
        };
    }
}



export const gradeLevelArchInclude = {
    gradeLevel: true,
    schoolYear: true,
    sectionArchs: { include: {
        section: true
    } },
    subjectArchs: { include: {
        subject: true
    } },
} satisfies Prisma.GradeLevelArchInclude<PrismaInternalArgs>;
export const gradeLevelArchOrderBy = [
    ...schoolYearOrderBy.map(order => ({
        schoolYear: order
    })),

    ...gradeLevelOrderBy.map(order => ({
        gradeLevel: order
    })),

    {
        id: "asc"
    }
] satisfies Prisma.GradeLevelArchOrderByWithRelationInput[];

export interface GradeLevelArchUpsert {
    gradeLevelId: number;
}
export class GradeLevelArchUpsertUtils extends UpsertUtils<
    GradeLevelArchUpsert, Prisma.GradeLevelArchCreateInput, Prisma.GradeLevelArchUpdateInput,
    IdParams & SchoolYearIdParams, SchoolYearIdParams
> {
    public static inst = new GradeLevelArchUpsertUtils();

    public constructor() {
        const createJTD: JTDSchemaType<GradeLevelArchUpsert> = {
            properties: {
                "gradeLevelId": { type: "int32" }
            }
        };

        const updateJTD: JTDSchemaType<DeepPartial<GradeLevelArchUpsert>> = {
            optionalProperties: {
                "gradeLevelId": { type: "int32" }
            }
        };

        super(createJTD, updateJTD);
    }



    public override getCreateQuery(req: Request<SchoolYearIdParams, BlankObject, BlankObject, BlankObject>, data: GradeLevelArchUpsert): Prisma.GradeLevelArchCreateInput {
        return {
            schoolYear: { connect: { id: req.schoolYearId } },
            gradeLevel: { connect: { id: data.gradeLevelId } }
        };
    }

    public override getUpdateQuery(req: Request<IdParams & SchoolYearIdParams, BlankObject, BlankObject, BlankObject>, data: DeepPartial<GradeLevelArchUpsert>): Prisma.GradeLevelArchUpdateInput {
        return {
            schoolYear: { connect: { id: req.schoolYearId } },
            gradeLevel: data.gradeLevelId ? {
                connect: { id: data.gradeLevelId }
            } : undefined
        };
    }
}