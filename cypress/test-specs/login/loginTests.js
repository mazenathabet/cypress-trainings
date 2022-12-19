/// <reference types="cypress"/>

import { homePage } from "../../pageObjects/HomePage"
import { loginPage } from "../../pageObjects/LoginPage"


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

    describe('negative scenarios', () => {
        it('loging with invalid password', function () {
            homePage.goToLoginPage()
            loginPage.welcomeMessage().should("have.text", "Welcome, Please Sign In!").and("be.visible")
            loginPage.login(this.user2.Email, this.user2.invalidPassword)
            loginPage.errorsMessages().should('contain.text', "Login was unsuccessful. Please correct the errors and try again.").and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
            loginPage.errorsMessages().children('ul').should('contain.text', 'The credentials provided are incorrect').and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
        })
        it('loging with invalid email', function () {
            homePage.goToLoginPage()
            loginPage.welcomeMessage().should("have.text", "Welcome, Please Sign In!").and("be.visible")
            loginPage.login(this.user2.invalidEmail, this.user2.password)
            loginPage.errorsMessages().should('contain.text', "Login was unsuccessful. Please correct the errors and try again.").and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
            loginPage.errorsMessages().children('ul').should('contain.text', 'No customer account found').and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
        })
        it('loging with empty email field', function () {
            homePage.goToLoginPage()
            loginPage.welcomeMessage().should("have.text", "Welcome, Please Sign In!").and("be.visible")
            loginPage.login(" ", this.user2.password)
            loginPage.emptyEmailError().should('have.text', 'Please enter your email').and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
        })
    })
})