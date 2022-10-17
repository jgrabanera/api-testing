/// <reference types="Cypress" />

describe('JSON Object', () => {
  it('JSON Object examples', () => {
    const exampleObject = { key: 'Kim', key2: 'Berly' };
    const exampleArrayOfValues = ['Sophie', 'Rose', 'Howard'];

    const users = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      students: [
        {
          firstName: 'Joe',
          lastName: 'Blogs',
          age: 18,
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          age: 18,
        },
      ],
    };

    cy.log(users.students[0].firstName);
  });
});
