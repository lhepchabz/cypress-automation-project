describe ('Filter Test',()=>{

    it('Login to Filter',()=>{

    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()

    // Verify login success
    cy.url().should('include', '/inventory.html')

    // Filter Selection
    cy.get('[data-test="product-sort-container"]')
    .should('be.visible')
    .select("Name (Z to A)")

    cy.get('[data-test="inventory-item-price"]')
  .first()
  .should('have.text', '$15.99')

    cy.get('[data-test="product-sort-container"]')
    .should('be.visible')
    .select("Name (A to Z)")

    cy.get('[data-test="inventory-item-price"]')
  .first()
  .should('have.text', '$29.99')

    cy.get('[data-test="product-sort-container"]')
    .should('be.visible')
    .select("Price (low to high)")

    cy.get('[data-test="inventory-item-price"]')
  .first()
  .should('have.text', '$7.99')

    cy.get('[data-test="product-sort-container"]')
    .should('be.visible')
    .select("Price (high to low)")

    cy.get('[data-test="inventory-item-price"]')
  .first()
  .should('have.text', '$49.99')

   // Check menu
    cy.get('#react-burger-menu-btn').click()
    
        // Logout
    cy.get('[data-test="logout-sidebar-link"]').click()


    })
})