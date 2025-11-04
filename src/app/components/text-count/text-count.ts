import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TextCount } from '../../interfaces/text-count.interface';

@Component({
  selector: 'app-text-count',
  templateUrl: './text-count.html',
})
export class TextCountComponent implements OnChanges {
  @Input() outputValues: TextCount[] = [];
  results: string[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if ('outputValues' in changes) {
      this.results = this.outputValues.map((v) => this.compute(v));
    }
  }

  private compute(values: TextCount): string[] {
    const lines: string[] = [];
    for (let i = 1; i <= values.limit; i++) {
      const matched: string[] = [];
      values.nums.forEach((num, idx) => {
        if (num && i % num === 0) matched.push(values.texts[idx]);
      });
      lines.push(matched.length ? matched.join(' ') : i.toString());
    }
    return lines;
  }
}
