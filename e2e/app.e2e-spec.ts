import { FbPortalPage } from './app.po';

describe('fb-portal App', function() {
  let page: FbPortalPage;

  beforeEach(() => {
    page = new FbPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
