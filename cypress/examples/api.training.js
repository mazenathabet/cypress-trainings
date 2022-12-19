/// <reference types="cypress"/>

import { homePage } from "../pageObjects/HomePage"
import { loginPage } from "../pageObjects/LoginPage"

describe('Login Tests', () => {

    beforeEach(() => {
        cy.fixture('User2').then(function (user2) {
            this.user2 = user2
        })
        cy.openHomePage()
    })

    describe('positive scenarios', () => {
        it('login with valid data', function () {
            homePage.goToLoginPage()
            loginPage.welcomeMessage().should("have.text", "Welcome, Please Sign In!").and("be.visible")
            loginPage.login(this.user2.Email, this.user2.password)
            homePage.logoutLink().should('be.visible')
        })
    })
})