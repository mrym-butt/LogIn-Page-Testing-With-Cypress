/// <reference types="cypress"/>

it('Google Search',()=>{
    cy.visit('https://google.com')


    cy.get('#APjFqb').type("Automation step by step{Enter}")
    // cy.contains('Google Search').click()
})