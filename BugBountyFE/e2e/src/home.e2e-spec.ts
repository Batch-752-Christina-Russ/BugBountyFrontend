import { browser, logging } from 'protractor';
import { HomePage } from './home.po';

describe('Home page functionality', () => {
  let page: HomePage;

  beforeAll(() => {
      page = new HomePage();
      page.navigateTo();
      browser.executeScript('window.sessionStorage.setItem("Role","admin");');
      browser.executeScript('window.sessionStorage.setItem("Username","admin");');
  })
  beforeEach(() => {
    page = new HomePage();
  });

  it('should display leaderboard', () => {
    browser.executeScript('window.sessionStorage.setItem("Role","admin");');
    browser.executeScript('window.sessionStorage.setItem("Username","admin");');
    page.navigateToHome();
    expect(page.getLeaderBoard().isPresent()).toBeTruthy();
  });

  it('should display open bugs list', () => {
    browser.executeScript('window.sessionStorage.setItem("Role","admin");');
    browser.executeScript('window.sessionStorage.setItem("Username","admin");');
    page.navigateToHome();
    expect(page.getOpenList().isPresent()).toBeTruthy();
  });

  it('should redirect to login if not logged in', () => {
    browser.executeScript('window.sessionStorage.clear();');
    page.navigateToHome();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/index');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
