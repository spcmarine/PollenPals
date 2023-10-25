import React from 'react'
import LoginForm from './LoginForm'

const navigate = () => {}
// const setEmail = () => {}
// const setPassword = () => {}

describe('<LoginForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoginForm />)
  })

  it('has a submit button', () => {
    cy.mount(<LoginForm />)
    cy.get('#submit').should('be.visible')
  })

  it('has a email input', () => {
    cy.mount(<LoginForm />)
    cy.get('#email').should('be.visible')
  })

  it('has a password input', () => {
    cy.mount(<LoginForm />)
    cy.get('#password').should('be.visible')
  })

})

describe('loging in', ()=>{
  it("calls the tokens endpoint and logs in", () =>{
    cy.mount(<LoginForm  navigate={navigate}/>)
    //navigate={navigate} setEmail={setEmail} setPassword={setPassword}

    cy.intercept('POST', '/tokens',{token:"fakeToken"}).as("loginRequest")
    //cy.intercept('POST', '/tokens',{statusCode:201, token:"fakeToken"}).as("loginRequest")

    cy.get("#email").type("test@test.com")
    cy.get("#password").type("Test1234!")
    cy.get("#submit").click()

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.body.token).to.eq("fakeToken")
      //expect(interception.response.status).to.eq(201)
  })
})
})