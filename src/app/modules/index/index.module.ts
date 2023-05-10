import { NgModule } from '@angular/core';
import { IndexComponent } from './components/index.component';
import { IndexRoutingModule } from './index.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PersonsService } from './services/index.service';

@NgModule({
  declarations: [IndexComponent],
  imports: [HttpClientModule, IndexRoutingModule, SharedModule],
  providers: [PersonsService],
})
export class IndexModule {}
