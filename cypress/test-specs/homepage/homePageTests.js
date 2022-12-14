/// <reference types="cypress"/>

import { HomePage } from "../../pageObjects/HomePage"


const homepage = new HomePage
describe('homepage tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("nopCommerceApp"))
    })

    it('change the application currancy', function (){
       homepage.currancyList().children().should('have.length',2)
       homepage.currancyList().select('Euro')
    })
})