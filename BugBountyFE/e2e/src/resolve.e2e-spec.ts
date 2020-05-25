import { browser, logging } from 'protractor';
import { ResolvePage } from './resolve.po';

describe('Resolve page', () => {
  let page: ResolvePage;

  beforeAll(() =>{
    page = new ResolvePage();
    browser.executeScript('window.sessionStorage.clear();');
    page.navigateToLogin();
    browser.executeScript('window.sessionStorage.setItem("Role","admin");');
  })
  beforeEach(() => {
    page = new ResolvePage();
    page.navigateToResolve();
  });

  it('should display a form', () =>{
      expect(page.getForm().isPresent()).toBeTruthy();
  });

  it('should have a button for submitting', () => {
      expect(page.getButton().isPresent()).toBeTruthy();
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
