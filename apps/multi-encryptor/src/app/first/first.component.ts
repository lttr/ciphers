import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { morse } from '@lttr/ciphers';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CiphersFacade } from '../services/ciphers.facade';

@Component({
  selector: 'me-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnChanges {
  encryptedText$: Observable<string>;

  error: Error | undefined;

  private _input = '';

  get input() {
    return this._input;
  }

  set input(text) {
    this.ciphersFacade.text$.next(text);
  }

  constructor(private ciphersFacade: CiphersFacade) {
    this.encryptedText$ = this.ciphersFacade.text$.pipe(
      tap(() => {
        this.error = undefined;
      }),
      map((text) => morse(text)),
      catchError((error, caught) => {
        this.error = error;
        return caught;
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
