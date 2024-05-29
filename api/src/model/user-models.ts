import { Schema, model, type Model } from "mongoose";
import { Admin, union, User } from "../interfaces/project-interfaces";

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default:
      "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  authentication: {
    refreshToken: {
      type: String,
    },
  },
  role: {
    type: String,
    default: "user",
  },
});
const AdminSchema = new Schema<Admin>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default:
      "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  authentication: {
    refreshToken: {
      type: String,
    },
  },
  role: {
    type: String,
    default: "admin",
  },
});

//create the models
export const AdminModel = model("Admin", AdminSchema);
export const UserModel = model("User", UserSchema);

const userChoice: Record<"Admin" | "User", Model<any>> = {
  Admin: AdminModel,
  User: UserModel,
};

//database methods
export const createUser = async (name: string, data: union) => {
  let modelName;

  switch (name) {
    case "Admin": {
      modelName = AdminModel;
    };
    case "User": {
        modelName = UserModel;
    }
    default: {
      console.log("error");
    }
  }

  //create the document
  try {
    if (modelName !== null) {
      const user = await modelName.create(data);
      return user;
    }
  } catch (error: any) {
    console.log("error in creating document");
    console.error(error);
  }
};

export const getUserByEmail = async (type: "Admin" | "User", email: string) => {
  let model: Model<typeof AdminModel | typeof UserModel> = userChoice[type];
  try {
    const userFromDatabase = await model.findOne({ email });
    if (!userFromDatabase) return null;
    return userFromDatabase;
  } catch (error: any) {
    console.error(error);
  }
};
