import Page from './page.js';

class IndexPage extends Page {
  render() {
    console.log('Rendering Index page');
  }
}

const page = new IndexPage();

page.render();