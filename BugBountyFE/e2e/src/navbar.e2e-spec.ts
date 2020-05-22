import { browser, logging } from 'protractor';
import { NavbarPage } from './navbar.po';

describe('Navbar element', () => {
  let page: NavbarPage;

  beforeAll(() => {
    page = new NavbarPage();
    page.navigateTo();
    browser.executeScript('window.sessionStorage.setItem("Role","admin");');
  })
  beforeEach(() => {
    page = new NavbarPage();
  });

  it('should display 0 buttons when role is null', () =>{
    browser.executeScript('window.sessionStorage.clear();');
    page.navigateToPending();
    expect(page.getResolve().isPresent()).toBeFalsy();
    expect(page.getReport().isPresent()).toBeFalsy();
    expect(page.getPending().isPresent()).toBeFalsy();
    expect(page.getLogout().isPresent()).toBeFalsy();
  })

  it('should display 2 buttons when role is user', () =>{
     browser.executeScript('window.sessionStorage.clear();');
     browser.executeScript('window.sessionStorage.setItem("Role","user");');
     page.navigateToPending();
     expect(page.getResolve().isPresent()).toBeFalsy();
     expect(page.getReport().isPresent()).toBeTruthy();
     expect(page.getPending().isPresent()).toBeFalsy();
     expect(page.getLogout().isPresent()).toBeTruthy();
  })

  it('should display 4 buttons when role is admin', () =>{
    browser.executeScript('window.sessionStorage.setItem("Role","admin");');
    page.navigateToPending();
    expect(page.getResolve().isPresent()).toBeTruthy();
    expect(page.getReport().isPresent()).toBeTruthy();
    expect(page.getPending().isPresent()).toBeTruthy();
    expect(page.getLogout().isPresent()).toBeTruthy();
 })

 it('should display the home button', ()=>{
     expect(page.getHomeButton().isPresent()).toBeTruthy();
 })


  afterEach(async () => {
    browser.executeScript('window.sessionStorage.clear();');
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});