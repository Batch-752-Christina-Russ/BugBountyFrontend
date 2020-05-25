import { browser, by, element } from 'protractor';

export class BugReportFormPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  navigateToLogin(): Promise<unknown> {
    return browser.get('http://localhost:4200/')as Promise<unknown>;
  }
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  navigateToBugReportForm(){
      return browser.get('http://localhost:4200/reportbug');
  }
  getAppNameInput(){
      return element(by.id('appname'));
  }
  getDescriptionInput(){
      return element(by.id('description'));
  }
  getStepsInput(){
      return element(by.id('steps'));
  }
  getSeverityInput(){
      return element(by.id('severity'));
  }
  getSubmitButton(){
      return element(by.className('btn-primary'));
  }
  getErrorMessage(){
      return element(by.id('submit-failed'));
  }
}