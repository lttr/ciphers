import { Component, OnDestroy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'me-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  private isHandset = false;
  private handsetSub: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  closeIfHandset() {
    if (this.isHandset) {
      this.sidenav.close();
    }
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this.handsetSub = this.isHandset$.subscribe((x) => {
      this.isHandset = x;
    });
  }

  ngOnDestroy(): void {
    this.handsetSub.unsubscribe();
  }
}
