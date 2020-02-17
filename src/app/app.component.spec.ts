import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const webStorageServiceStub = () => ({ get: string => ({}) });
    const routerStub = () => ({ navigate: array => ({}) });
    const appServiceStub = () => ({ logout: () => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: WebStorageService, useFactory: webStorageServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: AppService, useFactory: appServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('title defaults to: Night Wolf', () => {
    expect(component.title).toEqual('Night Wolf');
  });
  describe('setLogged', () => {
    it('makes expected calls', () => {
      const webStorageServiceStub: WebStorageService = fixture.debugElement.injector.get(
        WebStorageService
      );
      spyOn(webStorageServiceStub, 'get').and.callThrough();
      component.setLogged();
      expect(webStorageServiceStub.get).toHaveBeenCalled();
    });
  });
  describe('logout', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const appServiceStub: AppService = fixture.debugElement.injector.get(
        AppService
      );
      spyOn(component, 'setLogged').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(appServiceStub, 'logout').and.callThrough();
      component.logout();
      expect(component.setLogged).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(appServiceStub.logout).toHaveBeenCalled();
    });
  });
});
