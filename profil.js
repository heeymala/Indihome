describe('PROFIL', function(){
    before(()=>{
        cy.visit('https://myih.telkom.co.id/')
    })
    it('MENGUBAH PROFIL USER', function(){
        cy.get('.content-center-left > .btn').click()
        cy.get(':nth-child(1) > .btn').click()
        cy.get('[data-testid=loginID]').type('082286194291')
        cy.get('[data-testid=submit]').click()
        cy.get('#password').type('malafneLia123')
        cy.get('[data-testid=submit]').click()
        cy.get('[data-testid=whatsApp]').click()
        cy.get('a').invoke('attr', 'href').should('eq', 'https://myih.telkom.co.id/profile')
    })
})