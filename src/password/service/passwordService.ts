// passwordService.ts
import crypto from "crypto";
import { IPassword } from "../../type/password";
import { LOWERCASE, NUMBERS, SYMBOL, UPPERCASE } from "../../constant/password";

export const generatePassword = (password: IPassword) => {
  let encryptPassword: string = "";
  const encryptData = encrypt(password);
  while (password.length--) {
    const typeIndex: number = crypto.randomInt(encryptData.length);
    encryptPassword +=
      encryptData[typeIndex][crypto.randomInt(encryptData[typeIndex].length)];
  }
  return encryptPassword;
};

const encrypt = (password: IPassword) => {
  const encryptData: string[] = [];
  if (password.lowerCase) {
    encryptData.push(LOWERCASE);
  }
  if (password.upperCase) {
    encryptData.push(UPPERCASE);
  }
  if (password.numeric) {
    encryptData.push(NUMBERS);
  }
  if (password.symbol) {
    encryptData.push(SYMBOL);
  }
  return encryptData;
};
