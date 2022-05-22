import {faker} from '@faker-js/faker'

describe( `Llenando formulario login con datos inválidos`, function() {
    it(`34. Visita el formulario de login y lo llena con datos inválidos`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember7').scrollIntoView().focus().type(faker.name.firstName())
        cy.get('#ember9').scrollIntoView().focus().type(faker.name.firstName())
        cy.get('#ember11').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })

    it(`35. Visita el formulario de login y lo llena con datos del formato esperado
    pero que no corresponden a un usuarios real`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember7').scrollIntoView().focus().type(faker.internet.email())
        cy.get('#ember9').scrollIntoView().focus().type(faker.internet.password())
        cy.get('#ember11').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
    })

    it(`36. Clic en el botón de autenticar con un formulario vacío.`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember11').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })

    it(`37. Visita el formulario de login y lo llena con datos pero que no corresponden a un usuarios real`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember7').scrollIntoView().focus().type(faker.internet.email())
        cy.get('#ember9').scrollIntoView().focus().type(faker.internet.password())
        cy.get('#ember11').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
    })

    it(`38. Visita el formulario de login y llena solo un campo`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember7').scrollIntoView().focus().type(faker.helpers.randomize())
        cy.get('#ember11').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })

    it(`39. Visita el formulario de login y lo llena con imágenes`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember7').scrollIntoView().focus().type(faker.image.avatar())
        cy.get('#ember9').scrollIntoView().focus().type(faker.image.dataUri())
        cy.get('#ember11').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })

    it(`40. Visita el formulario de login y lo llena caracteres largos`, function() { 
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('#ember7').scrollIntoView().focus().type(faker.lorem.paragraph())
      cy.get('#ember9').scrollIntoView().focus().type(faker.lorem.paragraph())
      cy.get('#ember11').click()
      cy.get('p').should(($p) => {
        expect($p.first()).to.contain('Please fill out the form to sign in.')
      })
  })
})