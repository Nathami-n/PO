import * as zod from 'zod';

 const registerSchema = zod.object({
    name: zod.string().min(2).max(30, {message: "Name is required"}),
    email: zod.string().email("Email is required"),
    password: zod.string().min(6, "Password must be at least 6 characters")

});

type registerSchemaType = zod.infer<typeof registerSchema>

export {
    registerSchemaType,
    registerSchema
};

