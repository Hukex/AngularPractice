import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { JuegosComponent } from './components/juegos/juegos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { RouterModule, Routes } from '@angular/router';
import { CompaniasComponent } from './components/companias/companias.component';
import { FormComponent as JuegosFormComponent } from './components/juegos/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/dialog/confirm-dialog/confirm-dialog.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/juegos', pathMatch: 'full' },
  { path: 'juegos', component: JuegosComponent },
  { path: 'juegos/form', component: JuegosFormComponent },
  { path: 'juegos/form/:id', component: JuegosFormComponent },
  { path: 'companias', component: CompaniasComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JuegosComponent,
    CompaniasComponent,
    JuegosFormComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  entryComponents:[ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
