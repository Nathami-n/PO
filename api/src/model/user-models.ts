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
    password: {
        type: String,
        required: true,
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
            await modelName.create(data);
        };

    } catch (error: any) {
        console.log("error in creating document");
        console.error(error);
    }
}