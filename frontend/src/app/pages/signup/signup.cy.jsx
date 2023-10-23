import React from 'react'
import SignUpForm from './signup'
const navigate = () => {}

describe('SignUpForm Tests', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignUpForm />)
  })

  it('has a submit button', () => {
    cy.mount(<SignUpForm />)
    cy.get('#submit').should('be.visible')
  })

  it('has a email input', () => {
    cy.mount(<SignUpForm />)
    cy.get('#email').should('be.visible')
  })

  it('has a password input', () => {
    cy.mount(<SignUpForm />)
    cy.get('#password').should('be.visible')
  })

  it('has a frist name input', () => {
    cy.mount(<SignUpForm />)
    cy.get('#first-name').should('be.visible')
  })

  it('has a last name input', () => {
    cy.mount(<SignUpForm />)
    cy.get('#last-name').should('be.visible')
  })
  
  it('has a confirm password input', () => {
    cy.mount(<SignUpForm />)
    cy.get('#confirm-password').should('be.visible')
  })

  it('Signs up a user, and redirects to the login page', () => {
    cy.mount(<SignUpForm  navigate={navigate}/>)
    cy.intercept('POST', '/users', {statusCode:201}).as("signupRequest")
    cy.get('#email').type('test@test.com')
    cy.get('#password').type('Test1234!')
    cy.get('#confirm-password').type('Test1234!')
    cy.get('#first-name').type('John')
    cy.get('#last-name').type('Test')
    cy.get('#submit').click()
    cy.wait('@signupRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(201)
    })
  })

  it('Fails to sign up a user, ERROR with password', () => {
    cy.mount(<SignUpForm  navigate={navigate}/>)
    cy.intercept('POST', '/users', {statusCode:400}).as("signupRequest")
    cy.get('#email').type('test@test')
    cy.get('#password').type('Test')
    cy.get('#confirm-password').type('Test')
    cy.get('#first-name').type('John')
    cy.get('#last-name').type('Test')
    cy.get('#submit').click()
    cy.get('#signup-error-message').should('be.visible')
    // cy.wait('@signupRequest').then((interception) => {
    //   expect(interception.response.statusCode).to.eq(400)
    })
  })
//})