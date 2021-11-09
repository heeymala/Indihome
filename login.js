describe('LOGIN', function(){
    //LOGIN MENGGUNAKAN NO HANDPHONE
    it('LOGIN MENGGUNAKAN NO HANDPHONE', function(){
        cy.visit('https://myih.telkom.co.id/')
        cy.get('.content-center-left > .btn').click()
        cy.get(':nth-child(1) > .btn').click()
        cy.get('[data-testid=loginID]').type('082286194291')
        cy.get('[data-testid=submit]').click()
        cy.get('#password').type('malafneLia123')
        cy.get('[data-testid=submit]').click()
        cy.get('[data-testid=whatsApp]').click()
    })
    //LOGIN DENGAN VERIFIKASI VIA SMS
    //     it('LOGIN DENGAN VERIFIKASI VIA SMS', function(){
    //     cy.visit('https://myih.telkom.co.id/')
    //     cy.get('.content-center-left > .btn').click()
    //     cy.get(':nth-child(1) > .btn').click()
    //     cy.get('[data-testid=loginID]').type('082286194291')
    //     cy.get('[data-testid=submit]').click()
    //     cy.get('#password').type('malafneLia123')
    //     cy.get('[data-testid=submit]').click()
    //     cy.get('[data-testid=sms]').click()
    // })
    //LOGIN MENGGUNAKAN EMAIL
    // it('LOGIN MENGGUNAKAN EMAIL', function(){
    //     cy.visit('https://myih.telkom.co.id/')
    //     cy.get('.content-center-left > .btn').click()
    //     cy.get(':nth-child(1) > .btn').click()
    //     cy.get('[data-testid=loginID]').type('writtenalam@gmail.com')
    //     cy.get('[data-testid=submit]').click()
    //     cy.get('#password').type('malafneLia123')
    //     cy.get('[data-testid=submit]').click()
    //     cy.get('[data-testid=whatsApp]').click()
    // })
})
