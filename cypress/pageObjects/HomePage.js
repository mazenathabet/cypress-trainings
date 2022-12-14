export class HomePage {
    
    RegisterLink(){
        return cy.get(".ico-register")
    }
    loginLink(){
        return cy.get(".ico-login")
    }
    logoutLink(){
        return cy.get('.ico-logout')
    }
    searchField(){
        return cy.get('#small-searchterms')
    }
    searchButton(){
        return cy.get('#small-search-box-form button')
    }
    currancyList(){
        return cy.get('#customerCurrency')
    }
}