export class ProductPage {

    searchPageTitle(){
        return cy.get('.page-title h1')
    }
    productItem(){
        return cy.get('.product-item')
    }
}