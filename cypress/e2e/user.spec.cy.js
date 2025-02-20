import userData from "../fixtures/userData.json"
import LoginPage from '../pages/loginPage.js'
import DashboardPage from "../pages/dashBoardPage.js"
import MyinfoPage from "../pages/myinfoPage.js"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myinfoPage = new MyinfoPage()


describe('Orange HRM Tests', () => {

 


  it('User Info Update - Sucess', () => {

    loginPage.accessloginPage()
    loginPage.LoginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkdashboardPage()
    myinfoPage.myinfoButton()
    myinfoPage.changedataUser(chance.first({gender: 'male'}), chance.string({length: 1, casing: 'upper', pool: 'abcde'}), chance.last())
    myinfoPage.dropdownMenus('employeID', 'Other Id', '2025-02-18', '2030-02-18')
    myinfoPage.otherfieldsUser()
    myinfoPage.saveform()
    // myinfoPage.submitsaveButton()
  })
  
  
})