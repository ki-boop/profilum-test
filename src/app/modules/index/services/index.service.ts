import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonModel } from 'src/app/models/person.model';
import { RequestParams } from 'src/app/models/utils';
import { IPaginationResponse } from 'src/app/models/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  constructor(private http: HttpClient) {}
  getPosts(
    params?: RequestParams
  ): Observable<IPaginationResponse<PersonModel>> {
    return this.http.get<IPaginationResponse<PersonModel>>(
      `https://swapi.dev/api/people`,
      {
        params: {
          ...params,
        },
      }
    );
  }
}
