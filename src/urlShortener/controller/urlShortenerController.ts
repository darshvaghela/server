import express from "express";
import { validationResult } from "express-validator";
import { publicRequest } from "../../middleware/publicRequest";
import * as urlShortenerService from "../service/urlShortenerService";
const router = express.Router();

router.post("/short/generate", publicRequest, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ success: false, errorCode: 401, errorMessage: errors.array() });
  }
  try {
    const shortenerUrl = await urlShortenerService.generateShortenerUrl(
      req.body.url
    );
    res.status(200).json(shortenerUrl);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      errorCode: 406,
      errorMessage: "Error while generating password!",
    });
  }
});

router.get("/get/shortener/:hash", publicRequest, async (req, res) => {
  const hash = req.params.hash;
  try {
    const shortenerUrl = await urlShortenerService.getUrlShortener(hash);
    res.status(200).json(shortenerUrl);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      errorCode: 406,
      errorMessage: "Error while generating password!",
    });
  }
});

module.exports = router;
