import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { CustomBoardComponent } from './custom-board.component';

export const CUSTOM_BOARD_ROUTE: Route = {
  path: 'custom-board',
  component: CustomBoardComponent,
  data: {
    authorities: [],
    pageTitle: 'custom-board.title'
  },
  canActivate: [UserRouteAccessService]
};
