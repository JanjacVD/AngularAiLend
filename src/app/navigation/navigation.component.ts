import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  buttons = [
    {
      title: 'Market',
      image: '../assets/img/market.svg',
      imageActive: '../assets/img/market-active.svg',
      notify: false,
      route: '/',
    },
    {
      title: 'My Loans',
      image: '../assets/img/loans.svg',
      imageActive: '../assets/img/loans-active.svg',
      notify: false,
      route: '/loans',
    },
    {
      title: 'Buy with AiLend',
      image: '../assets/img/buy.svg',
      imageActive: '../assets/img/buy-active.svg',
      notify: true,
      route: '/buy',
    },
    {
      title: 'News',
      image: '../assets/img/news.svg',
      imageActive: '../assets/img/news-active.svg',
      notify: true,
      route: '/news',
    },
    {
      title: 'Account',
      image: '../assets/img/account.svg',
      imageActive: '../assets/img/account-active.svg',
      notify: true,
      route: '/account',
    },
  ];
  oldScroll = 0;
  newScroll = 0;
  hideNav = false;
  @HostListener('window:scroll') onScroll(e: Event): void {
    this.newScroll = window.pageYOffset;
    if (this.oldScroll < this.newScroll) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
    this.oldScroll = this.newScroll;
    return;
  }
}
