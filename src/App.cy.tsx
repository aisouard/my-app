import App from "./App";

describe("<App />", () => {
  it("displays initial counter and increments upon click", () => {
    cy.mount(<App />);
    cy.get("button").should("have.text", "count is 0");
    cy.get("button").click().should("have.text", "count is 1");
  });
});
