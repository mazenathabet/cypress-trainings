/// <reference types="cypress"/>

import { homePage } from "../../pageObjects/HomePage"
import { registrationPage} from "../../pageObjects/RegistrationPage";

describe('Registration Tests', () => {
    beforeEach(() => {
        cy.fixture('User1').then(function (user1) {
            this.user1 = user1
        })
        cy.fixture('User2').then(function (user2) {
            this.user2 = user2
        })
        cy.openHomePage()
    })
    it('register with mandatory fileds ', function () {
        homePage.goToRegisterPage()
        registrationPage.registerationPageTitle().should("have.text", "Register").and("be.visible")
        registrationPage.registerWithMandatoryFieldsOnly(this.user1.firstName, this.user1.lastName, this.user1.Email, this.user1.password)
        registrationPage.registrationCompleteMessage().should("have.text", "Your registration completed").and("be.visible")
    })
    it('register with existing email', function () {
        homePage.goToRegisterPage()
        registrationPage.registerationPageTitle().should("have.text", "Register").and("be.visible")
        registrationPage.registerWithMandatoryFieldsOnly(this.user1.firstName, this.user1.lastName, this.user1.Email, this.user1.password)
        registrationPage.registrationErrorValidation().should("have.text", "The specified email already exists").and("be.visible")
    })
    it('register with all the data', function () {
        homePage.goToRegisterPage()
        registrationPage.registerationPageTitle().should("have.text", "Register").and("be.visible")
        registrationPage.registerWithAllData(this.user2.gender, this.user2.firstName, this.user2.lastName, this.user2.BirthDay, this.user2.BirthMonth, this.user2.BirthYear, this.user2.companyName, this.user2.Email, this.user2.password)
        registrationPage.registrationCompleteMessage().should("have.text", "Your registration completed").and("be.visible")
    })

})