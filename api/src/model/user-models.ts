import { Schema, model } from "mongoose";
import {Admin} from "../interfaces/project-interfaces";


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
    }
});

//create the model

export const AdminModel = model("Admin", AdminSchema);