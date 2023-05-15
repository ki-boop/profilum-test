import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, from, observeOn } from 'rxjs';
import {
  IPaginationResponse,
  LazyLoadingSwitcher,
  RequestParams,
} from 'src/app/models/utils';

export interface ITableColumn<T> {
  field: keyof T;
  header: string;
}

export type ITableRow<T extends Object> = T;

export interface ItableConfig<T extends Object> {
  columns?: ITableColumn<T>[];
  data: ITableRow<T>[];
  fetchData?: (params?: RequestParams) => Observable<IPaginationResponse<T>>;
}

@Component({
  selector: 'app-table[config]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T extends Object> implements OnInit {
  @Input() config: ItableConfig<T> = { data: [], columns: [] };
  @Input() paginated: boolean = false;

  state: LazyLoadingSwitcher = 'pagination';
  counterRecords: number = 1;
  loading: boolean = false;

  private params: RequestParams = { page: 1 };

  @ViewChild('tableElement', { static: false }) public uiElement:
    | ElementRef
    | undefined;

  ngOnInit(): void {
    this.loadData();
  }

  // IF COLUMNS NOT PRESENTED
  fetchColumns() {
    if (this.config.columns) return;

    this.config.columns = Object.keys(this.config.data[0]).map((key) => {
      return {
        field: key as keyof (typeof this.config.data)[0],
        header: key,
      };
    });
  }

  fetchPaginated(page: number) {
    this.config.data = [];
    this.params.page = page;
    this.loadData();
  }

  private loadData() {
    if (!this.config.fetchData) return;

    this.loading = true;
    this.config
      .fetchData(this.params)
      .subscribe((res) => {
        this.config.data = res.results;
        this.counterRecords = res.count;
        this.fetchColumns();
      })
      .add(() => (this.loading = false));
  }

  private scrollLoadData() {
    if (!this.config.fetchData || this.loading) return;

    this.loading = true;
    return this.config
      .fetchData(this.params)
      .subscribe((res) => {
        this.config.data.push(...res.results);
      })
      .add(() => (this.loading = false));
  }

  changeState(state: LazyLoadingSwitcher) {
    this.state = state;
    this.params = { page: 1 };
    this.config.data = [];

    this.loadData();
  }

  search(value: string) {
    console.log(value);

    this.params = {
      search: value,
    };

    this.loadData();
  }

  clearSearchRow() {
    this.search('');
  }

  get isPagination(): boolean {
    return this.state === 'pagination';
  }

  get isNothingFound(): boolean {
    return !this.config.data.length;
  }

  get searchString(): string {
    return this.params.search || '';
  }

  onScrollData(event: any) {
    const nativeElement = this.uiElement?.nativeElement;
    if (
      nativeElement.clientHeight + Math.round(nativeElement.scrollTop) ===
        nativeElement.scrollHeight &&
      this.params.page !== Math.ceil(this.counterRecords / 10)
    ) {
      if (!this.params.page) this.params.page = 1;
      this.params.page++;
      this.scrollLoadData();
    }
  }
}
