import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login.component';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const appServiceStub = () => ({
      setRepoName: string => ({}),
      login: (email, password) => ({ subscribe: () => ({}) })
    });
    const routerStub = () => ({ navigate: array => ({}) });
    const appComponentStub = () => ({ setLogged: () => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: AppService, useFactory: appServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: AppComponent, useFactory: appComponentStub }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('formSubmit', () => {
    it('makes expected calls', () => {
      const appServiceStub: AppService = fixture.debugElement.injector.get(
        AppService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const appComponentStub: AppComponent = fixture.debugElement.injector.get(
        AppComponent
      );
      spyOn(appServiceStub, 'setRepoName').and.callThrough();
      spyOn(appServiceStub, 'login').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(appComponentStub, 'setLogged').and.callThrough();
      component.formSubmit();
      expect(appServiceStub.setRepoName).toHaveBeenCalled();
      expect(appServiceStub.login).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(appComponentStub.setLogged).toHaveBeenCalled();
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
