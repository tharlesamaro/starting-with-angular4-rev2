import { AngularNavegacaoPage } from './app.po';

describe('angular-navegacao App', () => {
  let page: AngularNavegacaoPage;

  beforeEach(() => {
    page = new AngularNavegacaoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
