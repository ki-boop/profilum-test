import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonModel } from 'src/app/models/person.model';
import { RequestParams } from 'src/app/models/utils';
@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  constructor(private http: HttpClient) {}
  getPosts(params?: RequestParams) {
    return this.http.get<{ results: PersonModel[] }>(
      `https://swapi.dev/api/people`,
      {
        params: {
          ...params,
        },
      }
    );
  }
}
