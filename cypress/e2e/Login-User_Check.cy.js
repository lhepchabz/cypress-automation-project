describe ("User Access Check",()=>{
let useraccess
beforeEach("fixureload",()=>{
    cy.fixture('example').then(function(value){
        useraccess=value
    })
})

it("Login Valid User",()=>{
// Visit site
    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
})


})