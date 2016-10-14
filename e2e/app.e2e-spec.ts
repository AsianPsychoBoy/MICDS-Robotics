import { MICDSRoboticsPage } from './app.po';

describe('micds-robotics App', function() {
  let page: MICDSRoboticsPage;

  beforeEach(() => {
    page = new MICDSRoboticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
