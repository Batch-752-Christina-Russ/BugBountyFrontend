import { AppPage } from './app.po';
import { browser, logging, element, by} from 'protractor';

describe('Login page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should read input', ()=>{
    page.navigateToLogin();
    let username = element(by.id('username'));
    let password = element(by.id('password'));
    username.clear().then(() => {
      username.sendKeys('testuser');
    });
    password.clear().then(() => {
      password.sendKeys('password');
    });
    let usernameInput = username.getAttribute('value');
    let passwordInput = password.getAttribute('value');
    expect(usernameInput).toEqual('testuser');
    expect(passwordInput).toEqual('password');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
