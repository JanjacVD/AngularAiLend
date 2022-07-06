import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface MarketItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}
@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
  getItems() {
    //Fetch the data and return it
    return this.http.get<MarketItem[]>('https://fakestoreapi.com/products');
  }
  getSingleItem(id: any) {
    //Usually we'd work with slugs for beeter user expirience
    return this.http.get<MarketItem>('https://fakestoreapi.com/products/'+id);
  }
}
