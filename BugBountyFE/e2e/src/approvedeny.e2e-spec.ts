import { browser, logging } from 'protractor';
import { ApproveDenyBugPage } from './approvedenybug.po';

describe('Approve Deny Bug page', () => {
  let page: ApproveDenyBugPage;

  beforeEach(() => {
    page = new ApproveDenyBugPage();
    page.navigateTo();
    browser.executeScript('window.sessionStorage.setItem("Role","admin");');
  });

  it('should display a card', () =>{
    page.navigateToPendingBug();
    browser.pause();
    expect(page.getCard()).toBeTruthy();
  })

  it('should create a module when "more" is clicked', () =>{
    page.navigateToPendingBug();
    page.getMoreButton().click();
    expect(page.getModalBody()).toBeTruthy();
  })

  it('should have approve and deny buttons', () =>{
      expect(page.getApproveButton()).toBeTruthy();
      expect(page.getDenyButton()).toBeTruthy();
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