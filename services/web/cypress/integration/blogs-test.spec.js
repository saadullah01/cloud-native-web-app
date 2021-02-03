describe('Blog posts', () => {
  before(() => {
    cy.visit("/").then(contentWindow => {
      const firebaseAppOptions = contentWindow.firebase.app().options;
      cy.task("addBlogPost", {
        firebaseAppOptions,
        slug: "test-post",
        post: {
          content: "A test blog post",
          title: "Test post"
        }
      });
    });
    cy.visit("/blog");
  });

  it("displays the test blog post", () => {
    cy.contains("[data-cy=blog-posts-list] a", "Test post");
  });
});

