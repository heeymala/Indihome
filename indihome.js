describe('INDIHOME', function(){
    before(()=>{
        cy.visit('https://myih.telkom.co.id/')
    })
    it('LOGIN', function(){
        cy.get('.content-center-left > .btn').click()
        cy.get(':nth-child(1) > .btn').click()
        cy.get('[data-testid=loginID]').type('082286194291')
        cy.get('[data-testid=submit]').click()
        cy.get('#password').type('malafneLia123')
        cy.get('[data-testid=submit]').click()
        cy.get('[data-testid=whatsApp]').click()
    }),
    it('FUNGSI LINK DAN BUTTON PADA PAGE INDIHOME', function(){
        cy.get('.navbar-brand-img').click()
    })
})