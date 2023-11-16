import express from "express";
import { body, validationResult, ValidationChain } from "express-validator";
import { publicRequest } from "../../middleware/publicRequest";
import * as passwordService from "../service/passwordService";
import { IPassword } from "../../type/password";

const router = express.Router();

router.post(
  "/generate",
  publicRequest,
  [
    body("length").isNumeric().withMessage("length should be number!"),
    body("lowerCase").isBoolean().withMessage("lowerCase should be a boolean!"),
    body("upperCase").isBoolean().withMessage("upperCase should be a boolean!"),
    body("numeric").isBoolean().withMessage("numeric should be a boolean!"),
    body("symbol").isBoolean().withMessage("symbol should be a boolean!"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ success: false, errorCode: 401, errorMessage: errors.array() });
    }

    try {
      const password: IPassword = req.body;
      if (
        !password.lowerCase &&
        !password.upperCase &&
        !password.numeric &&
        !password.symbol
      ) {
        return res.status(406).json({
          success: false,
          errorCode: 406,
          errorMessage:
            "Please select at least one criteria for password generation.",
        });
      }
      const newPassword = passwordService.generatePassword(password);
      res.status(200).json({
        password: newPassword,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        success: false,
        errorCode: 406,
        errorMessage: "Error while generating password!",
      });
    }
  }
);

module.exports = router;
