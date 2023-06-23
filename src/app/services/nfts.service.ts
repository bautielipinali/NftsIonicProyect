import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nfts, NftDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NftsService {

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  };

  constructor(private http:HttpClient) {
    /* this.init(); */
  }

  getNfts(){
    return this.http.get<Nfts[]>('https://api.coingecko.com/api/v3/nfts/list?per_page=100&page=1',this.options)
  }

  getNftDetail(id:string){
    return this.http.get<NftDetail>(`https://api.coingecko.com/api/v3/nfts/${id}`,this.options)
  }
}
