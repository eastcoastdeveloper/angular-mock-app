import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TextCount } from '../interfaces/text-count.interface';
import { HttpService } from './http';

describe('HttpService', () => {
  let svc: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpService,
        provideHttpClient(),
        // Register Mock HTTP Client
        provideHttpClientTesting(),
      ],
    });

    svc = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Http should be created', () => {
    expect(svc).toBeTruthy();
  });

  it('getData() returns parsed dataSets', () => {
    const mock = {
      dataSets: [
        { limit: 4, nums: [2], texts: ['Even'] },
        { limit: 3, nums: [3], texts: ['Three'] },
      ] as TextCount[],
    };

    let result: TextCount[] | undefined;

    svc.getData().subscribe((r) => (result = r));

    const req = httpMock.expectOne('datasets.json');
    expect(req.request.method).toBe('GET');

    req.flush(mock);

    expect(result).toEqual(mock.dataSets);
  });
});
