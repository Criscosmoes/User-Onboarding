describe('Form App', () => {


    beforeEach(() => {
        cy.visit('http://localhost:3000'); 
    })

     


    it('filling input and checking if input is filled', () => {

        //Name

        const nameInput = cy.get('input[name=name]');
        const name = 'Cristian Fernandez'

        nameInput.type(name); 

        nameInput.should('have.value', name)

        //Email 

        const emailInput = cy.get('input[name=email]'); 
        const email = 'cristian.fernandez123@yahoo.com'; 

        emailInput.type(email); 
        emailInput.should('have.value', email)

        //Password 

        const passwordInput = cy.get('input[name=password]'); 
        const password = 'Soccer123'; 


        passwordInput.type(password); 
        passwordInput.should('have.value', password); 


        // Checking if terms of service box CAN be checked 

        const checkboxInput = cy.get('input[name=terms]');
        
        checkboxInput.should('not.have.attr', 'disabled')


        cy.get('input[name=terms]').check(); 

        //check if submit button is now enabled and ready to press


        const submitBtn = cy.get('button[type=submit]'); 

        submitBtn.should('not.have.attr', 'disabled'); 


        // if you're able to submit, then that means that all inputs are filled in
        cy.get('button[type=submit]').click(); 


    


    })

    


})