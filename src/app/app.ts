import { Component, inject } from '@angular/core';
import { TextCountComponent } from './components/text-count/text-count';
import { TextCount } from './interfaces/text-count.interface';
import { HttpService } from './services/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextCountComponent],
  template: '<app-text-count [outputValues]="dataSets"></app-text-count>',
})
export class App {
  private dataSvc = inject(HttpService);

  dataSets: TextCount[] = [];

  ngOnInit(): void {
    this.dataSvc.getData().subscribe((data) => (this.dataSets = data));
  }
}
