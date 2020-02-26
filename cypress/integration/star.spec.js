describe('star', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('display list of names of stars', () => {
        cy.get('button[key='add-star']').click().then(() => {
            cy.get('.stars-container').children('.star')
        })
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