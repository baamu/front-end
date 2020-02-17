import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { AddDownloadUserComponent } from './add-download-user.component';
describe('AddDownloadUserComponent', () => {
  let component: AddDownloadUserComponent;
  let fixture: ComponentFixture<AddDownloadUserComponent>;
  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const appServiceStub = () => ({
      addDownload: url => ({ subscribe: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AddDownloadUserComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: AppService, useFactory: appServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AddDownloadUserComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
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
  describe('formSubmit', () => {
    it('makes expected calls', () => {
      const appServiceStub: AppService = fixture.debugElement.injector.get(
        AppService
      );
      spyOn(appServiceStub, 'addDownload').and.callThrough();
      component.formSubmit();
      expect(appServiceStub.addDownload).toHaveBeenCalled();
    });
  });
});
