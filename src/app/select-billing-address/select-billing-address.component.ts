import { Component, OnInit } from '@angular/core';
import { SelectBillingAddressService } from './select-billing-address.service';

@Component({
  selector: 'app-select-billing-address',
  templateUrl: './select-billing-address.component.html',
  styleUrls: ['./select-billing-address.component.css']
})
export class SelectBillingAddressComponent implements OnInit {
 global: any;
 content: any;
 addnewaddress: any;

  constructor(private selectbillingaddressService: SelectBillingAddressService) { }

ngOnInit() {
      this.selectbillingaddressService.getbillingaddresses()
        .subscribe(response => {
            this.global = response.global;
            this.content = response.content;
            this.addnewaddress = this.content.components.add_new_address;
      },
      err => {
        console.error(err);
    });

}

}
