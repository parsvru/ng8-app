import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('h1 should display Smart Check-out', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Smart Check-out');
  });

  it('Verify the  button present', function() {
    expect(element(by.css('button')).isPresent()).toBe(true);
  });

  it('h2 should display Select Billing Address', () => {
    var h2 = element(by.css('h2'));
    expect(h2.getText()).toEqual('SELECT BILLING ADDRESS');
  });

  it('footer should display copyright text', () => {
    var h2 = element(by.css('.footer'));
    expect(h2.getText()).toEqual('© 2018 - Hotel Beacons GmbH');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
