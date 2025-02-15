import userData from "../fixtures/userData.json"

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
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTittleTopBar)
    cy.get(selectorsList.dashboardGrid)

  })
  
  it('Login Fail', ()=> {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
 it('No email/password', () =>{
  cy.visit('/auth/login')
  cy.get(selectorsList.userNameField).type(userData.credentialRequired.usermane)
  cy.get(selectorsList.passwordField).type(userData.credentialRequired.password)
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.credentialRequiredError)
 
 })
})