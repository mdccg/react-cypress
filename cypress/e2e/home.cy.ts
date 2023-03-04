describe('Home page spec', () => {
  beforeEach(() => cy.visit(''));

  it('should increment counter correctly', () => {
    const times = 16;
    for (let i = 0; i < times; ++i) {
      cy.get('[data-cy="increment-button"]').click();
    }
    cy.get('[data-cy="counter-value"]').should('have.text', times);
  });

  it('should reset the counter after clicking their button', () => {
    cy.get('[data-cy="reset-button"]').click();
    cy.get('[data-cy="counter-value"]').should('have.text', 0);
  });
})