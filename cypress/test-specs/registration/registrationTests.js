/// <reference types="cypress"/>

import { HomePage } from "../../pageObjects/HomePage"
import { RegistrationPage } from "../../pageObjects/RegistrationPage";

const registrationPage = new RegistrationPage
const homePage = new HomePage
describe('Registration Tests', () => {
    beforeEach(() => {
        cy.fixture('User1').then(function (user1) {
            this.user1 = user1
        })
        cy.fixture('User2').then(function (user2) {
            this.user2 = user2
        })
        cy.visit(Cypress.env("nopCommerceApp"))
        homePage.RegisterLink().click()
    })
    it('register with mandatory fileds ', function () {
        registrationPage.registerationPageTitle().should("have.text", "Register").and("be.visible")
        registrationPage.firstName().type(this.user1.firstName)
        registrationPage.firstName().next().should("have.text", "*") // validate the asterisk next to the mandatory fields
        registrationPage.lastName().type(this.user1.lastName)
        registrationPage.lastName().next().should("have.text", "*")
        registrationPage.email().type(this.user1.Email)
        registrationPage.email().next().should("have.text", "*")
        registrationPage.password().type(this.user1.password)
        registrationPage.password().next().should("have.text", "*")
        registrationPage.confirmPassword().type(this.user1.password)
        registrationPage.confirmPassword().next().should("have.text", "*")
        registrationPage.submitRegisterationButton().click()
        registrationPage.registrationCompleteMessage().should("have.text", "Your registration completed").and("be.visible")
    })
    it('register with existing email', function () {
        registrationPage.registerationPageTitle().should("have.text", "Register").and("be.visible")
        registrationPage.firstName().type(this.user1.firstName)
        registrationPage.firstName().next().should("have.text", "*") // validate the asterisk next to the mandatory fields
        registrationPage.lastName().type(this.user1.lastName)
        registrationPage.lastName().next().should("have.text", "*")
        registrationPage.email().type(this.user1.Email)
        registrationPage.email().next().should("have.text", "*")
        registrationPage.password().type(this.user1.password)
        registrationPage.password().next().should("have.text", "*")
        registrationPage.confirmPassword().type(this.user1.password)
        registrationPage.confirmPassword().next().should("have.text", "*")
        registrationPage.submitRegisterationButton().click()
        registrationPage.registrationErrorValidation().should("have.text", "The specified email already exists").and("be.visible")
    })
    it('register with all the data', function () {
        registrationPage.registerationPageTitle().should("have.text", "Register").and("be.visible")
        registrationPage.genderRadioButtons().check(this.user2.gender).should('be.checked')
        registrationPage.firstName().type(this.user2.firstName)
        registrationPage.firstName().next().should("have.text", "*") // validate the asterisk next to the mandatory fields
        registrationPage.lastName().type(this.user2.lastName)
        registrationPage.lastName().next().should("have.text", "*")
        registrationPage.birthDayList().select(this.user2.BirthDay).should('have.value', this.user2.BirthDay)
        registrationPage.birthMonthList().select(this.user2.BirthMonth).should('have.value', "12")
        registrationPage.birthYearList().select(this.user2.BirthYear).should('have.value', this.user2.BirthYear)
        registrationPage.email().type(this.user2.Email)
        registrationPage.email().next().should("have.text", "*")
        registrationPage.companyField().type(this.user2.companyName).should('have.value', this.user2.companyName)
        registrationPage.password().type(this.user2.password)
        registrationPage.password().next().should("have.text", "*")
        registrationPage.confirmPassword().type(this.user2.password)
        registrationPage.confirmPassword().next().should("have.text", "*")
        registrationPage.submitRegisterationButton().click()
        registrationPage.registrationCompleteMessage().should("have.text", "Your registration completed").and("be.visible")
    })

})