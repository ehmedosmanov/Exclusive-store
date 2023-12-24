import { z } from "zod"

export const messageSchema = z.object({
    email: z.string().email(),
    name: z.string().min(3, { message: "Name must be minimum 3 characters" }).max(12, { message: "Name must be max 12 characters" }),
    phone: z.string().min(10, { message: "Phone number must be minimum 10 digits" }).max(15, { message: "Phone number must be max 15 digits" }),
    message: z.string({ required_error: "Message is required" }).trim()
        .min(1, { message: "Message is required" }),
})

export type TypeMessageSchema = z.infer<typeof messageSchema>