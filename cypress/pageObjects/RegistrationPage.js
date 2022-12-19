
// locators 
const registerationPageTitle = '.page-title h1'
const registrationCompleteMessage = ".page-body div[class='result']"
const registrationErrorValidationMessage = '.message-error.validation-summary-errors li'
const genderRadioButton = "div[id='gender'] span input"
const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const birthDayList = '[name="DateOfBirthDay"]'
const birthMonthList = '[name="DateOfBirthMonth"]'
const birthYearList = '[name="DateOfBirthYear"]'
const companyField = '#Company'
const emailField = '#Email'
const passwordField = '#Password'
const confirmPasswordField = '#ConfirmPassword'
const submitButton = '#register-button'


export class RegistrationPage {

    registerationPageTitle() {
        return cy.get(registerationPageTitle)
    }

    registrationCompleteMessage() {
        return cy.get(registrationCompleteMessage)
    }

    registrationErrorValidation() {
        return cy.get(registrationErrorValidationMessage)
    }
    registerWithMandatoryFieldsOnly(fname, lname, email, passowrd) {
        cy.get(firstNameField).should('be.visible').and('be.enabled').type(fname)
        cy.get(firstNameField).next().should("have.text", "*") // validate the asterisk next to the mandatory fields
        cy.get(lastNameField).should('be.visible').and('be.enabled').type(lname)
        cy.get(lastNameField).next().should("have.text", "*")
        cy.get(emailField).should('be.visible').and('be.enabled').type(email)
        cy.get(emailField).next().should("have.text", "*")
        cy.get(passwordField).should('be.visible').and('be.enabled').type(passowrd)
        cy.get(passwordField).next().should("have.text", "*")
        cy.get(confirmPasswordField).should('be.visible').and('be.enabled').type(passowrd)
        cy.get(confirmPasswordField).next().should("have.text", "*")
        cy.get(submitButton).should('be.visible').click()
    }

    registerWithAllData(gender, fname, lname, birthDay, birthMonth, birthYear, companyName, email, passowrd) {
        cy.get(genderRadioButton).check(gender).should('be.checked')
        cy.get(firstNameField).should('be.visible').and('be.enabled').type(fname)
        cy.get(firstNameField).next().should("have.text", "*") // validate the asterisk next to the mandatory fields
        cy.get(lastNameField).should('be.visible').and('be.enabled').type(lname)
        cy.get(lastNameField).next().should("have.text", "*")
        cy.get(birthDayList).select(birthDay).should('have.value', birthDay)
        cy.get(birthMonthList).select(birthMonth)
        cy.get(birthYearList).select(birthYear).should('have.value', birthYear)
        cy.get(emailField).should('be.visible').and('be.enabled').type(email)
        cy.get(emailField).next().should("have.text", "*")
        cy.get(companyField).should('be.visible').and('be.enabled').type(companyName)
        cy.get(passwordField).should('be.visible').and('be.enabled').type(passowrd)
        cy.get(passwordField).next().should("have.text", "*")
        cy.get(confirmPasswordField).should('be.visible').and('be.enabled').type(passowrd)
        cy.get(confirmPasswordField).next().should("have.text", "*")
        cy.get(submitButton).should('be.visible').click()
    }
}

export const registrationPage = new RegistrationPage()