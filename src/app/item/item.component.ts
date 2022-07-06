import { Component, Input } from '@angular/core';
import { SuccesComponent } from '../succes/succes.component';

interface MarketItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  orderPlaced: boolean = false;
  @Input()
  item!: MarketItem;
  placeOrder(item: MarketItem) {
    //Process the purchace
    this.orderPlaced = true;
    setTimeout(() => {
      this.orderPlaced = false;
    }, 4050)
    console.log(item);
  }
}
