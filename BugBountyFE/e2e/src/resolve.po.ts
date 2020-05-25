import { browser, by, element } from 'protractor';

export class ResolvePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  navigateToLogin(): Promise<unknown> {
    return browser.get('http://localhost:4200/')as Promise<unknown>;
  }
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  navigateToResolve(){
      return browser.get('http://localhost:4200/resolvebug');
  }

  getForm(){
    return element(by.tagName('form'));
  }

  getButton(){
      return element(by.className('btn-primary'));
  }
}