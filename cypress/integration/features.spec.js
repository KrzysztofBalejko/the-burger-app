describe('Ingredients', function (){

    it ("invites to enter the ingredients", function(){
        cy.visit('http://localhost:3000')
        cy.get('p').should('contain', 'Please enter ingredients')
    })

})