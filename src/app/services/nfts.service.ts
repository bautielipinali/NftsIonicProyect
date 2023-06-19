import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../interfaces/interfaces';

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

  getCoins(){
    return this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/list',this.options)
  }
}
