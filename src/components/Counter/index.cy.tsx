import { Counter } from '.';
import { FontStyles } from './../../assets/fonts';

describe('<Counter />', () => {
  it('should render correct value', () => {
    const value = Math.floor(Math.random() * 11);

    cy.mount(
      <>
        <FontStyles />
        <Counter value={value} />
      </>
    );

    const counterValue = cy.get('[data-cy="counter-value"]');
    counterValue.should('have.text', value);
    counterValue.should('have.css', 'font-family', 'Lato');
  });
});

export {};