import { NgModule } from '@angular/core';
import { BaseLayoutComponent } from './layout/base-layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
})
export class CoreModule {}
