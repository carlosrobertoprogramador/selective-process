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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ShowCardsComponent } from './components/comics/list/show-cards/show-cards.component';
import { CheckoutDetailComponent } from './components/checkout/checkout-detail/checkout-detail.component';
import { CheckoutCouponComponent } from './components/checkout/checkout-coupon/checkout-coupon.component';
import { CheckoutDataComponent } from './components/checkout/checkout-data/checkout-data.component';
import { CheckoutValidateComponent } from './components/checkout/checkout-validate/checkout-validate.component';
import { CheckoutFinishedComponent } from './components/checkout/checkout-finished/checkout-finished.component';
import { CheckoutImageComponent } from './components/checkout/checkout-image/checkout-image.component';
import { CheckoutTitleComponent } from './components/checkout/checkout-title/checkout-title.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RegisterDataComponent } from './components/register-data/register-data.component';
import { GenerateComicsRareComponent } from './components/generate-comics-rare/generate-comics-rare.component';
import { HistoryComponent } from './components/history/history.component';
import { CouponsCreateComponent } from './components/coupons/coupons-create/coupons-create.component';
import { CouponsUpdateComponent } from './components/coupons/coupons-update/coupons-update.component';
import { CouponsTemplateFormComponent } from './components/coupons/coupons-template-form/coupons-template-form.component';
import { CouponsComponent } from './components/coupons/coupons.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    MenuComponent,
    CheckoutComponent,
    CheckoutDetailComponent,
    CarrouselComponent,
    ShowCardsComponent,
    CheckoutCouponComponent,
    CheckoutDataComponent,
    CheckoutValidateComponent,
    CheckoutFinishedComponent,
    CheckoutImageComponent,
    CheckoutTitleComponent,
    FavoritesComponent,
    RegisterDataComponent,
    GenerateComicsRareComponent,
    HistoryComponent,
    CouponsCreateComponent,
    CouponsUpdateComponent,
    CouponsComponent,
    CouponsTemplateFormComponent,
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
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatCarouselModule.forRoot()
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule { }
