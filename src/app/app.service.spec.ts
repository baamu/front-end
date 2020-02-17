import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { WebStorageService } from 'angular-webstorage-service';
import { AppService } from './app.service';
describe('AppService', () => {
  let service: AppService;
  beforeEach(() => {
    const webStorageServiceStub = () => ({
      set: (string, arg) => ({}),
      get: string => ({}),
      remove: string => ({})
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AppService,
        { provide: WebStorageService, useFactory: webStorageServiceStub }
      ]
    });
    service = TestBed.get(AppService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('getOnGoingDownloads', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      const webStorageServiceStub: WebStorageService = TestBed.get(
        WebStorageService
      );
      spyOn(webStorageServiceStub, 'get').and.callThrough();
      service.getOnGoingDownloads().subscribe(res => {
        expect(res).toEqual(1);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      expect(webStorageServiceStub.get).toHaveBeenCalled();
      req.flush();
      httpTestingController.verify();
    });
  });
  describe('getDownloadHistory', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      const webStorageServiceStub: WebStorageService = TestBed.get(
        WebStorageService
      );
      spyOn(webStorageServiceStub, 'get').and.callThrough();
      service.getDownloadHistory().subscribe(res => {
        expect(res).toEqual(1);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      expect(webStorageServiceStub.get).toHaveBeenCalled();
      req.flush();
      httpTestingController.verify();
    });
  });
  describe('getRepoName', () => {
    it('makes expected calls', () => {
      const webStorageServiceStub: WebStorageService = TestBed.get(
        WebStorageService
      );
      spyOn(webStorageServiceStub, 'get').and.callThrough();
      service.getRepoName();
      expect(webStorageServiceStub.get).toHaveBeenCalled();
    });
  });
  describe('logout', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      const webStorageServiceStub: WebStorageService = TestBed.get(
        WebStorageService
      );
      spyOn(webStorageServiceStub, 'get').and.callThrough();
      spyOn(webStorageServiceStub, 'remove').and.callThrough();
      service.logout();
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      expect(webStorageServiceStub.get).toHaveBeenCalled();
      expect(webStorageServiceStub.remove).toHaveBeenCalled();
      req.flush();
      httpTestingController.verify();
    });
  });
  describe('isLogged', () => {
    it('makes expected calls', () => {
      const webStorageServiceStub: WebStorageService = TestBed.get(
        WebStorageService
      );
      spyOn(webStorageServiceStub, 'get').and.callThrough();
      service.isLogged();
      expect(webStorageServiceStub.get).toHaveBeenCalled();
    });
  });
});
