import { Component, OnInit } from '@angular/core';
import { NftsService } from '../services/nfts.service';
import { Nfts, NftDetail } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  arrayNfts: Nfts[] = [];
  arrayFilterNfts: Nfts[] = [];
  showFilter: boolean = false;
  constructor(private nftsService:NftsService, private navCtrl: NavController, private alertCtrl:AlertController) {}

  ngOnInit() {
    this.nftsService.getNfts().subscribe(nftsResponse =>{
      console.log(nftsResponse)
      this.arrayNfts=nftsResponse.slice(0, 15);
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

  async presentAlert() {    
    const alert = await this.alertCtrl.create({
      header: 'ERROR 404',
      subHeader:'Not found',
      message: 'The NFT could not be found, please try again.',
      buttons: ['OK']
    });
    await alert.present();
  
  }

  search(event: any) {
    const searchTerm = event.detail.value.toLowerCase(); // Convertir la búsqueda a minúsculas
    
    this.nftsService.getNftDetail(searchTerm).subscribe((searchResponse) => {
        this.navCtrl.navigateForward('/tabs/tab2', {
          queryParams: {
            detail: JSON.stringify(searchResponse)
          }
        });
      },
      (error) => {
        this.presentAlert();
      }
    );
  }

  /* search(event: any) {
    this.nftsService.getNftDetail(event.detail.value).subscribe(searchResponse => {
      if (Array.isArray(searchResponse) && searchResponse.length === 0) {
        this.presentAlert();
      } else {
        this.navCtrl.navigateForward('/tabs/tab2', {
          queryParams: {
            detail: JSON.stringify(searchResponse)
          }
        });
      }
    });
  } */
  

  filterNfts(event:any) {
    const selectedValue = event.detail.value;
    this.arrayFilterNfts = this.arrayNfts.filter(n => n.asset_platform_id === selectedValue);
    this.showFilter = true;
    console.log(this.arrayFilterNfts);

  }
}
