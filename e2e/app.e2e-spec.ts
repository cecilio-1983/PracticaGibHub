import { ComponentesAvanzadoPage } from './app.po';

describe('componentes-avanzado App', function() {
  let page: ComponentesAvanzadoPage;

  beforeEach(() => {
    page = new ComponentesAvanzadoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
