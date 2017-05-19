import { AdwordsGeneratePage } from './app.po';

describe('adwords-generate App', () => {
  let page: AdwordsGeneratePage;

  beforeEach(() => {
    page = new AdwordsGeneratePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
