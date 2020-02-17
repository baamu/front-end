import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { SignInComponent } from './sign-in.component';
describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const appServiceStub = () => ({
      register: (email, name, username, nic, dob, password) => ({
        subscribe: () => ({})
      })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SignInComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: AppService, useFactory: appServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('hide defaults to: true', () => {
    expect(component.hide).toEqual(true);
  });
  describe('formSubmit', () => {
    it('makes expected calls', () => {
      const appServiceStub: AppService = fixture.debugElement.injector.get(
        AppService
      );
      spyOn(appServiceStub, 'register').and.callThrough();
      component.formSubmit();
      expect(appServiceStub.register).toHaveBeenCalled();
    });
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });
});
