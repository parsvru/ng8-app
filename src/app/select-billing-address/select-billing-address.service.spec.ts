import { TestBed, fakeAsync } from '@angular/core/testing';
import { SelectBillingAddressService } from './select-billing-address.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SelectBillingAddressService', () => {
  let service: SelectBillingAddressService;
  let httpMock: HttpTestingController;
  beforeEach(() => {    
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [SelectBillingAddressService]
    });

    service = TestBed.get(SelectBillingAddressService); 
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created service SelectBillingAddressService', () => { 
    expect(service).toBeTruthy();
  });

 
  it('getbillingaddresses() should http GET object', () => { 
    service.getbillingaddresses().subscribe((res) => {
      expect(res.length).toBeGreaterThan(0);
    });

    const req = httpMock.expectOne('https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json');
    expect(req.request.method).toEqual("GET");
    
    httpMock.verify();
  });   
});
