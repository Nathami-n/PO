import { registerSchemaType, loginSchemaType } from "../zod/form-schema";

const baseRegisterUrl = "http://localhost:3000/auth/register";
const baseLoginUrl = "http://localhost:3000/auth/login";


export async function registerUser( payload: {form: registerSchemaType, role: string | undefined}) {
    const response = await fetch(`${baseRegisterUrl}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const userData = await response.json();
    console.log(userData.data.body);
};

export async function loginUser (payload: {form: loginSchemaType, role: string | undefined}) {
    const response = await fetch(baseLoginUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const userData = await response.json();
    console.log(userData.data.body);
};