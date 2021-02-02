describe('Header Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Great success!')
  });
});

describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it("has the correct heading", () => {
   cy.findByRole("heading").should("contain", "Great success!");
  });
});