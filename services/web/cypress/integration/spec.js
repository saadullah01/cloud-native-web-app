describe('Header Test', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Great success!')
  });
});

describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it("has the correct heading", () => {
   cy.findByRole("heading").should("contain", "Great success!");
  });
});