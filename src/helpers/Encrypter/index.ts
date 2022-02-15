import {
    IEncrypter
  } from "./types";

import bcrypt from "bcrypt";

  class Encrypter implements IEncrypter{
    encrypt(value: string): string {

       // tem q gerar esse salt que é um texto aleatório p 
       // tornar a criptografia mais forte
    const hash = bcrypt.genSalt(10, function (err, salt) {
        // agora passa o valor e o salt gerado 
        // para criar a criptografia
        bcrypt.hash(value, salt, function (err, hash) {
          console.log(hash);
        });
      });

     // const salt = bcrypt.genSaltSync(10);
     // const hash = bcrypt.hashSync(value, salt);

      return hash;
      
    }

      compare(valueToCompare: string, originalEncripted: string): boolean {
          throw new Error("Method not implemented.");
      }
      
  }