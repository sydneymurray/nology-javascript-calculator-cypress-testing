describe("Does the page load",() => {
    it("Loads successfully",() => {
        cy.visit("http://127.0.0.1:5501/index.html")
    })
})

describe("Does the display numbers when the buttons are clicked",() => {
    it("Does it display ZERO upon loading",() => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        // Assert
        cy.get("[data-cy=display]").should("have.text", "0")
    })
    it("Does it display the number 9 when the 9 button is clicked",() => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html")

        // Act
        // Click No 9 button
        cy.get("[data-cy=9]").click()
        
        // Assert
        cy.get("[data-cy=display]").should("have.text", "9")
    })
})

describe("Can it perform calculations",() => {
    it("Does it display the 81 when buttons '9' 'x' '9' '=' are clicked",() => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        // Act
        // click 9
        cy.get("[data-cy=9]").click()

        // click x
        cy.get("[data-cy=x]").click()

        // click 9
        cy.get("[data-cy=9]").click()

        // click =
        cy.get("[data-cy='=']").click()

        // Assert
        cy.get("[data-cy=display]").should("have.text", "81")
    })
    it("Does it display a running total of 49 when buttons '7' 'x' '7' '+' are clicked",() => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        // Act
        // click 9
        cy.get("[data-cy=7]").click()

        // click x
        cy.get("[data-cy=x]").click()

        // click 9
        cy.get("[data-cy=7]").click()

        // click =
        cy.get("[data-cy='+']").click()

        // Assert
        cy.get("[data-cy=display]").should("have.text", "49")
    })
    it("Does it perform a complex calculation when buttons '7' 'x' '7' '+' '100'are clicked",() => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        // Act
        // click 9
        cy.get("[data-cy=7]").click()

        // click x
        cy.get("[data-cy=x]").click()

        // click 9
        cy.get("[data-cy=7]").click()

        // click +
        cy.get("[data-cy='+']").click()

        // click +
        cy.get("[data-cy='1']").click()

        // click +
        cy.get("[data-cy='0']").click()

        // click +
        cy.get("[data-cy='0']").click()

        // click =
        cy.get("[data-cy='=']").click()

        // Assert
        cy.get("[data-cy=display]").should("have.text", "149")
    })
})   

describe("Does it detect nummeric keypad presses",() => {
    it("Does it display 789 when the numeric keypad keys 789 are pressed",() => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        // Act
        // Type 789 on the numeric keypad
        cy.get("body").type('789')

        // Assert
        cy.get("[data-cy=display]").should("have.text", "789")
    })
    it("Does it display 78 when the numeric keypad keys 7488/96= are pressed",() => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        // Act
        // Type 789/96= on the numeric keypad
        cy.get("body").type('7488/96=')

        // Assert
        cy.get("[data-cy=display]").should("have.text", "78")
    })
})