import type { Prisma } from "@prisma/client";
import { type PrismaInternalArgs } from "./base";
import { Decimal } from "decimal.js";


export const incidentInclude = {
    location: true,
    barangay: true,
    category: true,
    updatedBy: true,
    createdBy: true
} satisfies Prisma.IncidentInclude<PrismaInternalArgs>;
export const incidentOrderBy = [
    {
        reportTime: "desc"
    },
    {
        name: "asc"
    }
] satisfies Prisma.IncidentOrderByWithRelationInput[];

export type IncidentGet = Prisma.IncidentGetPayload<{ include: typeof incidentInclude }>;


export const decimalRegex = /^[+-]?\d*\.\d{1,8}$/g;

export interface IncidentUpsert {
    name: string;
    reportTime?: Date;
    location: {
        longitude: Decimal;
        latitude: Decimal;
    };
    barangayId: number;
    causes: string[];
    responseTime?: Date;
    fireOutTime?: Date;
    structuresInvolved: string[];
    notes?: string;
    categoryId: number;
    archived?: boolean;
}