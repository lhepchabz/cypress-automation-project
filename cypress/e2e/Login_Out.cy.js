describe('E2E Login / Add to Cart Flow', () => {

  it('Login and add items to cart', () => {

    // Visit site
    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()

    // Verify login success
    cy.url().should('include', '/inventory.html')

    // Add items to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

    // Go to cart
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', '/cart.html')

    // Remove one product
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    // Checkout
    cy.get('[data-test="checkout"]').click()

    // Checkout form
    cy.get('[data-test="firstName"]').type('Test')
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="postalCode"]').type('12345')

    // Continue
    cy.get('[data-test="continue"]').click()

    // Overview
    cy.url().should('include', '/checkout-step-two.html')

    // Finish
    cy.get('[data-test="finish"]').click()

    // Confirmation
    cy.url().should('include', '/checkout-complete.html')

    // Go Back to Dashboard
    cy.get('[data-test="back-to-products"]').click()

    // Check menu
    cy.get('#react-burger-menu-btn').click()

    // Logout
    cy.get('[data-test="logout-sidebar-link"]').click()
  })

})
