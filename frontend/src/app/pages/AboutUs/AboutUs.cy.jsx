import React from 'react'
import AboutUs from './AboutUs'

describe('AboutUs Test', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutUs />)
  })

  // it ('has a title', () => {
  //   cy.mount(<AboutUs />)
  //   cy.get('#title').should('be.visible')
  // })

  // it ('has a description', () => {
  //   cy.mount(<AboutUs />)
  //   cy.get('#description').should('be.visible')
  // })

  // it ('has a image', () => {
  //   cy.mount(<AboutUs />)
  //   cy.get('#image').should('be.visible')
  // }) 

})