export class RegistrationPage {

    registerationPageTitle(){
        return cy.get(".page-title h1")
    }
    genderRadioButtons(){
        return cy.get("div[id='gender'] span input")
    }
    firstName() {
        return cy.get('#FirstName')
    }
    lastName() {
        return cy.get('#LastName')
    }
    birthDayList(){
        return cy.get('[name="DateOfBirthDay"]')
    }
    birthMonthList(){
        return cy.get('[name="DateOfBirthMonth"]')
    }
    birthYearList(){
        return cy.get('[name="DateOfBirthYear"]')
    }
    email() {
        return cy.get('#Email')
    }
    companyField(){
        return cy.get('#Company')
    }
    password() {
        return cy.get('#Password')
    }
    confirmPassword() {
        return cy.get('#ConfirmPassword')
    }
    submitRegisterationButton() {
        return cy.get('#register-button')
    }
    registrationCompleteMessage(){
        return cy.get(".page-body div[class='result']")
    }
    registrationErrorValidation(){
        return cy.get(".message-error.validation-summary-errors li")
    }
}