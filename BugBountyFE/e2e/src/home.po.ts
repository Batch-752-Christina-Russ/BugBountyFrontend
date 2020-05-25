import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  navigateToHome(): Promise<unknown> {
    return browser.get('http://localhost:4200/home')as Promise<unknown>;
  }
  navigateToLogin(): Promise<unknown> {
      return browser.get('http://localhost:4200/') as Promise<unknown>;
  }
  
  getLeaderBoard(){
      return element(by.tagName('app-leaderboard'));
  }

  getOpenList(){
      return element(by.id('openbugsdiv'));
  }
}