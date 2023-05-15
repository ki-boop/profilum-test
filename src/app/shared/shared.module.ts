import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import { LoadingSwitcherComponent } from './loading-swicher/loading-switcher.component';

@NgModule({
  declarations: [
    TableComponent,
    PaginationComponent,
    SearchInputComponent,
    LoadingSwitcherComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TableComponent],
})
export class SharedModule {}
