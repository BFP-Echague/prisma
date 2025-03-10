import { Prisma } from "@prisma/client";
import { z } from "zod";
import { incidentInclude } from "./incident";


export interface ClusteringSettings {
    componentCount: number | null;
    clusterCountStart: number;
    clusterCountEnd: number | null;
}
export const clusteringSettingsSchema: z.ZodType<ClusteringSettings> = z.object({
    componentCount: z.number().nullable(),
    clusterCountStart: z.number(),
    clusterCountEnd: z.number()
});


export const feature_count = 2;
interface IncidentClusteringData {
    id: number;
    locationLatitude: number;
    locationLongitude: number;
}


export interface ClusteringRequest {
    settings: ClusteringSettings;
    data: IncidentClusteringData[];
}


export interface ClusterResult {
    clusterCount: number;
    labels: number[][];
    score: number;
}
export const clusterResultSchema: z.ZodType<ClusterResult> = z.object({
    clusterCount: z.number(),
    labels: z.array(z.array(z.number())),
    score: z.number()
});


export interface ClusteringResponse {
    clusterResults: ClusterResult[];
    optimalClusterCount: number;
}
export const clusteringResponseSchema: z.ZodType<ClusteringResponse> = z.object({
    clusterResults: z.array(clusterResultSchema),
    optimalClusterCount: z.number()
});


export interface FinalResult {
    incidents: Prisma.IncidentGetPayload<{ include: typeof incidentInclude }>[];
    clusterResults: {
        clusterCount: number;
        labels: number[][];
        score: number;
    }[];
    optimalClusterCount: number;
}
