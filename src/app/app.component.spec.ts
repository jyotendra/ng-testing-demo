import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import EncrypterService from "../shared/services/encrypter/encrypter.service";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [EncrypterService]
    }).compileComponents();
  }));


  it('should match original message', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#original").textContent).toContain(fixture.componentInstance.originalMessage);
  });

  it('should match encrypted message in h2', () => {
    // This test is deliberately made to fail to show that AES algo uses salt internally and each encryption is unique
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const encrypterService = fixture.debugElement.injector.get(EncrypterService);
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const encryptedMessage = encrypterService.encryptMessage(fixture.componentInstance.originalMessage);
    expect(compiled.querySelector("#encrypted").textContent).toContain(encryptedMessage);
  });

  it('should match decrypted message in h2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const encrypterService = fixture.debugElement.injector.get(EncrypterService);
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const encryptedMessage = encrypterService.encryptMessage(fixture.componentInstance.originalMessage);
    expect(compiled.querySelector("#decrypted").textContent).toContain(encrypterService.decryptMessage(encryptedMessage));
  });

});
