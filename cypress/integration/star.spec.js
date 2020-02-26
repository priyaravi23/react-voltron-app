describe('star', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('opens the modal on `Open Modal` button click', () => {
        cy.get('#my-react-app > div > a')
            .should('have.text', 'Open Modal')
            .click()
            .then(() => {
                cy.get('#my-react-app > div div')
                    .should('have.class', 'modal-backdrop')
            })
    });

    it('display `no star data` when modal is opened', () => {
        cy.get('#my-react-app > div > a')
            .should('have.text', 'Open Modal')
            .click()
            .then(() => {
                cy.get('.stars-container')
                    .children()
                    .should('have.length', 0)
            })
    });

    it('display list of names of stars', () => {
        cy.get('#my-react-app > div > a')
            .should('have.text', 'Open Modal')
            .click()
            .then(() => {
                cy.get('.action-buttons a:last')
                    .should('have.text', 'add star')
                    .click()
                    .then(() => {
                        cy.get('.stars-container').children('.star')
                    })
            })
    });

    it('adds names of stars on `Add Star` button click', () => {
        cy.get('#my-react-app > div > a')
            .should('have.text', 'Open Modal')
            .click()
            .then(() => {
                cy.get('.action-buttons a:last')
                    .should('have.text', 'add star')
                    .click()
                    .then(() => {
                        cy.get('.stars-container')
                            .children()
                            .should('have.length', 1)
                    })
            })
    });

    it('closes the modal on `Close` button click', () => {
        cy.get('#my-react-app > div > a')
            .should('have.text', 'Open Modal')
            .click()
            .then(() => {
                cy.get('.action-buttons a:first')
                    .should('have.text', 'close')
                    .click()
                    .then(() => {
                        cy.get('#my-react-app > div > a')
                            .should('have.text', 'Open Modal')
                    })
            })
    });
});