
describe("Carrito de compras", () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com/')
    })

    it("Validar que los productos estén en el carrito de compras", () => {
        cy.contains('a', 'Phones').click()
        cy.contains('a', 'Samsung galaxy s6').click()
        cy.contains('a', 'Add to cart').click()
        cy.wait(1000);
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added')
        })

        cy.get('li.active a').click()

        cy.contains('a', 'Laptops').click()
        cy.contains('a', 'Sony vaio i7').click()
        cy.contains('a', 'Add to cart').click()

        cy.wait(1000);
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added')
        })
        cy.get('li.active a').click()

        cy.contains('a', 'Monitors').click()
        cy.contains('a', 'ASUS Full HD').click()
        cy.contains('a', 'Add to cart').click()
        cy.wait(1000);
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added')
        })
        cy.get('li.active a').click()


        cy.get('a#cartur').click()
        cy.wait(7000)
        cy.contains('td', 'ASUS Full HD')
            .invoke('text')
            .should('eq', 'ASUS Full HD');

        cy.contains('td', 'Samsung galaxy s6')
            .invoke('text')
            .should("eq", "Samsung galaxy s6")

        cy.contains('td', 'Sony vaio i7')
            .invoke("text")
            .should("eq", "Sony vaio i7\n")

    })

})