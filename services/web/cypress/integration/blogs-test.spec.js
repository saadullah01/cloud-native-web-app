import posts from "../../src/routes/blog/_posts";

describe('Blog posts', () => {
  beforeEach(() => {
   cy.visit('http://localhost:3000/blog')
  });

  it("displays blog posts", () => {
    cy.get("[data-cy=blog-posts-list] li").should(
      "not.have.length", 0
    );
  });
});

