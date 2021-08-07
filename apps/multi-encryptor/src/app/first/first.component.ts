import { Component, OnInit } from '@angular/core';
import { ciphers } from '@lttr/ciphers';

@Component({
  selector: 'multi-encryptor-nx-first',
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
