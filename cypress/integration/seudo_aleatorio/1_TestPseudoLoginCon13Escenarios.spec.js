//const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

describe('Prueba escenarios ghost', () => {

	let config = new Array;
	let mockaroo = new Array;
	let random = 0;
	let usuario = 0;
	
	before(() => {
		
		cy.request('https://my.api.mockaroo.com/users.json?key=d0994460')
		.then((response) => {
			cy.writeFile('cypress/fixtures/mockaroo.json', response.body)
		})
		
		cy.fixture('mockaroo').should((_mockaroo) => {
			mockaroo = _mockaroo;
			random = Math.floor(Math.random()*mockaroo.length); 
		})
	})
	
    beforeEach(() => {
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.wait(1000);
	})
	
	
    it('27. Intento de login inválido, con usuario y contraseña aleatoria - datetime', () => {		
	
      cy.get('#ember7').type(mockaroo[random].datetime, { force: true })
	    cy.get('#ember9').type(mockaroo[random].datetime, { force: true })
      cy.get('#ember11').click()
      cy.wait(2000);
      cy.get('.main-error').should(($p) => {
        expect($p.first()).to.contain('Please fill out the form to sign in.')
          })
    })
	
	
    it('28. Intento de login inválido, con usuario y contraseña aleatoria - base64', () => {
		
      cy.get('#ember7').type(mockaroo[random].base64, { force: true })
	    cy.get('#ember9').type(mockaroo[random].base64, { force: true })
      cy.get('#ember11').click()
      cy.wait(2000);
      cy.get('.main-error').should(($p) => {
        expect($p.first()).to.contain('Please fill out the form to sign in.')
          })
	        
    }) 


   it('29. Intento de login inválido, con usuario email aleatorio y contraseña pass aleatoria', () => {
        cy.get('#ember7').type(mockaroo[random].email, { force: true })
        cy.get('#ember9').type(mockaroo[random].pass, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
		  expect($p.first()).to.contain('There is no user with that email address.')
        })
		
    })
	

    it('30. Intento de login inválido, con usuario y contraseña aleatoria - naughty_string ', () => {
      cy.get('#ember7').type(mockaroo[random].naughty_string, { force: true })
        cy.get('#ember9').type(mockaroo[random].naughty_string, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })

    it('31. Intento de login inválido, con usuario y contraseña aleatoria - URL ', () => {
      cy.get('#ember7').type(mockaroo[random].url, { force: true })
        cy.get('#ember9').type(mockaroo[random].url, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })
	
	
	it('32. Intento de login inválido, con usuario y contraseña aleatoria - chine ', () => {
      cy.get('#ember7').type(mockaroo[random].chine, { force: true })
        cy.get('#ember9').type(mockaroo[random].chine, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })

    it('33. Intento de login inválido, con usuario y contraseña aleatoria - hex color ', () => {
      cy.get('#ember7').type(mockaroo[random].hex_color, { force: true })
        cy.get('#ember9').type(mockaroo[random].hex_color, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })

    it('34. Intento de login inválido, con usuario y contraseña aleatoria - encrypt ', () => {
      cy.get('#ember7').type(mockaroo[random].encrypt, { force: true })
        cy.get('#ember9').type(mockaroo[random].encrypt, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })

    it('35. Intento de login inválido, con usuario y contraseña aleatoria - guid ', () => {
      cy.get('#ember7').type(mockaroo[random].guid, { force: true })
        cy.get('#ember9').type(mockaroo[random].guid, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })

    it('36. Intento de login inválido, con usuario y contraseña aleatoria - binomial ', () => {
      cy.get('#ember7').type(mockaroo[random].binomial, { force: true })
        cy.get('#ember9').type(mockaroo[random].binomial, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })

    it('37. Intento de login inválido, con usuario y contraseña aleatoria - parrafos ', () => {
      cy.get('#ember7').type(mockaroo[random].parrafos, { force: true })
        cy.get('#ember9').type(mockaroo[random].parrafos, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })

    it('38. Intento de login inválido, con usuario y contraseña aleatoria - time ', () => {
      cy.get('#ember7').type(mockaroo[random].time, { force: true })
        cy.get('#ember9').type(mockaroo[random].time, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })

    it('39. Intento de login inválido, con usuario y contraseña aleatoria - isbn ', () => {
      cy.get('#ember7').type(mockaroo[random].isbn, { force: true })
        cy.get('#ember9').type(mockaroo[random].isbn, { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })
	
})