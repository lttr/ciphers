import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { FirstComponent } from './first/first.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CiphersFacade } from './services/ciphers.facade';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatSliderModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  exports: [
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [CiphersFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
