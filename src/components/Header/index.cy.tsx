import { FontStyles } from './../../assets/fonts';
import { Header } from '.';

describe('<Header />', () => {
  it('should render passed prop to component as title', () => {
    const title = 'Cutie birb 🐦';
    cy.mount(
      <>
        <FontStyles />
        <Header title={title} />
      </>
    );
    cy.get('[data-cy="header-title"]').should('have.text', title);
  });
});

export {};