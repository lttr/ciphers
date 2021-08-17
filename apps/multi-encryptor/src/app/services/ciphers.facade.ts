import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CiphersFacade {
  text$ = new Subject<string>();
}
