import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { MarketItemComponent } from './market-item/market-item.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  {
    path: '',
    component: MarketComponent,
  },
  {
    path: 'loans',
    component: LoansComponent,
  },
  {
    path:'item/:id',
    component: MarketItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
