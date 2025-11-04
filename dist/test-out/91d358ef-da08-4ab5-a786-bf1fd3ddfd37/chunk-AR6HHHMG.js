import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-ZDNMNY7Y.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/components/text-count/text-count.html
var text_count_default;
var init_text_count = __esm({
  "angular:jit:template:src/app/components/text-count/text-count.html"() {
    text_count_default = "@for (group of results; track $index; let gi = $index) {\n<div>\n  <h4>Group {{ gi + 1 }}</h4>\n  @for (line of group; track $index; let li = $index) {\n  <p>{{ li + 1 }} {{ line }}</p>\n  }\n</div>\n}\n";
  }
});

// src/app/components/text-count/text-count.ts
var TextCountComponent;
var init_text_count2 = __esm({
  "src/app/components/text-count/text-count.ts"() {
    "use strict";
    init_tslib_es6();
    init_text_count();
    init_core();
    TextCountComponent = class TextCountComponent2 {
      outputValues = [];
      results = [];
      ngOnChanges(changes) {
        if ("outputValues" in changes) {
          this.results = this.outputValues.map((v) => this.compute(v));
        }
      }
      compute(values) {
        const lines = [];
        for (let i = 1; i <= values.limit; i++) {
          const matched = [];
          values.nums.forEach((num, idx) => {
            if (num && i % num === 0)
              matched.push(values.texts[idx]);
          });
          lines.push(matched.length ? matched.join(" ") : i.toString());
        }
        return lines;
      }
      static propDecorators = {
        outputValues: [{ type: Input }]
      };
    };
    TextCountComponent = __decorate([
      Component({
        selector: "app-text-count",
        template: text_count_default
      })
    ], TextCountComponent);
  }
});

export {
  TextCountComponent,
  init_text_count2 as init_text_count
};
//# sourceMappingURL=chunk-AR6HHHMG.js.map
