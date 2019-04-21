# NgSignalr

This project has encrypter / decrypter service under shared-services. Algorithm used is AES - symmetric key encryption. 
Test cases are written to verify this service.

Currently one of the test cases, in "app.component.spect.ts", is deliberately made to fail so as to demonstrate that crypto-js AES internally uses salting and hence same message will produce different hash at different service invocation. 
