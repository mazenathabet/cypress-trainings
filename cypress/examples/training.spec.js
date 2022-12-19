/// <reference types="cypress"/>

const { each } = require("cypress/types/bluebird")

describe('cypress training', () => {


    it('invoke command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //1 
        cy.get('[for="exampleInputEmail1').should('contain', 'Email address') //asserting text with cy method
        //2 
        cy.get('[for="exampleInputEmail1').then(label => {
            expect(label.text()).to.equal('Email address') //asserting text with then method
        })
        //3 
        cy.get('[for="exampleInputEmail1').invoke('text').then(text => {
            expect(text).to.equal('Email address') //asserting text with invoke method 
        })
        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            //.should('contain','checked')
            .then(classValue => {
                expect(classValue).to.contain('checked')
            })
    })
    it('assert property', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click() // wraping the input element in cypress because click() is not a jquery method it is cypress method
            cy.get('nb-calender-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Dec 17, 2019')
        })
    })
    /**
     * Radio Buttons
     */
    it('radio button', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form layout').click()

        cy.contains('nb-card', 'Using the Gird').find('[type=radio]').then(radioButtons => {
            cy.wrap(radioButtons)
                .first() // select first radio button
                .check({ force: true })
                .should('be.checked')
            cy.wrap(radioButtons)
                .eq(1)
                .check({ force: true })
            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked')
            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled')
        })
    })
    /**
     * Check boxes 
     */
    it('check boxes', () => {
        cy.visit('/')
        cy.contains('Model & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkboxes"').check({ force: true }) // it will check all the checkboxes by default ( 3 check boxes) if they they are not checked
        cy.get('[type="checkboxes"').eq(0).click({ force: true }) // unchecking the checkbox will only work with click and never with check()
    })
    /**
    * Lists and dropdowns
    */
    it('lists and dropdowns', () => {
        cy.visit('/')

        //1
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')

        //2
        cy.get('nav nb-select').then(dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.options-list nb-option').each(listItem, index => {
                const itemText = listItem.text().trim()

                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }
                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                cy.wrap(dropdown).click()
                if (index < 3) {
                    cy.wrap(dropdown).click()
                }
            })
        })
    })
    /**
     * Web Tables 
     */
    it('Web tables', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        //1
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
        })
        //2
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Artem')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Bondar')
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })
        cy.get('tbody tr').first().find('td').then(tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'Artem')
            cy.wrap(tableColumns).eq(3).should('contain', 'Bondar')
        })
        //3
        const age = [20, 30, 40, 200]
        cy.wrap(age).each(age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('table tr').each(tableRow => {
                if (age == 200) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })
    })
    /**
     * Web DatePickers
     */
    it('handling web datepickers', () => {

        function selectDayFromCurrent(day) {
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDay = date.getDate()
            let futureMonth = date.toLocaleDateString('default', { month: 'short' })
            let dateAssert = futureMonth + ' ' + futureDay + ", " + date.getFullYear()
            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
                if (!dateAttribute.includes(futureMonth)) {
                    cy.get('[data-name="chevron-right"]').click()
                    selectDayFromCurrent(day)
                } else {
                    cy.get('nb-calender-day-picker [class="day-cell ng-star-inserted').contains(futureDay).click()
                }
            })
            return dateAssert
        }

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click() // wraping the input element in cypress because click() is not a jquery method it is cypress method
            let dateAssert = selectDayFromCurrent(1)

            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
        })
    })
    /**
     * Alerts and tooltips
     */
    it('tooltips', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    })
    it('dialog box & alerts', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        //1
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', (confirm) => { // not recommended because it only executes if this event is happening and if the alert is not showing it will never say it was failed
            expect(confirm).to.equal('Are you sure you want to delete?')
        })

        //2
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    })
})
