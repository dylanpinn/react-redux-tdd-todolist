/* global it, describe, browser */
/* eslint-disable import/no-extraneous-dependencies */
// const expect = require('chai').expect;
const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });
});
