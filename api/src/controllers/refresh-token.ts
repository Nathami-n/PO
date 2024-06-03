import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { AdminModel } from "../model/user-models";
import { CustomRequest } from "../middleware/jwt";

export const refreshAdminToken = async (req: CustomRequest, res: Response) => {
  const userEmail = req.email as string;

  //check if user exists
  const user = await AdminModel.findOne({ userEmail });
  if (!user) {
    return res.json({
      success: false,
      data: { body: null, error: "User is not signed up" },
    });
  }

  const refreshToken = user.authentication.refreshToken;
  if (!refreshToken)
    return res.json({
      success: false,
      data: { body: null, error: "No refresh token" },
    });

  try {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN as string,
      (err, decoded: { id: string; email: string }) => {
        if (err)
          return res.json({
            success: false,
            data: { body: null, error: "Invalid refresh token" },
          });
        const accessToken = jwt.sign(
          { id: decoded.id, email: decoded.email },
          process.env.ACCESS_TOKEN as string,
          { expiresIn: "15m" }
        );
        return res.json({
          success: true,
          data: { body: { accessToken }, error: null },
        });
      }
    );
  } catch (e: any) {
    return res.json({
        success: true,
        data: {body: null, error: e.message}
    })
  };
};
