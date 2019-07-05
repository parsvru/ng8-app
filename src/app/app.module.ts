import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SelectBillingAddressComponent } from './select-billing-address/select-billing-address.component';
import { OrganismBillingAddressesComponent } from './organism-billing-addresses/organism-billing-addresses.component';
import { OrganismBillingAddressesService } from './organism-billing-addresses/organism-billing-addresses.service';
import { SelectBillingAddressService } from './select-billing-address/select-billing-address.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectBillingAddressComponent,
    OrganismBillingAddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OrganismBillingAddressesService, SelectBillingAddressService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
