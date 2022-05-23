import {faker} from '@faker-js/faker'
describe ('Invitar staff con correo numerico', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })

    it ('invitar staff', function(){
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get('#ember7').type(Cypress.config('usuario'));
        cy.get('#ember9').type(Cypress.config('pass'));
        cy.get('#ember11').click();
        cy.wait(5000);

        cy.get(".gh-nav-body a[href='#/settings/']").click();
        cy.wait(2000);
        cy.get(".view-container a[href='#/settings/staff/']").click();
        cy.wait(2000);

        cy.get(".view-actions button.gh-btn-primary").click();
        cy.wait(2000);
        cy.get('#new-user-email').type(faker.internet.email(faker.datatype.float(0.5), faker.datatype.float(0.5), 'ghost.com', { allowSpecialCharacters: false }));;
        cy.wait(2000);

        cy.get(".modal-footer button").click();
        cy.wait(2000);
        cy.reload();
        cy.wait(5000);
    })
})