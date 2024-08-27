import Page from './page.js';

class ResumePage extends Page {
  render() {
    console.log('Rendering Resume page');
  }
}

const page = new ResumePage();

page.render();