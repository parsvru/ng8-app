import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrganismBillingAddressesService } from './organism-billing-addresses.service';


describe('OrganismBillingAddressesService', () => {
  let service: OrganismBillingAddressesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [OrganismBillingAddressesService]
    });

    service = TestBed.get(OrganismBillingAddressesService); 
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created service OrganismBillingAddressesService', () => { 
    expect(service).toBeTruthy();
  });

 
  it('getaddresses() should http GET object', () => { 
    service.getaddresses().subscribe((res) => {
      expect(res.data.length).toBeGreaterThan(0);
      expect(res.data.length).toBe(2);
     
    });

    const req = httpMock.expectOne('https://rawgit.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json')
    expect(req.request.method).toEqual("GET");
        
    httpMock.verify();
  });  

  
});
