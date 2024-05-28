import { Schema, model} from "mongoose";
import {Admin, union} from "../interfaces/project-interfaces";



const AdminSchema = new Schema<Admin>({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    avatar: {
        type: String,
        default:"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    authentication: {
        accessToken: {
            type: String
        }
    },
    role: {
         type: String,
         default: 'admin'
    }
});

//create the model

export const AdminModel = model("Admin", AdminSchema);


//database methods
export const createUser = async (name: string, data: union) => {
    let modelName;

    switch(name) {
        case 'Admin': {
            modelName = AdminModel;
        };
        default: {
            console.log("error");
        }
    };

    //create the document
    try {
        if(modelName !== null) {
            const user = await modelName.create(data);
            return user;
        };

    } catch (error: any) {
        console.log("error in creating document");
        console.error(error);
    }
}