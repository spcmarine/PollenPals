import React from 'react'
import ListingItem from './ListingItem'

describe('<ListingItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListingItem />)
  })
})