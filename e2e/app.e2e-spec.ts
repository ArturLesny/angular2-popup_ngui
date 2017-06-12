import { Angular2NguiPopupPage } from './app.po';

describe('angular2-ngui-popup App', () => {
  let page: Angular2NguiPopupPage;

  beforeEach(() => {
    page = new Angular2NguiPopupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
