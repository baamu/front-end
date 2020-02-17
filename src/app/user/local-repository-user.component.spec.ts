import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { LocalRepositoryUserComponent } from './local-repository-user.component';
describe('LocalRepositoryUserComponent', () => {
  let component: LocalRepositoryUserComponent;
  let fixture: ComponentFixture<LocalRepositoryUserComponent>;
  beforeEach(() => {
    const appServiceStub = () => ({ setRepoName: repoName => ({}) });
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LocalRepositoryUserComponent],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(LocalRepositoryUserComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
