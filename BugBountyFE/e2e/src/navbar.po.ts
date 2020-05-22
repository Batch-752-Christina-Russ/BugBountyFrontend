import { browser, by, element } from 'protractor';

export class NavbarPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  navigateToPending(): Promise<unknown> {
    return browser.get('http://localhost:4200/pendingbug')as Promise<unknown>;
  }
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getResolve(){
      return element(by.id('resolvenav'));
  }

  getPending(){
      return element(by.id('pendingnav'));
  }

  getReport(){
      return element(by.id('reportnav'));
  }

  getLogout(){
      return element(by.id('logoutnav'));
  }

  getHomeButton(){
      return element(by.id('homenav'));
  }
  
  
}