import { async, ComponentFixture, TestBed, fakeAsync,  } from '@angular/core/testing';
import { SelectBillingAddressComponent } from './select-billing-address.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SelectBillingAddressService } from './select-billing-address.service';
import { OrganismBillingAddressesComponent } from '../organism-billing-addresses/organism-billing-addresses.component';
import { AppComponent } from '../app.component';


describe('SelectBillingAddressComponent', () => {
  let component: SelectBillingAddressComponent;
  let fixture: ComponentFixture<SelectBillingAddressComponent>;
  let service: SelectBillingAddressService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBillingAddressComponent, OrganismBillingAddressesComponent, AppComponent],
      imports: [
        HttpClientTestingModule,
      ],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SelectBillingAddressComponent);
      component = TestBed.createComponent(SelectBillingAddressComponent).componentInstance;
      service = TestBed.get(SelectBillingAddressService);      
     });   
  }));

  it('should create the app - SelectBillingAddressComponent', () => {        
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });


    it('should have the OrganismBillingAddressesComponent component', async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('app-organism-billing-addresses')).not.toBe(null);
    }));


});
