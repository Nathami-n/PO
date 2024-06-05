import { Response } from "express";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../middleware/jwt";

export const refreshToken = async (req: CustomRequest, res: Response) => {
  try {
    const cookies = req.cookies;
    console.log(cookies.refreshToken);

    if(!cookies.refreshToken) return res.json({
      success: false,
      data: {body: null, error: "No refresh token in cookie"}
    });

    try {
      const decoded = jwt.verify(cookies.refreshToken, process.env.REFRESH_TOKEN as string) as {id: string, email: string};


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
