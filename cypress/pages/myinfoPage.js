class MyinfoPage {
    selectorsList(){
        const selectorsmyInfo = {
            MyinfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            midleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            employeeIdField: ".oxd-input--active",
            otherIdField: ".oxd-input--active",
            driveLicenseField: ".oxd-input--active",
            expiredDriveLicence: "[placeholder='yyyy-dd-mm']",
            nationalityField: '.oxd-select-text--arrow',
            maritalStatusField: '.oxd-select-text--arrow',
            updateButton: "[type='submit']"
        }
        return selectorsmyInfo
    }

    myinfoButton(){
        cy.get(this.selectorsList().MyinfoButton).click()
    }

    changedataUser(firstName, midName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().midleNameField).clear().type(midName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    dropdownMenus(employeId, otherID, driveLicenseDateID, expiredDATE){
        cy.get(this.selectorsList().employeeIdField).eq(3).clear().type(employeId)
        cy.get(this.selectorsList().otherIdField).eq(4).clear().type(otherID)
        cy.get(this.selectorsList().driveLicenseField).eq(5).clear().type(driveLicenseDateID)
        cy.get(this.selectorsList().expiredDriveLicence).eq(0).clear().type(expiredDATE)
        cy.get('.--close').click()
    }

    otherfieldsUser(){
        cy.get(this.selectorsList().nationalityField).eq(0).click()
        cy.get(':nth-child(27)').click()
        cy.get(this.selectorsList().maritalStatusField).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()

    }


    saveform(){
        cy.get(this.selectorsList().updateButton).eq(0).click()
        cy.get('.oxd-toast-content--success').contains('Successfully Updated')
    }

}

export  default MyinfoPage