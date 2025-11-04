import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TextCount } from '../interfaces/text-count.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(): Observable<TextCount[]> {
    return this.http
      .get<{ dataSets: TextCount[] }>('datasets.json')
      .pipe(map((res) => res.dataSets ?? []));
  }
}
