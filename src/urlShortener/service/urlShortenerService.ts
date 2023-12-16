/* eslint-disable @typescript-eslint/no-var-requires */
const crypto = require("crypto");
const Url = require("../../schema/urls");

export const generateShortenerUrl = async (url: string) => {
  const hashCode = hashUrl(url);
  const urls = await Url.create({
    hashCode: hashCode,
    url: url,
    createdAt: Date.now(),
  });
  return urls;
};

export const getUrlShortener = async (hash: string) => {
  const url = Url.findOne({ hashCode: hash });
  return url;
};

function hashUrl(url: string) {
  const uniqueIdentifier = Date.now().toString();
  const sha256Hash = crypto
    .createHash("sha256")
    .update(url + uniqueIdentifier)
    .digest("hex");
  const shortHash = sha256Hash.substr(0, 10);
  return shortHash;
}
