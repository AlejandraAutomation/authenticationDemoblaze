
describe('user authentication', () => {
  beforeEach(() => {
    cy.visit('https://demoblaze.com/')
  })


  it('validate successful user registration', () => {

    cy.get('a[data-target="#signInModal"]').click()
    cy.get('input#sign-username').invoke("val", "alejita123456")
    cy.get('input#sign-password').invoke("val", "alejita")
    cy.contains('button', 'Sign up').click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Sign up successful.')
    })

  })
  it("Validate email already registered", () => {

    cy.get('a[data-target="#signInModal"]').click()
    cy.get('input#sign-username').invoke("val", "alejita1234")
    cy.get('input#sign-password').invoke("val", "alejajj")
    cy.contains('button', 'Sign up').click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('This user already exist.')
    })
  })

  it("validate login", () => {

    cy.get('a[data-target="#logInModal"]').click()
    cy.get('input#loginusername').invoke("val", "alejita1234")
    cy.get('input#loginpassword').invoke("val", "alejita")
    cy.contains('button', 'Log in').click()
    cy.get('a#nameofuser').contains("Welcome alejita1234")

  })

  it("validate username not exist", () => {

    cy.get('a[data-target="#logInModal"]').click()
    cy.get('input#loginusername').invoke("val", "abner123456")
    cy.get('input#loginpassword').invoke("val", "aleja")
    cy.contains('button', 'Log in').click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('User does not exist.')
    })
  })

  it("validate incorrect password", () => {

    cy.get('a[data-target="#logInModal"]').click()
    cy.get('input#loginusername').invoke("val", "alejita1234")
    cy.get('input#loginpassword').invoke("val", "antonio")
    cy.contains('button', 'Log in').click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Wrong password.')
    })

  })

  it("Validate blank user field", () => {

    cy.get('a[data-target="#logInModal"]').click()
    cy.get('input#loginpassword').invoke("val", "antoniito")
    cy.contains('button', 'Log in').click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please fill out Username and Password.')
    })
  })

  it.only("validate blank password field", () => {

    cy.get('a[data-target="#logInModal"]').click()
    cy.get('input#loginusername').invoke("val", "alejita1234")
    cy.contains('button', 'Log in').click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please fill out Username and Password.')
    })
  })

})