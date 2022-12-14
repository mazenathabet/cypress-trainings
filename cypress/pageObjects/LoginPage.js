export class LoginPage {

    welcomeMessage(){
        return cy.contains("Welcome")
    }
    emailField(){
        return cy.get('#Email')
    }
    passwordField(){
        return cy.get('#Password')
    }
    rememberMeCheckbox(){
        return cy.get('#RememberMe')
    }
    loginButton(){
        return cy.get(".button-1.login-button")
    }
    errorsMessages(){
        return cy.get('.message-error.validation-summary-errors')
    }
    emptyEmailError(){
        return cy.get('#Email-error')
    }
}