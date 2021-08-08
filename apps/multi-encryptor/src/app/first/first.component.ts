import { Component, OnInit } from '@angular/core';
import { ciphers } from '@lttr/ciphers';

@Component({
  selector: 'me-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  public some = '';

  constructor() {}

  ngOnInit(): void {
    this.some = ciphers();
  }
}
