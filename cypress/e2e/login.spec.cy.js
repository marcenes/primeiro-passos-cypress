import userData from "../fixtures/userData.json"
import LoginPage from '../pages/loginPage.js'
import DashboardPage from "../pages/dashBoardPage.js"
import MyinfoPage from "../pages/myinfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Orange HRM Tests', () => {

  it('Login - Sucess', () => {
    loginPage.accessloginPage()
    loginPage.LoginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkdashboardPage()
  })
  

  it('Login Fail', ()=> {
    loginPage.accessloginPage()
    loginPage.LoginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
  
 it('No email/password', () =>{
  loginPage.accessloginPage()
  loginPage.checkrequiredAccess(userData.credentialRequired.usermane, userData.credentialRequired.password)
  loginPage.requiredError()
 })
})