describe('Orange HRM Tests', () => {
  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module')

  })
  
  it('Login Fail', ()=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Rodrigo')
    cy.get("[name='password']").type('rodrigo123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert-content--error')
  })
 it('No email/password', () =>{
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get("[name='username']").type('Admin')
  cy.get("[name='password']").type(' ')
  cy.get("[type='submit']").click()
  cy.get('.oxd-input-field-error-message')
 
 })
})