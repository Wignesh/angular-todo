import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-for',
  templateUrl: './custom-for.component.html',
  styleUrls: ['./custom-for.component.scss'],
})
export class CustomForComponent implements OnInit {
  items = ['apple', 'orange'];

  constructor() {
    setTimeout(() => {
      this.items = [...this.items, 'banana'];
    }, 2000);
  }

  ngOnInit(): void {}
}
