import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoansComponent } from './loans/loans.component';
import { MarketComponent } from './market/market.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { BalanceComponent } from './balance/balance.component';
import { MarketService } from './market.service';
import { HttpClientModule } from '@angular/common/http';
import { MarketItemComponent } from './market-item/market-item.component';
import { ItemComponent } from './item/item.component';
import { SuccesComponent } from './succes/succes.component';


@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
    LoansComponent,
    MarketComponent,
    ShopItemComponent,
    BalanceComponent,
    MarketItemComponent,
    ItemComponent,
    SuccesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
