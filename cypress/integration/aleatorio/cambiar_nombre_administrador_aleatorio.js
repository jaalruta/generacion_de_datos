import {faker} from '@faker-js/faker'
describe ('login', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })
    it ('login', function(){
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get('#ember7').type(Cypress.config('usuario'));
        cy.get('#ember9').type(Cypress.config('pass'));
        cy.get('#ember11').click();
        cy.wait(2000);
        
        cy.get('.pe-all .ember-basic-dropdown-trigger').click();
        cy.wait(1000);
        cy.contains("Your profile").click()
        cy.get("#user-name").type("{selectall}{backspace}"+faker.random.words(5),{force:true});
        cy.get(".view-actions button.gh-btn-primary").click();
        cy.wait(1000);
        cy.get(".gh-btn-red").should("to.exist");

        

    })
})