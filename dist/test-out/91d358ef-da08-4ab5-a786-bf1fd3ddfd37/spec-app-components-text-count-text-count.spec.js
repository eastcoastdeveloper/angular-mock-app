import {
  TextCountComponent,
  init_text_count
} from "./chunk-AR6HHHMG.js";
import {
  TestBed,
  init_testing
} from "./chunk-ZDNMNY7Y.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/text-count/text-count.spec.ts
var require_text_count_spec = __commonJS({
  "src/app/components/text-count/text-count.spec.ts"(exports) {
    init_testing();
    init_text_count();
    describe("TextCountComponent", () => {
      let fixture;
      let component;
      let host;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [TextCountComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TextCountComponent);
        component = fixture.componentInstance;
        host = fixture.nativeElement;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("renders the correct number of groups and headings", () => {
        const data = [
          { limit: 3, nums: [2], texts: ["Even"] },
          { limit: 2, nums: [2], texts: ["Even"] }
        ];
        fixture.componentRef.setInput("outputValues", data);
        fixture.detectChanges();
        const headings = host.querySelectorAll("h4");
        expect(headings.length).toBe(2);
        expect(headings[0].textContent?.trim()).toBe("Group 1");
        expect(headings[1].textContent?.trim()).toBe("Group 2");
      });
      it("renders the correct number of lines per group", () => {
        const data = [
          { limit: 5, nums: [3, 5], texts: ["Fizz", "Buzz"] },
          { limit: 3, nums: [2], texts: ["Even"] }
        ];
        fixture.componentRef.setInput("outputValues", data);
        fixture.detectChanges();
        const groups = Array.from(host.querySelectorAll("h4")).map((h) => h.parentElement);
        const group1Lines = groups[0].querySelectorAll("p");
        expect(group1Lines.length).toBe(5);
        expect(group1Lines[0].textContent?.trim()).toBe("1 1");
        expect(group1Lines[2].textContent?.trim()).toBe("3 Fizz");
        expect(group1Lines[4].textContent?.trim()).toBe("5 Buzz");
        const group2Lines = groups[1].querySelectorAll("p");
        expect(group2Lines.length).toBe(3);
        expect(group2Lines[0].textContent?.trim()).toBe("1 1");
        expect(group2Lines[1].textContent?.trim()).toBe("2 Even");
      });
      it("handles repeating text safely (track by $index) and still renders correctly", () => {
        const data = [{ limit: 4, nums: [2], texts: ["Even"] }];
        fixture.componentRef.setInput("outputValues", data);
        fixture.detectChanges();
        const lines = host.querySelectorAll("p");
        expect(lines.length).toBe(4);
        expect(lines[0].textContent?.trim()).toBe("1 1");
        expect(lines[1].textContent?.trim()).toBe("2 Even");
        expect(lines[2].textContent?.trim()).toBe("3 3");
        expect(lines[3].textContent?.trim()).toBe("4 Even");
      });
      it("recomputes and updates when the input changes", () => {
        const first = [{ limit: 3, nums: [3], texts: ["Three"] }];
        fixture.componentRef.setInput("outputValues", first);
        fixture.detectChanges();
        let lines = host.querySelectorAll("p");
        expect(lines.length).toBe(3);
        expect(lines[2].textContent?.trim()).toBe("3 Three");
        const second = [
          { limit: 2, nums: [2], texts: ["Even"] },
          { limit: 1, nums: [1], texts: ["One"] }
        ];
        fixture.componentRef.setInput("outputValues", second);
        fixture.detectChanges();
        const headings = host.querySelectorAll("h4");
        expect(headings.length).toBe(2);
        lines = host.querySelectorAll("p");
        expect(lines.length).toBe(3);
        expect(headings[0].textContent?.trim()).toBe("Group 1");
        expect(headings[1].textContent?.trim()).toBe("Group 2");
      });
      it("renders nothing when input is empty", () => {
        fixture.componentRef.setInput("outputValues", []);
        fixture.detectChanges();
        expect(host.querySelectorAll("h4").length).toBe(0);
        expect(host.querySelectorAll("p").length).toBe(0);
      });
    });
  }
});
export default require_text_count_spec();
//# sourceMappingURL=spec-app-components-text-count-text-count.spec.js.map
