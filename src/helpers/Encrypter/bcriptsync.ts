import {
    IEncrypter
  } from "./types";

import bcrypt from "bcrypt";

  class Encrypter implements IEncrypter{
    encrypt(value: string): string {

      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(value, salt);
      
    }

      compare(valueToCompare: string, originalEncripted: string): boolean {
          return bcrypt.compareSync(valueToCompare, originalEncripted)
      }
      
  }

  export default Encrypter;