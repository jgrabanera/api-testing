/// <reference types="cypress" />

describe('Post, Get, Delete Request', () => {
  let randomId = Math.floor(Math.random() * 100); //random number round to the nearest whole number
  let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);
  let bodyOfComments = new Array();

  it('Create new comment via the /comments API', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/comments',
      body: {
        body: randomTitle,
        postId: randomId,
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });

  it('Locate and assert the new comment', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/comments',
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach(function (item) {
          bodyOfComments.push(item['body']);
        });
      })
      .then(() => {
        var latestComment = bodyOfComments[bodyOfComments.length - 1];
        cy.log(latestComment);
        expect(latestComment).to.eq(randomTitle);
      });
  });

  it('Delete new comment', () => {
    let numberOfComments = bodyOfComments.length;
    console.log(numberOfComments);
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:3000/comments/' + numberOfComments,
    }).then((response) => {
      expect(response.status).to.eql(500);
    });
  });
});
