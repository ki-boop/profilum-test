import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestParams } from 'src/app/models/utils';
export interface ITableColumn<T> {
  field: string;
  header: string;
}

export type ITableRow<T> = T & {
  [id: string]: any;
};

export interface ItableConfig<T> {
  columns: ITableColumn<T>[];
  data: ITableRow<T>[];
  fetchData?: (params?: RequestParams) => Observable<{ results: T[] }>;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit {
  @Input() config: ItableConfig<T> = { data: [], columns: [] };
  @Input() loading: boolean = false;
  @Input() paginated: boolean = false;

  private params: RequestParams = {
    page: 1,
  };

  private counterOfPage: number = 1;

  ngOnInit(): void {
    this.loadData();
  }

  fetchPaginated(page: number) {
    this.params.page = page;
    this.loadData();
  }

  private loadData() {
    if (!this.config.fetchData) return;

    this.loading = true;
    this.config
      .fetchData(this.params)
      .subscribe((res) => {
        this.config.data = res.results as ITableRow<T>[];
      })
      .add(() => (this.loading = false));
  }

  search(value: string) {
    this.params = {
      search: value,
    };

    this.loadData();
  }
}
