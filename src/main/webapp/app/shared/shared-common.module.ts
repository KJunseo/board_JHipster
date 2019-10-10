import { NgModule } from '@angular/core';

import { BoardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [BoardSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [BoardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BoardSharedCommonModule {}
