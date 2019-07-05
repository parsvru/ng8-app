import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganismBillingAddressesService {

  constructor(private http: HttpClient) { }

  
  public getaddresses(): Observable<any> {
    const url = 'https://rawgit.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json';
    return this.http.get(url);
 }

}
