import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadingSwitcher } from 'src/app/models/utils';

@Component({
  selector: 'app-loading-switcher',
  templateUrl: './loading-switcher.component.html',
  styleUrls: ['./loading-switcher.component.scss'],
})
export class LoadingSwitcherComponent {
  @Input() state: LazyLoadingSwitcher = 'pagination';
  @Input() loading: boolean = false;
  @Output() stateChange: EventEmitter<LazyLoadingSwitcher> = new EventEmitter();

  changes(state: LazyLoadingSwitcher) {
    if (this.loading) return;
    this.stateChange.emit(state);
  }
}
