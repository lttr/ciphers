import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { morse, removeDiacritics, pipe } from '@lttr/ciphers';
import { combineLatest, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CiphersFacade } from '../services/ciphers.facade';

@Component({
  selector: 'me-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnChanges {
  private _diacritics = true;
  private _input = '';

  encryptedText$: Observable<string>;
  error: Error | undefined;

  get diacritics() {
    return this._diacritics;
  }

  set diacritics(value) {
    this.ciphersFacade.removeDiacritics$.next(value);
  }

  get input() {
    return this._input;
  }

  set input(text) {
    this.ciphersFacade.text$.next(text);
  }

  constructor(private ciphersFacade: CiphersFacade) {
    this.encryptedText$ = combineLatest([
      this.ciphersFacade.text$,
      this.ciphersFacade.removeDiacritics$,
    ]).pipe(
      tap((data) => {
        console.log(data);
        this.error = undefined;
      }),
      map((data) => {
        return {
          text: data[0],
          diacritics: data[1],
        };
      }),
      map(({ text, diacritics }) => {
        const functions = [];
        if (diacritics) {
          functions.push(removeDiacritics);
        }
        functions.push(morse);
        let result = '';
        try {
          result = pipe(text, ...functions);
        } catch (error) {
          this.error = error;
        }
        return result;
      }),
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
