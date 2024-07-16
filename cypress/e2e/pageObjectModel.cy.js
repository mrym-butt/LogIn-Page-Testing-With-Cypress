import { LoginPage } from "./pages/login"

const loginPage= new LoginPage()

describe('All login tests', () => {
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it('Login Test 1',()=>{
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button > .oxd-icon').click()
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button').click()
    })
    
    it.skip('Login Test 2',()=>{
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button > .oxd-icon').click()
    })
})
