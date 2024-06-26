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
  role: {
    type: String,
    default: "admin",
  },
});


//add methods to schemas

// AdminSchema.methods.generateAccessToken = function () {
//   return (
//     jwt.sign(
//       {
//         _id: this._id,
//         email: this.email
//       },
//       process.env.ACCESS_TOKEN as string,
//       {
//         expiresIn: "15m"
//       }
//     )
//   )
// };


// UserSchema.methods.generateAccessToken = function () {
//   return (
//     jwt.sign(
//       {
//         _id: this._id,
//         email: this.email
//       },
//       process.env.ACCESS_TOKEN as string,
//       {
//         expiresIn: "15m"
//       }
//     )
//   )
// };

// UserSchema.methods.generateRefreshToken = function () {
//   return (
//     jwt.sign(
//       {
//         _id: this._id,
//         email: this.email
//       },
//       process.env.REFRESH_TOKEN as string,
//       {
//         expiresIn: "15d"
//       }
//     )
//   )
// };

// AdminSchema.methods.generateRefreshToken = function () {
//   return (
//     jwt.sign(
//       {
//         _id: this._id,
//         email: this.email
//       },
//       process.env.REFRESH_TOKEN as string,
//       {
//         expiresIn: "15d"
//       }
//     )
//   )
// };



//create the models
export const AdminModel = model("Admin", AdminSchema);
export const UserModel = model("User", UserSchema);

const userChoice: Record<"Admin" | "User", Model<any>> = {
  Admin: AdminModel,
  User: UserModel,
};


export const getUserByEmail = async (type: ("Admin" | "User"), email: string) => {
  let model = userChoice[type];
  try {
    const userFromDatabase = await model.findOne({ email }) as Admin | User | null;
    if (!userFromDatabase) return null;
    return userFromDatabase;
  } catch (error: any) {
    console.error(error);
  }
};



