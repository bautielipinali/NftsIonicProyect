import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NftDetail } from '../interfaces/interfaces'; // Importa NftDetail desde el archivo correspondiente


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private route: ActivatedRoute) {}

  detail: NftDetail = {
    id: '',
    contract_address: '',
    asset_platform_id: '',
    name: '',
    symbol: '',
    image: {
      small: ''
    },
    description: ''
  };
  showDetail: boolean = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['detail']) {
        this.detail = JSON.parse(params['detail']) as NftDetail;
        this.showDetail = true;
      }
    });
    console.log( this.route, 'QUERYPARAMS')
  }
}
