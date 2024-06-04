import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { AdminModel, UserModel } from "../model/user-models";
import { CustomRequest } from "../middleware/jwt";

export const refreshAdminToken = async (req: CustomRequest, res: Response) => {
  try {
    const refreshToken = req.cookies.refreshToken as string;

    if(!refreshToken) return res.json({
      success: false,
      data: {body: null, error: "No refresh token in cookie"}
    });

    try {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN as string) as {id: string, email: string};


      //generate new accessToken

      const accessToken = jwt.sign({id: decoded.id, email: decoded.email}, process.env.ACCESS_TOKEN as string, {
        expiresIn: "15m",

      });
      res.json({success: true, data: {body: {accessToken}, error: null}});
    } catch (e: any) {
      return res.json({
        success: false,
        data:{body: null, error: e.message}
      })
    }


  } catch (e: any) {
    return res.json({
        success: true,
        data: {body: null, error: e.message}
    })
  };
}
export const refreshUserToken = async (req: CustomRequest, res: Response) => {
  try {
  } catch (e: any) {
    return res.json({
        success: true,
        data: {body: null, error: e.message}
    })
  };
};
