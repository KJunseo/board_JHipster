import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-custom-board',
  templateUrl: './custom-board.component.html',
  styleUrls: ['custom-board.component.scss']
})
export class CustomBoardComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'CustomBoardComponent message';
  }

  ngOnInit() {}
}
