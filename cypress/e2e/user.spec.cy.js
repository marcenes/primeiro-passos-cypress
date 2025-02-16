import userData from "../fixtures/userData.json"

describe('Orange HRM Tests', () => {

  const selectorsList = {
    userNameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton:"[type='submit']",
    sectionTittleTopBar:'.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert:".oxd-alert-content--error",
    credentialRequiredError: ".oxd-input-field-error-message",
    MyinfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    midleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    employeeIdField: ".oxd-input--active",
    otherIdField: ".oxd-input--active",
    driveLicenseField: ".oxd-input--active",
    expiredDriveLicence: "[placeholder='yyyy-dd-mm']",
    nationalityField: '.oxd-select-text--arrow',
    updateButton: "[type='submit']"
  }


  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTittleTopBar)
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.MyinfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Jorge')
    cy.get(selectorsList.midleNameField).clear().type('Alex')
    cy.get(selectorsList.lastNameField).clear().type('Abreu')
    cy.get(selectorsList.employeeIdField).eq(3).clear().type('Jorginho')
    cy.get(selectorsList.otherIdField).eq(4).clear().type('5562542')
    cy.get(selectorsList.driveLicenseField).eq(5).clear().type('887887272')
    cy.get(selectorsList.expiredDriveLicence).eq(0).clear().type('2025-01-18')
    cy.get('.--close').click()
    //cy.get(selectorsList.nationalityField).eq(0).click()
    //cy.select("Brazilian").click
    cy.get(selectorsList.updateButton).eq(0).click()
    cy.get('.oxd-toast-content--success').contains('Successfully Updated')


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