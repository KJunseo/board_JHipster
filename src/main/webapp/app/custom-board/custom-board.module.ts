import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BoardSharedModule } from '../shared';

import { CUSTOM_BOARD_ROUTE, CustomBoardComponent } from './';

@NgModule({
  imports: [BoardSharedModule, RouterModule.forRoot([CUSTOM_BOARD_ROUTE], { useHash: true })],
  declarations: [CustomBoardComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoardAppCustomBoardModule {}
