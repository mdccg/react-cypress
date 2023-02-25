import { App } from './App';

describe('<App />', () => {
  it('should render a h1 title with an welcome message', () => {
    cy.mount(<App />);
    cy.get('h1').should('have.text', 'Oi!');
  });
});