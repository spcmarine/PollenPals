import React from 'react'
import Profile from './Profile'

describe('Profile Tests', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Profile />)
  })

  // it ('has a title', () => {
  //   cy.mount(<Profile />)
  //   cy.get('#title').should('be.visible')
  // })

  // it ('has a description', () => {
  //   cy.mount(<Profile />)
  //   cy.get('#description').should('be.visible')
  // })

  // it ('has a image', () => {
  //   cy.mount(<Profile />)
  //   cy.get('#image').should('be.visible')
  // })

})