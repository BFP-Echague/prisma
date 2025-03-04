import type { Prisma } from "@prisma/client";
import { type PrismaInternalArgs } from "./base";
import { Decimal } from "decimal.js";


export const incidentInclude = {} satisfies Prisma.IncidentInclude<PrismaInternalArgs>;
export const incidentOrderBy = [
    {
        id: "asc"
    }
] satisfies Prisma.IncidentOrderByWithRelationInput[];

export const decimalRegex = /^[+-]?\d*\.\d{1,8}$/g;
export function validateLocationAxis(locationAxisValue: string) {
    return new Decimal(locationAxisValue);
}

export interface IncidentUpsert {
    name: string;
    reportTime?: Date;
    location: {
        longitude: string;
        latitude: string;
    };
    barangayId: number;
    causes: string[];
    responseTime?: Date;
    fireOutTime?: Date;
    structuresInvolved: string[];
    notes?: string;
    categoryId: number;
}