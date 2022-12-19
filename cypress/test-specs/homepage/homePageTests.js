/// <reference types="cypress"/>

import { homePage } from "../../pageObjects/HomePage"

describe('homepage tests', () => {
    beforeEach(() => {
        cy.openHomePage()
    })

    it('change the application currancy', function () {
        homePage.currancyList().children().should('have.length', 2)
        homePage.currancyList().select('Euro')
        homePage.productPrice().should('be.visible')
        homePage.productPrice().each((element) => {
            const price = element.text()
            expect(price.includes("€")).to.be.true
            expect(price.includes("$")).not.to.be.true
        })
        homePage.currancyList().select('US Dollar')
        homePage.productPrice().each((element) => {
            const price = element.text()
            expect(price.includes("$")).to.be.true
            expect(price.includes("€")).not.to.be.true
        })
    })
})