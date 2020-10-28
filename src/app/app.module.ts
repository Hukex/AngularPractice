import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { AlertComponent } from './components/alert/alert.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { CompaniasComponent } from './components/companias/companias.component';
import { FormComponent as JuegosFormComponent } from './components/juegos/form.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes = [
  { path: '', redirectTo: '/juegos', pathMatch: 'full' },
  { path: 'juegos', component: JuegosComponent },
  { path: 'juegos/form', component: JuegosFormComponent },
  { path: 'companias', component: CompaniasComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JuegosComponent,
    AlertComponent,
    CompaniasComponent,
    JuegosFormComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, MatProgressSpinnerModule, RouterModule.forRoot(ROUTES), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
