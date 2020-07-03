import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Card, Row } from 'react-bootstrap';

import  Book  from '../components/Book';

describe('<Book /> Component test suite', () => {
  it('<Book /> component should contain Image', () => {
    const testBook = {id:1,title:"test",author:"author",original_publication_year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.find(Card.Img)).to.have.lengthOf(1);
  });

  it('<Book /> component should contain Title', () => {
    const testBook = {id:1,title:"test",author:"author",original_publication_year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.find(Card.Title)).to.have.lengthOf(1);
  });

  it('<Book /> component should contain Body', () => {
    const testBook = {id:1,title:"test",author:"author",original_publication_year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.find(Card.Body)).to.have.lengthOf(1);
  });

 it('<Book /> component should display book title', () => {
    const testBook = {id:1,title:"test",author:"author",original_publication_year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.title}</span>)).to.equal(true);
  });

  it('<Book /> component should display book author', () => {
    const testBook = {id:1,title:"test",author:"author",original_publication_year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.author}</span>)).to.equal(true);
  });

  it('<Book /> component should display Average Rating', () => {
    const testBook = {id:1,title:"test",author:"author",original_publication_year:"2007",edition:"1st",average_rating:"4.1"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.average_rating}</span>)).to.equal(true);
  });

  it('<Book /> component should display book published year', () => {
    const testBook = {id:1,title:"test",author:"author",original_publication_year:"2007"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.original_publication_year}</span>)).to.equal(true);
  });

  it('<Book /> component should display book Ratings Count', () => {
    const testBook = {id:1,title:"test",author:"author",original_publication_year:"2007",ratings_count: "123"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.ratings_count}</span>)).to.equal(true);
  });

  it('<Book /> component should display Reviews on book', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",text_reviews_count:"200"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.text_reviews_count}</span>)).to.equal(true);
  });
 
});