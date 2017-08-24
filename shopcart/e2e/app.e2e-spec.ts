import { ShopcartPage } from './app.po';

describe('shopcart App', () => {
  let page: ShopcartPage;

  beforeEach(() => {
    page = new ShopcartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
