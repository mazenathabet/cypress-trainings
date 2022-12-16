const welcomeMessage = 'Welcome'
const emailField = '#Email'
const passwordField = '#Password'
const rememberMeCheckbox = '#RememberMe'
const loginButton = '.button-1.login-button'
const errorMessages = '.message-error.validation-summary-errors'
const emptyEmailError = '#Email-error'

export class LoginPage {

    login(email,passowrd) {
        cy.get(emailField).should('be.visible').and('be.enabled').type(email)
        cy.get(passwordField).should('be.visible').and('be.enabled').type(passowrd)
        cy.get(loginButton).should('have.css', 'background-color', 'rgb(74, 178, 241)').and('have.css', 'color', 'rgb(255, 255, 255)').click()
    }
    welcomeMessage() {
        return cy.contains(welcomeMessage)
    }
    emailField() {
        return cy.get(emailField)
    }
    passwordField() {
        return cy.get(passwordField)
    }
    rememberMeCheckbox() {
        return cy.get(rememberMeCheckbox)
    }
    loginButton() {
        return cy.get(loginButton)
    }
    errorsMessages() {
        return cy.get(errorMessages)
    }
    emptyEmailError() {
        return cy.get(emptyEmailError)
    }
}