import React from 'react'
import ListingFeed from './ListingFeed'

describe('<ListingFeed />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListingFeed />)
  })
})