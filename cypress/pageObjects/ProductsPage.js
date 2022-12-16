const searchPageTitle = '.page-title h1'
const productItem = '.product-item'

export class ProductPage {

    searchPageTitle(){
        return cy.get(searchPageTitle)
    }
    productItem(){
        return cy.get(productItem)
    }
}