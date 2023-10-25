import React from 'react'
import SignedOutNavbar from './SignedOutNavbar'

describe('SignedOutNavbar Test', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignedOutNavbar />)
  })

  it ('has a login button', () => {
    cy.mount(<SignedOutNavbar />)
    cy.get('#login').should('be.visible')
  })

  it ('has a signup button', () => {
    cy.mount(<SignedOutNavbar />)
    cy.get('#signup').should('be.visible')
  })

  it ('has a About Us button', () => {  
    cy.mount(<SignedOutNavbar />)
    cy.get('#aboutus').should('be.visible')
  })
})