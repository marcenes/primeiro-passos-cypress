import userData from "../fixtures/userData.json"
import LoginPage from '../pages/loginPage.js'
import DashboardPage from "../pages/dashBoardPage.js"
import MyinfoPage from "../pages/myinfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myinfoPage = new MyinfoPage()

describe('Orange HRM Tests', () => {

 


  it.only('User Info Update - Sucess', () => {

    loginPage.accessloginPage()
    loginPage.LoginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkdashboardPage()
    myinfoPage.myinfoButton()
    myinfoPage.changedataUser()
    myinfoPage.dropdownMenus()
    myinfoPage.submitsaveButton()
    
    
    


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