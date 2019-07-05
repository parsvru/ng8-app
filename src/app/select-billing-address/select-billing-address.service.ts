import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectBillingAddressService {

  constructor(private http: HttpClient) { }

  public getbillingaddresses(): Observable<any> {
    const url = 'https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json';
    return this.http.get(url);
 }

}
