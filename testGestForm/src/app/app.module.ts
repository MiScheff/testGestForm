import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FunctionalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
