import {
  HttpService,
  HttpTestingController,
  init_http,
  init_http2,
  init_testing as init_testing2,
  provideHttpClient,
  provideHttpClientTesting
} from "./chunk-EEYVA6XN.js";
import "./chunk-COWIKSN4.js";
import {
  TestBed,
  init_testing
} from "./chunk-ZDNMNY7Y.js";
import "./chunk-TTULUY32.js";

// src/app/services/http.spec.ts
init_testing();
init_http();
init_testing2();
init_http2();
describe("HttpService", () => {
  let svc;
  let httpMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpService,
        provideHttpClient(),
        // Register Mock HTTP Client
        provideHttpClientTesting()
      ]
    });
    svc = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("Http should be created", () => {
    expect(svc).toBeTruthy();
  });
  it("getData() returns parsed dataSets", () => {
    const mock = {
      dataSets: [
        { limit: 4, nums: [2], texts: ["Even"] },
        { limit: 3, nums: [3], texts: ["Three"] }
      ]
    };
    let result;
    svc.getData().subscribe((r) => result = r);
    const req = httpMock.expectOne("datasets.json");
    expect(req.request.method).toBe("GET");
    req.flush(mock);
    expect(result).toEqual(mock.dataSets);
  });
});
//# sourceMappingURL=spec-app-services-http.spec.js.map
