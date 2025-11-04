import {
  HttpService,
  init_http,
  init_http2,
  init_testing as init_testing2,
  provideHttpClient,
  provideHttpClientTesting
} from "./chunk-EEYVA6XN.js";
import {
  TextCountComponent,
  init_text_count
} from "./chunk-AR6HHHMG.js";
import "./chunk-COWIKSN4.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  inject
} from "./chunk-ZDNMNY7Y.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// src/app/app.ts
var App;
var init_app = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_text_count();
    init_http2();
    App = class App2 {
      dataSvc = inject(HttpService);
      dataSets = [];
      ngOnInit() {
        this.dataSvc.getData().subscribe((data) => this.dataSets = data);
      }
    };
    App = __decorate([
      Component({
        selector: "app-root",
        standalone: true,
        imports: [TextCountComponent],
        template: '<app-text-count [outputValues]="dataSets"></app-text-count>'
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app();
    init_http();
    init_testing2();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [provideHttpClient(), provideHttpClientTesting()]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app-app.spec.js.map
