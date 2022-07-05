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
      notify: false,
      route: '/',
    },
    {
      title: 'My Loans',
      image: '../assets/img/loans.svg',
      notify: false,
      route: '/loans',
    },
    {
      title: 'Buy with AiLend',
      image: '../assets/img/buy.svg',
      notify: true,
      route: '/buy',
    },
    {
      title: 'News',
      image: '../assets/img/news.svg',
      notify: true,
      route: '/news',
    },
    {
      title: 'Account',
      image: '../assets/img/account.svg',
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
    }
    else{
      this.hideNav = false;
    }
    this.oldScroll = this.newScroll
    return;
  }
}
