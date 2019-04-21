import { TestBed, async } from '@angular/core/testing';
import EncrypterService from "./encrypter.service";


describe('Test encrypter service', () => {
    let encrypterService: EncrypterService;

    beforeEach(() => {
        encrypterService = new EncrypterService()
    });


    it('should encrypt message and then decrypt it correctly', () => {
        const myMessage = "This is my message";
        const encryptedMessage = encrypterService.encryptMessage(myMessage);
        const decryptedMessage = encrypterService.decryptMessage(encryptedMessage);
        expect(decryptedMessage).toEqual(myMessage);
    });

});
