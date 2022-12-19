
// locators
const registerLink = '.ico-register'
const loginLink = '.ico-login'
const logoutLink = '.ico-logout'
const searchField = '#small-searchterms'
const searchButton = '#small-search-box-form button'
const currancyList = '#customerCurrency'
const productPrice = '.product-item .prices span'

export class HomePage {

    goToRegisterPage() {
        cy.get(registerLink).should('be.visible').click()
    }
    goToLoginPage() {
        cy.get(loginLink).should('be.visible').click()
    }
    logoutLink() {
        return cy.get(logoutLink)
    }
    searchField() {
        return cy.get(searchField)
    }
    searchButton() {
        return cy.get(searchButton)
    }
    currancyList() {
        return cy.get(currancyList)
    }
    productPrice() {
        return cy.get(productPrice)
    }
}
export const  homePage = new HomePage()