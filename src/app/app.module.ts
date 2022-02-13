import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MenuComponent } from './components/menu/menu.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/comics/list/list.component';
import { DetailComponent } from './components/comics/detail/detail.component';
import { CarrouselComponent } from './components/comics/list/carrousel/carrousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { ShowCardsComponent } from './components/comics/list/show-cards/show-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    MenuComponent,
    CheckoutComponent,
    CarrouselComponent,
    ShowCardsComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatNativeDateModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatGridListModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDividerModule,
    MatCarouselModule.forRoot()
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule { }
