import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() change: EventEmitter<string> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  searchStream$: Subscription | null = null;

  search = this.fb.control('', [Validators.minLength(3)]);

  ngOnInit(): void {
    this.searchStream$ = this.search.valueChanges.subscribe((change) => {
      if (this.search.valid) {
        this.change.emit(change!);
      }
    });
  }

  ngOnDestroy(): void {
    this.searchStream$?.unsubscribe();
  }
}
