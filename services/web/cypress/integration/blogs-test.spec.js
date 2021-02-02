import posts from "../../src/routes/blog/_posts";

describe('Blog posts', () => {
  beforeEach(() => {
   cy.visit('http://localhost:3000/blog')
  });

  posts.forEach(post => {
    it(`lists the "${post.title}" blog post`, () => {
      cy
        .contains('[data-cy=blog-posts-list] li a', post.title)
        .should('have.attr', 'href', `blog/${post.slug}`)
    })
  });
});

