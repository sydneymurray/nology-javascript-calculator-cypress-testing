describe("Does the page load",() => {
    it("Loads successfully",() => {
        cy.visit("http://127.0.0.1:5501/index.html")
    })
})

describe("Does the display show numbers",() => {
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

describe("Can it perform simple calculations",() => {
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
})   

    //     cy.get(".calculator__screen").should("have.value", "11")
    // })
