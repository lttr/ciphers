import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CiphersFacade {
  text$ = new Subject<string>();
  removeDiacritics$ = new BehaviorSubject<boolean>(true);
}
