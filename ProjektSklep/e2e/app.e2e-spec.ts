import { ProjektSklepPage } from './app.po';

describe('projekt-sklep App', function() {
  let page: ProjektSklepPage;

  beforeEach(() => {
    page = new ProjektSklepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
