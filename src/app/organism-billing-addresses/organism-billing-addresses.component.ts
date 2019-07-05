import { Component, OnInit } from '@angular/core';
import { OrganismBillingAddressesService } from './organism-billing-addresses.service';

@Component({
  selector: 'app-organism-billing-addresses',
  templateUrl: './organism-billing-addresses.component.html',
  styleUrls: ['./organism-billing-addresses.component.css']
})
export class OrganismBillingAddressesComponent implements OnInit {
  address: any;
  constructor(private organismBillingAddressesService: OrganismBillingAddressesService) { }

ngOnInit() {
      this.organismBillingAddressesService.getaddresses()
          .subscribe(response =>{ 
              this.address = response.data;
      },
      err => {
        console.error(err);
    });

}

}
