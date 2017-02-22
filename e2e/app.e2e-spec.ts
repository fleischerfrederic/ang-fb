import { Ang3Page } from './app.po';

describe('ang3 App', function() {
  let page: Ang3Page;

  beforeEach(() => {
    page = new Ang3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
