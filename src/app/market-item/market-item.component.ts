import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketService } from '../market.service';
import { BalanceComponent } from '../balance/balance.component';
import { ItemComponent } from '../item/item.component';
interface MarketItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

@Component({
  selector: 'app-market-item',
  templateUrl: './market-item.component.html',
  styleUrls: ['./market-item.component.scss'],
})
export class MarketItemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private marketService: MarketService,
    public router: Router
  ) {}
   

  //Usueally we'd have market images inside of marketItem object as a property, but this is easier to work without setting a custom backend or fake json db
  marketItemImages = [
    {
      thumbnail: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
      image: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
    },
    {
      thumbnail: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
      image: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
    },
    {
      thumbnail: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
      image: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    },
    {
      thumbnail: 'https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w',
      image: 'https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w',
    },
    {
      thumbnail: 'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo',
      image: 'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo',
    },
    {
      thumbnail: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
      image: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
    },
    {
      thumbnail: 'https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY',
      image: 'https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY',
    },
    {
      thumbnail: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
      image: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    },
  ];
  activeImg: string = '';
  marketItem: MarketItem | null = null;
  id: string | null = null;
  similarMarket: MarketItem[] | null = null;
  orderPlaced: boolean = false;
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.id = this.route.snapshot.paramMap.get('id');
    this.marketService.getSingleItem(this.id).subscribe((res) => {
      this.marketItem = res;
      this.activeImg = res.image;
    });
    this.marketService.getItems().subscribe((res) => {
      this.similarMarket = res.filter((item) => item.category === this.marketItem?.category)
    })
  }
  changeActiveImage(image: string): void{
    this.activeImg=image
  }
  placeOrder(item:MarketItem){
    this.orderPlaced = true;
    setTimeout(() => {
      this.orderPlaced = false;
    }, 4050)
    console.log(item);
  }

}
