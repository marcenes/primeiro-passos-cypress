class LoginPage {
   selectorsList() {
        const selectors = {
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton:"[type='submit']",
            wrongCredentialAlert:".oxd-alert-content--error",
            credentialRequiredError: ".oxd-input-field-error-message"
        }

        return selectors

    }

    accessloginPage() {
        cy.visit('/auth/login')
    }

    LoginWithUser(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

}

export default LoginPage