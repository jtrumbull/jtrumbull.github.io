import Page from './page.js';

class AboutPage extends Page {
  render() {
    console.log('Rendering about page');
  }
}

const page = new AboutPage();

page.render();