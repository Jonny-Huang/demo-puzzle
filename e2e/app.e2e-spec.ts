import { PuzzlePage } from './app.po';

describe('puzzle App', () => {
  let page: PuzzlePage;

  beforeEach(() => {
    page = new PuzzlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
