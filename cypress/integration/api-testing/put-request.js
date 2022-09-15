/// <reference types="cypress" />

describe('Update Request', () => {
  it('Update the existing post via the /post API', () => {
    cy.request({
      method: 'PUT',
      url: 'http://localhost:3000/posts/2',
      body: {
        title: 'I Belive I Can Fly',
        author: 'Tom Jones',
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
