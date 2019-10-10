import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BoardSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BoardSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BoardSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoardSharedModule {
  static forRoot() {
    return {
      ngModule: BoardSharedModule
    };
  }
}
