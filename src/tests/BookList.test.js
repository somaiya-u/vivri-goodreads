import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import { Pagination } from 'react-bootstrap';
import {spy} from 'sinon';

import  BookList,{defaultMaxPerPage}  from '../components/BooksList';
import  Book  from '../components/Book';

describe('<BookList /> Component test suite', () => {
  it('<BookList /> component should contain Pagination components', () => {
    const testProps = {books:[]};
    const wrapper = shallow(<BookList {...testProps} />);
    expect(wrapper.find(Pagination)).to.have.lengthOf(1);
    expect(wrapper.find(Pagination.Prev)).to.have.lengthOf(1);
    expect(wrapper.find(Pagination.Next)).to.have.lengthOf(1);
    expect(wrapper.find(Pagination.First)).to.have.lengthOf(1);
    expect(wrapper.find(Pagination.Last)).to.have.lengthOf(1);
  });

  it('<BookList /> component should contain Book component', () => {
    const testProps = {books:[{id:1}]};
    const wrapper = shallow(<BookList {...testProps} />);
    expect(wrapper.find(Book)).to.have.lengthOf(1);
  });

  it('<BookList /> component should contain 5 Book components if more than booklist contains more than 5 books', () => {
    const testProps = {books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]};
    const wrapper = shallow(<BookList {...testProps} />);
    expect(wrapper.find(Book)).not.to.have.lengthOf(testProps.length);
    expect(wrapper.find(Book)).to.have.lengthOf(5);
  });

  it("<BookList /> component method 'refresh' should call instance method 'handleFirst' ", () => {
    const testProps = {books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    let spied = spy(instance,'handleFirst');
    instance.refresh();
    assert(spied.calledOnce)
  });

  it("<BookList /> component method 'getNoOfBooks' should return books length of passed value", () => {
    const testProps = {books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    expect(instance.getNoOfBooks()).to.equal(testProps.books.length);
  });

  it("<BookList /> component method 'handleNext' should set next state values to show next set of books", () => {
    const testProps = {books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    expect(wrapper.state().pageStart).to.equal(0);
    expect(wrapper.state().pageEnd).to.equal(defaultMaxPerPage-1);
    instance.handleNext();
    expect(wrapper.state().pageStart).to.equal(defaultMaxPerPage);
    expect(wrapper.state().pageEnd).to.equal(defaultMaxPerPage-1+defaultMaxPerPage);
  });

  it("<BookList /> component method 'handlePrev' should set previous state values to show previous set of books", () => {
    const testProps = {books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    expect(wrapper.state().pageStart).to.equal(0);
    expect(wrapper.state().pageEnd).to.equal(defaultMaxPerPage-1);
    instance.handleNext();
    expect(wrapper.state().pageStart).to.equal(defaultMaxPerPage);
    expect(wrapper.state().pageEnd).to.equal(defaultMaxPerPage-1+defaultMaxPerPage);
    instance.handlePrev();
    expect(wrapper.state().pageStart).to.equal(0);
    expect(wrapper.state().pageEnd).to.equal(defaultMaxPerPage-1);
  });

  it("<BookList /> component method 'handleLast' should set next state values to show last set of books", () => {
    const testProps = {books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    expect(wrapper.state().pageStart).to.equal(0);
    expect(wrapper.state().pageEnd).to.equal(defaultMaxPerPage-1);
    instance.handleLast();
    expect(wrapper.state().pageStart).to.equal(5);
    expect(wrapper.state().pageEnd).to.equal(9);
  });

  it("<BookList /> component method 'handleFirst' should set next state values to show first set of books", () => {
    const testProps = {books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    expect(wrapper.state().pageStart).to.equal(0);
    expect(wrapper.state().pageEnd).to.equal(defaultMaxPerPage-1);
    instance.handleLast();
    expect(wrapper.state().pageStart).to.equal(5);
    expect(wrapper.state().pageEnd).to.equal(9);
    instance.handleFirst();
    expect(wrapper.state().pageStart).to.equal(0);
    expect(wrapper.state().pageEnd).to.equal(4);
  });
  
  it("<BookList /> component should refresh books if new set of books are passed from parent", () => {
    const testProps = {books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    let spied = spy(instance,'refresh');
    wrapper.setProps({books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]});
    assert(spied.calledOnce)
    
  });

});