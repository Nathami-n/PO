interface Admin {
    name: string;
    email: string;
    password: string;
    avatar?: string;
    authentication: {
        refreshToken: string;
    }
    role?: string;

};

interface User {
    name: string;
    email: string;
    password: string;
    authetication: {
        refreshToken: string;
    }
    avatar?: string;
    role: string;
}


type union = Admin | User

export {
    Admin,
    union
}