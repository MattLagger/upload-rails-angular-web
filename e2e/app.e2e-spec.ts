import { NguploaderPage } from './app.po';

describe('nguploader App', () => {
  let page: NguploaderPage;

  beforeEach(() => {
    page = new NguploaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
