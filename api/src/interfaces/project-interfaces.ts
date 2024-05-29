interface Admin {
    name: string;
    email: string;
    hashedPassword: string;
    avatar?: string;
    authentication: {
        refreshToken: string;
    }
    role?: string;

};

interface User {
    name: string;
    email: string;
    hashedPassword: string;
    authentication: {
        refreshToken: string;
    }
    avatar?: string;
    role: string;
}


type union = Admin | User

export {
    Admin,
    union,
    User
}