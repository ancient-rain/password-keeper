import { PasswordKeeperPage } from './app.po';

describe('password-keeper App', () => {
  let page: PasswordKeeperPage;

  beforeEach(() => {
    page = new PasswordKeeperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
