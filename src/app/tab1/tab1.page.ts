import { Component, OnInit } from '@angular/core';
import { NftsService } from '../services/nfts.service';
import { Coin } from '../interfaces/interfaces';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  arrayCoins: Coin[] = [];
  constructor(private coinsService:NftsService) {}

  ngOnInit() {
    this.coinsService.getCoins().subscribe(coinsResponse =>{
      console.log(coinsResponse)
      this.arrayCoins=coinsResponse
    })
  }

}
