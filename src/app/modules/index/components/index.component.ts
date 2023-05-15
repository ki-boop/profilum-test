import { Component } from '@angular/core';
import { PersonModel } from 'src/app/models/person.model';
import { ItableConfig } from 'src/app/shared/table/table.component';
import { PersonsService } from '../services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  constructor(private indexService: PersonsService) {}

  config: ItableConfig<PersonModel> = {
    data: [],
    // Select used fields
    // TODO: custom action
    columns: [
      { field: 'name', header: 'Имя' },
      { field: 'gender', header: 'Гендер' },
      { field: 'height', header: 'Рост' },
      { field: 'mass', header: 'Вес' },
      { field: 'hair_color', header: 'Цвет волос' },
      { field: 'skin_color', header: 'Цвет прикида' },
      { field: 'eye_color', header: 'Цвет глаз' },
      { field: 'birth_year', header: 'День рождения' },
      { field: 'gender', header: 'Гендер' },
    ],
    fetchData: (params) => this.indexService.getPosts(params),
  };
}
