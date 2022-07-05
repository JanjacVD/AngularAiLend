import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  totalLoans:number = 0
  limit:number = 0
  paid:number = 0
  nextInstallment:number = 0
  percent:string = '60%'
  ngOnInit(): void{
    this.totalLoans = 1231;
    this.limit = 123999;
    this.paid = 12311;
    this.nextInstallment = 100000;
  }

}
