import React from 'react'
import CreateListing from './CreateListing'
const navigate = () => {}

describe('<CreateListing />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateListing />)
  })

  it('has a submit button', () => {
    cy.mount(<CreateListing />)
    cy.get('#submit').should('be.visible')
  })

  it('has a title input', () => {
    cy.mount(<CreateListing />)
    cy.get('#title').should('be.visible')
  })

  it('has a description input', () => {
    cy.mount(<CreateListing />)
    cy.get('#description').should('be.visible')
  })

  it('has a plant input', () => {
    cy.mount(<CreateListing />)
    cy.get('#plant').should('be.visible')
  })

  it('has a location input', () => {
    cy.mount(<CreateListing />)
    cy.get('#location').should('be.visible')
  })

  it('has a age input', () => {
    cy.mount(<CreateListing />)
    cy.get('#age').should('be.visible')
  })

  it('has a size input', () => {
    cy.mount(<CreateListing />)
    cy.get('#size').should('be.visible')
  })

  it('has a tip input', () => {
    cy.mount(<CreateListing />)
    cy.get('#tip').should('be.visible')
  })

  it('has a requestedPlants input', () => {
    cy.mount(<CreateListing />)
    cy.get('#requestedPlants').should('be.visible')
  })

  it('has a image input', () => {
    cy.mount(<CreateListing />)
    cy.get('#image').should('be.visible')
  })

  // it('creates a listing, and redirects to the listing page', () => {
  //   cy.mount(<CreateListing navigate={navigate}/>)
  //   cy.intercept('POST', '/listings', {statusCode:201}).as("createListingRequest")
  //   cy.get('#title').type('test')
  //   cy.get('#description').type('test')
  //   cy.get('#plant').type('test')
  //   cy.get('#location').type('test')
  //   cy.get('#age').type('test')
  //   cy.get('#size').type('test')
  //   cy.get('#tip').type('test')
  //   cy.get('#requestedPlants').type('test')
  //   // cy.get('#image').type('')
  //   cy.get('#submit').click()
  //   cy.wait('@createListingRequest').then((interception) => {
  //     expect(interception.response.statusCode).to.eq(201)
  //   })
  // })

})
