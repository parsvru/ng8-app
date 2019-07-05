import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectBillingAddressComponent } from './select-billing-address/select-billing-address.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent,
                     SelectBillingAddressComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = TestBed.createComponent(AppComponent).componentInstance; 
     });
  }));

  it('should create the app - AppComponent', () => {   
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the SelectBillingAddressComponent component', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-select-billing-address')).not.toBe(null);
  }));

});
