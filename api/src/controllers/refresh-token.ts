import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { AdminModel } from "../model/user-models";
import { CustomRequest } from "../middleware/jwt";

export const refreshAdminToken = async (req: CustomRequest, res: Response) => {
  try {
  } catch (e: any) {
    return res.json({
        success: true,
        data: {body: null, error: e.message}
    })
  };
};
