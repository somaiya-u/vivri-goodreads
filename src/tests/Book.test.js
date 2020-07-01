import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Card, Row } from 'react-bootstrap';

import  Book  from '../components/Book';

describe('<Book /> Component test suite', () => {
  it('<Book /> component should contain Image', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.find(Card.Img)).to.have.lengthOf(1);
  });

  it('<Book /> component should contain Title', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.find(Card.Title)).to.have.lengthOf(1);
  });

  it('<Book /> component should contain Body', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.find(Card.Body)).to.have.lengthOf(1);
  });

  it('<Book /> component should contain Footer', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.find(Card.Footer)).to.have.lengthOf(1);
  });

  it('<Book /> component should display book title', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.title}</span>)).to.equal(true);
  });

  it('<Book /> component should display book author', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.author}</span>)).to.equal(true);
  });

  it('<Book /> component should display book edition', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.edition}</span>)).to.equal(true);
  });

  it('<Book /> component should display book published year', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<span>{testBook.year}</span>)).to.equal(true);
  });

  it('<Book /> component should display book description', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:"description"};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<div className="text-truncate book-info"><b>Description:</b>{testBook.description}</div>)).to.equal(true);
  });

  it('<Book /> component should display description as Not available if description is not available', () => {
    const testBook = {id:1,title:"test",author:"author",year:"2007",edition:"1st",description:null};
    const wrapper = shallow(<Book item={testBook}/>);
    expect(wrapper.contains(<div className="text-truncate book-info"><b>Description:</b><span>Not Available</span></div>)).to.equal(true);
  });
 
});