import { OhmyfilterPage } from './app.po';

describe('ohmyfilter App', function() {
  let page: OhmyfilterPage;

  beforeEach(() => {
    page = new OhmyfilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
