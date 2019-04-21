import { Injectable } from '@angular/core';
import * as CryptoJs from "crypto-js";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: "root"
})
export default class EncrypterService {
    public encryptMessage(msg) : string {
        var encryptedMessage: string = CryptoJs.AES.encrypt( msg, environment.secretKey);
        return encryptedMessage.toString();
    }

    public decryptMessage(encryptedMessage: string) : string {
        var bytes : any = CryptoJs.AES.decrypt(encryptedMessage, environment.secretKey);
        var plainText : string = bytes.toString(CryptoJs.enc.Utf8);
        return plainText;
    } 
}

// U2FsdGVkX19alnFoT+V4RhQ+JP5j5kMwj1Ba/kFN2MEmfsrfIBParLaf43FfBfM/