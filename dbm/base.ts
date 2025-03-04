import { Prisma } from "@prisma/client";
import { type BlankObject } from "./interfaces";
import { type JTDSchemaType } from "ajv/dist/core";
import { type Request, type RequestHandler } from "express";
import type { PartialObjectDeep } from "type-fest/source/partial-deep";
import { type InternalArgs } from "@prisma/client/runtime/library";



export function searchAlg<T>(name: string): Prisma.StringFilter<T> {
    return {
        contains: name,
        mode: "insensitive"
    };
}


export type PrismaInternalArgs = InternalArgs & {
    result: BlankObject;
    model: BlankObject;
    query: BlankObject;
    client: BlankObject;
}



export type DeepPartial<T extends object> = PartialObjectDeep<T, BlankObject>

export type SimpleRequestHandler = RequestHandler<unknown, unknown, unknown, unknown>
export type PassedRequest = Parameters<SimpleRequestHandler>[0]


export abstract class UpsertUtils<
    Interface extends object,
    PrismaCreateInputType, PrismaUpdateInputType,
    UpdateParams = BlankObject, PostParams = BlankObject
> {
    public putManyJTD: JTDSchemaType<Interface[]>;

    public constructor(
        public createJTD: JTDSchemaType<Interface>,
        public updateJTD: JTDSchemaType<DeepPartial<Interface>>
    ) {
        this.putManyJTD = {
            elements: createJTD
        } as JTDSchemaType<Interface[]>;
    }

    public abstract getCreateQuery(req: Request<PostParams, BlankObject, BlankObject, BlankObject>, data: Interface): PrismaCreateInputType;
    public abstract getUpdateQuery(req: Request<UpdateParams, BlankObject, BlankObject, BlankObject>, data: DeepPartial<Interface>): PrismaUpdateInputType;

    public getCreateManyQuery(req: Request<PostParams, BlankObject, BlankObject, BlankObject>, data: Interface[]) {
        return data.map(item => this.getCreateQuery(req, item));
    }
}