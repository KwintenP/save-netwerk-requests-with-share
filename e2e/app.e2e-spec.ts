import { SaveNetworkRequestWithSharePage } from './app.po';

describe('save-network-request-with-share App', function() {
  let page: SaveNetworkRequestWithSharePage;

  beforeEach(() => {
    page = new SaveNetworkRequestWithSharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
