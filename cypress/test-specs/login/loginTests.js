/// <reference types="cypress"/>

import { HomePage } from "../../pageObjects/HomePage"
import { LoginPage } from "../../pageObjects/LoginPage"

const loginPage = new LoginPage
const homePage = new HomePage
describe('Login Tests', () => {
    beforeEach(() => {
        cy.fixture('User2').then(function (user2) {
            this.user2 = user2
        })
        cy.visit(Cypress.env("nopCommerceApp"))
        homePage.loginLink().click()
    })
    it('login with valid data', function () {
        loginPage.welcomeMessage().should("have.text", "Welcome, Please Sign In!").and("be.visible")
        loginPage.emailField().type(this.user2.Email)
        loginPage.passwordField().type(this.user2.password)
        loginPage.loginButton().should('have.css', 'background-color', 'rgb(74, 178, 241)').and('have.css', 'color', 'rgb(255, 255, 255)').click()
        homePage.logoutLink().should('be.visible')
    })
    it('loging with invalid password', function () {
        loginPage.welcomeMessage().should("have.text", "Welcome, Please Sign In!").and("be.visible")
        loginPage.emailField().type(this.user2.Email)
        loginPage.passwordField().type(this.user2.invalidPassword)
        loginPage.loginButton().should('have.css', 'background-color', 'rgb(74, 178, 241)').and('have.css', 'color', 'rgb(255, 255, 255)').click()
        loginPage.errorsMessages().should('contain.text', "Login was unsuccessful. Please correct the errors and try again.").and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
        loginPage.errorsMessages().children('ul').should('contain.text', 'The credentials provided are incorrect').and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
    })
    it('loging with invalid email', function () {
        loginPage.welcomeMessage().should("have.text", "Welcome, Please Sign In!").and("be.visible")
        loginPage.emailField().type(this.user2.invalidEmail)
        loginPage.passwordField().type(this.user2.password)
        loginPage.loginButton().should('have.css', 'background-color', 'rgb(74, 178, 241)').and('have.css', 'color', 'rgb(255, 255, 255)').click()
        loginPage.errorsMessages().should('contain.text', "Login was unsuccessful. Please correct the errors and try again.").and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
        loginPage.errorsMessages().children('ul').should('contain.text', 'No customer account found').and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
    })
    it('loging with empty email field', function () {
        loginPage.welcomeMessage().should("have.text", "Welcome, Please Sign In!").and("be.visible")
        loginPage.passwordField().type(this.user2.password)
        loginPage.loginButton().should('have.css', 'background-color', 'rgb(74, 178, 241)').and('have.css', 'color', 'rgb(255, 255, 255)').click()
        loginPage.emptyEmailError().should('have.text', 'Please enter your email').and('be.visible').and('have.css', 'color', 'rgb(228, 67, 75)')
    })
})