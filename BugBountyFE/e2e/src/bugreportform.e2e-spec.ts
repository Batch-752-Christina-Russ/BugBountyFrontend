import { browser, logging } from 'protractor';
import { BugReportFormPage } from './bugreportform.po';

describe('Bug Report Form page', () => {
  let page: BugReportFormPage;

  beforeAll(() =>{
    page = new BugReportFormPage();
    browser.executeScript('window.sessionStorage.clear();');
    page.navigateToLogin();
    browser.executeScript('window.sessionStorage.setItem("Role","admin");');
  })
  beforeEach(() => {
    page = new BugReportFormPage();
  });

  it('should have inputs for a bug report',() => {
    page.navigateToBugReportForm();
    expect(page.getAppNameInput()).toBeTruthy();
    expect(page.getDescriptionInput()).toBeTruthy();
    expect(page.getStepsInput()).toBeTruthy();
    expect(page.getSeverityInput()).toBeTruthy();
  });
  it('should have a submit button', () =>{
    page.navigateToBugReportForm();
    expect(page.getSubmitButton()).toBeTruthy();
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
