describe('Orange HRM Tests', () => {

  const selectorsList = {
    userNameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton:"[type='submit']",
    sectionTittleTopBar:'.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert:".oxd-alert-content--error",
    credentialRequiredError: ".oxd-input-field-error-message"
  }

  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTittleTopBar)
    cy.get(selectorsList.dashboardGrid)

  })
  
  it('Login Fail', ()=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type('Rodrigo')
    cy.get(selectorsList.passwordField).type('rodrigo123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
 it('No email/password', () =>{
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(selectorsList.userNameField).type('Admin')
  cy.get(selectorsList.passwordField).type(' ')
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.credentialRequiredError)
 
 })
})