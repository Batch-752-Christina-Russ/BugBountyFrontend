import { browser, by, element } from 'protractor';

export class ApproveDenyBugPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  navigateToPendingBug(): Promise<unknown> {
    return browser.get('http://localhost:4200/pendingbug')as Promise<unknown>;
  }
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getCard(){
      return element(by.className('card'));
  }

  getMoreButton(){
      return element(by.className('btn-primary'));
  }

  getModalBody(){
      return element(by.className('modal-open'));
  }

  getApproveButton(){
    return element(by.className('btn-success'));
  }

  getDenyButton(){
    return element(by.className('btn-danger'));
  }
}