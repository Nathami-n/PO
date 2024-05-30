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

interface User extends Admin {
    role: "user";
}


type union = Admin | User

export {
    Admin,
    union,
    User
};