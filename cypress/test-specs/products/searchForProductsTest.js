/// <reference types="cypress"/>

import { HomePage } from "../../pageObjects/HomePage"
import { LoginPage } from "../../pageObjects/LoginPage"
import { ProductPage } from "../../pageObjects/ProductsPage"

const loginPage = new LoginPage
const homePage = new HomePage
const productPage = new ProductPage
describe('Searching for products tests', () => {
    beforeEach(() => {
        cy.fixture('User2').then(function (user2) {
            this.user2 = user2
        })
        cy.fixture('Products').then(function (product) {
            this.product = product
        })
        cy.visit(Cypress.env("nopCommerceApp"))
        homePage.goToLoginPage()
    })

    it('Searching for product with pressing enter', function () {
        loginPage.login(this.user2.Email, this.user2.password)
        homePage.logoutLink().should('be.visible')
        homePage.searchField().should('be.enabled').and('be.visible').type(this.product.MacBook + '{enter}')
        productPage.searchPageTitle().should('have.text', 'Search').and('be.visible')
        productPage.productItem().children('div').children('a').should('be.visible').and('have.attr', 'title', 'Show details for ' + this.product.MacBook)
    })
    it('Searching for product with pressing search button', function () {
        loginPage.login(this.user2.Email, this.user2.password)
        homePage.logoutLink().should('be.visible')
        homePage.searchField().should('be.enabled').and('be.visible').type(this.product.MacBook)
        homePage.searchButton().click()
        productPage.searchPageTitle().should('have.text', 'Search').and('be.visible')
        productPage.productItem().children('div').children('a').should('be.visible').and('have.attr', 'title', 'Show details for ' + this.product.MacBook)
    })




})