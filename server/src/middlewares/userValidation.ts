import { type Request, Response, NextFunction } from "express";
import { check, validationResult, Result } from "express-validator";
import { users } from "../models/users";

export const validation = [
  check("fname")
    .isLength({ min: 3 })
    .withMessage("First name must be three or more character")
    .toLowerCase()
    .trim(),
  check("lname")
    .isLength({ min: 3 })
    .withMessage("Last name must be three or more character")
    .toLowerCase()
    .trim(),
  check("email")
    .isEmail()
    .withMessage("E-mail is required")
    .custom(async function (value) {
      try {
        const user = await users.findOne({ email: value });
        if (user) {
          throw new Error("E-mail already in use");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        throw new Error(err.message);
      }
    }),
  check("username")
  .isLength({min : 4})
  .withMessage("Username must be four or more")
  .custom(async (value: string) => {
    try {
      const user = await users.findOne({ username: value });
      if (user) {
        throw new Error(`${value} is already in use`);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      throw new Error(err.message);
    }
  }),
  check("password")
    .isLength({ min: 4 })
    .withMessage("Password must be 4 or more character"),
];

export const validationRes = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result: Result = validationResult(req);
  const mapedRes: object = result.mapped();
  if (Object.keys(mapedRes).length === 0) return next();

  res.status(500).json({...mapedRes,success:false});
};
