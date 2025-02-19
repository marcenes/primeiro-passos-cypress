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

    changedataUser(){
        cy.get(this.selectorsList().firstNameField).clear().type('Jorge')
        cy.get(this.selectorsList().midleNameField).clear().type('Alex')
        cy.get(this.selectorsList().lastNameField).clear().type('Abreu')
    }

    dropdownMenus(){
        cy.get(this.selectorsList().employeeIdField).eq(3).clear().type('Jorginho')
        cy.get(this.selectorsList().otherIdField).eq(4).clear().type('7827362')
        cy.get(this.selectorsList().driveLicenseField).eq(5).clear().type('98372198321')
        cy.get(this.selectorsList().expiredDriveLicence).eq(0).clear().type('2030-01-18')
        cy.get('.--close').click()
    }

    otherfieldsUser(){
        cy.get(this.selectorsList().nationalityField).eq(0).click()
        cy.get(':nth-child(27)').click()
        cy.get(this.maritalStatusField).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()

    }

    submitsaveButton(){
        cy.get(this.selectorsList().updateButton).eq(0).click()
        cy.get('.oxd-toast-content--success').contains('Successfully Updated')
    }
}

export  default MyinfoPage