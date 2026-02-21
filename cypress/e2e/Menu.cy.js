describe ('End to End, Menu Check',()=>{

    it('Login and Check Menu Tabs', ()=>{
        // Visit site
    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()

    // Verify login success
    cy.url().should('include', '/inventory.html')

    // Check menu
    cy.get('#react-burger-menu-btn').click()
    
        // Logout
    cy.get('[data-test="logout-sidebar-link"]').click()
    })

})