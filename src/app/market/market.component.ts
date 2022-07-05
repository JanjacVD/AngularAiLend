import { Component, OnInit } from '@angular/core';
import { BalanceComponent } from '../balance/balance.component';
import { MarketService } from '../market.service';

interface MarketItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  categories: string[] = [];
  market: MarketItem[] = [];
  activeCategory: string = '';
  marketLoaded = false;
  displayedMarket: MarketItem[] = [];
  constructor(private marketService: MarketService) {}
  changeCategory(cat: string) {
    this.activeCategory = cat;
    this.displayedMarket = this.market.filter(m => {
      return m.category == this.activeCategory;
    });
    return this.marketLoaded = true;
  }
  ngOnInit() {
    this.marketService.getItems().subscribe((data) => {
      this.marketService.getCategories().subscribe((res) => {
        this.categories = res;
        this.changeCategory(this.categories[0]);
      });
      this.market = data;
    });
  }
}
