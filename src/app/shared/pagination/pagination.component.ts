import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable, Subscription, skip } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  @Input() totalRecords: number = 121;
  @Output() changePage: EventEmitter<number> = new EventEmitter();
  currentPage: BehaviorSubject<number> = new BehaviorSubject(1);
  currentPageStream$: Subscription | null = null;

  ngOnInit(): void {
    this.currentPageStream$ = this.currentPage
      .pipe(skip(1))
      .subscribe((res) => {
        this.changePage.emit(res);
      });
  }

  maxPrev() {
    if (this.isLastPrev) return;

    this.currentPage.next(
      this.currentPage.value - 10 > 0 ? this.currentPage.value - 10 : 1
    );
  }

  prev() {
    if (this.isLastPrev) return;

    this.currentPage.next(
      this.currentPage.value - 1 > 0 ? this.currentPage.value - 1 : 1
    );
  }

  next() {
    if (this.isLastNext) return;

    this.currentPage.next(
      this.currentPage.value + 1 < this.totalPages
        ? this.currentPage.value + 1
        : this.totalPages
    );
  }

  maxNext() {
    if (this.isLastNext) return;

    this.currentPage.next(
      this.currentPage.value + 10 < this.totalPages
        ? this.currentPage.value + 10
        : this.totalPages
    );
  }

  get isLastPrev() {
    return this.currentPage.value <= 1;
  }

  get isLastNext() {
    return this.currentPage.value >= this.totalPages;
  }

  get totalPages() {
    return Math.ceil(this.totalRecords / 10);
  }

  ngOnDestroy(): void {
    this.currentPageStream$?.unsubscribe();
  }
}
