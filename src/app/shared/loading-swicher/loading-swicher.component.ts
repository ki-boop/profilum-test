import { Component, Input } from '@angular/core';
import { LazyLoadingSwitcher } from 'src/app/models/utils';

@Component({
  selector: 'app-loading-switcher',
  templateUrl: './loading-switcher.component.html',
  styleUrls: ['./loading-switcher.component.scss'],
})
export class LoadingSwitcherComponent {
  @Input() state: LazyLoadingSwitcher = 'pagination';
}
