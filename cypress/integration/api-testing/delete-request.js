/// <reference types="cypress" />

describe('Delete Request', () => {
  it('Delete the existing post via the /posts API', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:3000/posts/1',
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
