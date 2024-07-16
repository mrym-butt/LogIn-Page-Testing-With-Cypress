it("Assertions Demo", () => {
  cy.visit("https://example.cypress.io");
  cy.contains("get").click();
  cy.get("#query-btn")
    .should("contain", "Button")
    // .should("have.class",'query-btn')
    // .should('be.visible')
    // or we can do this
    .and("have.class",'query-btn')
    .and('be.visible')

    expect(true).to.be.true

    // assert.equal(4,5, 'NOT EQUAL')
    assert.equal(4,4, 'NOT EQUAL')
    assert.equal(4,'4', 'NOT EQUAL')
    assert.strictEqual(4,'4', 'NOT EQUAL')
});
