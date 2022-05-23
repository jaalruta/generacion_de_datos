import {faker} from '@faker-js/faker';
describe ('editar staff', function(){
  beforeEach(() => {
      cy.visit('http://localhost:2368/ghost')
      cy.wait(5000)
    })

  it ('editar staff', function(){
      cy.visit("http://localhost:2368/ghost/#/signin");
      cy.get('#ember7').type(Cypress.config('usuario'));
      cy.get('#ember9').type(Cypress.config('pass'));
      cy.get('#ember11').click();
      cy.wait(5000);

      cy.get(".gh-nav-body a[href='#/settings/']").click();
      cy.get(".view-container a[href='#/settings/labs/']").click();
      cy.get(".js-delete").click();
      cy.wait(3000);
      cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
      cy.visit("http://localhost:2368/ghost");
      cy.wait(2000);
      cy.get(".gh-nav-body a[href='#/settings/']").click();
      cy.wait(2000);

      cy.get(".view-container a[href='#/settings/staff/']").click();
      cy.wait(2000);
      cy.get(".gh-active-users .apps-card-app").click();

      cy.get('#user-website').type(faker.internet.url());
      cy.get(".view-actions button.gh-btn-primary").click();


  })
})