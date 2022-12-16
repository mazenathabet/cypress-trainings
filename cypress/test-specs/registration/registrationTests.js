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
        homePage.goToRegisterPage()
    })
    it('register with mandatory fileds ', function () {
        registrationPage.registerationPageTitle().should("have.text", "Register").and("be.visible")
        registrationPage.registerWithMandatoryFieldsOnly(this.user1.firstName,this.user1.lastName,this.user1.Email,this.user1.password)
        registrationPage.registrationCompleteMessage().should("have.text", "Your registration completed").and("be.visible")
    })
    it('register with existing email', function () {
        registrationPage.registerationPageTitle().should("have.text", "Register").and("be.visible")
        registrationPage.registerWithMandatoryFieldsOnly(this.user1.firstName,this.user1.lastName,this.user1.Email,this.user1.password)
        registrationPage.registrationErrorValidation().should("have.text", "The specified email already exists").and("be.visible")
    })
    it('register with all the data', function () {
        registrationPage.registerationPageTitle().should("have.text", "Register").and("be.visible")
        registrationPage.registerWithAllData(this.user2.gender,this.user2.firstName,this.user2.lastName,this.user2.BirthDay,this.user2.BirthMonth,this.user2.BirthYear,this.user2.companyName,this.user2.Email,this.user2.password)
        registrationPage.registrationCompleteMessage().should("have.text", "Your registration completed").and("be.visible")
    })

})