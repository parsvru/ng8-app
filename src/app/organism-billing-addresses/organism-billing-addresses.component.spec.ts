import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganismBillingAddressesComponent } from './organism-billing-addresses.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrganismBillingAddressesComponent', () => {
  let component: OrganismBillingAddressesComponent;
  let fixture: ComponentFixture<OrganismBillingAddressesComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismBillingAddressesComponent ],
      imports: [
        HttpClientTestingModule,
      ],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(OrganismBillingAddressesComponent);
      component = fixture.componentInstance; 
      });
  }));

  it('should create the app - SelectBillingAddressComponent', () => {        
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

});
