import { Decimal } from "decimal.js";
import { z } from "zod";



export type RawJSON<T> = 
    T extends Date ? string :
    T extends Decimal ? string :
    T extends object ? {
        [K in keyof T]: RawJSON<T[K]>;
    }

    : T;



export const zodId = z.number().int().nonnegative();


export const zodDecimal = z.string().transform((value, ctx) => {
    try {
        return new Decimal(value);
    } catch (e: unknown) {
        const prepend = `${value} is not a decimal.`;
        if (e instanceof Error) {
            ctx.addIssue({
                code: "custom",
                message: `${prepend} ${e.message}`
            });
        }
        else {
            ctx.addIssue({
                code: "custom",
                message: prepend
            });
        }

        return z.NEVER;
    }
});


export const zodDate = z.string().transform((value, ctx) => {
    try {
        return new Date(value);
    } catch (e: unknown) {
        const prepend = `${value} is not a date.`;
        if (e instanceof Error) {
            ctx.addIssue({
                code: "custom",
                message: `${prepend} ${e.message}`
            });
        }
        else {
            ctx.addIssue({
                code: "custom",
                message: prepend
            });
        }

        return z.NEVER;
    }
});
