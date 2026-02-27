import * as z from "zod"

export const formSchema = z.object({
    type: z
        .string()
        .min(1, "type must be at least 1 characters.")
        .max(100, "type must be at most 100 characters."),
    amount: z
        .number()
        .min(1, "amount must be at least 1 numbers.")
        .max(9999999, "amount must be at most 9999999."),
    descriptions: z
        .string()
        .min(1, "description must be at least 1 characters.")
        .max(1000, "description must be at most 1000 characters.")
})