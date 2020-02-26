describe('star', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('display no data on initial load', () => {
        cy.get('.star-name').should('have.text', 'No star data.')
    });

    it('adds names of stars on `Add Star` button click', () => {
        cy.get('.add-star')
            .click()
            .then(() => {
                cy.get('.star-name')
                    .should('have.length', 1)
            })
    });

    it('closes the modal on `Close` button click', () => {
        cy.get('.star-name').should('have.text', 'No star data.')
    });
});