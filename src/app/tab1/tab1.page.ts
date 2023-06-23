import { Component, OnInit } from '@angular/core';
import { NftsService } from '../services/nfts.service';
import { Nfts, NftDetail } from '../interfaces/interfaces';
import { NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  arrayNfts: Nfts[] = [];
  constructor(private nftsService:NftsService, private navCtrl: NavController) {}

  ngOnInit() {
    this.nftsService.getNfts().subscribe(nftsResponse =>{
      console.log(nftsResponse)
      this.arrayNfts=nftsResponse.slice(0, 10);
    })
  }

  nftDetail(id: string) {
    this.nftsService.getNftDetail(id).subscribe(detailResponse => {
      this.navCtrl.navigateForward('/tabs/tab2', {
        queryParams: {
          detail: JSON.stringify(detailResponse)
        }
      });
    });
  }

  search(event:any) {
    this.nftsService.getNftDetail(event.detail.value).subscribe(searchResponse => {
      this.navCtrl.navigateForward('/tabs/tab2', {
        queryParams: {
          detail: JSON.stringify(searchResponse)
        }
      });
    });
    // consumir api de busqueda como se hace en tab1
  }
}
