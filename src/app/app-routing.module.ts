import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './core/layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BaseLayoutComponent,
        loadChildren: () =>
          import('./modules/index/index.module').then((m) => m.IndexModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
