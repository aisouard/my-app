describe("default vite react app", () => {
  it("increments the counter", () => {
    cy.visit("/");
    cy.get("button").should("have.text", "count is 0");
    cy.get("button").click().should("have.text", "count is 1");
  });
});
