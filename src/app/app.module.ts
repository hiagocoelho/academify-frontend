import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PanelComponent } from './panel/panel.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NovoalunoComponent } from './dialog/novoaluno/novoaluno.component';
import { HttpClientModule } from '@angular/common/http';
import { EditaralunoComponent } from './editaraluno/editaraluno.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PanelComponent,
    AnalyticsComponent,
    NovoalunoComponent,
    EditaralunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
